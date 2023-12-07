from django.urls import path

from . import views

urlpatterns = [
    path("", views.viewAllTasks, name="allTasks"),
]