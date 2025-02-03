from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny
from .models import MyUser
from rest_framework.renderers import JSONRenderer

# Create your views here.
#?the place you put all the restframework view in - we are creating rest api end points her
class CreateUserView(generics.CreateAPIView):    
    queryset = MyUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

#for test purposes
class AllUsersView(generics.ListAPIView):
    queryset = MyUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]



#for test purposes
def testview(request, pk):
    user = MyUser.objects.get(id=pk)
    serializer = UserSerializer(user)
    data = serializer.data
    return render(request, 'api/test.html', {'message': data} )

