# Aula 06: Prática — Endereçamento IPv4, Sub-redes e Roteamento no Packet Tracer

> **Disciplina:** Redes de Computadores I (Cód. 49325) | **Curso:** Sistemas de Informação, Uniube | **Semana 5** | 22/04/2026 | Prof. Romualdo Mathias Filho

---

## 🎯 0. Objetivo da Aula

Ao final desta aula prática, o aluno deve ser capaz de:

- **Configurar** endereços IPv4 estáticos em hosts e interfaces de roteador no Packet Tracer
- **Calcular** sub-redes utilizando máscaras CIDR e verificar o resultado na prática
- **Implementar** roteamento estático básico entre duas redes distintas
- **Diagnosticar** problemas de conectividade utilizando `ping` e `tracert`
- **Configurar** DHCP em um roteador Cisco para distribuição automática de IPs

---

## 🔄 1. Revisão Rápida (5 min)

| Conceito (Aula 05) | Aplicação Hoje |
|---|---|
| Endereço IP (Camada 3) | Configuraremos IPs estáticos em PCs e roteadores |
| Máscara de sub-rede | Definiremos redes /24, /26 e /30 |
| Gateway padrão | Cada host precisa de um gateway para sair da rede local |
| ARP | Será disparado automaticamente ao fazermos ping |
| Roteador = fronteira de redes | Conectaremos duas redes diferentes via roteador |

> **Contexto:** Na Aula 05 vimos como os pacotes viajam dentro de uma mesma rede. Hoje vamos cruzar fronteiras: dois grupos de máquinas em redes diferentes se comunicando via roteador.

---

## 📋 2. Pré-requisitos

- [ ] Cisco Packet Tracer instalado (versão 8.x ou superior)
- [ ] Conta na Cisco NetAcad para download: https://www.netacad.com/courses/packet-tracer
- [ ] Aula 05 revisada (OSI, ARP, modo Simulation)

---

## 🔬 3. Exercícios Práticos

⏱️ **Tempo estimado total:** 90 minutos | Faça em ordem — cada exercício usa a topologia do anterior.

---

### 📌 Exercício 1: Montando a Topologia Base

**Objetivo:** Construir a rede que usaremos em todos os exercícios.

**Topologia a montar:**

```
[PC0] ---+                          +--- [PC2]
[PC1] ---+--- [Switch0] --- [R0] ---+--- [PC3]
                         (Roteador)
                         
Rede A: 192.168.10.0/24        Rede B: 192.168.20.0/24
```

**Passos:**
1. Abra o Packet Tracer → clique em **New** para criar um projeto em branco
2. Na barra de equipamentos (baixo), selecione:
   - **2x Switch** (categoria Switches → 2960)
   - **1x Router** (categoria Routers → 2911)
   - **4x PC** (categoria End Devices → PC)
3. Conecte usando **cabos de cobre diretos (Straight-Through)**:
   - PC0 → Switch0 (Fa0/1), PC1 → Switch0 (Fa0/2)
   - PC2 → Switch1 (Fa0/1), PC3 → Switch1 (Fa0/2)
   - Switch0 → R0 (Gig0/0), Switch1 → R0 (Gig0/1)
4. Salve o arquivo como `Aula06_Redes.pkt`

✅ **Checkpoint:** Todos os dispositivos visíveis na tela, conectados por linhas vermelhas (interfaces ainda desligadas — normal por enquanto).

---

### 📌 Exercício 2: Configurando IPs nos PCs (Rede A)

**Objetivo:** Atribuir endereços IPv4 estáticos aos PCs da Rede A.

**Endereçamento da Rede A (192.168.10.0/24):**

| Dispositivo | IP | Máscara | Gateway |
|---|---|---|---|
| PC0 | 192.168.10.10 | 255.255.255.0 | 192.168.10.1 |
| PC1 | 192.168.10.11 | 255.255.255.0 | 192.168.10.1 |

**Passos (repita para PC0 e PC1):**
1. Clique duas vezes no **PC0** → aba **Desktop** → **IP Configuration**
2. Selecione **Static** e preencha: IP Address, Subnet Mask e Default Gateway
3. Feche a janela e repita para PC1

✅ **Checkpoint:** Clique em PC0 → Desktop → Command Prompt → `ipconfig`. Você deve ver o IP `192.168.10.10` configurado.

---

### 📌 Exercício 3: Configurando IPs nos PCs (Rede B)

**Objetivo:** Atribuir endereços IPv4 estáticos aos PCs da Rede B.

