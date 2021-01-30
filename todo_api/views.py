from django.shortcuts import render
from .serializers import TodoSerializer
from rest_framework import generics
from .models import Todo
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.


class ApiOverview(APIView):
    '''
    Class based view to display list of urls for the api
    '''

    def get(self, request, format=None):
        api_urls = {
            'Todo List': '/todo_api/task-list/',
            'Api Overview': '/todo_api',
            'Task everything': '/todo_api/task-detail/<str:pk>/',
        }
        return Response(api_urls)


class Todolist(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
