from rest_framework import serializers
from .models import MyUser, Posts, Replies, HelperRole, EngagementMetrics

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['id', 'username', 'password', 'profile_pic' ,'location', 'email', 'fb_account', 'ig_account','date_joined', 'first_name', 'last_name', 'mod_status'] #need to add pfp image
        extra_kwargs = {"password": {"write_only": True}}
        read_only_fields = ["date_joined","mod_status"]

        
    def create(self, validated_data):
        print(validated_data)
        user = MyUser.objects.create_user(**validated_data)
        return user
        #need to finish this - making the models

# Basic serializers to update and refine later
class PostsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ['id', 'userid', 'posted_date', 'posted_time', 'title', 'description', 'tags' ] #add images
        # read_only_fields = ['posted_date', 'posted_time']

class GiftsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ['id', 'userid', 'posted_date', 'posted_time', 'title', 'description', 'tags' ] #add images
        # read_only_fields = ['posted_date', 'posted_time']
    
class RepliesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Replies
        fields = ['id','userid', 'postid', 'posted_date', 'posted_time', 'content']
        # read_only_fields = ['posted_date', 'posted_time']
    
class HelperRoleSerializers(serializers.ModelSerializer):
    class Meta:
        model = HelperRole
        fields = ['id', 'userid', 'serv_type', 'serv_desc']

class EngagementMetricsSerializers(serializers.Serializer):
    class Meta:
        model = EngagementMetrics
        fields = ['userid', 'reachouts', 'recommendations', 'posts', 'replies', 'giftreqs'] 