**Endereçamento da Rede B (192.168.20.0/24):**

| Dispositivo | IP | Máscara | Gateway |
|---|---|---|---|
| PC2 | 192.168.20.10 | 255.255.255.0 | 192.168.20.1 |
| PC3 | 192.168.20.11 | 255.255.255.0 | 192.168.20.1 |

**Passos:** Igual ao Exercício 2, mas com os IPs da tabela acima.

**Teste rápido:**
- PC2 → Command Prompt → `ping 192.168.20.11`
- Deve funcionar (mesma rede). Tente `ping 192.168.10.10` — deve falhar (rede diferente, sem roteador configurado ainda).

✅ **Checkpoint:** Ping entre PC2 e PC3 funciona. Ping entre PC0 e PC2 falha (`Request timed out`).

---

### 📌 Exercício 4: Configurando as Interfaces do Roteador

**Objetivo:** Ativar e endereçar as interfaces do roteador R0 via CLI.

💡 **Explicação:** O roteador é a "fronteira" entre as duas redes. Cada interface dele recebe o IP do gateway de cada rede. Sem isso, os pacotes não sabem como cruzar de uma rede para outra.

**Passos:**
1. Clique duas vezes no **R0** → aba **CLI**
2. Pressione **ENTER** até ver o prompt `Router>`
3. Digite os comandos abaixo exatamente como mostrado:

```
Router> enable
Router# configure terminal
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address 192.168.10.1 255.255.255.0
Router(config-if)# no shutdown
Router(config-if)# exit

Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip address 192.168.20.1 255.255.255.0
Router(config-if)# no shutdown
Router(config-if)# exit

Router(config)# exit
Router# show ip interface brief
```

✅ **Checkpoint:** O comando `show ip interface brief` deve mostrar ambas as interfaces com **Status: up** e **Protocol: up** (em verde na tabela). As linhas de conexão no diagrama devem ficar verdes.

---

### 📌 Exercício 5: Testando a Conectividade Entre Redes

**Objetivo:** Verificar que o roteamento entre as duas redes está funcionando.

**Passos:**
1. PC0 → Desktop → Command Prompt
2. Execute os seguintes pings e anote os resultados:

```
ping 192.168.10.11    → (PC1, mesma rede)
ping 192.168.10.1     → (Gateway, interface do roteador)
ping 192.168.20.1     → (Outra interface do roteador)
ping 192.168.20.10    → (PC2, rede diferente)
ping 192.168.20.11    → (PC3, rede diferente)
```

3. Execute também `tracert 192.168.20.10` e observe os saltos.

✅ **Checkpoint:** Todos os pings devem ter sucesso. O `tracert` deve mostrar **2 saltos**: primeiro o gateway `192.168.10.1` (roteador), depois o destino `192.168.20.10`.

---

### 📌 Exercício 6: Observando o ARP e o Roteamento no Modo Simulação

**Objetivo:** Visualizar o que acontece "dentro" dos pacotes quando cruzam o roteador.

**Passos:**
1. No canto inferior direito, mude de **Realtime** para **Simulation**
2. Clique em **Edit Filters** → marque apenas `ARP` e `ICMP`
3. No PC0, execute `ping 192.168.20.10`
4. Use **Capture/Forward** (botão ▶) passo a passo
5. Observe e responda:
   - Para quem é o ARP Request inicial do PC0? (IP alvo)
   - O que muda no cabeçalho **Ethernet (Layer 2)** quando o pacote passa pelo roteador?
   - O que **não** muda no cabeçalho **IP (Layer 3)**?

💡 **Explicação:** O roteador recebe o quadro Ethernet, **remove** o cabeçalho da camada 2, lê o IP destino (camada 3), e **reencapsula** o pacote em um novo quadro Ethernet com o MAC da interface de saída — por isso o MAC muda a cada salto, mas o IP destino permanece o mesmo.

✅ **Checkpoint:** No painel PDU Information, você deve ver o `Dest IP` sempre igual a `192.168.20.10`, mas o `Dest MAC` mudando antes e depois do roteador.

---

### 📌 Exercício 7: Sub-redes com CIDR — Dividindo a Rede

**Objetivo:** Criar uma nova sub-rede menor (/26) e verificar os limites de endereçamento.

**Cenário:** O administrador precisa criar uma rede de gerenciamento com no máximo 60 hosts, usando o bloco `172.16.0.0`.

**Cálculo (faça junto):**

