from django.shortcuts import render
#from django.http import HttpResponse

def experiment_view(request):
    return render(request, 'knowledge_gap/experiment.html', {'jspsych_path': 'js/jspsych.js'})
# Create your views here.
