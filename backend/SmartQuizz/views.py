from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import QuestionSerializer 
from .serializers import QCMSerializer 
from .serializers import TrueFalseSerializer 
from .serializers import OpenQuestionSerializer 
from .serializers import QuizSerializer
from .serializers import QuizSerializer
from .models import Question   
from .models import QCM             
from .models import Quiz                     

class QuestionView(viewsets.ModelViewSet):
  serializer_class = QuestionSerializer
  queryset = Question.objects.all()

class QuizView(viewsets.ModelViewSet):
  serializer_class = QuizSerializer
  queryset = Quiz.objects.all()

class QCMView(viewsets.ModelViewSet):
  serializer_class = QCMSerializer
  queryset = QCM.objects.all()