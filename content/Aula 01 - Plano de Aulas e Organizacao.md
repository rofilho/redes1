---
title: "Aula 01 — Contrato da Disciplina"
disciplina: Redes de Computadores I
codigo: "49304"
aula: 1
tipo: pratica
semana: 1
date: 2026-07-27
anatomia: nao  # contrato conduzido, nao aula com dinamica — decidido com o professor em 28/07
tags: [redes1, 2026-2, contrato, apresentacao]
---

<div class="au-leitura" data-aula="s01">

# 🟢 Aula 01 — Contrato da Disciplina

**Disciplina:** 49304 — Redes de Computadores I · Curso 160, Sistemas de Informação — Uniube<br>
**Professor:** Romualdo Mathias Filho · **romualdo.filho@uniube.br**<br>
**Turma 12:** segunda-feira · 20:45–22:00 · **VIA232** · primeira aula 27/07/2026<br>
**Turma 13:** quarta-feira · 20:45–22:00 · **VIA207** · primeira aula 29/07/2026<br>
**Carga horária:** 42 h/a — 30 presenciais (prática) + 12 no AVA

> [!NOTE] 📄 Esta página é o contrato inteiro
> Tudo o que decide a sua nota, o seu prazo e a sua frequência está **aqui**, e só aqui. Não existe segunda página com a mesma regra escrita de outro jeito. Se você só puder guardar um link do semestre, guarde este.
>
> Ela está organizada na ordem em que a aula acontece — do momento em que você senta até o momento em que sai. Dá para acompanhar em tempo real, e dá para reabrir em novembro procurando uma data.

---

## 🕘 20:45 · Como esta sala funciona

Começo por aqui porque é o que vale a partir de agora, não em novembro.

### As regras, e elas não estão em votação

Estas são minhas. Não são proposta, não vamos votar, e eu não abro exceção individual — abrir para um é desfazer para todos.

| # | A regra | Por quê |
| :-: | :--- | :--- |
| **1** | **Celular e fone de ouvido são proibidos em sala.** Quem precisar usar, sai da sala e volta depois. | Não é moralismo: é que o aparelho aberto derruba o seu rendimento e o de quem senta do lado. Sair não é punição — é a alternativa honesta a fingir que está acompanhando. |
| **2** | **A chamada fecha às 21:00**, quinze minutos depois do início. | Depois disso eu não abro a lista de novo. Frequência é requisito de aprovação junto com a nota, e a régua é a mesma para os 30. |
| **3** | **Quem chega atrasado entra em silêncio.** | Entrar sem interromper custa nada. A abertura é curta e é onde eu digo o que muda na semana. |
| **4** | **Assunto de disciplina não se resolve no corredor.** Nota, avaliação, falta, prazo — nada disso no caminho da sala. | No corredor eu não tenho o diário, não tenho o AVA e não tenho o seu histórico na frente. Qualquer resposta que eu der ali vai ser chute, e chute meu vira problema seu. |
| **5** | **Eu não respondo WhatsApp.** Comunicação é pelo **AVA** ou por **romualdo.filho@uniube.br**. | Os dois canais ficam registrados e eu consigo achar depois. WhatsApp some, e "eu te avisei" sem registro não vale para nenhum de nós. |

### Sobre inteligência artificial: eu incentivo

Vou usar IA com vocês, e em algumas aulas vou entregar os prompts prontos. Não tenho interesse em caçar ninguém.

A linha é uma só, simples de enunciar e fácil de verificar:

> **A IA ajuda. A IA não cria.**

Ela pode explicar, revisar, sugerir caminho, destravar. O que ela **não** pode é ser a autora do que você entrega. O teste que eu aplico é direto: se eu apontar para uma linha da sua entrega e perguntar por que está assim, você precisa saber responder. Não sabendo, aquilo não é seu — e o que não é seu não vale ponto.

---

## 🕘 21:00 · O que é Redes de Computadores I

