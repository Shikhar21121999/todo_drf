from django.urls import path, include
from .import views

urlpatterns = [

    path('', views.ApiOverview.as_view(), name='api_overview'),
    path('task-list', views.Todolist.as_view(), name='todo_list'),
    path('task-detail/<str:pk>', views.TaskDetail.as_view(), name='Task_Detail'),

]
