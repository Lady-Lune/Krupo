# Generated by Django 5.1.5 on 2025-02-03 11:06

import api.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='posts',
            name='images',
            field=models.ImageField(blank=True, upload_to='', validators=[api.validators.ImageValidation]),
        ),
        migrations.AlterField(
            model_name='myuser',
            name='profile_pic',
            field=models.ImageField(default='media\\defaults\\defaultpfp.jpg', upload_to='pfp/'),
        ),
    ]
