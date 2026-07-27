---
title: "Plano de Ensino e Contrato — Redes de Computadores I"
disciplina: Redes de Computadores I
tipo: referencia
anatomia: nao
date: 2026-07-27
tags: [redes1, 2026-2, plano-de-ensino, cronograma, contrato]
---

<div class="au-leitura" data-aula="plano">

# 📘 Plano de Ensino e Contrato — Redes de Computadores I

**Disciplina:** 49304 — Redes de Computadores I · Sistemas de Informação — Uniube
**Professor:** Romualdo Mathias Filho
**Semestre:** 2026-2
**Carga horária:** 42 horas-aula — **30 presenciais** e **12 não presenciais** (AVA Uniube On-line). No plano de ensino, **as 30 h/a presenciais são integralmente classificadas como prática**: não existe encontro teórico separado. A teoria é a parte não presencial, no AVA.

> [!INFO] 🎯 O que esta página é
> Esta é a **página de referência do semestre**, não uma aula. Ementa, objetivos, conteúdo das 20 semanas, composição da nota, segunda chamada, recuperação, ferramentas, regras de sala e bibliografia — tudo mora aqui.
>
> Ela é apresentada na [Aula 01](./Aula-01---Plano-de-Aulas-e-Organizacao) e depois fica de consulta. **Guarde o link:** é para cá que você volta em outubro, quando a dúvida for de prazo e não de matéria. Sempre que algo pendente for confirmado, é esta página que muda.

---

## 📌 1. A disciplina: o que Redes I cobre

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
> O que se aprende aqui é a base usada nas disciplinas de redes seguintes. O que ficar mal resolvido — principalmente **máscara de sub-rede e gateway** — volta a pesar depois, multiplicado. Não é ameaça: é o motivo de o Bloco 2 ter quatro semanas para um assunto que parece caber em uma.

---

## 📌 2. O calendário de 2026-2

| S | Semana de | Conteúdo |
|:-:|:--|:--|
| **01** | 27/07 | Plano de ensino e contrato |
| **02** | 03/08 | Introdução às redes: componentes, tipos e conexões |
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

**Depois da S20:** segunda chamada de **14 a 16/12** · recuperação em **17 ou 18/12** (confirmo a data no AVA junto com o resultado da N2) · lançamento das notas da N2 até **18/12** · encerramento do semestre em **19/12**. As notas da N1 são lançadas até **12/10**.

> [!WARNING] ⚠️ Dia, sala e datas exatas de prova saem no AVA
> O **dia da semana e a sala** seguem o Horário de Aulas da secretaria — atualizo esta página assim que sair, e aviso no AVA. O **dia exato de cada prova** é anunciado com pelo menos **duas semanas de antecedência**, dentro das janelas acima. O que **não muda**: as janelas de prova e a distribuição dos 100 pontos.

> [!TIP] 💡 Como usar este calendário a seu favor
> As duas semanas mais perigosas do semestre são a **S07** e a **S08**: endereçamento IPv4 e sub-redes caem logo antes da prova, e a S07 ainda perde um dia de feriado. Se você for tropeçar em alguma coisa, vai ser ali — e é o assunto de maior peso na N1. Chegue nessas duas semanas com as anteriores em dia.

---

## 📌 3. Nota e recuperação

### 3.1 Onde estão os 100 pontos

Aprovação: **≥ 60 pontos** e **frequência ≥ 75%**.

| Etapa | Total | Prova | Atividades (laboratório/PBL) | Uniube+ |
| :--- | :-: | :-: | :-: | :-: |
| **N1** | **35** | 25 | 5 | 5 |
| **N2** | **50** | 30 | 10 | 10 |
| **Avaliação Institucional** | **15** | 15 | — | — |
| **Total** | **100** | **70** | **15** | **15** |

As avaliações podem ser aplicadas de forma escrita, prática em laboratório, estudos de caso e projetos, conforme os objetivos de aprendizagem do componente.

**A Avaliação Institucional (15 pts)** não é minha: é uma prova aplicada pela universidade, comum a todos os componentes, com data definida pela instituição. Ela entra direto na sua nota final desta disciplina. **A data ainda não foi divulgada** — quando sair, anuncio no AVA e atualizo esta página.

