from rest_framework import serializers
from .models import MyUser, Posts, Gifts, Replies, HelperRole, EngagementMetrics

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import login

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = [
            "id",
            "username",
            "password",
            "profile_pic",
            "location",
            "email",
            "fb_account",
            "ig_account",
            "date_joined",
            "first_name",
            "last_name",
            "mod_status",
        ]  
        extra_kwargs = {"password": {"write_only": True}}
        read_only_fields = ["date_joined", "mod_status"]

    def create(self, validated_data): 
        print(validated_data) #TODO: delete this line
        user = MyUser.objects.create_user(**validated_data)
        return user

    def update(self, instance, validated_data):
        # Fields that can be updated
        updatable_fields = [
            "profile_pic",
            "location",
            "email",
            "fb_account",
            "ig_account",
            "first_name",
            "last_name",
        ]
        for field in updatable_fields:
            if field in validated_data:
                setattr(instance, field, validated_data[field])
        # Handle password update
        password = validated_data.get("password")
        if password:
            instance.set_password(password)
        instance.save()
        return instance

        # instance.profile_pic = validated_data.get('profile_pic', instance.profile_pic)
        # instance.location = validated_data.get('location', instance.location)
        # instance.email = validated_data.get('email', instance.email)
        # instance.fb_account = validated_data.get('fb_account', instance.fb_account)
        # instance.ig_account = validated_data.get('ig_account', instance.ig_account)
        # instance.first_name = validated_data.get('first_name', instance.first_name)
        # instance.last_name = validated_data.get('last_name', instance.last_name)
        # instance.save()


# Basic serializers to update and refine later
# Really Happy with how these work

class UserProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = [
            'first_name', 
            'last_name', 
            'email', 
            'profile_pic',
            'fb_account',
            'ig_account',
            'location',
            'password'
        ]
        extra_kwargs = {
            "password": {"write_only": True, "required": False},
            "email": {"required": False},
            "profile_pic": {"required": False},
            "location": {"required": False},
            "fb_account": {"required": False},
            "ig_account": {"required": False},
            "first_name": {"required": False},
            "last_name": {"required": False},
        }
        
    def update(self, instance, validated_data):
        # Handle password separately
        password = validated_data.pop('password', None)
        
        # Update other fields
        for field, value in validated_data.items():
            setattr(instance, field, value)
        
        # Handle password update with proper hashing
        if password:
            instance.set_password(password)
            
        instance.save()
        return instance

# -------------------------------------------------------------------------------#

class RepliesSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Replies
        fields = ["id", "user", "post", "posted_date", "posted_time", "content"]

    def create(self, validated_data):
        request = self.context["request"]
        user = request.user
        validated_data["user"] = user
        reply = Replies.objects.create(**validated_data)
        return reply

# -------------------------------------------------------------------------------#

class PostsSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    replies = RepliesSerializer(many=True, read_only=True)

    class Meta:
        model = Posts
        fields = [
            "id",
            "user",
            "posted_date",
            "posted_time",
            "title",
            "description",
            "image",
            "tags",
            "replies",
        ]
        # creating a post should also add the counter in post count

    def create(self, validated_data):
        validated_data["user"] = self.context["request"].user
        return super().create(validated_data)

    def update(self, instance, validated_data):
        return instance
    
    
    
# -------------------------------------------------------------------------------#

class GiftsSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Gifts
        fields = [
            "id",
            "user",
            "posted_date",
            "posted_time",
            "title",
            "description",
            "image",
            "tags",
        ]

    def create(self, validated_data):
        validated_data["user"] = self.context["request"].user
        return super().create(validated_data)

    def update(self, instance, validated_data):
        return instance

# -------------------------------------------------------------------------------#


class HelperRoleSerializer(
    serializers.ModelSerializer
):  # check if the user has either fb account/ig account or email before creating
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = HelperRole
        fields = ["id", "user", "serv_type", "serv_desc", "recommendations"]

    def create(self, validated_data):
        request = self.context["request"]
        user = request.user
        validated_data["user"] = user
        helper = HelperRole.objects.create(**validated_data)
        return helper
    
    def update(self, instance, validated_data):
        return instance

# -------------------------------------------------------------------------------#

class EngagementMetricsSerializer(
    serializers.ModelSerializer
):  # Engagement will only be used with viewing a users profile
    user = UserSerializer(many=False)
    recommendations = serializers.ReadOnlyField(source='helper_role.recommendations')

    class Meta:
        model = EngagementMetrics
        fields = [
            "user",
            "reachout_count",
            "recommendations",
            "post_count",
            "reply_count",
            "giftreq_count",
        ]

    def create(self, validated_data):
        validated_data["user"] = self.context["request"].user
        return super().create(validated_data)

# -------------------------------------------------------------------------------#

class UserProfileSerializer(serializers.ModelSerializer):  
    reachout_count = serializers.ReadOnlyField(source='engagement_metrics.reachout_count')
    recommendations = serializers.ReadOnlyField(source='helper_role.recommendations')
    post_count = serializers.ReadOnlyField(source='engagement_metrics.post_count')
    reply_count = serializers.ReadOnlyField(source='engagement_metrics.reply_count')
    giftreq_count = serializers.ReadOnlyField(source='engagement_metrics.giftreq_count')
    helper_role = HelperRoleSerializer(many=True, read_only=True)

    class Meta:
        model = MyUser
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "profile_pic",
            "location",
            "email",
            "fb_account",
            "ig_account",
            "date_joined",
            "mod_status",
            "reachout_count",
            "recommendations",
            "post_count",
            "reply_count",
            "giftreq_count",
            "helper_role",
        ]
        #TODO: Filtering the posts by tag - icontain- inthe DRF tutotial


# -------------------------------------------------------------------------------#
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # ✅ Django login to set session and send login signal
        request = self.context["request"]
        login(request, self.user)  # This triggers user_logged_in

        return data