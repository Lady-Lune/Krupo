from django.urls import path, include
from api.views import  PostsViewSet , GiftViewSet , ReplyViewset , HelperRoleViewset, UserViewSet,UserProfileView, increment_recommendation
# PostsView, CreatePostView , DeletePostView, GiftsView, CreateGiftReqView, DeleteGiftReqView, CreateReplyView , SingleUserView, UserProfileView,
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
    # path("user/<int:pk>", SingleUserView.as_view(), name="user_info"),  #shows the user info
    # path("user/<int:pk>/profile", UserProfileView.as_view(), name="userprofile"),  #view update adn delete users
    
    # path("posts", PostsView.as_view(), name="posts"),
    # path("post/create", CreatePostView.as_view(), name="create_post"),
    # path("post/<int:pk>", DeletePostView.as_view(), name="delete_post"),
    path("", include(router.urls)),
    

    # path("gifts", GiftsView.as_view(), name="gifts"),
    # path("gift/create", CreateGiftReqView.as_view(), name="create_gift"),
    # path("gift/<int:pk>", DeleteGiftReqView.as_view(), name="delete_gift"),

    # path("reply/create", CreateReplyView.as_view(), name="reply"),
]

