---
title: "Trabalho Final de Redes 1: A Romuutech abre uma filial"
publicar: true
anatomia: nao
tags: [redes, {{PERIODO}}, trabalho-final, packet-tracer, dhcp, dns]
---

# 🌐 Trabalho Final de Redes 1: A Romuutech abre uma filial

**Disciplina:** {{CODIGO}} · Redes de Computadores I · Uniube<br>
**Professor:** Romualdo Mathias Filho · **romualdo.filho@uniube.br**<br>
**Período:** {{PERIODO}}

## Em 30 segundos

| Item | Resumo |
|---|---|
| **O que é** | Três partes: perguntas de teoria, uma rede com DHCP, DNS e servidor web no Packet Tracer, e um servidor DHCP e DNS de verdade numa máquina virtual com Ubuntu Server, com os comandos prontos. |
| **Vale** | 20 pontos, todos pelo que o grupo entrega. A prova vale outros 20. |
| **Grupo** | Até **3 pessoas**, todas da **mesma turma** (segunda ou quarta). |
| **Entrega** | No **AVA**, em **Estudos Autônomos**, até **sábado, 28/11, às 23h59**. Um integrante envia pelo grupo. Não há apresentação: a nota sai só do que foi enviado. |
| **O que enviar** | 2 arquivos: o `.pkt` da Parte 2 e um PDF com as respostas da Parte 1 e os prints das Partes 2 e 3. Os nomes estão na Etapa 7 da seção 6. |

---

## 1. A história

A **Romuutech** cresceu. Já tem matriz, tem um prédio só para os servidores e agora vai abrir uma **filial**. Até hoje, cada funcionário novo recebia um papelzinho com o endereço IP escrito à mão. Na última contagem, três pessoas tinham o mesmo papelzinho, e a impressora atendia a todas, menos à pessoa certa.

O diretor quer três coisas:

- que **ninguém mais digite IP na mão**: a máquina liga e recebe o endereço sozinha;
- que o site interno abra por **nome**, `www.romuutech.com`, porque ninguém decora `10.algumacoisa`;
- que a equipe de TI monte um **servidor DHCP de verdade**, numa máquina virtual, antes de comprar servidor físico. Comprar antes de testar é o que a Romuutech fez com o papelzinho.

O seu grupo foi contratado para as três. O professor publica no AVA a lista dos grupos, cada um com um número `G`, sem repetir entre a turma de segunda e a de quarta. O grupo usa o seu `G` nos endereços, então a rede de um grupo não serve para outro.

---

## 2. Parte 1: Base teórica (5 pontos)

Responda no PDF, **com as palavras do grupo**, em 3 a 6 linhas por pergunta. Resposta copiada da internet ou de IA, sem entendimento, vale zero. Cada pergunta vale 0,5 ponto.

1. Em que camada do modelo TCP/IP trabalham o DHCP e o DNS? E em que camada trabalha o roteador?
2. O DHCP e o DNS usam UDP. Diga as portas de cada um e explique por que UDP, e não TCP, serve bem para eles.
3. Descreva as quatro mensagens do DHCP (Discover, Offer, Request e Ack): quem manda cada uma e para quem.
4. Por que o Discover é enviado em broadcast? O que o cliente ainda não sabe nesse momento?
5. Um roteador não deixa o broadcast passar de uma rede para outra. Então como um PC da filial recebe endereço de um servidor DHCP que está em outra rede? Diga o comando que resolve isso.
6. Um PC aparece com o endereço `169.254.10.7`. O que isso quer dizer e qual é a primeira coisa que você confere?
7. O que o DNS faz? Explique o que acontece entre digitar `www.romuutech.com` no navegador e a página abrir.
8. Para que serve o gateway padrão de um PC? O que acontece se ele estiver errado e o PC tentar falar com outra rede?
9. Numa rota estática como `ip route 172.16.3.0 255.255.255.0 172.16.9.2`, o que significa cada uma das três partes?
10. Qual é a diferença entre os switches virtuais externo, interno e privado do Hyper-V? Por que a Parte 3 manda usar o privado?

---

## 3. Parte 2: DHCP e DNS no Packet Tracer (6 pontos)

### O desenho da rede

