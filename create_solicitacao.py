import os
import django
from datetime import datetime, timedelta

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
django.setup()

from django.contrib.auth.models import User
from instsoli.models import Solicitacao

try:
    aluno = User.objects.get(username='aluno_teste')
except User.DoesNotExist:
    aluno = User.objects.create_user(
        username='aluno_teste',
        password='senha123',
        first_name='Aluno',
        last_name='Teste'
    )

try:
    professor = User.objects.get(username='prof_teste')
except User.DoesNotExist:
    professor = User.objects.create_user(
        username='prof_teste',
        password='senha123',
        first_name='Professor',
        last_name='Teste'
    )

titulo = 'Problema com acesso à plataforma'
mensagem = 'Não consigo acessar minha conta desde ontem.'
tipo = 'problema'
status = 'pendente'
solucao_resposta = ''

nova_solicitacao = Solicitacao.objects.create(
    titulo=titulo,
    mensagem=mensagem,
    tipo=tipo,
    status=status,
    aluno=aluno,
    professor=professor,
    solucao_resposta=solucao_resposta,
    arquivada=False
)