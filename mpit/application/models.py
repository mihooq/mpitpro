from django.db import models

# Create your models here.
class UserTypes(models.Model):
    description = models.CharField(max_length=20)

class Users(models.Model):
    firstname = models.CharField(max_length=30)
    lastname = models.CharField(max_length=30)
    userType = models.ForeignKey(to=UserTypes, on_delete=models.CASCADE)
    email = models.EmailField()
    password = models.CharField(max_length=32)
    balance = models.BigIntegerField()

class Tasks(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.IntegerField()
    visible = models.BooleanField()

class TaskStatus(models.Model):
    description = models.CharField(max_length=100)

class TaskInWork(models.Model):
    taskId = models.ForeignKey(to=Tasks, on_delete=models.CASCADE)
    status = models.ForeignKey(to=TaskStatus, on_delete=models.CASCADE)
    executor = models.ForeignKey(to=Users, on_delete=models.CASCADE)