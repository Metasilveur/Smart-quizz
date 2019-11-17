from django.db import models
from django.contrib.postgres.fields import ArrayField
from polymorphic.models import PolymorphicModel

class Question(PolymorphicModel):

    class Meta:
        verbose_name = "Question"

    QUESTION_CHOICES = [
            ('MCQ', 'QCM '),
            ('TF', 'Vrai_Faux'),
            ('OQ', 'Open_Question'),    
     ]
    
    statement = models.CharField(max_length=100, default="")
    #Representé par un objet de type datetime.timedelta 
    timer = models.DurationField(null=True,
                                             blank=True,
                                             verbose_name=('timeslot_duration'),
                                             help_text=('[DD] [HH:[MM:]]ss[.uuuuuu] format')
                                             )
    qu_type = models.CharField(max_length=3, choices = QUESTION_CHOICES, default = 'QCM')
        
class QCM(Question):
    class Meta:
        verbose_name = "QCM"

    answers = ArrayField(models.CharField(max_length=100, default=""))
    #Contient les indices des bonnes réponses par rapport au tableau answers
    correct_answers = ArrayField(models.IntegerField(null=True, blank=True, default=-1), blank=True)

class True_False(Question):
    class Meta:
        verbose_name = "Vrai Faux"
    answer = models.BooleanField(default = False)
    
class Open_Question(Question):
    class Meta:
        verbose_name = "Question Ouverte"

    answer = models.CharField(max_length=1000, default="", editable=False)    

class Quiz(models.Model):
    class Meta:
        verbose_name = "Quiz"

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