| Máscara | CIDR | Hosts utilizáveis | Rede | Broadcast |
|---|---|---|---|---|
| 255.255.255.0 | /24 | 254 | 172.16.0.0 | 172.16.0.255 |
| 255.255.255.192 | /26 | 62 | 172.16.0.0 | 172.16.0.63 |
| 255.255.255.192 | /26 | 62 | 172.16.0.64 | 172.16.0.127 |

**Passos no Packet Tracer:**
1. Adicione um novo **PC4** e um **Switch2** à topologia existente
2. Conecte PC4 ao Switch2
3. Configure PC4 com: IP `172.16.0.10`, Máscara `255.255.255.192`, Gateway `172.16.0.1`
4. Tente fazer ping de PC4 para PC0 (`192.168.10.10`) — vai falhar. Por quê?

✅ **Checkpoint:** O ping falha porque PC4 está em uma rede completamente diferente e não há rota configurada. Anote a explicação com suas palavras.

---

### 📌 Exercício 8: Configurando DHCP no Roteador

**Objetivo:** Fazer o roteador distribuir IPs automaticamente para os PCs da Rede B.

💡 **Explicação:** Em vez de configurar IP manualmente em cada PC, o DHCP permite que o roteador assuma esse papel — como um "balcão de distribuição" de endereços IP.

**Passos:**
1. Clique no R0 → CLI e configure o DHCP:

```
Router# configure terminal
Router(config)# ip dhcp excluded-address 192.168.20.1 192.168.20.9
Router(config)# ip dhcp pool REDE-B
Router(dhcp-config)# network 192.168.20.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.20.1
Router(dhcp-config)# dns-server 8.8.8.8
Router(dhcp-config)# exit
```

2. Agora vá em PC2 → Desktop → IP Configuration → selecione **DHCP**
3. Aguarde alguns segundos — o PC deve receber um IP automaticamente (a partir de 192.168.20.10)
4. Verifique com `ipconfig` no Command Prompt do PC2

✅ **Checkpoint:** PC2 recebe IP `192.168.20.10` (ou o próximo disponível), máscara `255.255.255.0`, gateway `192.168.20.1` e DNS `8.8.8.8` automaticamente.

---

### 📌 Exercício 9: Rota Estática Manual

**Objetivo:** Adicionar manualmente uma rota no roteador para uma rede que ele não conhece.

**Cenário:** Suponha que existe uma terceira rede `10.0.0.0/24` acessível via um segundo roteador cujo IP na nossa rede é `192.168.10.254`.

**Passos:**
1. R0 → CLI:

```
Router# configure terminal
Router(config)# ip route 10.0.0.0 255.255.255.0 192.168.10.254
Router(config)# exit
Router# show ip route
```

2. Observe o output do `show ip route`. Identifique:
   - As rotas marcadas com **C** (Connected — redes diretamente conectadas)
   - A rota marcada com **S** (Static — que acabamos de adicionar)

3. Tente pingar `10.0.0.1` a partir do PC0. Vai falhar — por quê? (Dica: o `192.168.10.254` não existe de fato na nossa topologia.)

✅ **Checkpoint:** O comando `show ip route` exibe as rotas C e S corretamente. O aluno entende a diferença entre rotas diretamente conectadas e rotas estáticas.

---

### 📌 Exercício 10: Cenário de Troubleshooting

**Objetivo:** Diagnosticar e corrigir falhas de conectividade em uma topologia com problemas propositais.

**O professor vai introduzir os seguintes "problemas" na rede — sua missão é identificar e corrigir cada um:**

| # | Sintoma | Possível Causa | Comando de Diagnóstico |
|---|---|---|---|
| A | PC0 não pinga PC1 (mesma rede) | IP incorreto ou máscara errada | `ipconfig` no PC0 |
| B | PC0 pinga o gateway mas não pinga PC2 | Interface do roteador desligada | `show ip interface brief` no R0 |
| C | PC2 recebeu IP via DHCP mas não tem gateway | Pool DHCP sem `default-router` | `ipconfig` + checar config DHCP |
| D | Nenhum pacote sai do Switch0 | Cabo errado (Crossover no lugar de Straight-Through) | Inspecionar visualmente as conexões |

**Passos:**
1. Identifique qual problema está ocorrendo usando os comandos de diagnóstico
2. Corrija o problema na topologia ou na CLI
3. Verifique com `ping` end-to-end que a conectividade foi restaurada
4. Documente: qual era o problema, como você identificou, e o que fez para corrigir

