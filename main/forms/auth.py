from django import forms
from django.contrib.auth.forms import AuthenticationForm


class CustomAuthenticationForm(AuthenticationForm):
    template_name_div = 'form/div.html'

    def __init__(self, *args, **kwargs):
        super(CustomAuthenticationForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget = forms.TextInput(attrs={'class': 'input phone-mask'})
        self.fields['password'].widget = forms.PasswordInput(attrs={'class': 'input'})

    def is_valid(self):
        result = super().is_valid()
        # loop on *all* fields if key '__all__' found else only on errors:
        for x in (self.fields if '__all__' in self.errors else self.errors):
            attrs = self.fields[x].widget.attrs
            attrs.update({'class': attrs.get('class', '') + ' is-danger'})
        return result

    def clean_username(self):
        phone = ''.join(filter(lambda i: i.isdigit(), self.cleaned_data['username']))
        if phone[0] == 8:
            phone = '7' + phone[1:]
        return phone
