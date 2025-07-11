from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from .serializers import UserSerializer, PostsSerializer, GiftsSerializer, RepliesSerializer, HelperRoleSerializer, UserProfileSerializer, CustomTokenObtainPairSerializer
from rest_framework.permissions import AllowAny,IsAuthenticated
from .models import MyUser, Posts, Gifts, Replies, HelperRole
from rest_framework import viewsets
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import logout
from .permission_classes import IsOwnerOrReadOnly
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
# Create your views here.
#?the place you put all the restframework view in - we are creating rest api end points here

#-------------------------------------------------------------------------------#



#TODO: Set everything to is authenticated
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
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
    

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
    permission_classes = [AllowAny, IsOwnerOrReadOnly]

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
    permission_classes = [AllowAny, IsOwnerOrReadOnly]   

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
    permission_classes = [AllowAny, IsOwnerOrReadOnly]  

#-------------------------------------------------------------------------------#

#TODO: find a way to filter posts by tags

#-------------------------------------------------------------------------------#
class UserProfileView(viewsets.ReadOnlyModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [AllowAny, IsOwnerOrReadOnly]

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import logout

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        try:
            logout(request)
            return Response(
                {"message": "Successfully logged out"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": "Logout failed", "detail": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
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



@api_view(['POST'])
@permission_classes([AllowAny])
def increment_recommendation(request, pk):
    try:
        helper_card = get_object_or_404(HelperRole, id=pk)
        helper_card.recommendations += 1
        helper_card.save()
        
        serializer = HelperRoleSerializer(helper_card)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(
            {'error': 'Failed to increment recommendation', 'detail': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    

    