✅ **Checkpoint Final:** Ping de PC0 para PC3 funcionando com sucesso após todas as correções. `tracert` mostra o caminho completo em 2 saltos.

---

## ⚠️ Troubleshooting Comum

| Problema | Causa Provável | Solução |
|---|---|---|
| Interface do roteador fica vermelha | `no shutdown` não foi executado | Entre na interface e execute `no shutdown` |
| Ping falha com "Destination host unreachable" | Gateway padrão errado no PC | Verificar se o gateway é o IP da interface do roteador |
| Ping falha com "Request timed out" | Hosts em redes diferentes sem roteamento | Verificar se o roteador tem as duas interfaces UP |
| DHCP não entrega IP | Pool não configurado ou interface incorreta | Verificar `show ip dhcp pool` e `show ip dhcp binding` |
| Cabo ligado mas interface vermelha | Tipo de cabo errado | Trocar por Straight-Through (PC→Switch) ou Crossover (Switch→Switch direto sem MDIX) |

---

## 📝 Entrega da Aula

**Salve o arquivo `.pkt` com o nome:** `SeuNome_Aula06_Redes.pkt`

**Itens obrigatórios no arquivo final:**
1. Topologia completa com PC0, PC1, PC2, PC3, Switch0, Switch1, R0
2. Todos os PCs com IPs configurados (PC0 e PC1 estáticos, PC2 e PC3 via DHCP)
3. Roteador com ambas as interfaces UP e DHCP configurado
4. Rota estática para `10.0.0.0/24` visível no `show ip route`
5. Print ou anotação das respostas do Exercício 10 (Troubleshooting)

**Critérios de avaliação:**
1. Conectividade end-to-end: ping de PC0 → PC3 funcionando
2. DHCP operacional na Rede B
3. Tabela de rotas correta no roteador
4. Documentação do troubleshooting (Ex. 10)

---

## 📋 Resumo da Prática

| O que fizemos | Comando/Ferramenta | Conceito Relacionado |
|---|---|---|
| Montamos topologia com 2 redes | Packet Tracer | Segmentação de redes |
| Configuramos IPs estáticos | Desktop → IP Configuration | Endereçamento IPv4 |
| Ativamos interfaces do roteador | `no shutdown` | Camada 3 — Roteamento |
| Verificamos conectividade | `ping`, `tracert` | ICMP, TTL, saltos |
| Observamos ARP e roteamento | Modo Simulation | Encapsulamento por camadas |
| Criamos sub-rede /26 | Cálculo CIDR | Subnetting |
| Configuramos DHCP | `ip dhcp pool` | Alocação dinâmica de IPs |
| Adicionamos rota estática | `ip route` | Tabela de roteamento |
| Diagnosticamos falhas | `show ip interface brief` | Troubleshooting de redes |

---

## 📚 Referências Bibliográficas

### Referências Obrigatórias

| Autor | Obra | Capítulo/Seção |
|---|---|---|
| TANENBAUM, A. S.; FEAMSTER, N.; WETHERALL, D. J. | Redes de Computadores. 6. ed. Pearson, 2021 | Cap. 5 — Camada de Rede: Endereçamento IPv4 e Sub-redes |
| KUROSE, J. F. | Redes de Computadores e a Internet. 8. ed. Pearson, 2021 | Cap. 4 (Seção 4.3: Endereçamento IPv4, CIDR, DHCP) |
| CISCO NETWORKING ACADEMY | Curso CCNAv7: Introduction to Networks | Módulos 7–11: Endereçamento IP, Sub-redes, DHCP, Roteamento |

### Links Úteis

| Recurso | Link |
|---|---|
| Download Cisco Packet Tracer | https://www.netacad.com/courses/packet-tracer |
| Calculadora de Sub-redes Online | https://www.subnet-calculator.com/ |
| Documentação DHCP Cisco IOS | https://www.cisco.com/c/en/us/td/docs/ios/12_4t/ip_addr/configuration/guide/htdhcpsvr.html |
| RFC 1918 — IPs Privados | https://datatracker.ietf.org/doc/html/rfc1918 |

### Vídeos de Apoio

| Canal/Autor | Título | Link |
|---|---|---|
| NetworkChuck | Subnetting is simple | https://www.youtube.com/watch?v=ecCuyq-Wprc |
| Cisco NetAcad | Packet Tracer — Getting Started | https://www.youtube.com/watch?v=BvnHh3pJdgs |
| David Bombal | DHCP Explained | https://www.youtube.com/watch?v=e6-TaH5bkjo |
