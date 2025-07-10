"""
URL configuration for krupo_test project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api.views import  AllUsersView, testview, CustomTokenObtainPairView, LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView 
from django.conf import settings
from django.conf.urls.static import static
# CreateUserView


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include("api.urls")),
    # path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh_token"),
    path("api-auth/", include("rest_framework.urls")),
    # path("api/user/register/", CreateUserView.as_view(), name="register")  #makes a new user
    # path("api/users/", AllUsersView.as_view(), name="allusers")  #test: all user
    path("api/test/<int:pk>", testview, name="test"),  #test
    # path("accounts/", include("django.contrib.auth.urls"))
    path("api/token/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/logout/", LogoutView.as_view(), name="logout"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
 