> [!IMPORTANT] 🎯 Trinta pontos não dependem de prova
> Faça a conta na tabela: **15 pontos de atividades + 15 do Uniube+ = 30 dos 100 pontos** que dependem de **entregar**, não de acertar. Quem acerta 40 pontos de prova e entrega tudo fecha com 70; quem acerta os mesmos 40 e não entrega nada fecha com 40 — na faixa da recuperação, mas sem direito a ela, porque um dos requisitos é não estar com o Uniube+/AVA zerado.

> [!WARNING] ⚠️ Os 15 pontos de atividade ainda não estão detalhados
> A distribuição acima é oficial e não muda. **Quais** atividades de laboratório e PBL valem os 5 pontos da N1 e os 10 da N2 — quantas, em que semanas, com que critério — eu ainda estou fechando, e publico aqui até a **S03**. Nenhuma atividade valendo ponto será cobrada sem estar anunciada nesta página com pelo menos duas semanas de antecedência.

### 3.2 Se você ficar abaixo: as duas segundas chances

São mecanismos diferentes, com regras diferentes — e o prazo de um deles é de **três dias**.

| | **Segunda chamada (substitutiva)** | **Recuperação** |
| :--- | :--- | :--- |
| Para quem | Quem **faltou** à prova | Quem **fez** e ficou entre **40 e 59** pontos |
| Como solicitar | **SAE no AVA, em até 3 dias úteis** da prova perdida, com justificativa | Não se solicita: o direito nasce da nota |
| Data | **14 a 16/12** | **17 ou 18/12** — confirmo no AVA junto com o resultado da N2 |
| Como a nota entra | Substitui a nota daquela prova | **Zera** as notas das duas provas e entra no lugar delas |
| Teto | Nenhum | **A nota final não passa de 60** |

**Os três requisitos da recuperação — valem juntos:** ter feito **todas** as provas do semestre; estar entre **40 e 59** pontos; e **não** estar com as notas de AVA/Uniube+ zeradas. Faltando um, não há recuperação.

> [!WARNING] ⚠️ O prazo de 3 dias úteis é institucional
> Faltou à prova? **Abra o SAE no AVA em até 3 dias úteis.** Passado o prazo, o curso indefere — o prazo não é meu, é da norma institucional.
>
> **Não me entregue atestado**, nem em papel nem por e-mail: pela norma, o atestado é anexado ao SAE e quem analisa é a coordenação. Documento entregue na mão não conta como pedido.

> [!NOTE] 📐 Como a recuperação recompõe a nota
> A recuperação **troca, não soma.** Ela vale o total das duas provas — **25 + 30 = 55 pontos** — e substitui as notas delas, que são zeradas. Os 15 da Avaliação Institucional não entram nessa troca. Quem foi **bem nas provas e mal nas atividades** não se beneficia — jogaria fora justamente a parte boa. E, como o teto é 60, ninguém sai da recuperação com mais do que o mínimo de aprovação.

---

## 📌 4. Ferramentas e vocabulário

### 4.1 O que você precisa instalar

