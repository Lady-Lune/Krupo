from django.db import models
from django.contrib.auth.models import AbstractUser
from .locationdata import LOCATION_CHOICES
from .validators import validate_fb_url,validate_ig_url, ImageValidation
from PIL import Image
from krupo_test import settings
import os

# Create your models here.

# my user manager lets you get the username instead of id when used as foreign key in other models
class MyUser(AbstractUser):
    email = models.EmailField(blank=False)
    profile_pic = models.ImageField(upload_to='pfp/', default='defaults/defaultpfp.jpg') 
    location = models.CharField(max_length=10, choices=LOCATION_CHOICES)
    fb_account = models.URLField(blank=True, validators=[validate_fb_url])
    ig_account = models.URLField(blank=True, validators=[validate_ig_url])
    mod_status = models.BooleanField(default=False)

    # objects = MyUserManager()

    def __str__(self):
        return self.username

    def save(self, *args, **kwargs):
        # save the profile first
        super().save(*args, **kwargs)
        # resize the image
        img = Image.open(self.profile_pic.path)
        if img.height > 500 or img.width > 500:
            output_size = (500, 500)
            # create a thumbnail
            img.thumbnail(output_size)
            # overwrite the larger image
            img.save(self.profile_pic.path)

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
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, editable=False, null=True, related_name="posts") #null=True because this cannot be autopopulated by django when makemigrations
    posted_date = models.DateField(editable=False, auto_now_add=True)
    posted_time = models.TimeField(editable=False, auto_now_add=True)
    title = models.CharField(max_length=75)
    description = models.TextField(max_length = 500)
    tags = models.TextField(blank=True)
    image = models.ImageField(upload_to='post_images/', blank=True, validators=[ImageValidation])

    def __str__(self):
        return self.title

class Gifts(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, editable=False, null=True)
    posted_date = models.DateField(editable=False, auto_now_add=True)
    posted_time = models.TimeField(editable=False, auto_now_add=True)
    title = models.CharField(max_length=75)
    description = models.TextField(max_length = 300)
    tags = models.TextField(blank=True)
    image = models.ImageField(upload_to='giftreq_images/', blank=True, validators=[ImageValidation])

    def __str__(self):
        return self.title

class Replies(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, editable=False, on_delete=models.CASCADE, related_name="replies", null=True) 
    post = models.ForeignKey(Posts, on_delete=models.CASCADE, related_name="replies",  null=True)
    posted_date = models.DateField(editable=False, auto_now_add=True)
    posted_time = models.TimeField(editable=False, auto_now_add=True)
    content = models.TextField(max_length = 500)

    def __str__(self):
        return (self.content[:15]+"...")

class HelperRole(models.Model): 
    user = models.ForeignKey(settings.AUTH_USER_MODEL, editable=False, on_delete=models.CASCADE, related_name="helper_role")
    serv_type = models.CharField(max_length=100)
    serv_desc = models.CharField(max_length=300)

    def __str__(self):
        return (str(self.user)+" : "+self.serv_type[:10])

class EngagementMetrics(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, editable=False, on_delete=models.CASCADE)
    reachout_count = models.IntegerField(default=0) #need logic for this
    recommendations = models.IntegerField(default=0) #need logic for this
    post_count = models.IntegerField(default=0)
    reply_count = models.IntegerField(default=0)
    giftreq_count = models.IntegerField(default=0)

    def __str__(self):
        return ( "Engagement Metrics of " + str(self.user))