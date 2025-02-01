from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny

# Create your views here.
#?the place you put all the restframework view in - we are creating rest api end points her
class CreateUserView(generics.CreateAPIView):    
    queryset = None
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

