from django import forms
from django.contrib.auth.forms import PasswordResetForm


class CustomPasswordResetForm(PasswordResetForm):
    template_name_div = 'form/div.html'

    def __init__(self, *args, **kwargs):
        super(CustomPasswordResetForm, self).__init__(*args, **kwargs)
        self.fields['email'].widget = forms.EmailInput(attrs={'class': 'input'})

    def is_valid(self):
        result = super().is_valid()
        # loop on *all* fields if key '__all__' found else only on errors:
        for x in (self.fields if '__all__' in self.errors else self.errors):
            attrs = self.fields[x].widget.attrs
            attrs.update({'class': attrs.get('class', '') + ' is-danger'})
        return result
