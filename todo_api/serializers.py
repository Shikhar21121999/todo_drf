from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    '''
    Class to create a model serializer
    for all the todo
    '''
    class Meta:
        model = Todo
        fields = ['title', 'completed']