### Em uma frase

Ao final do semestre você deve conseguir **planejar, configurar e testar** uma rede local ou de médio porte — endereçar, ligar redes distintas por um roteador, colocar serviços no ar e diagnosticar quando não funciona.

Isso é o **perfil do egresso** que o plano de ensino define, não uma promessa minha.

### A disciplina é 100% prática

O plano de ensino distribui as 42 h/a assim:

| | Horas-aula | O que é |
| :--- | :-: | :--- |
| **Presencial — prática** | **30** | Nossos encontros. Note: presencial **teórica é zero** |
| **Não presencial — teórica** | **12** | AVA Uniube On-line. **É carga da disciplina, não material extra** |
| **Total** | **42** | |

Duas consequências que valem dizer em voz alta:

1. **Não existe aula teórica separada.** O que for teoria acontece dentro do encontro prático, ou no AVA antes dele. É a sala de aula invertida que o plano prevê: você chega tendo lido, e o tempo presencial vai para o problema.
2. **As 12 h/a do AVA não são opcionais.** São quase um terço da carga. Quem trata o AVA como extra está deixando 12 h/a de lado — e é lá que mora parte do que decide nota.

### Os 11 blocos de conteúdo

A estrutura abaixo é **oficial**: as unidades e a numeração são do plano de ensino da Uniube, não minhas. A coluna da direita é a **minha** organização — em que semana cada uma cai.

| # | Unidade oficial | Semana |
| :-: | :--- | :-- |
| **1** | Conceitos básicos de redes · componentes, tipos e conexões | S02 · S03 |
| **2** | Os modelos de referência OSI e TCP/IP | S04 · S05 · S06 |
| **3** | Bases do endereçamento IP · classes, público × privado, CIDR, DNS | S07 · S08 |
| **4** | Cenários no Cisco Packet Tracer · dois hosts, duas redes, gateway | S10 · S11 |
| **5** | Roteamento e cenários roteados · rotas estáticas | S12 · S13 |
| **6** | Comandos de configuração em roteadores Cisco | S13 |
| **7** | Servidores DNS e Web em cenários de rede | S14 · S15 |
| **8** | Dispositivos, clientes, servidores e conectividade | S16 · S18 |
| **9** | Redes ponto a ponto (P2P) | S18 |
| **10** | Redes sem fio e mobilidade | S17 |
| **11** | Conexão com provedores de Internet (ISP) | S16 |

**A ferramenta do semestre é o Cisco Packet Tracer**, e ela entra na **S10**, junto com a Unidade 4. Até lá não precisa instalar nada. Quando chegar a hora eu aviso com antecedência — a conta no NetAcad é gratuita.

> [!TIP] 💡 Onde isto costuma doer depois
> **Endereçamento IP e sub-redes (S07 e S08)** é o bloco que mais volta a pesar. Ele é pré-requisito direto de Redes de Computadores II, e quem sai daqui com máscara e gateway mal resolvidos paga de novo no semestre seguinte, multiplicado. Se em algum momento você tiver que escolher onde recuperar atraso, recupere aí.

---

## 🕘 21:20 · O calendário da sua turma

**As duas turmas não têm o mesmo número de encontros.** Isso não é detalhe administrativo — é a informação mais importante desta seção, e você precisa saber em qual coluna está.

| | **Turma 12** · segunda | **Turma 13** · quarta |
| :--- | :--- | :--- |
| Sala | VIA232 | VIA207 |
| Encontros no semestre | **16** | **20** |
| Feriados que caem no seu dia | **4** — 31/08, 07/09, 12/10, 02/11 | **nenhum** |
| Carga presencial efetiva | 24 h/a — **80%** | 30 h/a — 100% |

