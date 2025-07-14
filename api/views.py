from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from .serializers import UserSerializer, UserProfileUpdateSerializer, PostsSerializer, GiftsSerializer, RepliesSerializer, HelperRoleSerializer, UserProfileSerializer, EngagementMetricsSerializer, CustomTokenObtainPairSerializer
from rest_framework.permissions import AllowAny,IsAuthenticated
from .models import MyUser, Posts, Gifts, Replies, HelperRole, EngagementMetrics
from rest_framework import viewsets
from django.contrib.auth import authenticate, login, logout
from rest_framework_simplejwt.views import TokenObtainPairView
from .permission_classes import IsOwnerOrReadOnly
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
# Create your views here.
#?the place you put all the restframework view in - we are creating rest api end points here

#-------------------------------------------------------------------------------#



#TODO: Set everything to is authenticated
# Create, Update, Delete user
class UserViewSet(viewsets.ModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
    
    def get_permissions(self):
        """Allow anyone to register, but require authentication for other actions"""
        if self.action == 'create':
            return [AllowAny()]
        return [IsAuthenticated(), IsOwnerOrReadOnly()]

#-------------------------------------------------------------------------------#

class PostsViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]


#-------------------------------------------------------------------------------#

## GIFT ##
class GiftViewSet(viewsets.ModelViewSet):
    queryset = Gifts.objects.all()
    serializer_class = GiftsSerializer
    permission_classes = [AllowAny, IsOwnerOrReadOnly]

#-------------------------------------------------------------------------------#

class ReplyViewset(viewsets.ModelViewSet):
    queryset = Replies.objects.all()
    serializer_class  = RepliesSerializer
    permission_classes = [AllowAny, IsOwnerOrReadOnly]   


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
class HelperCards(generics.ListAPIView):
    serializer_class = HelperRoleSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        # Get all HelperRole objects for the current user
        return HelperRole.objects.filter(user=self.request.user)

def testview(request, pk):
    user = MyUser.objects.get(id=pk)
    serializer = UserSerializer(user)
    data = serializer.data
    return render(request, 'api/index.html', {'message': data})



@api_view(['POST'])
@permission_classes([IsAuthenticated])
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
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def increment_replycount(request):
    try:
        engagement_record = get_object_or_404(EngagementMetrics, user=request.user)
        engagement_record.reply_count += 1
        engagement_record.save()
        
        serializer = EngagementMetricsSerializer(engagement_record)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(
            {'error': 'Failed to increment reply count', 'detail': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def increment_reachoutcount(request):
    try:
        engagement_record = get_object_or_404(EngagementMetrics, user=request.user)
        engagement_record.reachout_count += 1
        engagement_record.save()
        
        serializer = EngagementMetricsSerializer(engagement_record)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(
            {'error': 'Failed to increment reply count', 'detail': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

# # Simple Profile Update View (cleaner approach)
class UserProfileUpdateView(generics.UpdateAPIView):
    serializer_class = UserProfileUpdateSerializer
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        return self.request.user  # Always update current user's profile



