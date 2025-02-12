from django.contrib.auth.signals import user_logged_in, user_logged_out
from django.dispatch import receiver
from django.db.models.signals import post_save, post_delete
from .models import Posts,Gifts, Replies, EngagementMetrics,MyUser


# creating a record in engagement table everytime a new user is created
@receiver(post_save, sender=MyUser) #working
def create_record(sender,created, instance, **kwargs):
    if created:
        engagement_record = EngagementMetrics.objects.create(user = instance)

@receiver(post_save, sender=Posts) #counter working
def post_add(sender, created, instance, **kwargs):
    if created:
        user = instance.user
        engagement_record, created = EngagementMetrics.objects.get_or_create(user = user)
        engagement_record.post_count += 1
        engagement_record.save()

@receiver(post_save, sender=Gifts) #counter working
def gift_add(sender, created, instance, **kwargs):
    if created:
        user = instance.user
        engagement_record, created = EngagementMetrics.objects.get_or_create(user = user)
        engagement_record.giftreq_count += 1
        engagement_record.save()

@receiver(post_save, sender=Replies) #counter working
def reply_add(sender, created, instance, **kwargs):
    if created:
        user = instance.user
        engagement_record, created = EngagementMetrics.objects.get_or_create(user = user)
        engagement_record.reply_count += 1
        engagement_record.save()

#-------------------------------------------------------------------------------#
@receiver(user_logged_in)
def login_reciever(sender, **kwargs):
    sentby = str(sender)
    print (
        '\n', 'LOGIN' ,'\n',
        "sent by: ", sentby, '\n',
    )

@receiver(user_logged_out)
def logout_reciever(sender, **kwargs):
    sentby = type(sender)
    print (
        '\n', 'LOGOUT' ,'\n',
        "sent by: ", sentby, '\n',
    )
#-------------------------------------------------------------------------------#