```
 [PC-M1] [PC-M2]          [SERVIDOR]            [PC-F1] [PC-F2]
      \   /                    |                     \   /
     [SW-MATRIZ]          [SW-SERVIDORES]           [SW-FILIAL]
         |                     |                        |
     [R-MATRIZ] ─────────── [R-CENTRO] ─────────── [R-FILIAL]
```

- **3 roteadores 2911:** R-MATRIZ, R-CENTRO e R-FILIAL, em linha.
- **3 switches 2960**, um em cada rede local.
- **2 PCs na matriz** e **2 PCs na filial**, todos em **DHCP**.
- **1 servidor (Server-PT)** na rede dos servidores, que faz **DHCP, DNS e web** ao mesmo tempo.

### Os endereços do seu grupo

Troque `G` pelo número do grupo (grupo 7 usa `10.7.1.0`).

| Rede | Endereço | Quem tem endereço fixo |
|---|---|---|
| Matriz | 10.G.1.0/24 | R-MATRIZ `.1` (gateway) |
| Servidores | 10.G.2.0/24 | R-CENTRO `.1` (gateway) · SERVIDOR `.10`, com gateway `10.G.2.1` |
| Filial | 10.G.3.0/24 | R-FILIAL `.1` (gateway) |
| Link R-MATRIZ ↔ R-CENTRO | 10.G.12.0/30 | R-MATRIZ `.1` · R-CENTRO `.2` |
| Link R-CENTRO ↔ R-FILIAL | 10.G.23.0/30 | R-CENTRO `.1` · R-FILIAL `.2` |

### O que a rede precisa fazer

1. **Interfaces:** cada interface dos roteadores com o endereço da tabela e `no shutdown`.
2. **Rotas estáticas:** cada roteador alcança as 3 redes locais. Cada roteador precisa de uma rota para cada rede que **não** está ligada nele.
3. **DHCP no SERVIDOR:** dois pools, um para a matriz e um para a filial, cada um com o gateway certo e o DNS `10.G.2.10`. Os endereços entregues começam em `.100`.
4. **Retransmissão do DHCP:** `ip helper-address 10.G.2.10` na interface de rede local do R-MATRIZ e do R-FILIAL.
5. **DNS no SERVIDOR:** um registro do tipo A, `www.romuutech.com` → `10.G.2.10`.
6. **Web no SERVIDOR:** a página inicial mostra o nome da Romuutech e o número do grupo.

> ⚠️ **Cuidado:** no Server-PT, o DHCP já vem com um pool chamado `serverPool`. Ele entrega endereço da rede do próprio servidor. Ou vocês o ajustam, ou criam os dois pools e conferem que nenhum PC recebeu endereço da rede errada.

### Apoio: o que a Aula 12 não mostrou

A Aula 12 configurou um pool só, na rede do próprio servidor. Aqui o servidor atende duas redes que estão do outro lado dos roteadores.

- **Um pool por rede:** no SERVIDOR, aba **Services** → **DHCP**. Para cada rede, preencham *Pool Name* (por exemplo `MATRIZ`), *Default Gateway* (`10.G.1.1`), *DNS Server* (`10.G.2.10`), *Start IP Address* (`10.G.1.100`), *Subnet Mask* (`255.255.255.0`) e *Maximum Number of Users* (por exemplo `50`). Cliquem em **Add**. Repitam para a filial.
- **Por que o `ip helper-address`:** o Discover sai em broadcast, e o roteador não deixa broadcast passar para outra rede. O `ip helper-address` na interface da rede local faz o roteador pegar esse pedido e mandá-lo direto ao servidor. Sem ele, o PC da filial fica em `169.254`.
- **DNS:** no SERVIDOR, aba **Services** → **DNS**. Liguem o serviço (**On**), escrevam `www.romuutech.com` em *Name*, escolham o tipo **A Record**, ponham `10.G.2.10` em *Address* e cliquem em **Add**.
- **Web:** aba **Services** → **HTTP**, editem o `index.html` com o nome da Romuutech e o número do grupo.

### Os 8 testes da Parte 2 (0,75 cada)