Existem **cinco sábados letivos de reposição** no calendário da universidade: **29/08 · 12/09 · 03/10 · 24/10 · 07/11**. A Turma 12 perde exatamente quatro encontros e há cinco sábados — mas **eu ainda não confirmei com a secretaria qual sábado repõe qual segunda**, e não vou anunciar data de aula com base em suposição minha. Assim que a secretaria fechar, publico no AVA e atualizo esta página no mesmo dia.

**O que a Turma 12 pode contar desde já:** o conteúdo não vai ser cortado. Se a reposição de sábado não cobrir os quatro encontros, o que encolhe é o aprofundamento de **redes sem fio (S17)** — nessa ordem, e nunca endereçamento, roteamento ou serviços, que são o pré-requisito de Redes II.

### Semana a semana

| S | Turma 12 · seg | Turma 13 · qua | Assunto |
| :-: | :-- | :-- | :--- |
| **01** | 27/07 | 29/07 | Contrato da disciplina |
| **02** | 03/08 | 05/08 | Componentes, tipos e conexões de rede |
| **03** | 10/08 | 12/08 | Topologias e meios de transmissão |
| **04** | 17/08 | 19/08 | Camada física e de enlace · Ethernet |
| **05** | 24/08 | 26/08 | Modelos OSI e TCP/IP |
| **06** | 🚫 31/08 | 02/09 | Protocolos de cada camada |
| **07** | 🚫 07/09 | 09/09 | Endereçamento IPv4 · classes, público × privado, CIDR |
| **08** | 14/09 | 16/09 | Sub-redes e VLSM · revisão para a N1 |
| **09** | 21/09 | 23/09 | 🎯 **PROVA N1** — dentro da janela 21 a 30/09 |
| **10** | 28/09 | 30/09 | Vista da N1 · introdução ao Packet Tracer |
| **11** | 05/10 | 07/10 | Packet Tracer: dois hosts e um switch; duas redes com roteador |
| **12** | 🚫 12/10 | 14/10 | Roteamento IP e gateway padrão |
| **13** | 19/10 | 21/10 | Rotas estáticas · comandos Cisco |
| **14** | 26/10 | 28/10 | Serviços de rede: DNS |
| **15** | 🚫 02/11 | 04/11 | Servidores Web (HTTP/HTTPS) no cenário |
| **16** | 09/11 | 11/11 | Conectividade com ISP · endereçamento público e privado |
| **17** | 16/11 | 18/11 | Redes sem fio (802.11) e mobilidade |
| **18** | 23/11 | 25/11 | P2P, clientes e servidores · noções de segurança |
| **19** | 30/11 | 02/12 | 🎯 **PROVA N2** — dentro da janela 1º a 11/12 |
| **20** | 07/12 | 09/12 | Vista da N2 e encerramento |

🚫 = feriado, sem aula. **Encerramento do semestre letivo: 19/12.**

O **dia exato** de cada prova dentro da janela eu confirmo e publico no AVA com antecedência. A janela é institucional; o dia, dentro dela, é meu.

---

## 🕘 21:35 · Os 100 pontos

A distribuição abaixo é **oficial e não muda** — está no plano de ensino da Uniube, e nem eu nem vocês podemos alterá-la.

| Momento | Vale | Prova | Atividade | Uniube+ |
| :--- | :-: | :-: | :-: | :-: |
| **N1** | **35** | 25 | 5 | 5 |
| **N2** | **50** | 30 | 10 | 10 |
| **Avaliação Institucional** | **15** | 15 | — | — |
| **Total** | **100** | **70** | **15** | **15** |

**Aprovação exige as duas coisas ao mesmo tempo: 60 pontos e 75% de frequência.** Nota alta não compensa falta, e presença não compensa nota.

### O que isso significa na prática

**70 dos 100 pontos são prova.** É a maior parte, e não adianta fingir o contrário. Mas **30 pontos não são prova** — 15 de atividade e 15 de Uniube+ — e esses 30 são os mais baratos do semestre: dependem de entregar, não de acertar sob pressão. Quem chega na prova da N2 já tendo garantido a maior parte deles disputa uma faixa muito mais confortável.

