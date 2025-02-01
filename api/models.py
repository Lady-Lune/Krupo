from django.db import models
from django.contrib.auth.models import AbstractUser
from .locationdata import LOCATION_CHOICES
from django.core.validators import URLValidator

# Create your models here.
class MyUser(AbstractUser):
    email = models.EmailField(blank=False)
    # profile_pic = models.ImageField(blank=True) # blank = False |add default = image.jpg | use validator or resize to set size 500x500
    location = models.CharField(max_length=10, choices=LOCATION_CHOICES)
    fb_account = models.URLField(validators=[URLValidator(regex = "(\A(https://www\.facebook\.com/profile\.php\?id=)[0-9]+)|(\A(https://www\.facebook\.com/)[^\/]+)")])
    ig_account = models.URLField(validators=[URLValidator(regex = "(\A(https://www\.instagram\.com/profile\.php\?id=)[0-9]+)")])
    #"id",               # Auto-generated primary key (from models.Model)
    #"username",         # String, unique, used for authentication
    #"password",         # String, hashed password
    #"email",            # Email field, optional
    #"date_joined",      # DateTime, when the user was created
    #"first_name",       # String, optional, user’s first name
    #"last_name",        # String, optional, user’s last name
    #"is_staff",         # Boolean, determines admin access
    #"is_active",        # Boolean, determines if user is active
    #"is_superuser",     # Boolean, determines superuser status
    #"last_login",       # DateTime, last login time
    #"groups",           # Many-to-Many, user groups for permissions
    #"user_permissions"  # Many-to-Many, custom permissions for user
    #profile_pic = image, size
    #location = one from a list of acceptable strings     #districs #division
    #fbaccount = valid fb acc
    #ig acc = valis ig acc

class Posts(models.Model):
    userid = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    posted_date = models.DateField(editable=False, auto_now_add=True)
    posted_time = models.TimeField(editable=False, auto_now_add=True)
    title = models.CharField(max_length=75)
    description = models.TextField(max_length = 500)
    tags = models.TextField
    # images = models.ImageField
