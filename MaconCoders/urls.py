from django.urls import path 
from django.contrib import admin
from django.urls import include, path

from . import views
urlpatterns = [
       path('admin/',admin.site.urls),
    path('', views.index, name='index'),
        path("projects/", views.projects, name="projects"),
    path("suggestionForm/", views.suggestionForm, name="suggestionForm"),
    path("aboutUs/", views.aboutUs, name="aboutUs"),
   
 

]