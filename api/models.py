from django.db import models
from django.contrib.auth.models import AbstractUser
from .locationdata import LOCATION_CHOICES
from .validators import validate_fb_url,validate_ig_url,pfp_validator

# Create your models here.
class MyUser(AbstractUser):
    email = models.EmailField(blank=False)
    profile_pic = models.ImageField(blank=True, validators=[pfp_validator]) # blank = False |add default = image.jpg | use validator or resize to set size 500x500
    location = models.CharField(max_length=10, choices=LOCATION_CHOICES)
    fb_account = models.URLField(blank=True, validators=[validate_fb_url])
    ig_account = models.URLField(blank=True, validators=[validate_ig_url])
    mod_status = models.BooleanField(default=False)
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

class Posts(models.Model):
    userid = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    posted_date = models.DateField(editable=False, auto_now_add=True)
    posted_time = models.TimeField(editable=False, auto_now_add=True)
    title = models.CharField(max_length=75)
    description = models.TextField(max_length = 500)
    tags = models.TextField
    # images = models.ImageField


class Gifts(models.Model):
    userid = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    posted_date = models.DateField(editable=False, auto_now_add=True)
    posted_time = models.TimeField(editable=False, auto_now_add=True)
    title = models.CharField(max_length=75)
    description = models.TextField(max_length = 300)
    tags = models.TextField
    # images = models.ImageField

class Replies(models.Model):
    userid = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    postid = models.ForeignKey(Posts, on_delete=models.CASCADE)
    posted_date = models.DateField(editable=False, auto_now_add=True)
    posted_time = models.TimeField(editable=False, auto_now_add=True)
    content = models.TextField(max_length = 500)

class HelperRole(models.Model):
    userid = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    serv_type = models.CharField(max_length=100)
    serv_desc = models.CharField(max_length=300)

class EngagementMetrics(models.Model):
    userid = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    reachouts = models.IntegerField(default=0)
    recommendations = models.IntegerField(default=0)
    posts = models.IntegerField(default=0)
    replies = models.IntegerField(default=0)
    giftreqs = models.IntegerField(default=0)
