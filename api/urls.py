from django.urls import path, include
from api.views import  PostsViewSet , GiftViewSet , ReplyViewset , HelperRoleViewset, UserViewSet,UserProfileView, UserProfileUpdateView, increment_recommendation, HelperCards, increment_replycount, increment_reachoutcount
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
    path("replycount/update/", increment_replycount, name="replycount"),
    path("reachoutcount/update/", increment_reachoutcount, name="reachoutcount"),
    path("profile/update/", UserProfileUpdateView.as_view(), name="profile-update"),
    path('helpercards/', HelperCards.as_view(), name="helper-cards"),
    path("", include(router.urls)),
]

