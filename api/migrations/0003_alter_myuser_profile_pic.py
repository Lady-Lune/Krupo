# Generated by Django 5.1.5 on 2025-02-03 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_posts_images_alter_myuser_profile_pic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myuser',
            name='profile_pic',
            field=models.ImageField(default='defaults/defaultpfp.jpg', upload_to='pfp/'),
        ),
    ]