| Ferramenta | Quando | Como |
| :--- | :--- | :--- |
| **Cisco Packet Tracer** + conta **NetAcad** | obrigatório a partir da **S10** | [netacad.com](https://www.netacad.com/) — grátis. Crie a conta com calma, não na véspera |
| **Wireshark** | analisador de tráfego, aulas de captura | [wireshark.org](https://www.wireshark.org/download.html) — grátis |
| **AVA Uniube On-line** | semana 1 até o fim | as **12 h não presenciais**: vídeos, materiais e as atividades do Uniube+ |

### 4.2 Cinco termos que decidem a sua nota

**Uniube+** — rubrica institucional que vale **15 pontos** no semestre (5 na N1, 10 na N2), lançada pelo AVA. Quais atividades a compõem e os prazos são definidos pela coordenação e ainda não foram divulgados — publico aqui assim que confirmar.

**SAE** — a solicitação formal aberta pelo aluno no AVA. É por ele que se pede a segunda chamada, em até 3 dias úteis da prova perdida, com o atestado anexado.

**Segunda chamada (substitutiva)** — a segunda chance de quem **faltou** à prova. Pede-se pelo **SAE, em até 3 dias úteis**.

**Recuperação** — a segunda chance de quem **fez** as provas e fechou entre **40 e 59** pontos. Os requisitos estão no Tópico 3; data, horário e a forma de acesso eu confirmo com a coordenação e publico no AVA.

**Sala de aula invertida** — parte do conteúdo é estudada **antes** do encontro, no AVA; o tempo presencial fica para problema, dúvida e laboratório. É o que as 12 h não presenciais significam na prática.

---

## 📌 5. As regras da nossa sala

Regra que o professor decreta, o aluno obedece. Regra que a turma escreve, a turma cobra. Estas quatro entraram como **proposta** na Aula 01 e foram a voto — manter, mudar ou cortar —, com espaço para a turma acrescentar as suas:

1. **Celular é agendado, não proibido.** Há janelas em que o celular é a ferramenta e janelas de tela para baixo (prova, exercício cronometrado).
2. **Pergunta errada é matéria-prima.** Metade dos exemplos desta disciplina sai de erro real cometido em sala.
3. **Dupla é rotativa no laboratório.** Ninguém passa o semestre com o mesmo par, e ninguém carrega o outro.
4. **Quem chega atrasado entra em silêncio.** A abertura é curta e é a parte que mais rende.

> [!NOTE] 🗳️ Status da votação
> **Aguardando a votação da Aula 01.** Assim que a turma votar, esta seção é substituída pelo texto aprovado — com os cortes, as mudanças e os acordos acrescentados. O contrato não fica no quadro; fica publicado aqui.

---

<div class="au-refs">
<b>De onde vem cada coisa desta página</b>

Esta é uma página administrativa, e você tem o direito de saber o que aqui é documento e o que sou eu organizando o semestre para vocês.

**1. Documento oficial, e você pode pedir para ver** — é a base do Tópico 1 e da tabela de pontos:

- UNIVERSIDADE DE UBERABA. **Plano de Ensino — 49304 Redes de Computadores I, curso 160 Sistemas de Informação.** Uberlândia, 2026. <span class="au-pag">p. 1 — carga horária (presencial: teórica 0, prática 30; não presencial: teórica 12) e ementa; p. 2 — objetivos e metodologia; p. 3 — conteúdo programático, tópicos 1 a 11; p. 4 — distribuição da pontuação semestral; p. 5 — bibliografias</span>

**2. Eu explicando a norma da casa** — todo o Tópico 3. As regras de aprovação, segunda chamada e recuperação são as que a coordenação definiu para Engenharias, Gestão e Tecnologia da Informação em 2026/2. Elas não são minhas e eu não posso mudá-las; trago para cá porque decidem nota e prazo, e porque norma não se lê sozinha. **O texto que vale é o publicado no AVA.**

**3. Eu organizando o semestre** — o Tópico 2. As datas travadas (janelas de prova, feriados, lançamento de notas, encerramento) não são minhas: são do calendário da universidade, e o AVA é onde elas ficam publicadas. **Qual assunto cai em qual semana é decisão minha**, e pode mudar se o semestre atrasar — quando mudar, eu aviso aqui e no AVA. Dia da semana e sala dependem do Horário de Aulas, que ainda não saiu.

> **Achou divergência entre esta página e o AVA? Vale o AVA — e me avise, no início da aula ou pelo AVA, que eu corrijo aqui no mesmo dia.** Perguntar não custa nada e evita perder prazo por causa de um erro meu.

<details>
<summary>📚 Bibliografia do componente (referências normalizadas)</summary>

São as obras do componente, para o semestre inteiro. **A localização precisa (capítulo e página) vai na aula em que cada uma for efetivamente usada**, a partir da S02.

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

---

*Última atualização: 27/07/2026 · Regras de nota, segunda chamada e recuperação são as da coordenação para 2026/2 — o texto oficial está no AVA. Ementa, conteúdo e pontuação seguem o plano de ensino do componente 49304. Dia da semana e sala aguardam o Horário de Aulas.*

**◀ [Voltar ao índice da disciplina](./)**

</div>
