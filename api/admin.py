from django.contrib import admin
from .models import MyUser, Posts, Replies, HelperRole, EngagementMetrics

# Register your models here.

admin.site.register(MyUser)
admin.site.register(Posts)
admin.site.register(Replies)
admin.site.register(HelperRole)
admin.site.register(EngagementMetrics)