| # | Teste | Tem que dar |
|---|---|---|
| 1 | `ipconfig /all` no PC-M1 | endereço `10.G.1.1xx`, gateway `10.G.1.1`, DNS `10.G.2.10` |
| 2 | `ipconfig /all` no PC-F1 | endereço `10.G.3.1xx`, gateway `10.G.3.1`, DNS `10.G.2.10` |
| 3 | `show ip route` no R-MATRIZ | 2 rotas estáticas (`S`) e 2 redes conectadas (`C`); as linhas `L` não contam |
| 4 | PC-M1 pinga PC-F1 | responde |
| 5 | `tracert 10.G.2.10` no PC-F1 | passa por R-FILIAL e R-CENTRO e chega ao servidor |
| 6 | PC-M1 pinga `www.romuutech.com` | o nome vira `10.G.2.10` e responde |
| 7 | navegador (Web Browser) do PC-F2 abre `http://www.romuutech.com` | aparece a página com o número do grupo |
| 8 | no PC-M2, `ipconfig /release` e depois `ipconfig /renew` | recebe de novo um endereço `10.G.1.1xx` |

---

## 4. Parte 3: DHCP e DNS numa máquina virtual com Ubuntu Server (4 pontos)

Agora o DHCP e o DNS saem do simulador e vão para um sistema de verdade, como na Aula 12. Use um computador com Hyper-V (Aula 09) ou o do laboratório.

### O que montar

- **VM 1, o servidor:** Ubuntu Server, com **IP fixo** `192.168.G.10/24`. Ele faz **DHCP** (`isc-dhcp-server`) e **DNS** (`bind9`).
- **VM 2, o cliente:** Windows, em DHCP.
- **Primeiro, com internet:** as duas VMs no **Default Switch** (Aula 09, seção 6.4), para instalar os pacotes.
- **Depois, isoladas:** um **switch virtual privado**, com as duas VMs nele. Só então o servidor DHCP liga. No privado não há internet, e é de propósito.

> ⚠️ **Cuidado:** um servidor DHCP ligado na rede errada entrega endereço para todo mundo que estiver nela. É assim que se derruba o Wi-Fi de uma casa inteira com uma VM só. Por isso o servidor só liga no switch privado. Nem o externo nem o interno: no interno, o seu próprio computador também receberia endereço da VM.

### Passo a passo, com os comandos

Em todos os arquivos abaixo, **troque `G` pelo número do grupo** (grupo 7: `192.168.7.10`). Cada comando vai numa linha do terminal do Ubuntu.

**Passo 1. Instalar os pacotes (VM ainda no Default Switch, com internet)**

```bash
sudo apt update
sudo apt install -y isc-dhcp-server bind9 bind9-dnsutils
```

Se o `isc-dhcp-server` e o `isc-dhcp-server6` mostrarem erro logo depois de instalar, é normal: eles ainda não têm configuração. No Windows, instale o Wireshark nesta mesma etapa.

**Passo 2. Trocar as duas VMs para o switch privado.** No Hyper-V, abra o *Gerenciador de Comutador Virtual* e crie um switch do tipo **Privado** (Aula 09, seção 6.3). Depois, nas configurações de cada VM, em *Adaptador de rede*, escolha esse switch.

**Passo 3. Descobrir o nome da placa de rede do Ubuntu**

```bash
ip a
```

No Hyper-V a placa costuma se chamar `eth0`. Se o nome for outro, use o seu nos passos 4 e 5.

**Passo 4. IP fixo pelo Netplan.** Veja qual arquivo já existe em `/etc/netplan/` e **edite esse, não crie outro**. Na Aula 12 era `00-installer-config.yaml`; no Ubuntu 24.04 costuma ser `50-cloud-init.yaml`. Com dois arquivos, o Netplan junta os dois e o `dhcp4: true` do antigo continua valendo.

```bash
ls /etc/netplan/
sudo nano /etc/netplan/<o nome que o ls mostrou>.yaml
```

Deixe o conteúdo assim, com os espaços exatamente como estão (o YAML não aceita tab):

```yaml
network:
  version: 2
  ethernets:
    eth0:
      dhcp4: false
      addresses: [192.168.G.10/24]
      nameservers:
        addresses: [127.0.0.1]
```

Aplique e confira:

```bash
sudo chmod 600 /etc/netplan/*.yaml
sudo netplan apply
ip a
```