> [!WARNING] ⚠️ O que ainda não está definido — e eu não vou inventar
> - **As atividades que valem os 15 pontos** (5 na N1, 10 na N2): quantas, quais e em que semanas — **ainda não decidi.** Vou definir levando em conta que qualquer coisa valendo ponto tem que cair em semana que as **duas** turmas têm.
> - **O Uniube+** (5 na N1, 10 na N2): formato e prazos são definidos pela coordenação e lançados pelo AVA. Aguardando.
> - **A Avaliação Institucional** (15 pontos): data e formato são da instituição. Aguardando.
>
> Os três serão publicados **no AVA**, e esta página é atualizada no mesmo dia. Enquanto estiver escrito "aguardando" aqui, é porque eu não sei — não porque esqueci de contar.

---

## 🕘 21:50 · Se as coisas derem errado

São dois mecanismos diferentes, para situações diferentes, e as pessoas confundem os dois todo semestre.

| | **Segunda chamada** (substitutiva) | **Recuperação** |
| :--- | :--- | :--- |
| Para quem | Quem **faltou** à prova | Quem **fez** as provas e ficou entre **40 e 59** pontos |
| Como pedir | **SAE no AVA, em até 3 dias úteis** da prova perdida, com justificativa anexada | Não se pede: o direito nasce da nota |
| Data | **14 a 16/12** | Depois de 16/12 — a data é minha, confirmo no AVA junto com o resultado da N2 |
| Como entra na nota | Substitui a nota daquela prova | **Zera** as duas provas e entra no lugar delas |
| Teto | Nenhum | **A nota final não passa de 60** |

### O prazo de 3 dias úteis, que é o que mais reprova por descuido

**Faltou à prova? Abra o SAE no AVA em até 3 dias úteis.** Passou o prazo, o curso indefere — e não é decisão minha, é norma institucional.

E o ponto que sempre pega: **não me entregue atestado.** Nem em papel, nem por e-mail, nem no corredor. Pela norma, o atestado é anexado ao SAE e quem analisa é a coordenação. Documento entregue na minha mão não produz efeito nenhum, e ainda faz você perder o prazo achando que resolveu.

Se você guardar uma única coisa desta aula, que seja esta.

### A recuperação troca, não soma

Os **três requisitos valem juntos**: ter feito todas as provas · estar entre 40 e 59 pontos · não estar com as notas de AVA/Uniube+ zeradas. Quem chega na faixa dos 40–59 com o AVA zerado **não tem direito à recuperação.**

E o mecanismo importa: a recuperação vale o total das provas do semestre — **25 + 30 = 55 pontos** — e **substitui** as notas das provas, que são zeradas. Ela não soma em cima do que você já tinha.

A consequência é contraintuitiva e vale entender agora, não em dezembro: **quem foi bem nas provas e mal na atividade contínua não se beneficia da recuperação** — jogaria fora justamente a parte boa. Ela foi desenhada para quem tem provas fracas e nota contínua de pé. Somado ao teto de 60, ninguém sai da recuperação com mais do que o mínimo de aprovação.

---

## 🕘 22:00 · O que fazer nesta semana

1. **Entre no AVA Uniube On-line** e localize a disciplina. É lá que sai tudo o que esta página marca como "aguardando".
2. **Anote a data da sua turma** — segunda ou quarta — e confira quantos encontros ela tem.
3. **Não instale nada ainda.** O Packet Tracer entra na S10 e eu aviso com antecedência.

<div class="au-resumo">
<b>Resumo — o que consultar depois</b>

