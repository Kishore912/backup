from django.urls import path
from .views import home ,add
urlpatterns = [
   
    path('home',home),
    path('add',add)
]
