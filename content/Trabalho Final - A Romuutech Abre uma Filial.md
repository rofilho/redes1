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
| **O que é** | Três partes: perguntas de teoria, uma rede com DHCP, DNS e servidor web no Packet Tracer, e um servidor DHCP de verdade numa máquina virtual. |
| **Vale** | 20 pontos, todos pelo que o grupo entrega. A prova vale outros 20. |
| **Grupo** | Até **3 pessoas**, todas da **mesma turma** (segunda ou quarta). |
| **Entrega** | No **AVA**, em **Estudos Autônomos**, até **sábado, 28/11, às 23h59**. Um integrante envia pelo grupo. Não há apresentação: a nota sai só do que foi enviado. |
| **O que enviar** | 2 arquivos: o `.pkt` da Parte 2 e um PDF com as respostas da Parte 1 e os prints das Partes 2 e 3. Os nomes estão na seção 6. |

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

## 4. Parte 3: Servidor DHCP numa máquina virtual (4 pontos)

Agora o DHCP sai do simulador e vai para um sistema de verdade, como na Aula 12. Use um computador com Hyper-V (Aula 09) ou o do laboratório.

### O que montar

- **VM 1: servidor:** Ubuntu Server, com **IP fixo** `192.168.G.10/24` configurado pelo Netplan.
- **VM 2: cliente:** Windows, em DHCP.
- **Primeiro, com internet:** ligue as duas VMs no **Default Switch** (Aula 09, seção 6.4). No Ubuntu, instale o `isc-dhcp-server`. No Windows, instale o Wireshark.
- **Depois, isoladas:** crie um **switch virtual privado** e passe as duas VMs para ele. Só então ligue o servidor DHCP. No privado não há internet, e é de propósito.
- No servidor, o `isc-dhcp-server` entregando endereços de `192.168.G.100` a `192.168.G.150`, com o gateway `192.168.G.1` e o DNS `192.168.G.10`. O gateway não precisa existir: no switch privado ninguém sai para fora.

> ⚠️ **Cuidado:** um servidor DHCP ligado na rede errada entrega endereço para todo mundo que estiver nela. É assim que se derruba o Wi-Fi de uma casa inteira com uma VM só. Por isso o servidor só liga no switch privado. Nem o externo nem o interno: no interno, o seu próprio computador também receberia endereço da VM.

### Os 5 testes da Parte 3 (0,8 cada)

| # | Print | Tem que mostrar |
|---|---|---|
| 1 | O Gerenciador de Comutador Virtual e as configurações de rede de cada VM (pode ser um print composto) | o switch do tipo privado e as duas VMs ligadas nele |
| 2 | `ip a` no Ubuntu Server | o endereço `192.168.G.10/24` |
| 3 | `sudo systemctl status isc-dhcp-server` | o serviço `active (running)` |
| 4 | `ipconfig /all` no cliente Windows | endereço entre `.100` e `.150` e "Servidor DHCP" `192.168.G.10` |
| 5 | Captura no Wireshark, no cliente: comecem a captura, rodem `ipconfig /release` e `ipconfig /renew` e filtrem por `dhcp` | as quatro mensagens: Discover, Offer, Request e Ack |

---

## 5. Desafios (até 2 pontos)

Cada desafio feito **e explicado no PDF** vale 1 ponto, inteiro ou nada. Fizeram os três? Contam só 2. Os três usam coisas que não foram vistas em aula: pesquisar faz parte do desafio.

1. **Segundo site no Packet Tracer:** um segundo servidor na rede dos servidores, `10.G.2.20`, com a página `intranet.romuutech.com`, registrado no DNS. Print do navegador abrindo os dois nomes.
2. **Endereço reservado:** no `dhcpd.conf` do Ubuntu, reservem um endereço fixo para o cliente Windows, pelo MAC dele (bloco `host`, com `hardware ethernet` e `fixed-address`). Print do `ipconfig /all` mostrando o endereço reservado.
3. **DNS na máquina virtual:** instalem um servidor DNS no Ubuntu (por exemplo o `bind9`) e façam o cliente Windows resolver `www.romuutech.com`. Print do `nslookup` no cliente.

---

## 6. Checklist e entrega

### ☐ Parte 1
- [ ] Respondemos às 10 perguntas com as nossas palavras.

### ☐ Parte 2
- [ ] Montamos a rede do desenho com os endereços do nosso grupo.
- [ ] As rotas estáticas estão nos 3 roteadores. **Ponto de parada:** os testes 3 e 4 passam com os PCs ainda em endereço fixo provisório.
- [ ] Passamos os PCs para DHCP. **Ponto de parada:** os testes 1, 2 e 8 passam.
- [ ] DNS e web prontos. **Ponto de parada:** os 8 testes passam.

> 💡 **Teste rápido:** o PC da matriz recebe endereço, mas o da filial fica em `169.254`. O que falta no R-FILIAL? *(Revejam a Aula 12.)*

### ☐ Parte 3
- [ ] Criamos as duas VMs, instalamos o `isc-dhcp-server` e o Wireshark com elas no Default Switch.
- [ ] Passamos as duas para o switch privado e fixamos o IP do Ubuntu.
- [ ] **Ponto de parada:** os 5 prints estão prontos.

> 💡 **Teste rápido:** o serviço não sobe e o status mostra erro. Qual arquivo diz em que interface o servidor escuta? *(Revejam o passo 5 da Aula 12.)*

### ☐ O PDF

- [ ] Nome de todos os integrantes e da turma na capa.
- [ ] Parte 1: as 10 respostas.
- [ ] Parte 2: a tabela de endereços do grupo e um print de cada um dos 8 testes, com uma linha dizendo o que ele prova. A nota dos testes vem do `.pkt`; o print serve de legenda.
- [ ] Parte 3: os 5 prints, cada um com uma linha dizendo o que ele prova.
- [ ] Desafios: o print e a explicação de cada um.
- [ ] Declaração de uso de IA, em 3 linhas: se usou, em quê e o que vocês conferiram por conta própria.

### ☐ Os nomes dos arquivos

Troque `<turma>` por SEG ou QUA e `<grupo>` pelo número do grupo com dois dígitos (07, não 7).

| Arquivo | Nome | Exemplo |
|---|---|---|
| Rede do Packet Tracer | `R1-<turma>-G<grupo>.pkt` | `R1-SEG-G07.pkt` |
| PDF | `R1-<turma>-G<grupo>.pdf` | `R1-SEG-G07.pdf` |

`trabalho_final_AGORA_VAI_v3.pkt` não é um nome. Nem `trabalho_final_AGORA_VAI_v4.pkt`.

### ☐ Envio no AVA

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
| **Parte 3: máquina virtual** | 4,0 | os 5 prints, 0,8 cada |
| **PDF e arquivos** | 3,0 | 1,0 pela tabela de endereços, 1,0 pela legenda dos prints das Partes 2 e 3, e 1,0 pelos nomes e pela organização |
| **Desafios** | 2,0 | 1,0 cada, até 2 |

Todos os integrantes recebem a mesma nota. O professor testa o `.pkt` que vocês enviaram, sem ninguém do grupo por perto: se um teste só funciona "depois de um `no shutdown` ali", ele não funciona.

---

