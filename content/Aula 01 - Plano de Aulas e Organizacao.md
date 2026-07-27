---
title: "Aula 01 — Plano de Ensino e Organização da Disciplina"
disciplina: Redes de Computadores I
aula: 1
tipo: pratica
semana: 1
date: 2026-07-27
tags: [redes1, 2026-2, plano-de-ensino, cronograma, contrato]
---

<div class="au-leitura" data-aula="s01">

# 🟢 Aula 01 — Plano de Ensino e Organização da Disciplina

**Disciplina:** 49304 — Redes de Computadores I · Sistemas de Informação — Uniube
**Professor:** Romualdo Mathias Filho
**Semana:** 1 · Semana de **27/07/2026**
**Carga horária:** 42 horas-aula — **30 presenciais** e **12 não presenciais** (AVA Uniube On-line). No plano de ensino, **as 30 h/a presenciais são integralmente classificadas como prática**: não existe encontro teórico separado. A teoria é a parte não presencial, no AVA.

> [!NOTE] 📋 Esta aula é a exceção do semestre
> Se o componente é todo prático, por que a primeira aula é conversa? Porque contrato não se pratica: nota, prazo e regra precisam ser ditos uma vez, com todo mundo junto, antes de qualquer laboratório existir. **Esta é a única aula do semestre em que a sala não vai construir nada.** Da próxima em diante, o encontro presencial é mão na massa e a exposição migra para o AVA — é isso que "30 horas de prática" significa na sua agenda.

---

<div class="au-caminho">
<b>Nosso caminho até aqui</b>

Esta é a primeira aula da disciplina, então o "até aqui" não é matéria antiga — é o que você **já usa todo dia sem saber o nome**. Responda de cabeça **antes** de abrir cada resposta. Errar aqui é de graça, e é exatamente o ponto.

<details>
<summary>Você digita um endereço no navegador e a página abre. Quantos computadores diferentes participaram disso?</summary>

**Vários, e nenhum deles é "a internet".** No mínimo: o seu aparelho, o roteador da sua casa, um servidor de **DNS** que traduziu o nome em número, o servidor onde o site está hospedado, e um punhado de roteadores intermediários que ninguém vê.

A ideia que o semestre inteiro vai desenvolver: **rede não é uma coisa, é uma cadeia.** Quando "a internet cai", o que caiu foi um elo específico — e boa parte desta disciplina é aprender a dizer **qual**.

</details>

<details>
<summary>Por que o Wi-Fi fica ruim em um cômodo específico da casa, mesmo com o plano de internet contratado sendo rápido?</summary>

**Porque o problema não está na internet, está no meio físico.** Parede, distância e interferência degradam o sinal entre o seu aparelho e o roteador — um trecho que a operadora nem enxerga.

A ideia: **a rede tem camadas**, e cada uma pode falhar sozinha. A velocidade contratada é de uma camada; a parede é de outra. Confundir as duas é o erro mais comum de quem abre um chamado.

</details>

<details>
<summary>Duas pessoas na mesma casa, no mesmo Wi-Fi. Elas têm o mesmo endereço na internet?</summary>

**Por fora, sim. Por dentro, não.** Dentro de casa cada aparelho tem um endereço **privado**, distribuído pelo roteador. Para o mundo lá fora, todos aparecem com um único endereço **público**, o da sua conexão.

A ideia: existe endereço de dois tipos e uma tradução entre eles. Isso tem nome, tem regra e tem conta a fazer — é o assunto que mais cai em prova nesta disciplina, a partir da semana 7.

</details>
</div>

