from django.urls import path
from . import views

urlpatterns = [
    path('experiment/', views.experiment_view, name = "experiment"),
]