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
    fields = ('id', 'statement', 'timer', 'qu_type', 'answers', 'correct_answers')


class TrueFalseSerializer(serializers.ModelSerializer):
  class Meta:
    model = True_False
    fields = ('id', 'statement', 'timer', 'qu_type', 'answer')

class OpenQuestionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Open_Question
    fields = ('id', 'statement', 'timer', 'qu_type', 'answer')


class QuizSerializer(serializers.ModelSerializer):
  class Meta:
    model = Quiz
    fields = ('id', 'questions', 'online')