**Passo 5. Em que placa o DHCP escuta**

```bash
sudo nano /etc/default/isc-dhcp-server
```

Deixe a linha assim:

```
INTERFACESv4="eth0"
```

**Passo 6. A configuração do DHCP**

```bash
sudo mv /etc/dhcp/dhcpd.conf /etc/dhcp/dhcpd.conf.bak
sudo nano /etc/dhcp/dhcpd.conf
```

Conteúdo do arquivo novo:

```
option domain-name "romuutech.com";
option domain-name-servers 192.168.G.10;
default-lease-time 600;
max-lease-time 7200;
authoritative;

subnet 192.168.G.0 netmask 255.255.255.0 {
  range 192.168.G.100 192.168.G.150;
  option routers 192.168.G.1;
}
```

O gateway `192.168.G.1` não precisa existir: no switch privado ninguém sai da rede.

**Passo 7. Ligar o DHCP e conferir**

```bash
sudo systemctl restart isc-dhcp-server
sudo systemctl enable isc-dhcp-server
sudo systemctl status isc-dhcp-server
```

Tem que aparecer `active (running)`. Aperte `q` para sair da tela do status. Não subiu? Leia o motivo com `sudo journalctl -u isc-dhcp-server -n 20`.

**Passo 8. Avisar o DNS de que ele cuida do domínio `romuutech.com`**

```bash
sudo nano /etc/bind/named.conf.local
```

Acrescente no fim:

```
zone "romuutech.com" {
    type master;
    file "/etc/bind/db.romuutech.com";
};
```

**Passo 9. O arquivo da zona, com os nomes e os endereços.** A primeira linha, o SOA, diz quem é o dono do domínio e de quanto em quanto tempo outros servidores DNS devem conferir as mudanças. As outras ligam cada nome a um endereço.

```bash
sudo nano /etc/bind/db.romuutech.com
```

Conteúdo:

```
$TTL 604800
@     IN  SOA  ns1.romuutech.com. admin.romuutech.com. (
               2026111601 ; serial: aumente a cada mudança
               604800     ; refresh
               86400      ; retry
               2419200    ; expire
               604800 )   ; negative cache TTL
@     IN  NS   ns1.romuutech.com.
ns1   IN  A    192.168.G.10
www   IN  A    192.168.G.10
```

Os pontos no fim de `ns1.romuutech.com.` e `admin.romuutech.com.` são obrigatórios. Sem eles, o DNS acrescenta o domínio de novo e o nome vira `ns1.romuutech.com.romuutech.com`.

**Passo 10. Conferir e ligar o DNS**

```bash
sudo named-checkconf
sudo named-checkzone romuutech.com /etc/bind/db.romuutech.com
sudo systemctl restart named
sudo systemctl status named
```n
Aperte `q` para sair da tela do status.

O `named-checkconf` não mostra nada quando está tudo certo. O `named-checkzone` tem que terminar em `OK`. Testando no próprio servidor:

```bash
dig @127.0.0.1 www.romuutech.com +short
```

Tem que responder `192.168.G.10`.

**Passo 11. No cliente Windows**, no Prompt de Comando como administrador:

```
ipconfig /release
ipconfig /renew
ipconfig /all
nslookup www.romuutech.com
```

> 💡 **Firewall:** o Ubuntu Server vem com o firewall (`ufw`) desligado. Se o grupo o ligou, libere as portas: `sudo ufw allow 67/udp` e `sudo ufw allow 53`.

### Os 8 prints da Parte 3 (0,5 cada)

| # | Print | Tem que mostrar |
|---|---|---|
| 1 | O Gerenciador de Comutador Virtual e as configurações de rede de cada VM (pode ser um print composto) | o switch do tipo privado e as duas VMs ligadas nele |
| 2 | `ip a` no Ubuntu Server | o endereço `192.168.G.10/24` |
| 3 | `sudo systemctl status isc-dhcp-server` | o serviço `active (running)` |
| 4 | `ipconfig /all` no cliente Windows | endereço entre `.100` e `.150`, "Servidor DHCP" `192.168.G.10` e "Servidores DNS" `192.168.G.10` |
| 5 | Captura no Wireshark, no cliente: comecem a captura, rodem `ipconfig /release` e `ipconfig /renew` e filtrem por `dhcp` | as quatro mensagens: Discover, Offer, Request e Ack |
| 6 | `sudo named-checkzone romuutech.com /etc/bind/db.romuutech.com` | termina em `OK` |
| 7 | `sudo systemctl status named` | o serviço `active (running)` |
| 8 | `nslookup www.romuutech.com` no cliente Windows | servidor `192.168.G.10` e endereço `192.168.G.10` (aparecer "Servidor: UnKnown" é normal sem o desafio 3) |

