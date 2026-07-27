---
disciplina: Redes de Computadores I
codigo: "49325"
aula: 8
titulo: "Protocolos de Aplicação (HTTP e FTP) e Simulação"
tipo: teorico-pratica
semana: 8
data: 2026-05-14
status: publicado
tags:
  - redes
  - aplicacao
  - http
  - ftp
  - packet-tracer
publicar: true
---

# 🌐 Aula 08: Protocolos de Aplicação (HTTP e FTP) e Simulação de Rede
> [!WARNING] ⚠️ Material de referência — confira a semana no calendário
> Esta página vem de uma oferta anterior da disciplina e continua no ar porque o conteúdo serve para estudo. **A numeração dela pode não corresponder à semana do calendário de 2026-2** — o calendário que vale é o do [Plano de Ensino e Contrato](./Plano-de-Ensino-e-Contrato). Se ela pedir uma ferramenta antes da semana em que o plano a introduz, siga o plano.

**Disciplina:** Redes de Computadores I (Cód. 49325)<br>
**Curso:** Sistemas de Informação — Uniube<br>
**Semana:** 8<br>
**Professor:** Romualdo Mathias Filho<br>
**Tipo:** 🔄 Teórico-Prática<br>
**Tópicos:** Camada de Aplicação, HTTP, FTP, Pacotes de Rede, Cabecalho IP, Simulação no Packet Tracer.

---

> 💬 *"A internet é feita de cabos, luz e sinais de rádio, mas os usuários enxergam páginas web e arquivos. A mágica da tradução acontece na Camada de Aplicação."*

---

## 🎯 Objetivo da Aula

Ao final desta aula, os alunos serão capazes de:
- **Explicar** a estrutura fundamental de um pacote IP (Cabeçalho e Payload) e o que cada campo representa.
- **Entender** o papel da Camada de Aplicação no topo das pilhas TCP/IP e OSI.
- **Diferenciar** e compreender o funcionamento dos protocolos HTTP e FTP em um modelo Cliente-Servidor.
- **Configurar** e testar simulações de servidores HTTP e FTP utilizando o Packet Tracer.
- **Compreender** na prática, dentro de Máquinas Virtuais (Hyper-V), os fundamentos de um servidor Web básico.

---

## 🔄 Revisão Rápida (5 min)

| **Conceito (Aula Anterior)** | **Conexão com hoje** |
| --- | --- |
| **Camada de Transporte (TCP/UDP)** | Vimos como as portas 80 (HTTP) e 21 (FTP) dividem o tráfego usando TCP para entregar pacotes de forma confiável. |
| **IP e Roteamento** | O IP entrega ao servidor certo. O TCP garante que não falte nada. A Aplicação (hoje) processa e mostra o conteúdo para o usuário. |
| **Three-Way Handshake** | Antes do usuário ver a página Web (HTTP), os computadores realizam o Handshake (SYN, SYN-ACK, ACK). Hoje focaremos no que acontece *depois* do Handshake. |

---

## 📌 1. A Estrutura de um Pacote IP

Antes de entender como as páginas trafegam na rede, precisamos revisitar o nível abaixo. Quando um arquivo viaja pela rede, ele é dividido em pequenos blocos de dados.

Um **Pacote de Rede (Datagrama IP)** possui três partes principais:
1. **Cabeçalho (Header):** É o "envelope" que contém instruções de roteamento, IP de Origem, IP de Destino e metadados.
2. **Dados (Payload):** O "conteúdo da carta". No nosso caso hoje, o HTML da página web ou o arquivo do FTP.
3. **Trailer:** Código de verificação para checar se o arquivo não sofreu corrupções no caminho de cabos de rede e roteadores.

### Dissecando o Cabeçalho IP

- **Endereços de Origem e Destino:** Os endereços IP de quem envia e quem recebe.
- **Protocolo:** Indica o que vem na Camada de Transporte logo acima (06 = TCP, 17 = UDP).
- **Tempo de Vida (TTL - Time to Live):** Um limitador que diminui em `1` a cada roteador passado. Quando chega a zero, o pacote é "destruído", impedindo pacotes fantasma de ficarem eternamente rodando na rede por conta de loops infinitos.
- **Comprimento Total e Flags de Fragmentação:** Informam o tamanho do envelope e ajudam a reordenar as peças do quebra-cabeça quando o pacote teve de ser quebrado em partes menores por limites das placas de rede.

---

## 📌 2. Camada de Aplicação (Onde os usuários vivem)

A **Camada de Aplicação** é o elo direto entre a rede e os softwares que nós usamos. É aqui que moram os protocolos mais "famosos" do mundo.

**Modelo Cliente-Servidor:**
Quase todos os protocolos da camada de aplicação usam esse formato. Um **Cliente** (ex: Seu navegador Chrome no celular) solicita dados. O **Servidor** (ex: Os datacenters do Google, ou da Uniube) armazena os recursos e envia a resposta.

---

## 📌 3. Protocolo HTTP e Protocolo FTP

