# language: pt
Funcionalidade: 
Como um usuario
Eu quero cadastrar contas
Para poder distribuir meu dinheiro de uma forma mais organizada

#reutilizaoscenarios
Contexto:
Dado que desejo adicionar uma conta

Esquema do Cenario: Deve validar regras cadastro contas
	Quando adiciono  a conta "<conta>"
	Entao recebo a mensagem "<mensagem>"
Exemplos:
	| conta															| mensagem																				|
	| Conta de Teste							| Conta adicionada com sucesso!		|
	|																				| Informe o nome da conta								|
	| Conta  mesmo nome	| Conta adicionada com sucesso! |

