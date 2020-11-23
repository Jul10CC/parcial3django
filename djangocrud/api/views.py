from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import SongsSerializer
from .models import Songs
from rest_framework.response import Response

class SongsViewSet(viewsets.ModelViewSet):
    queryset = Songs.objects.all()
    serializer_class = SongsSerializer
