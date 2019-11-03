from django.db import models
from django.contrib.postgres.fields import ArrayField
from polymorphic.models import PolymorphicModel

class Question(PolymorphicModel):
    QUESTION_CHOICES = [
            ('MCQ', 'QCM '),
            ('TF', 'Vrai_Faux'),
            ('OQ', 'Open_Question'),
     ]
    
    statement = models.CharField(max_length=100)
    #Representé par un objet de type datetime.timedelta 
    timer = models.DurationField()
    qu_type = models.CharField(max_length=1, choices = QUESTION_CHOICES, default = 'QCM')
        
class QCM(Question):
    answers = ArrayField(models.CharField(max_length=100))
    #Contient les indices des bonnes réponses par rapport au tableau answers
    correct_answers = ArrayField(models.IntegerField(null=True, blank=True), blank=True,)

class True_False(Question):
    answer = models.BooleanField()
    
class Open_Question(Question):
    answer = models.CharField(max_length=1000)    
    
class Quiz(models.Model):
    questions = models.ManyToManyField(Question)
    online = models.BooleanField()
    
'''
class Student(models.Model):
    answered_quiz = models.ManyToManyField(Quiz, through='HasAnswered')
    
class Professor(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    quiz = models.ManyToManyField(Quiz, through='PossessesQuiz')

class PossessesQuiz(models.Model):
    professor = models.ForeignKey(Professor, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    date_created = models.DateField()
'''