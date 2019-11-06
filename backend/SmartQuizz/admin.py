from django.contrib import admin
from .models import Question
from .models import QCM
from .models import True_False
from .models import Open_Question
from .models import Quiz

class QuestionAdmin(admin.ModelAdmin):  
  list_display = ('id', 'statement') 

# Register your models here.
admin.site.register(Question, QuestionAdmin) 