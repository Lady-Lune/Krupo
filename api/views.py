from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer, PostsSerializer, GiftsSerializer, RepliesSerializer, HelperRoleSerializer, UserProfileSerializer
from rest_framework.permissions import AllowAny,IsAuthenticated
from .models import MyUser, Posts, Gifts, Replies, HelperRole
from rest_framework import viewsets
from django.contrib.auth import authenticate, login
# Create your views here.
#?the place you put all the restframework view in - we are creating rest api end points here

#-------------------------------------------------------------------------------#




# Create, Update, Delete user
class UserViewSet(viewsets.ModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# class CreateUserView(generics.CreateAPIView):    
#     queryset = MyUser.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [AllowAny]

# # View user info
# class SingleUserView(generics.RetrieveAPIView):
#     queryset = MyUser.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [IsAuthenticated]

# #get info - update and delete it
# class UserProfileView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = MyUser.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [IsAuthenticated]

#-------------------------------------------------------------------------------#

class PostsViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer
    permission_classes = [AllowAny]

# # get all posts # need to check
# class PostsView(generics.ListAPIView):
#     queryset = Posts.objects.all()
#     serializer_class = PostsSerializer
#     permission_classes = [AllowAny] #?

# # make a post # need to check
# class CreatePostView(generics.CreateAPIView):
#     queryset = Posts.objects.all()
#     serializer_class = PostsSerializer
#     permission_classes = [IsAuthenticated]

#     def get_serializer_context(self):
#         context = super().get_serializer_context()
#         context["request"] = self.request
#         return context

# # delete a post # need to check
# class DeletePostView(generics.RetrieveDestroyAPIView):
#     queryset = Posts.objects.all()
#     serializer_class = PostsSerializer
#     permission_classes = [IsAuthenticated]

#-------------------------------------------------------------------------------#

## GIFT ##
class GiftViewSet(viewsets.ModelViewSet):
    queryset = Gifts.objects.all()
    serializer_class = GiftsSerializer
    permission_classes = [AllowAny]

# class GiftsView(generics.ListAPIView):
#     queryset = Gifts.objects.all()
#     serializer_class = GiftsSerializer
#     permission_classes = [IsAuthenticated] #?

# # make a post 
# class CreateGiftReqView(generics.CreateAPIView):
#     queryset = Gifts.objects.all()
#     serializer_class = GiftsSerializer
#     permission_classes = [IsAuthenticated]

#     def get_serializer_context(self):
#         context = super().get_serializer_context()
#         context["request"] = self.request
#         return context

# # delete a post 
# class DeleteGiftReqView(generics.RetrieveDestroyAPIView):
#     queryset = Gifts.objects.all()
#     serializer_class = GiftsSerializer
#     permission_classes = [IsAuthenticated]

#-------------------------------------------------------------------------------#

## Views needed ##
# get all post for a certain location
# get posts sorted by time posted 
# get posts based on a tag?
# get profile view + engagement
# get posts + replies
# get user id + helper role

#-------------------------------------------------------------------------------#

class ReplyViewset(viewsets.ModelViewSet):
    queryset = Replies.objects.all()
    serializer_class  = RepliesSerializer
    permission_classes = [AllowAny]   

    # def perform_create(self, serializer):
    #     # Set the user to the currently logged-in user
    #     serializer.save(user=self.request.user)

    # def get_serializer_context(self):
    #     context = super().get_serializer_context()
    #     context["request"] = self.request
    #     return context

#-------------------------------------------------------------------------------#

class HelperRoleViewset(viewsets.ModelViewSet):
    queryset = HelperRole.objects.all()
    serializer_class  = HelperRoleSerializer
    permission_classes = [AllowAny]  

#-------------------------------------------------------------------------------#

#TODO: find a way to filter posts by tags

#-------------------------------------------------------------------------------#
class UserProfileView(viewsets.ReadOnlyModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [AllowAny]






#-------------------------------------------------------------------------------#

#for test purposes
class AllUsersView(generics.ListAPIView):
    queryset = MyUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

def testview(request, pk):
    user = MyUser.objects.get(id=pk)
    serializer = UserSerializer(user)
    data = serializer.data
    return render(request, 'api/index.html', {'message': data})