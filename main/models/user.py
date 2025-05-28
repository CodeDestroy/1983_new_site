from django.contrib import auth
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import PermissionsMixin
from django.db import models
from django.utils import timezone


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, phone, password, **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """
        if not phone:
            raise ValueError("Необходимо указать номер телефона")
        # Lookup the real model class from the global app registry so this manager method can be used in migrations.
        # This is fine because managers are by definition working on the real model.
        user = self.model(phone=phone, **extra_fields)
        user.password = make_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, phone, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(phone, password, **extra_fields)

    def create_superuser(self, phone, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Супер пользователь должен иметь is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Супер пользователь должен иметь is_superuser=True.")

        return self._create_user(phone, password, **extra_fields)

    def with_perm(self, perm, is_active=True, include_superusers=True, backend=None, obj=None):
        if backend is None:
            backends = auth._get_backends(return_tuples=True)
            if len(backends) == 1:
                backend, _ = backends[0]
            else:
                raise ValueError(
                    "You have multiple authentication backends configured and "
                    "therefore must provide the `backend` argument."
                )
        elif not isinstance(backend, str):
            raise TypeError(
                "backend must be a dotted import path string (got %r)." % backend
            )
        else:
            backend = auth.load_backend(backend)
        if hasattr(backend, "with_perm"):
            return backend.with_perm(perm, is_active=is_active, include_superusers=include_superusers, obj=obj)
        return self.none()


class User(AbstractBaseUser, PermissionsMixin):
    name = models.CharField('Имя', max_length=15, null=True, blank=True)
    phone = models.CharField('Номер телефона', max_length=18, unique=True,
                             error_messages={'unique': 'Пользователь с данным телефоном уже существует'})
    email = models.EmailField('Адрес электронной почты', blank=True)
    is_staff = models.BooleanField('Это сотрудник?', default=False)
    is_active = models.BooleanField('Аккаунт активирован?', default=True)
    date_joined = models.DateTimeField('Когда присоединился', default=timezone.now)

    objects = UserManager()

    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = []

    def get_role_name(self):
        if self.is_staff and self.is_superuser:
            return 'Администратор'
        elif self.is_staff:
            return 'Менеджер'
        return 'Пользователь'

    class Meta(object):
        app_label = 'main'
        db_table = 'users'
        verbose_name = 'пользователь'
        verbose_name_plural = 'пользователи'
