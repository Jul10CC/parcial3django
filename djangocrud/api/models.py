from django.db import models

class Songs(models.Model):
    title = models.CharField(max_length=32)
    artist = models.CharField(max_length=50)
    album = models.CharField(max_length=50)
    release_date = models.IntegerField()
    gender = models.CharField(max_length=30)
    