---


## 5. Desafios (até 2 pontos)

Cada desafio feito **e explicado no PDF** vale 1 ponto, inteiro ou nada. Fizeram os três? Contam só 2. Os três usam coisas que não foram vistas em aula: pesquisar faz parte do desafio.

1. **Segundo site no Packet Tracer:** um segundo servidor na rede dos servidores, `10.G.2.20`, com a página `intranet.romuutech.com`, registrado no DNS. Print do navegador abrindo os dois nomes.
2. **Endereço reservado:** no `dhcpd.conf` do Ubuntu, reservem um endereço fixo para o cliente Windows, pelo MAC dele (bloco `host`, com `hardware ethernet` e `fixed-address`). Print do `ipconfig /all` mostrando o endereço reservado.
3. **DNS ao contrário:** no `bind9`, criem a zona reversa da rede `192.168.G.0/24` (registro do tipo `PTR`), para o endereço `192.168.G.10` responder com o nome `ns1.romuutech.com`. Print do `nslookup 192.168.G.10` no cliente.

---

## 6. Checklist do estudo autônomo

Sigam na ordem. Só passem para a etapa seguinte quando o **ponto de parada** funcionar. Cada etapa diz qual aula rever se travar.

### ☐ Etapa 1: Teoria, antes de abrir qualquer programa

- [ ] Lemos as 10 perguntas da Parte 1 e separamos quem rascunha cada uma.
- [ ] Revimos as Aulas 05 (camadas), 07 (portas e UDP), 10 e 12 (DHCP) e 09 (switches virtuais).
- [ ] Escrevemos as respostas com as nossas palavras e cada integrante leu as do outro.
- [ ] **Ponto de parada:** as 10 respostas estão no rascunho do PDF.

> 💡 **Teste rápido:** sem olhar a aula, digam em voz alta as quatro mensagens do DHCP e quem manda cada uma. Travou? Revejam a Aula 10.

### ☐ Etapa 2: Endereços, com papel e caneta

- [ ] Pegamos o número `G` do grupo na lista do AVA.
- [ ] Trocamos o `G` em toda a tabela de endereços da Parte 2 e anotamos o resultado.
- [ ] Anotamos os endereços da Parte 3 (`192.168.G.x`).
- [ ] **Ponto de parada:** a tabela do grupo está pronta, sem nenhum `G` sobrando.

> 💡 **Teste rápido:** num `/30`, quantos endereços servem para equipamentos? Por que é o tamanho certo para ligar dois roteadores? *(Revejam a Aula 06.)*

### ☐ Etapa 3: Os roteadores conversando (Packet Tracer)

- [ ] Montamos a rede do desenho: 3 roteadores, 3 switches, 4 PCs e o servidor.
- [ ] Configuramos as interfaces dos roteadores com `ip address` e `no shutdown`.
- [ ] Pusemos as rotas estáticas nos 3 roteadores.
- [ ] Demos endereço fixo provisório a um PC da matriz e a um da filial, só para testar.
- [ ] **Ponto de parada:** os testes 3 e 4 passam.

> 💡 **Teste rápido:** o PC da matriz pinga o próprio gateway, mas não chega à filial. Em qual roteador falta rota, e para qual rede? *(Revejam a Aula 06.)*

### ☐ Etapa 4: DHCP, DNS e web no Packet Tracer

- [ ] Criamos os dois pools no SERVIDOR (veja o "Apoio" da Parte 2).
- [ ] Pusemos o `ip helper-address` no R-MATRIZ e no R-FILIAL.
- [ ] Passamos os 4 PCs para DHCP.
- [ ] Criamos o registro do DNS e editamos a página web.
- [ ] **Ponto de parada:** os 8 testes da Parte 2 passam.