> [!INFO] 🎯 Visão geral e recursos
> Esta página é o **plano de ensino** da disciplina: a ementa, os objetivos, o conteúdo das 20 semanas, como a nota é composta, o que fazer se você ficar abaixo da média, e as regras da nossa sala. Guarde o link — é a referência de consulta do semestre inteiro.
>
> **O que você leva desta aula**
> - O que Redes I cobre e **por que ela é pré-requisito de tudo** que vem depois.
> - O mapa das 20 semanas, com as datas das provas e os feriados.
> - Onde cada um dos **100 pontos** é ganho, com que instrumento.
> - Como funcionam **segunda chamada e recuperação** — prazos, requisitos e o teto de 60.
>
> **📂 Recursos**
> - [Cisco Packet Tracer + conta NetAcad](https://www.netacad.com/) — grátis e obrigatório a partir da semana 10. Crie a conta com calma, não na véspera.
> - [Wireshark](https://www.wireshark.org/download.html) — analisador de tráfego, grátis
> - AVA Uniube On-line — as **12 h não presenciais**: vídeos, materiais e as atividades do Uniube+

### ⏱️ Como os minutos desta aula são gastos

O plano de ensino conta **30 horas-aula presenciais**. Hora-aula não é hora de relógio: a 50 minutos cada, distribuídas em 20 semanas, o encontro semanal fica em torno de **75 minutos**. É esse o tamanho que a tabela abaixo orça.

| Min | Bloco | Onde está nesta página |
| :-- | :--- | :--- |
| 0–4 | Entrada, chamada, projetor | — |
| 4–13 | **Nosso caminho até aqui** — as três perguntas do cotidiano | bloco de abertura |
| 13–30 | **A disciplina** — ementa, objetivos e o conteúdo do semestre | Tópico 1 |
| 30–33 | Pausa procedural — comparar anotações com o colega | — |
| 33–45 | **O calendário** — semanas, provas e feriados | Tópico 2 |
| 45–58 | **Nota e recuperação** — os 100 pontos e as duas segundas chances | Tópico 3 |
| 58–66 | **Regras de sala** — propostas e votação | Slot interativo |
| 66–70 | Reflexão + exit ticket | Fechamento |
| **70–75** | **Folga** — dúvida longa, sala trocada, problema de matrícula | — |

> ⚠️ **O que ainda não está confirmado é o dia da semana e a sala** — e, com eles, a duração exata do encontro, que depende de como o Horário de Aulas agrupa as horas-aula. Assim que sair, atualizo esta página. Se o encontro for maior que 75 min, a folga cresce; nenhum bloco acima encolhe.

<aside class="au-antes">
<b class="au-nota-t">Antes de começar</b>

Cinco termos que vão decidir a sua nota e que quase ninguém lê a tempo:

**Uniube+** — as atividades do AVA que valem **15 pontos** no semestre (5 na N1, 10 na N2). São os pontos mais baratos do ano e fecham cedo.

**SAE** — a *Solicitação de Atendimento ao Estudante*, o formulário do AVA por onde se pede qualquer coisa formal à instituição. É o canal oficial: pedido feito fora dele não existe, e é por ele que se pede a segunda chamada.

**Segunda chamada (substitutiva)** — a segunda chance de quem **faltou** à prova. Pede-se pelo **SAE, em até 3 dias úteis**.

**Recuperação** — a segunda chance de quem **fez** as provas e fechou entre **40 e 59** pontos. Não se pede: o direito nasce da nota.

**Sala de aula invertida** — parte do conteúdo é estudada **antes** do encontro, no AVA; o tempo presencial fica para problema, dúvida e laboratório. É o que as 12 h não presenciais significam na prática.

</aside>

---

## 📌 1. A disciplina: o que Redes I cobre [Exposição dialogada ⏳ 17 min + 3 de pausa]

### 1.1 Ementa

A disciplina aborda conceitos básicos de redes de computadores, os modelos de referência **OSI** e **TCP/IP** e as bases do endereçamento **IP**. Inclui construção e gerenciamento de cenários de rede no **Cisco Packet Tracer**, configuração de **roteamento estático** e comandos em roteadores Cisco. Também contempla serviços **DNS** e **Web**, redes **P2P**, redes sem fio e mobilidade, além da conexão com provedores de serviços de Internet (**ISP**).

### 1.2 Objetivo geral

Reconhecer a organização hierárquica das principais arquiteturas de redes de computadores, **OSI e TCP/IP**, bem como os aspectos ligados aos seus protocolos.

### 1.3 O que você deve saber fazer no fim do semestre

- Identificar a organização hierárquica das arquiteturas OSI e TCP/IP.
- Identificar protocolos de acesso ao meio e o ambiente mais adequado à aplicação de cada um.
- Identificar padrões empregados nos níveis físico e de enlace em redes locais.
- Empregar adequadamente os diversos equipamentos utilizados para a interconexão e a expansão de redes.
- Aplicar conceitos de transporte, policiamento e endereçamento TCP/IP em diferentes tipos de redes, com destaque para a Internet.
- Relacionar aspectos básicos de segurança e gerenciamento em redes de computadores.

### 1.4 O conteúdo, em quatro movimentos

<figure class="au-fig">
<svg viewBox="0 0 700 210" role="img" aria-label="Arco do semestre de Redes I em quatro blocos: fundamentos nas semanas 1 a 4, enderecamento nas semanas 5 a 8, prova N1 na semana 9, pratica e roteamento nas semanas 10 a 13, servicos e conectividade nas semanas 14 a 18, e prova N2 na semana 19">
<rect x="14" y="18" width="150" height="72" rx="6" fill="none" stroke="#2778c4" stroke-width="2"></rect>
<text x="89" y="39" text-anchor="middle" font-size="12" fill="#2778c4" font-family="monospace" font-weight="bold">BLOCO 1 · S01–S04</text>
<text x="89" y="56" text-anchor="middle" font-size="10" fill="#8a8f98" font-family="monospace">como a rede funciona</text>
<text x="89" y="70" text-anchor="middle" font-size="10" fill="#8a8f98" font-family="monospace">topologias · meios</text>
<text x="89" y="83" text-anchor="middle" font-size="10" fill="#8a8f98" font-family="monospace">física · enlace · OSI</text>
<line x1="164" y1="54" x2="178" y2="54" stroke="#8a8f98" stroke-width="2"></line>
<rect x="178" y="18" width="150" height="72" rx="6" fill="none" stroke="#2778c4" stroke-width="2"></rect>
<text x="253" y="39" text-anchor="middle" font-size="12" fill="#2778c4" font-family="monospace" font-weight="bold">BLOCO 2 · S05–S08</text>
<text x="253" y="56" text-anchor="middle" font-size="10" fill="#8a8f98" font-family="monospace">quem é quem na rede</text>
<text x="253" y="70" text-anchor="middle" font-size="10" fill="#8a8f98" font-family="monospace">IPv4 · classes · CIDR</text>
<text x="253" y="83" text-anchor="middle" font-size="10" fill="#8a8f98" font-family="monospace">sub-redes · VLSM</text>
<line x1="328" y1="54" x2="342" y2="54" stroke="#8a8f98" stroke-width="2"></line>
<rect x="342" y="32" width="74" height="44" rx="6" fill="none" stroke="#b1541b" stroke-width="2.5"></rect>
<text x="379" y="51" text-anchor="middle" font-size="11" fill="#b1541b" font-family="monospace" font-weight="bold">PROVA N1</text>
<text x="379" y="67" text-anchor="middle" font-size="11" fill="#b1541b" font-family="monospace">S09</text>
<line x1="416" y1="54" x2="430" y2="54" stroke="#8a8f98" stroke-width="2"></line>
<rect x="430" y="18" width="150" height="72" rx="6" fill="none" stroke="#2778c4" stroke-width="2"></rect>
<text x="505" y="39" text-anchor="middle" font-size="12" fill="#2778c4" font-family="monospace" font-weight="bold">BLOCO 3 · S10–S13</text>
<text x="505" y="56" text-anchor="middle" font-size="10" fill="#8a8f98" font-family="monospace">construir e conectar</text>
<text x="505" y="70" text-anchor="middle" font-size="10" fill="#8a8f98" font-family="monospace">Packet Tracer · gateway</text>
<text x="505" y="83" text-anchor="middle" font-size="10" fill="#8a8f98" font-family="monospace">rotas estáticas · CLI</text>
<line x1="505" y1="90" x2="505" y2="122" stroke="#00aa9f" stroke-width="2" stroke-dasharray="4 3"></line>
<rect x="392" y="122" width="226" height="66" rx="6" fill="none" stroke="#00aa9f" stroke-width="2"></rect>
<text x="505" y="143" text-anchor="middle" font-size="12" fill="#00aa9f" font-family="monospace" font-weight="bold">BLOCO 4 · S14–S18</text>
<text x="505" y="160" text-anchor="middle" font-size="10" fill="#8a8f98" font-family="monospace">serviços e mundo real</text>
<text x="505" y="174" text-anchor="middle" font-size="10" fill="#8a8f98" font-family="monospace">DNS · HTTP · ISP · Wi-Fi · P2P</text>
<rect x="626" y="122" width="60" height="66" rx="6" fill="none" stroke="#b1541b" stroke-width="2.5"></rect>
<text x="656" y="148" text-anchor="middle" font-size="11" fill="#b1541b" font-family="monospace" font-weight="bold">PROVA</text>
<text x="656" y="164" text-anchor="middle" font-size="11" fill="#b1541b" font-family="monospace">N2</text>
<text x="656" y="180" text-anchor="middle" font-size="10" fill="#8a8f98" font-family="monospace">S19</text>
</svg>
<figcaption class="au-legenda">Azul é conteúdo, laranja é dia de nota, verde é aplicação. A ordem não é arbitrária: você só consegue construir uma rede no simulador (Bloco 3) depois de saber endereçá-la (Bloco 2), e só endereça depois de entender por onde o sinal passa (Bloco 1).</figcaption>
</figure>

A granularidade — o que cai em qual semana — está na tabela do Tópico 2. O plano de ensino lista **onze** tópicos programáticos; abaixo eles aparecem agrupados em sete unidades didáticas, que é como o semestre é efetivamente conduzido. O agrupamento é meu; o conteúdo é o oficial, sem acréscimo nem corte.

<details>
<summary>📄 Conteúdo programático — os 11 tópicos oficiais, agrupados em 7 unidades</summary>

**Unidade 1 — Fundamentos:** conceitos básicos de redes; componentes, tipos e conexões de rede; fundamentos de endereçamento IP e roteamento.

**Unidade 2 — Arquiteturas:** modelos de referência OSI e TCP/IP; protocolos de cada camada; formas de endereçamento das redes e de seus componentes.

**Unidade 3 — Endereçamento:** classes de endereçamento IPv4; redes privadas e públicas; CIDR e prefixos de rede; funcionamento da Internet — IP e DNS.

**Unidade 4 — Simulação:** introdução ao Cisco Packet Tracer; cenário simples com dois hosts e um switch; cenário com duas redes interligadas por roteador e gateway padrão.

**Unidade 5 — Roteamento:** conceitos básicos; configuração de redes com múltiplos roteadores; rotas estáticas em redes com diferentes prefixos; comandos de configuração em roteadores Cisco (CLI).

**Unidade 6 — Serviços:** servidores DNS; servidores Web (HTTP/HTTPS); inserção de serviços em cenários de rede.

**Unidade 7 — Conectividade:** clientes e servidores; dispositivos de rede; redes P2P; redes sem fio (802.11) e mobilidade; opções de conectividade com ISP.

</details>

### 1.5 Como as aulas funcionam

As aulas presenciais são **expositivas e dialogadas**, com metodologias ativas que colocam você como protagonista: estudos de caso, trabalhos práticos em laboratório, seminários, projetos e dinâmicas, apoiados pelo **Cisco Packet Tracer**.

A parte não presencial acontece no **AVA Uniube On-line** — estudos autônomos, vídeos e atividades orientadas, em modelo de **sala de aula invertida** e resolução de problemas. São 12 das 42 horas: não é material extra, é parte da carga.

> [!TIP] 💡 Por que esta disciplina é a base de tudo
> Redes I é pré-requisito direto de **Redes II**, onde você vai segmentar redes em VLANs, rotear dinamicamente e escrever política de acesso. O que ficar mal resolvido aqui — principalmente **máscara de sub-rede e gateway** — reaparece lá multiplicado por dez. Não é ameaça: é o motivo de o Bloco 2 ter quatro semanas para um assunto que parece caber em uma.

---

## 📌 2. O calendário de 2026-2 [Exposição dialogada ⏳ 12 min]

| S | Semana de | Conteúdo |
|:-:|:--|:--|
| **01** | 27/07 | Plano de ensino, contrato e introdução às redes |
| **02** | 03/08 | Conceitos básicos: componentes, tipos e conexões de rede |
| **03** | 10/08 | Topologias e meios de transmissão |
| **04** | 17/08 | Camada física e de enlace · Ethernet |
| **05** | 24/08 | Modelos OSI e TCP/IP — a jornada do pacote |
| **06** | 31/08 | Protocolos de cada camada · 🚫 feriado 31/08 |
| **07** | 07/09 | Endereçamento IPv4: classes, público × privado, CIDR · 🚫 feriado 07/09 |
| **08** | 14/09 | Sub-redes e VLSM · **revisão para a N1** |
| **09** | 21/09 | 🎯 **PROVA N1** — dia exato dentro da janela **21 a 30/09** |
| **10** | 28/09 | **Vista da N1** (só depois de aplicada) + introdução ao Cisco Packet Tracer |
| **11** | 05/10 | Packet Tracer: dois hosts e um switch; duas redes com roteador e gateway |
| **12** | 12/10 | Roteamento IP e gateway padrão · 🚫 feriados 12 e 13/10 |
| **13** | 19/10 | Rotas estáticas em múltiplas redes · CLI Cisco |
| **14** | 26/10 | Serviços de rede: DNS |
| **15** | 02/11 | Servidores Web (HTTP/HTTPS) e inserção de serviços · 🚫 feriado 02/11 |
| **16** | 09/11 | Conectividade com ISP · endereçamento público e privado |
| **17** | 16/11 | Redes sem fio (802.11) e mobilidade · 🚫 feriado 20/11 |
| **18** | 23/11 | Redes P2P, clientes e servidores · noções de segurança · **projeto final** |
| **19** | 30/11 | 🎯 **PROVA N2** — dia exato dentro da janela **1º a 11/12** |
| **20** | 07/12 | **Vista da N2** e encerramento |

🚫 **Feriados do semestre, com o dia da semana:** 31/08 (segunda) · 07/09 (segunda) · 12/10 (segunda) · 13/10 (terça) · 02/11 (segunda) · **20/11 (sexta)**.

Repare que **cinco dos seis caem em segunda ou terça** — e o sexto, 20/11, numa sexta. Quantos deles a nossa turma perde depende inteiramente do dia em que a aula cair; por isso o calendário acima marca a **semana** atingida, e não "a aula está cancelada". Assim que o Horário de Aulas sair, esta tabela ganha as datas exatas e o número de encontros perdidos.

**Depois da S20:** segunda chamada de **14 a 16/12** · recuperação **entre 17 e 18/12** · lançamento das notas da N2 até **18/12** · encerramento do semestre em **19/12**. As notas da N1 são lançadas até **12/10**.

> [!WARNING] ⚠️ O que ainda depende de confirmação
> O **dia da semana e a sala** de cada encontro seguem o Horário de Aulas emitido pela secretaria — **atualizo esta página assim que sair, e aviso no AVA.** As **datas de prova** (janelas de 21–30/09 e 1º–11/12) e a **distribuição dos 100 pontos** não mudam.
>
> Há sábados de reposição no calendário acadêmico (29/08, 12/09, 03/10, 24/10, 07/11), mas **qual dia da semana cada um repõe ainda não está confirmado.**
>
> A tabela marca a **semana** de cada prova; o **dia exato** sai junto com o Horário de Aulas e cai dentro das janelas institucionais acima. Anuncio com pelo menos duas semanas de antecedência.
>
> Uma consequência disso: a janela da N1 vai até **30/09**, que já é a S10. Se a prova cair no fim da janela, a **vista da N1 escorrega para a S11** — vista nunca acontece antes da prova. A ordem é fixa mesmo quando a data desliza.

> [!TIP] 💡 Como usar este calendário a seu favor
> As duas semanas mais perigosas do semestre são a **S07** e a **S08**: endereçamento IPv4 e sub-redes caem logo antes da prova, e a S07 ainda perde um dia de feriado. Se você for tropeçar em alguma coisa, vai ser ali — e é o assunto de maior peso na N1. Chegue nessas duas semanas com as anteriores em dia.

---

## 📌 3. Nota e recuperação [Exposição dialogada ⏳ 13 min]

### 3.1 Onde estão os 100 pontos

Antes de eu mostrar a tabela, um problema. **Escreva o número no papel** — a tabela logo abaixo é a resposta, e ela vale mais se você tiver apostado primeiro.

> **Carlos e Diego acertaram exatamente as mesmas questões.** Nas duas provas do semestre, os dois fizeram 40 dos 55 pontos possíveis. Na Avaliação Institucional, 8 de 15 cada um. A única diferença: Carlos entregou todas as atividades e todo o Uniube+; Diego não entregou nada disso.
>
> **Um passa com folga e o outro reprova. Quantos pontos separam os dois?**

<details class="au-aposta">
<summary>Apostou? Agora confira — a resposta está na tabela abaixo, e o número é maior do que quase todo mundo chuta</summary>

**Trinta pontos.**

- Carlos: 40 (provas) + 8 (institucional) + 15 (atividades) + 15 (Uniube+) = **78**
- Diego: 40 (provas) + 8 (institucional) + 0 + 0 = **48**

Diego **acertou exatamente as mesmas questões** que Carlos e fica abaixo dos 60. Pior: os 48 pontos o colocam na faixa da recuperação, mas ele pode **nem ter direito a ela** — um dos requisitos é não estar com o Uniube+/AVA zerado.

**A lição:** 30 dos 100 pontos não dependem de você acertar prova nenhuma. Dependem só de você entregar. É o trecho mais barato do semestre e o mais abandonado.

</details>

Aprovação: **≥ 60 pontos** e **frequência ≥ 75%**.

| Etapa | Total | Prova | Atividades (laboratório/PBL) | Uniube+ |
| :--- | :-: | :-: | :-: | :-: |
| **N1** | **35** | 25 | 5 | 5 |
| **N2** | **50** | 30 | 10 | 10 |
| **Avaliação Institucional** | **15** | 15 | — | — |
| **Total** | **100** | **70** | **15** | **15** |

As avaliações podem ser aplicadas de forma escrita, prática em laboratório, estudos de caso e projetos, conforme os objetivos de aprendizagem do componente.

**A Avaliação Institucional (15 pts)** não é minha: é uma prova aplicada pela universidade, comum a todos os componentes, com data definida pela instituição. Ela entra direto na sua nota final desta disciplina. **A data ainda não foi divulgada** — quando sair, anuncio no AVA e atualizo esta página.

> [!WARNING] ⚠️ Os 15 pontos de atividade ainda não estão detalhados
> A distribuição acima é oficial e não muda. **Quais** atividades de laboratório e PBL valem os 5 pontos da N1 e os 10 da N2 — quantas, em que semanas, com que critério — eu ainda estou fechando, e publico aqui até a **S03**. Nenhuma atividade valendo ponto será cobrada sem estar anunciada nesta página com pelo menos duas semanas de antecedência.

### 3.2 Se você ficar abaixo: as duas segundas chances

São mecanismos diferentes, com regras diferentes — e o prazo de um deles é de **três dias**.

| | **Segunda chamada (substitutiva)** | **Recuperação** |
| :--- | :--- | :--- |
| Para quem | Quem **faltou** à prova | Quem **fez** e ficou entre **40 e 59** pontos |
| Como solicitar | **SAE no AVA, em até 3 dias úteis** da prova perdida, com justificativa | Não se solicita: o direito nasce da nota |
| Data | **14 a 16/12** | Depois da segunda chamada — divulgo no AVA |
| Como a nota entra | Substitui a nota daquela prova | **Zera** as notas das duas provas e entra no lugar delas |
| Teto | Nenhum | **A nota final não passa de 60** |

**Os três requisitos da recuperação — valem juntos:** ter feito **todas** as provas do semestre; estar entre **40 e 59** pontos; e **não** estar com as notas de AVA/Uniube+ zeradas. Faltando um, não há recuperação.

> [!WARNING] ⚠️ O prazo de 3 dias úteis é o que mais reprova gente
> Faltou à prova? **Abra o SAE no AVA em até 3 dias úteis.** Passou disso, o curso indefere — o prazo não é meu, é institucional.
>
> **Não me entregue atestado**, nem em papel nem por e-mail: eu não posso recebê-lo. O atestado é anexado ao SAE e quem analisa é a coordenação. Entregar o documento na mão é a maneira mais comum de perder o prazo achando que resolveu.

> [!NOTE] 📐 Como a recuperação recompõe a nota
> A recuperação **troca, não soma.** Ela vale o total das duas provas e substitui as notas delas, que são zeradas. Quem foi **bem nas provas e mal nas atividades** não se beneficia — jogaria fora justamente a parte boa. E, como o teto é 60, ninguém sai da recuperação com mais do que o mínimo de aprovação.

---

## 🗳️ Slot interativo — as regras de sala [Discussão e votação ⏳ 8 min]

Regra que o professor decreta, o aluno obedece. Regra que a turma escreve, a turma cobra. Entro com quatro propostas; vocês cortam, mudam e acrescentam:

1. **Celular é agendado, não proibido.** Há janelas em que o celular é a ferramenta e janelas de tela para baixo (prova, exercício cronometrado).
2. **Pergunta errada é matéria-prima.** Metade dos exemplos desta disciplina sai de erro real cometido em sala.
3. **Dupla é rotativa no laboratório.** Ninguém passa o semestre com o mesmo par, e ninguém carrega o outro.
4. **Quem chega atrasado entra em silêncio.** A abertura é curta e é a parte que mais rende.

<div class="au-slot">
<div class="au-slot-h"><b>Interativo</b> · votação em sala · 10 min</div>
<div class="au-slot-c">

**Votação dos acordos.** Cada proposta acima vai a voto: **manter, mudar ou cortar** — e fica aberto o campo para **acrescentar** um acordo que ninguém propôs.

Os acordos que passarem da maioria entram na versão final, e **esta página é atualizada** com o texto votado. O contrato não fica no quadro; fica publicado.

A votação é da turma, não minha: eu não desempato.

</div>
<p class="au-slot-b"><b>Plano B:</b> sem internet ou sem projetor, a votação é por <b>mão levantada</b>, proposta a proposta, e o acordo extra vai em meia folha de papel recolhida na saída. Mesmo resultado, mesmos 10 minutos, zero dependência de rede — o que é apropriado para uma aula de redes.</p>
</div>

---

<div class="au-resumo">
<b>Resumo da aula</b>

| Item | O que você precisa lembrar |
| :--- | :--- |
| **Carga horária** | 42 h — 30 presenciais + **12 no AVA** (não é material extra, é carga) |
| **Conteúdo** | Fundamentos → endereçamento IPv4 → Packet Tracer e roteamento → serviços e conectividade |
| **Aprovação** | ≥ 60 pontos **e** ≥ 75% de frequência |
| **Distribuição** | N1 = 35 · N2 = 50 · Institucional = 15 |
| **Provas** | N1 na **S09** (janela 21–30/09) · N2 na **S19** (janela 1º–11/12) |
| **Pontos sem prova** | 15 de atividades + 15 de Uniube+ = **30 pontos** que só dependem de entregar |
| **Segunda chamada** | Faltou → **SAE no AVA em 3 dias úteis**. Aplicação de **14 a 16/12**. Atestado vai no SAE, não comigo |
| **Recuperação** | Nota **40–59** + todas as provas feitas + Uniube+ não zerado. **Zera** as provas e **teto de 60** |
| **Feriados** | 31/08 · 07/09 · 12/10 · 13/10 · 02/11 |
| **Semanas críticas** | S07 e S08 — IPv4 e sub-redes, logo antes da N1 |
| **Ferramenta** | Cisco Packet Tracer + conta NetAcad, a partir da S10 |
| **Fim do semestre** | Notas da N1 até **12/10** · notas da N2 até **18/12** · encerramento **19/12** |

</div>

<div class="au-podcast">
<p><b>🎧 Revisão em áudio</b> — gerada por IA a partir desta página, para ouvir no trajeto. O áudio complementa; a página é a fonte.</p>
<p><i>Disponível em breve.</i></p>
</div>

---

## 🎬 Fechamento — exit ticket

Toda aula termina do mesmo jeito: duas perguntas anônimas, sem nota. O que você responder **abre a aula seguinte** — os pontos mais citados como confusos entram na revisão de abertura.

**Hoje:** *(1)* O que mais te preocupa nesta disciplina? *(2)* Qual foi o ponto mais confuso da aula de hoje?

<div class="au-reflexao">
<b>Para pensar até a próxima aula</b>

<p>Você usa rede o dia inteiro: mensagem, vídeo, mapa, pagamento. Escolha <b>uma</b> dessas coisas que você fez hoje e tente descrever, em três frases, o caminho que a informação percorreu desde o seu aparelho até o outro lado.</p>

<p>Você não vai conseguir — e é esse o ponto. Guarde o que você escreveu. Em dezembro, reescreva as mesmas três frases e compare: a distância entre as duas versões é, literalmente, a disciplina.</p>
</div>

<div class="au-refs">
<b>Referências desta aula</b>

Esta aula é administrativa: o que ela afirma vem de dois documentos, não de livro. Os dois estão localizados abaixo.

- UNIVERSIDADE DE UBERABA. **Avaliações de Segunda Chamada e Recuperação de Aprendizagem — Cursos: Engenharias, Gestão e Tecnologia da Informação, 2026/2.** Campus Uberlândia, 2026. <span class="au-pag">seç. 1 — aprovação (≥ 60 pontos e 75% de frequência); seç. 2 — distribuição dos 100 pontos; seç. 3 — datas travadas do semestre, incluindo os prazos de lançamento (12/10 e 18/12) e o encerramento em 19/12; seç. 4 — segunda chamada, prazo de 3 dias úteis pelo SAE e aplicação de 14 a 16/12; seç. 5 — recuperação, os três requisitos, o zeramento das provas e o teto de 60</span> — **fonte de tudo que está no Tópico 3.**
- UNIVERSIDADE DE UBERABA. **Plano de Ensino — 49304 Redes de Computadores I, curso 160 Sistemas de Informação.** Uberlândia, 2026. <span class="au-pag">p. 1 — quadro de carga horária (presencial: teórica 0, prática 30; não presencial: teórica 12) e ementa; p. 2 — objetivos geral e específicos, metodologia; p. 3 — conteúdo programático, tópicos 1 a 11; p. 4 — quadro de distribuição da pontuação semestral; p. 5 — bibliografias básica e complementar</span> — **fonte de tudo que está no Tópico 1 e da tabela de pontos do Tópico 3.**

Em qualquer divergência entre esta página e esses documentos, **valem os documentos**.

<details>
<summary>📚 Bibliografia oficial do componente (reprodução do plano de ensino)</summary>

Não são as referências desta aula — são as obras do componente, para o semestre inteiro. **A localização precisa (capítulo e página) vai na aula em que cada uma for efetivamente usada**, a partir da S02.

*Básica* — biblioteca virtual da Uniube:

- KUROSE, J. F.; ROSS, K. W. **Redes de computadores e a internet: uma abordagem top-down.** 8. ed. São Paulo: Pearson, 2021.
- LACERDA, P. S. P.; SOARES, J. A.; LENZ, M. L. et al. **Projeto de Redes de Computadores.** Porto Alegre: Sagah, 2021.
- TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. **Redes de Computadores.** 6. ed. São Paulo: Pearson, 2021.

*Complementar:*

- MAITINO NETO, R. et al. **Sistemas operacionais de redes abertas.** Porto Alegre: Sagah, 2020.
- ROHLING, L. J. **Segurança de redes de computadores.** Curitiba: Contentus, 2020.
- SUSE LLC E COLABORADORES. **SUSE Linux Enterprise Desktop 15 SP6: guia de administração.** Luxemburgo: SUSE S.A., 2023.
- TANENBAUM, A. S.; BOS, H. **Sistemas operacionais modernos.** 5. ed. São Paulo: Pearson, 2024.
- TANENBAUM, A. S.; VAN STEEN, M. **Sistemas distribuídos: princípios e paradigmas.** 2. ed. São Paulo: Pearson Prentice Hall, 2007.

</details>

</div>

<div class="au-proxima">
<b>Na próxima aula</b>

<p>Hoje você respondeu que abrir um site envolve vários computadores, sem saber ainda quais. Na próxima, a gente abre essa caixa: <b>quais são as peças de uma rede</b>, o que cada uma decide sozinha — e por que a peça mais barata da sua casa é a que mais derruba a conexão.</p>
</div>

---

*Última atualização: 27/07/2026 · As regras de nota, segunda chamada e recuperação seguem o documento institucional 2026/2; ementa, conteúdo e pontuação seguem o plano de ensino do componente 49304. Dia da semana e sala aguardam o Horário de Aulas — ver o aviso no bloco 2.*

**◀ [Voltar ao índice da disciplina](./)**

</div>
