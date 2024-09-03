$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cadastrar_contas.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 2,
  "name": "",
  "description": "Como um usuario\r\nEu quero cadastrar contas\r\nPara poder distribuir meu dinheiro de uma forma mais organizada",
  "id": "",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": ";deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 12,
  "name": "adiciono  a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": ";deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 15,
      "id": ";deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 16,
      "id": ";deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 17,
      "id": ";deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta  mesmo nome",
        "Conta adicionada com sucesso!"
      ],
      "line": 18,
      "id": ";deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "comments": [
    {
      "line": 7,
      "value": "#reutilizaoscenarios"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastrarContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 6075651356,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": ";deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 12,
  "name": "adiciono  a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 19
    }
  ],
  "location": "CadastrarContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 788101972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "CadastrarContasSteps.recebo_a_mensagem(String)"
});
formatter.result({
  "duration": 92263405,
  "status": "passed"
});
formatter.after({
  "duration": 293391314,
  "status": "passed"
});
formatter.after({
  "duration": 582962643,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 7,
      "value": "#reutilizaoscenarios"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastrarContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 6160625183,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": ";deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 12,
  "name": "adiciono  a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "CadastrarContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 387617385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "CadastrarContasSteps.recebo_a_mensagem(String)"
});
formatter.result({
  "duration": 54498140,
  "status": "passed"
});
formatter.after({
  "duration": 317160033,
  "status": "passed"
});
formatter.after({
  "duration": 579716580,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 7,
      "value": "#reutilizaoscenarios"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastrarContasSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 6349914044,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": ";deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 12,
  "name": "adiciono  a conta \"Conta  mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta  mesmo nome",
      "offset": 19
    }
  ],
  "location": "CadastrarContasSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 800723369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "CadastrarContasSteps.recebo_a_mensagem(String)"
});
formatter.result({
  "duration": 89157424,
  "status": "passed"
});
formatter.after({
  "duration": 312399493,
  "status": "passed"
});
formatter.after({
  "duration": 557782906,
  "status": "passed"
});
});