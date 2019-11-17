from rest_framework import serializers
from .models import Question
from .models import QCM
from .models import True_False
from .models import Open_Question
from .models import Quiz


class QuestionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Question
    fields = ('id', 'statement', 'timer', 'qu_type')

class QCMSerializer(serializers.ModelSerializer):
  class Meta:
    model = QCM
    fields = ('id', 'answers', 'correct_answers')


class TrueFalseSerializer(serializers.ModelSerializer):
  class Meta:
    model = True_False
    fields = ('id', 'answer')

class OpenQuestionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Open_Question
    fields = ('id', 'answer')


class QuizSerializer(serializers.ModelSerializer):
  class Meta:
    model = Quiz
    fields = ('id', 'questions', 'online')
