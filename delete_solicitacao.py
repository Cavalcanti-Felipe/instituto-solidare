import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
django.setup()

from instsoli.models import Solicitacao

def delete_all_appointments():
    Solicitacao.objects.all().delete()

if __name__ == "__main__":
    delete_all_appointments()