### 🌍 HTTP (Hypertext Transfer Protocol)
- **O que faz:** Transfere as páginas Web em formato HTML, bem como imagens, vídeos e scripts da página.
- **Porta:** 80 (ou 443 para HTTPS, seguro).
- **Como funciona:** O cliente manda requisições via "métodos". O `GET` busca uma página. O `POST` envia dados do usuário de volta ao servidor (ex: clicar no botão "Entrar" com sua senha). O servidor processa e responde com o site.

### 📁 FTP (File Transfer Protocol)
- **O que faz:** Sistema projetado exclusivamente para a gestão de grandes arquivos (download e upload).
- **Portas:** Usa duas portas. A porta 21 serve só para *Controle* (enviar comandos, senhas, etc.). A porta 20 serve só para os *Dados* brutos, acelerando transferências pesadas.
- **Como funciona:** Você loga no servidor e emite comandos como `PUT` para jogar um arquivo lá dentro, ou `GET` para puxar um arquivo do servidor.

---

## 🔧 4. Mão na Massa: Simulação de Rede com HTTP e FTP

Nossa prática de hoje será estruturar um ambiente controlado. Primeiro vamos usar o **Packet Tracer** e depois falaremos sobre o Hyper-V.

### Etapa 1: Ambiente no Packet Tracer

1. Coloque um **Switch Central**.
2. Conecte dois **PCs** e um **Server (Servidor Genérico)** ao Switch.
3. Atribua IPs fixos a todos eles.
   - Server: `192.168.0.10` / Máscara: `255.255.255.0`
   - PC 1: `192.168.0.20`
4. Vá aos "Services" do Servidor:
   - **HTTP:** Clique em "On". Edite o `index.html` e insira um texto: `<h1>Bem Vindo ao Servidor Uniube!</h1>`.
   - **FTP:** Clique em "On". Crie um usuário `admin` e senha `1234` com as permissões completas (Write, Read, Delete, Rename, List).

✅ **Checkpoint:** Vá ao *Desktop* do PC 1, abra o **Web Browser**, digite `192.168.0.10` e pressione "Go". A página criada deve aparecer na sua tela!

### Etapa 2: Acessando o FTP

1. Ainda no PC 1, abra o **Command Prompt** (Terminal).
2. Digite: `ftp 192.168.0.10`
3. O servidor vai perguntar o username. Digite `admin`. Depois a senha `1234`.
4. Digite `dir` e aperte enter. Você vai ver a listagem crua de todos os arquivos do servidor.
5. Digite `quit` para sair.

✅ **Checkpoint:** O comando `dir` executado dentro do servidor confirma o sucesso absoluto da configuração do FTP.

---

## 📋 Resumo Estrutural

| **Conceito** | **Definição em Uma Frase** |
| --- | --- |
| **TTL (Time to Live)** | Campo do Pacote IP que mata o pacote se ele se perder para evitar congestionamento perpétuo. |
| **Camada de Aplicação** | Fornece serviços de rede diretamente às aplicações de software. |
| **Modelo Cliente-Servidor** | O computador do usuário (cliente) pede e o computador central (servidor) obedece. |
| **HTTP (Porta 80)** | O idioma universal dos navegadores web para puxar conteúdo. |
| **FTP (Porta 20/21)** | Ferramenta pura de transferência massiva de arquivos usando portas separadas para arquivos e ordens. |

---


## 📝 Exercício Avaliativo

### 📌 Entrega: Arquivo `.pkt` (Packet Tracer)

Prazo: Até o final da aula no AVA / Moodle.

Realize as seguintes tarefas no simulador e salve o seu arquivo `.pkt` com o seu nome:

1. **Topologia:** Crie a rede Cliente-Servidor vista em sala com os IPs da família `192.168.10.X`.
2. **Serviços HTTP:** Personalize o `index.html` colocando seu Nome e Registro de Aluno com um `<p>Redes 1 - Aula 8</p>`. Tire um print da sua tela testando via Web Browser e insira em um documento word/pdf anexado.
3. **Serviços FTP:** Acesse o serviço FTP e mova um arquivo da sua máquina virtual do cliente simulado para a máquina Servidora.

Critérios de avaliação:
- Sucesso do ping.
- Nome visível no HTML.
- Login FTP criado.

---

## 📄 Artigo de Aprofundamento

- [O que é FTP e HTTP? — Cloudflare (PT-BR)](https://www.cloudflare.com/pt-br/learning/network-layer/what-is-ftp/)
> *Resumo prático: Documentação rápida e acessível que explora as diferenças cruciais na construção da internet usando os protocolos de transferência FTP e o padrão HTTP, trazendo um foco mercadológico forte.*

---

## 📚 Referências Bibliográficas

- KUROSE, J. F.; ROSS, K. W. *Redes de Computadores e a Internet*. 8. ed. Pearson, 2021. **(Capítulo 2: Camada de Aplicação)**.
- TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. *Redes de Computadores*. 6. ed. Pearson, 2021. **(Capítulo 7: Camada de Aplicação)**.

---
*Última atualização: 2026-05-11 | Status: rascunho*
