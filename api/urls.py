from django.urls import path, include
from api.views import  PostsViewSet , GiftViewSet , ReplyViewset , HelperRoleViewset, UserViewSet,UserProfileView, UserProfileUpdateView, increment_recommendation
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("posts", PostsViewSet)
router.register("gifts", GiftViewSet)
router.register("replies", ReplyViewset)
router.register("helpers", HelperRoleViewset)
router.register("users", UserViewSet)
router.register("profile", UserProfileView, basename="userprofile")




urlpatterns = [
    path("recommend/<int:pk>/", increment_recommendation, name="recommend"),
    path("profile/update/", UserProfileUpdateView.as_view(), name="profile-update"),
    path("", include(router.urls)),
]

