from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def index(request):
	return render(request,'games/calc.html')

def book_cricket(request):
	return render(request,'games/book_cricket.html')

def stone(request):
	return render(request,'games/stone.html')