---
title: "Aula 01 — Apresentação e Contrato da Disciplina"
disciplina: Redes de Computadores I
aula: 1
tipo: pratica
semana: 1
date: 2026-07-27
tags: [redes1, 2026-2, contrato, apresentacao]
---

<div class="au-leitura" data-aula="s01">

# 🟢 Aula 01 — Apresentação e Contrato da Disciplina

**Disciplina:** 49304 — Redes de Computadores I · Sistemas de Informação — Uniube
**Professor:** Romualdo Mathias Filho
**Semana:** 1 · Semana de **27/07/2026**
**Documento de referência:** [Plano de Ensino e Contrato](./Plano-de-Ensino-e-Contrato) — é lá que mora tudo o que esta aula apresenta.

> [!NOTE] 📋 Esta aula é a exceção do semestre
> O plano de ensino classifica as 30 h/a presenciais como **prática** — não existe encontro teórico separado. Se o componente é todo prático, por que a primeira aula é conversa? Porque contrato não se pratica: nota, prazo e regra precisam ser ditos uma vez, com todo mundo junto, antes de qualquer laboratório existir. **Esta é a única aula do semestre em que a sala não vai construir nada.** O conteúdo de redes começa na Aula 02.

---

<div class="au-caminho">
<b>Nosso caminho até aqui</b>

Esta é a primeira aula, então o "até aqui" não é matéria — é a sua experiência com qualquer disciplina que você já cursou, mais uma amostra do que vem por aí. Responda de cabeça **antes** de abrir cada resposta. Errar aqui é de graça.

<details>
<summary>De 100 pontos numa disciplina da Uniube, quantos você acha que dá para garantir sem acertar uma única questão de prova?</summary>

**Trinta.** 15 pontos de atividades (laboratório/PBL) + 15 do Uniube+ dependem só de **entregar**, não de acertar. A conta completa está no [plano da disciplina](./Plano-de-Ensino-e-Contrato).

</details>

<details>
<summary>Você faltou a uma prova com atestado médico. Entregar o atestado ao professor resolve?</summary>

**Não.** Pela norma institucional, o caminho é abrir um **SAE no AVA em até 3 dias úteis**, com o atestado anexado. Quem analisa é a coordenação; o professor não pode nem receber o documento. Passou o prazo, indefere.

</details>

<details>
<summary>Por que o Wi-Fi fica ruim em um cômodo específico da casa, mesmo com o plano de internet contratado sendo rápido?</summary>

**Porque o problema não está na internet, está no meio físico.** Parede, distância e interferência degradam o sinal entre o seu aparelho e o roteador — um trecho que a operadora nem enxerga.

A ideia: **a rede tem camadas**, e cada uma pode falhar sozinha. A velocidade contratada é de uma camada; a parede é de outra. É esta pergunta que a **Aula 02** começa a responder — hoje é só a aposta.

</details>
</div>