| Item | O que lembrar |
| :--- | :--- |
| **Aprovação** | ≥ 60 pontos **e** ≥ 75% de frequência — as duas juntas |
| **Distribuição** | N1 35 · N2 50 · Institucional 15 — **30 pontos não são prova** |
| **Provas** | N1 na janela **21–30/09** · N2 na janela **1º–11/12** · dia exato no AVA |
| **Faltou à prova** | **SAE no AVA em 3 dias úteis.** Atestado vai no SAE, **não** comigo |
| **Segunda chamada** | 14 a 16/12 |
| **Recuperação** | 40–59 pts + todas as provas feitas + AVA não zerado · **zera as provas** · teto 60 |
| **Turma 12** · segunda | VIA232 · **16 encontros** · perde 31/08, 07/09, 12/10, 02/11 |
| **Turma 13** · quarta | VIA207 · **20 encontros** · não perde nenhum |
| **Ferramenta** | Cisco Packet Tracer, a partir da **S10** |
| **Celular** | Proibido em sala. Precisa usar, sai da sala |
| **Chamada** | Fecha às **21:00** |
| **Falar comigo** | AVA ou **romualdo.filho@uniube.br**. Não é WhatsApp e não é corredor |
| **IA** | Incentivada. **Ajuda, não cria** — você tem que saber explicar o que entregou |
| **Encerramento do semestre** | 19/12 |

</div>

<div class="au-refs">
<b>De onde vem o que eu disse hoje</b>

Esta aula é administrativa: quase nada dela sai de livro. Vale você saber o que é documento oficial e o que sou eu falando.

**Documento, e você pode pedir para ver:**

- UNIVERSIDADE DE UBERABA. **Plano de Ensino — 49304 Redes de Computadores I, curso 160 Sistemas de Informação.** Uniube, 2026. <span class="au-pag">p. 1 — carga horária, ementa e perfil do egresso; p. 3 — conteúdo programático nas 11 unidades; p. 4 — distribuição da pontuação semestral</span> — é dele que saem a carga, os 11 blocos de conteúdo e os 100 pontos.

**Norma da coordenação, que vale acima do meu plano:**

As regras de **aprovação, segunda chamada e recuperação** são as definidas pela coordenação para os cursos de Engenharias, Gestão e Tecnologia da Informação do **Campus Uberlândia** neste semestre. Não são minhas e eu não posso alterá-las. Trago para cá porque decidem nota e prazo, e porque ninguém lê norma por conta própria em julho. **O texto que vale é o publicado no AVA.**

**As bibliografias do componente**, todas na biblioteca virtual da Uniube:

- KUROSE, J. F. **Redes de computadores e a internet: uma abordagem top-down.** 8. ed. São Paulo: Pearson, 2021.
- TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. **Redes de Computadores.** 6. ed. São Paulo: Pearson, 2021.
- LACERDA, P. S. P. *et al.* **Projeto de Redes de Computadores.** Porto Alegre: Sagah, 2021.

**Eu falando:** a distribuição do conteúdo pelas 20 semanas, a ordem em que os assuntos entram, a escolha de qual conteúdo encolhe se o semestre apertar, e as regras de sala. Isso é decisão minha, e eu assumo.

**Divergiu do AVA? Vale o AVA — e me avise, no início da aula ou pelo AVA, que eu corrijo esta página no mesmo dia.**

</div>

<div class="au-proxima">
<b>Na próxima aula</b>

<p>Hoje foi contrato. Na próxima o conteúdo começa: <b>quais são as peças de uma rede</b> e o que cada uma decide sozinha. Você usa todas elas todo dia sem saber o nome de nenhuma — e é por isso que, quando a conexão cai, quase ninguém sabe por onde começar a olhar.</p>
</div>

---

*Última atualização: 28/07/2026 · Carga, ementa, conteúdo programático e distribuição da pontuação seguem o plano de ensino do componente 49304. Regras de aprovação, segunda chamada e recuperação são as da coordenação para 2026/2 — o texto oficial está no AVA. As atividades da N1 e da N2, o Uniube+, a Avaliação Institucional e o mapeamento dos sábados de reposição ainda não estão definidos, e estão marcados como tal ao longo da página.*

**◀ [Voltar ao índice da disciplina](./)**

</div>
