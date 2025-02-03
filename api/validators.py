from PIL import Image,ImageOps
from django.core.exceptions import ValidationError
import re



# Validators
# def PFPTransform(value):
#     with Image.open(value) as img:
#         img = ImageOps.fit(img, (500,500))
#         return img
def pfp_validator(value):
    # value = value.file
    # if (value.width > 500) | (value.height > 500):
    #     raise ValidationError("Only 500x500 pics accepted")
    print(value)

def ImageValidation(value):
    if (value.width > 1600) | (value.height > 1600):
        raise ValidationError("Only 1600x1600 pics accepted")
    
def validate_fb_url(value):
    fb_url_pattern = r"^(https://www\.facebook\.com/profile\.php\?id=\d+|https://www\.facebook\.com/[^/]+)$"
    if not re.match(fb_url_pattern, value):
        raise ValidationError("Enter a valid Facebook profile URL.")

def validate_ig_url(value):
    ig_url_pattern = r"^(https://www\.instagram\.com/[^/]+)$"
    if not re.match(ig_url_pattern, value):
        raise ValidationError("Enter a valid Instagram profile URL.")