> [!INFO] 🎯 Visão geral e recursos
> Hoje a gente percorre o **contrato do semestre** e fecha os acordos da sala. O documento completo — ementa, calendário das 20 semanas, nota, recuperação, bibliografia — é a página [Plano de Ensino e Contrato](./Plano-de-Ensino-e-Contrato): esta aula apresenta, aquela página guarda.
>
> **O que você leva desta aula**
> - Onde os **100 pontos** são ganhos — e os 30 que não dependem de prova.
> - As datas que travam o semestre: provas, segunda chamada, recuperação.
> - O prazo de **3 dias úteis** do SAE para a segunda chamada.
> - As **regras de sala**, votadas — não decretadas.
>
> **📂 Recursos**
> - [Plano de Ensino e Contrato](./Plano-de-Ensino-e-Contrato) — a referência do semestre
> - [Cisco Packet Tracer + conta NetAcad](https://www.netacad.com/) — grátis; obrigatório a partir da S10. Crie a conta com calma, não na véspera.
> - [Wireshark](https://www.wireshark.org/download.html) — analisador de tráfego, grátis; usado nas aulas de captura
> - AVA Uniube On-line — as **12 h não presenciais** e as atividades do Uniube+

### ⏱️ Como os minutos desta aula são gastos

O plano de ensino conta **30 horas-aula presenciais**. Hora-aula não é hora de relógio: a 50 minutos cada, distribuídas em 20 semanas, o encontro semanal fica em torno de **75 minutos**. É esse o tamanho que a tabela abaixo orça.

| Min | Bloco | Onde está |
| :-- | :--- | :--- |
| 0–5 | Entrada, chamada, apresentações | — |
| 5–14 | **Nosso caminho até aqui** — as três perguntas sobre como o jogo funciona | bloco de abertura |
| 14–30 | **A disciplina em 15 minutos** — o que Redes I cobre e o mapa do semestre | Tópico 1 |
| 30–33 | Pausa procedural — comparar anotações com o colega | — |
| 33–48 | **Nota, prazos e segundas chances** — os 100 pontos, SAE, recuperação | Tópico 2 |
| 48–58 | **Regras de sala** — propostas e votação | Slot interativo |
| 58–66 | Dúvidas abertas sobre o contrato | — |
| 66–70 | Reflexão + exit ticket | Fechamento |
| **70–75** | **Folga** — dúvida longa, sala trocada, problema de matrícula | — |

> ⚠️ **O que ainda não está confirmado é o dia da semana e a sala** — e, com eles, a duração exata do encontro. Assim que o Horário de Aulas sair, atualizo o [plano da disciplina](./Plano-de-Ensino-e-Contrato) e aviso no AVA. Se o encontro for maior que 75 min, a folga cresce; nenhum bloco acima encolhe.

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

## 📌 1. A disciplina em 15 minutos [Exposição dialogada ⏳ 16 min + 3 de pausa]

Não vou ler o plano de ensino em voz alta — ele está publicado, íntegro, no [Plano de Ensino e Contrato](./Plano-de-Ensino-e-Contrato). O que cabe aqui é o **mapa**: o que a disciplina cobre, em que ordem, e por quê.

### 1.1 O semestre em quatro movimentos

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
<figcaption class="au-legenda">Azul é conteúdo, laranja é dia de nota, verde é aplicação. A ordem não é arbitrária: você só constrói uma rede no simulador (Bloco 3) depois de saber endereçá-la (Bloco 2), e só endereça depois de entender por onde o sinal passa (Bloco 1). Semana a semana → <a href="./Plano-de-Ensino-e-Contrato">Plano de Ensino e Contrato</a>.</figcaption>
</figure>

### 1.2 O que fica combinado hoje

- **Carga:** 42 h/a — 30 presenciais (prática) + 12 no AVA. O AVA não é material extra, é carga.
- **Calendário:** 20 semanas, N1 na **S09** (janela 21–30/09), N2 na **S19** (janela 1º–11/12), seis feriados no caminho. A tabela completa está no plano.
- **Ferramentas:** Packet Tracer + conta NetAcad a partir da S10; Wireshark nas aulas de captura.
- **As duas semanas mais perigosas:** S07 e S08 — endereçamento IPv4 e sub-redes, logo antes da N1.

> [!TIP] 💡 Por que esta disciplina é a base de tudo
> Redes I é pré-requisito direto de **Redes II**, onde você vai segmentar redes em VLANs, rotear dinamicamente e escrever política de acesso. O que ficar mal resolvido aqui — principalmente **máscara de sub-rede e gateway** — reaparece lá multiplicado por dez.

---

## 📌 2. Nota, prazos e segundas chances [Exposição dialogada ⏳ 15 min]

Antes da lista, uma aposta. **Escreva o número no papel** antes de abrir a resposta — ela vale mais se você tiver se comprometido primeiro.

> **O semestre tem seis feriados. Quantos deles caem numa segunda ou terça-feira?**

<details class="au-aposta">
<summary>Apostou? Agora confira — e pense no que isso significa para quem tem aula nesses dias</summary>

**Cinco dos seis** — 31/08, 07/09, 12/10, 13/10 e 02/11 caem em segunda ou terça; só o 20/11 cai numa sexta.

O que isso significa: se a nossa aula cair numa segunda, a turma perde **até quatro encontros**; se cair numa quarta ou quinta, perde **zero**. O mesmo calendário, experiências completamente diferentes — e é por isso que o [plano da disciplina](./Plano-de-Ensino-e-Contrato) marca a *semana* atingida, não "aula cancelada". Quando o Horário de Aulas sair, a conta fecha.

</details>

A regra completa — tabelas, requisitos, datas — está no [Tópico 3 do plano](./Plano-de-Ensino-e-Contrato). Aqui vai o que decide aprovação, na ordem em que costuma pegar as pessoas:

1. **Aprovação = ≥ 60 pontos E ≥ 75% de frequência.** As duas juntas; nota alta não compensa falta.
2. **Os 100 pontos:** N1 = 35 (25 prova + 5 atividades + 5 Uniube+) · N2 = 50 (30 + 10 + 10) · Institucional = 15. **70 pontos são prova; 30 são entrega.**
3. **Faltou à prova?** SAE no AVA em **até 3 dias úteis**, atestado anexado no SAE — **não na minha mão**. Segunda chamada de 14 a 16/12.
4. **Ficou entre 40 e 59?** Recuperação — se todas as provas foram feitas e o Uniube+ não está zerado. Ela **zera as provas** e a nota final **trava em 60**.
5. **Datas que não mudam:** notas da N1 até 12/10 · notas da N2 até 18/12 · encerramento 19/12.

> [!WARNING] ⚠️ O prazo de 3 dias úteis é institucional
> Não é regra minha, é institucional — e o curso indefere fora do prazo. Se você guardar uma única coisa desta aula, que seja esta: **atestado vai no SAE, em 3 dias úteis.**

---

## 🗳️ Slot interativo — as regras de sala [Discussão e votação ⏳ 10 min]

Regra que o professor decreta, o aluno obedece. Regra que a turma escreve, a turma cobra. Entro com quatro propostas; vocês cortam, mudam e acrescentam:

1. **Celular é agendado, não proibido.** Há janelas em que o celular é a ferramenta e janelas de tela para baixo (prova, exercício cronometrado).
2. **Pergunta errada é matéria-prima.** Metade dos exemplos desta disciplina sai de erro real cometido em sala.
3. **Dupla é rotativa no laboratório.** Ninguém passa o semestre com o mesmo par, e ninguém carrega o outro.
4. **Quem chega atrasado entra em silêncio.** A abertura é curta e é a parte que mais rende.

<div class="au-slot">
<div class="au-slot-h"><b>Interativo</b> · votação em sala · 10 min</div>
<div class="au-slot-c">

**Votação dos acordos.** Cada proposta acima vai a voto: **manter, mudar ou cortar** — e fica aberto o campo para **acrescentar** um acordo que ninguém propôs.

Os acordos que passarem da maioria entram na versão final, e o **[Plano de Ensino e Contrato](./Plano-de-Ensino-e-Contrato) é atualizado** com o texto votado. O contrato não fica no quadro; fica publicado.

A votação é da turma, não minha: eu não desempato.

</div>
<p class="au-slot-b"><b>Plano B:</b> sem internet ou sem projetor, a votação é por <b>mão levantada</b>, proposta a proposta, e o acordo extra vai em meia folha de papel recolhida na saída. Mesmo resultado, mesmos 10 minutos, zero dependência de rede — o que é apropriado para uma aula de redes.</p>
</div>

---

<div class="au-resumo">
<b>Resumo da aula</b>

| Item | O que você precisa lembrar |
| :--- | :--- |
| **Referência do semestre** | [Plano de Ensino e Contrato](./Plano-de-Ensino-e-Contrato) — guarde o link |
| **Carga horária** | 42 h/a — 30 presenciais (prática) + **12 no AVA** (é carga, não extra) |
| **Aprovação** | ≥ 60 pontos **e** ≥ 75% de frequência |
| **Distribuição** | N1 = 35 · N2 = 50 · Institucional = 15 — **30 pontos só dependem de entregar** |
| **Provas** | N1 na **S09** (janela 21–30/09) · N2 na **S19** (janela 1º–11/12) |
| **Segunda chamada** | Faltou → **SAE no AVA em 3 dias úteis**. Atestado vai no SAE, não comigo |
| **Recuperação** | Nota 40–59 + todas as provas feitas + Uniube+ não zerado. **Zera** as provas, **teto 60** |
| **Ferramenta** | Cisco Packet Tracer + conta NetAcad, a partir da S10 |
| **Regras de sala** | Votadas hoje — o texto aprovado vai para o plano publicado |
| **Conteúdo de redes** | Começa na **Aula 02** |

</div>

<div class="au-podcast">
<p><b>🎧 Revisão em áudio</b> — gerada por IA a partir desta página, para ouvir no trajeto. O áudio complementa; a página é a fonte.</p>
<p><i>Disponível em breve.</i></p>
</div>

---

## 🎬 Fechamento — exit ticket

Toda aula termina do mesmo jeito: duas perguntas anônimas, sem nota. O que você responder **abre a aula seguinte** — os pontos mais citados como confusos entram na revisão de abertura.

**Hoje:** *(1)* O que mais te preocupa nesta disciplina? *(2)* Qual regra do contrato ficou menos clara?

<div class="au-reflexao">
<b>Para pensar até a próxima aula</b>

<p>Você usa rede o dia inteiro: mensagem, vídeo, mapa, pagamento. Escolha <b>uma</b> dessas coisas que você fez hoje e tente descrever, em três frases, o caminho que a informação percorreu desde o seu aparelho até o outro lado.</p>

<p>Você não vai conseguir — e é esse o ponto. Guarde o que você escreveu. Em dezembro, reescreva as mesmas três frases e compare: a distância entre as duas versões é, literalmente, a disciplina.</p>
</div>

<div class="au-refs">
<b>Referências desta aula</b>

Esta aula é administrativa: o que ela afirma vem de dois documentos, não de livro.

- UNIVERSIDADE DE UBERABA. **Avaliações de Segunda Chamada e Recuperação de Aprendizagem — Cursos: Engenharias, Gestão e Tecnologia da Informação, 2026/2.** Campus Uberlândia, 2026. <span class="au-pag">seç. 1 — aprovação; seç. 4 — segunda chamada, prazo de 3 dias úteis pelo SAE e aplicação de 14 a 16/12; seç. 5 — recuperação, os três requisitos, o zeramento das provas e o teto de 60</span> — **fonte do Tópico 2.**
- UNIVERSIDADE DE UBERABA. **Plano de Ensino — 49304 Redes de Computadores I, curso 160 Sistemas de Informação.** Uberlândia, 2026. <span class="au-pag">p. 1 — quadro de carga horária e ementa; p. 3 — conteúdo programático; p. 4 — quadro de distribuição da pontuação semestral</span> — **fonte do Tópico 1 e da distribuição de pontos.**

Em qualquer divergência entre esta página e esses documentos, **valem os documentos**. A reprodução íntegra dos dois — ementa, objetivos, calendário completo e bibliografia — está no [Plano de Ensino e Contrato](./Plano-de-Ensino-e-Contrato).

</div>

<div class="au-proxima">
<b>Na próxima aula</b>

<p>Hoje foi contrato; na <b>Aula 02</b> o conteúdo começa: <b>quais são as peças de uma rede</b>, o que cada uma decide sozinha — e por que a peça mais barata da sua casa é a que mais derruba a conexão. Antes dela, faça a reflexão acima e ative seu acesso ao AVA.</p>
</div>

---

*Última atualização: 27/07/2026 · Regras de nota, segunda chamada e recuperação seguem o documento institucional 2026/2; carga e pontuação seguem o plano de ensino do componente 49304. Dia da semana e sala aguardam o Horário de Aulas — ver o aviso no orçamento de minutos.*

**◀ [Voltar ao índice da disciplina](./)**

</div>