> 💡 **Teste rápido:** o PC da matriz recebe endereço, mas o da filial fica em `169.254`. O que falta no R-FILIAL? *(Revejam a Aula 12.)*

### ☐ Etapa 5: O servidor de verdade (Ubuntu Server)

- [ ] Criamos as duas VMs e, no Default Switch, instalamos o `isc-dhcp-server`, o `bind9` e o Wireshark (passo 1).
- [ ] Criamos o switch privado, passamos as duas VMs para ele e fixamos o IP do Ubuntu (passos 2 a 4).
- [ ] O DHCP está ativo e o cliente recebeu endereço (passos 5 a 7 e o `ipconfig` do passo 11).
- [ ] O DNS está ativo e o cliente resolve `www.romuutech.com` (passos 8 a 11).
- [ ] **Ponto de parada:** os 8 prints da Parte 3 estão prontos.

> 💡 **Teste rápido:** o serviço do DHCP não sobe e o status mostra erro. O motivo mais comum é "No subnet declaration": o IP fixo não foi aplicado ou o `G` não foi trocado. *(Revejam os passos 4, 5 e 6.)* E se o `nslookup` falhar? Rodem o `named-checkzone` de novo, confiram os pontos no fim dos nomes do passo 9, reiniciem o `named` e vejam se o DNS do `ipconfig /all` é `192.168.G.10`.

### ☐ Etapa 6: Desafios (opcional)

- [ ] Escolhemos até 2 desafios e fizemos.
- [ ] Os 8 testes da Parte 2 e os 8 prints da Parte 3 continuam valendo depois dos desafios.


### ☐ Etapa 7: O PDF

- [ ] Nome de todos os integrantes e da turma na capa.
- [ ] Parte 1: as 10 respostas.
- [ ] Parte 2: a tabela de endereços do grupo e um print de cada um dos 8 testes, com uma linha dizendo o que ele prova. A nota dos testes vem do `.pkt`; o print serve de legenda.
- [ ] Parte 3: os 8 prints, cada um com uma linha dizendo o que ele prova.
- [ ] Desafios: o print e a explicação de cada um.
- [ ] Declaração de uso de IA, em 3 linhas: se usou, em quê e o que vocês conferiram por conta própria.

### ☐ Os nomes dos arquivos

Troque `<turma>` por SEG ou QUA e `<grupo>` pelo número do grupo com dois dígitos (07, não 7).

| Arquivo | Nome | Exemplo |
|---|---|---|
| Rede do Packet Tracer | `R1-<turma>-G<grupo>.pkt` | `R1-SEG-G07.pkt` |
| PDF | `R1-<turma>-G<grupo>.pdf` | `R1-SEG-G07.pdf` |

`trabalho_final_AGORA_VAI_v3.pkt` não é um nome. Nem `trabalho_final_AGORA_VAI_v4.pkt`.

### ☐ Etapa 8: Envio no AVA

1. Entre no AVA e abra a disciplina Redes de Computadores 1.
2. Abra **Estudos Autônomos** e, dentro dele, o Trabalho Final.
3. **Um integrante** anexa os 2 arquivos e envia, até **sábado, 28/11, às 23h59**.
4. Confira se os 2 arquivos aparecem na tela de envio.

---

## 7. Como a nota é dada (20 pontos)

| Parte | Pontos | Como se mede |
|---|---|---|
| **Parte 1: teoria** | 5,0 | 10 perguntas, 0,5 cada |
| **Parte 2: Packet Tracer** | 6,0 | o professor roda os 8 testes no seu `.pkt`, 0,75 cada |
| **Parte 3: máquina virtual** | 4,0 | os 8 prints, 0,5 cada |
| **PDF e arquivos** | 3,0 | 1,0 pela tabela de endereços, 1,0 pela legenda dos prints das Partes 2 e 3, e 1,0 pelos nomes e pela organização |
| **Desafios** | 2,0 | 1,0 cada, até 2 |

Todos os integrantes recebem a mesma nota. O professor testa o `.pkt` que vocês enviaram, sem ninguém do grupo por perto: se um teste só funciona "depois de um `no shutdown` ali", ele não funciona.

---

