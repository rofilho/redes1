# Aula 03:  Topologias e Meios de Transmissão

## Objetivo da Aula

Hoje vamos aprofundar nossos conhecimentos sobre como as redes são organizadas fisicamente e logicamente. Vamos estudar as topologias de redes e os diferentes meios de transmissão utilizados para interligar dispositivos, entendendo como essas escolhas impactam o desempenho e a segurança da comunicação.

## O que são Topologias de Rede?

A topologia de rede define como os dispositivos estão conectados entre si e como os dados trafegam pela rede. Podemos falar em topologia física (como os cabos e dispositivos estão realmente ligados) e topologia lógica (como os dados circulam).

Diferentes topologias trazem vantagens e desvantagens em termos de desempenho, custo, facilidade de expansão e tolerância a falhas.

### Tipos de Topologias de Rede

1. **Topologia em Barramento (Bus)**
    
    Na topologia em barramento, todos os dispositivos compartilham o mesmo meio de transmissão. Isso significa que apenas um dispositivo transmite por vez e todos “ouvem” o que é enviado.
    
    Se o cabo principal (barramento) falhar, toda a rede pode ficar comprometida, o que reduz a confiabilidade; esse modelo era comum em redes antigas com cabos coaxiais.
    
    ![[assets/image 6.png]]
    
2. **Topologia em Anel (Ring)**
    
    Na topologia em anel, os dispositivos formam um círculo fechado, em que cada nó está ligado ao próximo. Os dados circulam de nó em nó até alcançar o destino, frequentemente seguindo um único sentido.
    
    Um exemplo clássico são as redes Token Ring, que utilizavam um “token” para controlar quem podia transmitir, reduzindo colisões, mas tornando a rede sensível a falhas em um único ponto do anel.
    
    ![[assets/image 7.png]]
    
3. **Topologia em Estrela (Star)**
    
    Na topologia em estrela, todos os dispositivos se conectam a um ponto central, como um switch ou hub. Esse dispositivo central atua como concentrador do tráfego entre as máquinas.
    
    Se um cabo individual falhar, apenas o nó correspondente é afetado; porém, se o equipamento central falhar, toda a rede para. Essa é a topologia física predominante em redes Ethernet modernas.
    
    ![[assets/image 8.png]]
    
4. **Topologia em Malha (Mesh)**
    
    Na topologia em malha, cada dispositivo se conecta a vários outros, criando caminhos redundantes entre os nós. Isso aumenta bastante a tolerância a falhas e a disponibilidade da rede.ademi.
    
    Esse modelo é muito usado em infraestruturas críticas, como redes de data centers e algumas redes wireless avançadas (Wi‑Fi mesh), onde a continuidade do serviço é essencial.
    
    ![[assets/image 9.png]]
    
5. **Topologia Híbrida**
    
    Topologias híbridas combinam duas ou mais topologias diferentes (por exemplo, estrela com malha ou barramento).mksolutions+1
    
    Elas são comuns em redes corporativas de médio e grande porte, em que setores diferentes são organizados em estrela, mas interligados entre si em uma estrutura de malha ou árvore.
    
    ![[assets/image 10.png]]
    

### Meios de Transmissão

Os meios de transmissão determinam como os bits viajam na rede, podendo ser classificados em guiados (com fio) e não guiados (sem fio).

A escolha do meio influencia diretamente a velocidade, o alcance, a imunidade a interferências, o custo da infraestrutura e até requisitos de segurança.

### Meios Guiados

1. **Par Trançado (Twisted Pair)**
    
    O cabo de par trançado é o meio físico mais comum em redes Ethernet atuais. Ele é composto por pares de fios de cobre trançados, o que ajuda a reduzir interferências.
    
    ![[assets/image 11.png]]
    
    ![[assets/image 12.png]]
    
    Exemplos típicos são os cabos CAT5e, CAT6 e CAT7, que oferecem boas velocidades para redes locais, embora tenham alcance limitado sem repetidores ou switches intermediários.
    

1. **Cabo Coaxial**
    
    O cabo coaxial foi muito utilizado em redes locais mais antigas, especialmente em topologias em barramento. Ele apresenta boa resistência a interferências eletromagnéticas.
    
    Hoje é mais comum em serviços de TV a cabo e acesso à internet residencial, embora ainda possa aparecer em cenários legados de rede interna.
    
    ![[assets/image 13.png]]
    

![[assets/image 14.png]]

1. **Fibra Óptica**
    
    
    A fibra óptica utiliza pulsos de luz, em vez de sinais elétricos, para transmitir dados. Isso permite altíssimas taxas de transmissão, baixa latência e grande alcance.
    
    Por ser imune a interferências eletromagnéticas e oferecer grande capacidade, é amplamente usada em backbones de rede, interligação de prédios e enlaces de longa distância.
    

![[assets/image 15.png]]

![[assets/image 16.png]]

### Meios Não Guiados

1. **Wi-Fi (Wireless LAN - WLAN)**
    
    O Wi‑Fi (redes locais sem fio) utiliza ondas de rádio para transmitir dados entre dispositivos e pontos de acesso. Ele oferece mobilidade e facilidade de instalação.
    
    Por outro lado, é mais sensível a interferências, obstáculos físicos e à competição com outras redes na mesma faixa de frequência, o que pode reduzir desempenho e estabilidade.
    
2. **Bluetooth**
    
    O Bluetooth é uma tecnologia de comunicação sem fio de curta distância e baixo consumo de energia. É muito usada para conectar fones, teclados, mouses e sensores IoT.
    
    Ele é adequado para pequenas quantidades de dados em curtas distâncias, mas não substitui redes Wi‑Fi ou cabeadas em termos de alcance e velocidade.
    
3. **Micro-ondas e Satélite**
    
    Links de micro-ondas e satélite permitem comunicação sem fio em longas distâncias, muitas vezes em regiões onde não há infraestrutura cabeada.
    
    Eles são usados em provedores de acesso e enlaces ponto a ponto, mas tendem a ter maior latência, custo mais alto e dependência de condições climáticas, especialmente no caso de satélites.
    

### **Comparação dos Meios de Transmissão**

| Meio de Transmissão | Vantagens | Desvantagens |
| --- | --- | --- |
| **Par Trançado (Ethernet)** | Custo acessível, fácil instalação, boa velocidade para redes locais. | Suscetível a interferências eletromagnéticas, alcance limitado. |
| **Cabo Coaxial** | Boa resistência a interferências, utilizado para TV a cabo e internet. | Mais rígido que o par trançado, taxa de transmissão inferior. |
| **Fibra Óptica** | Altíssima velocidade, baixa latência, resistente a interferências. | Alto custo, necessidade de infraestrutura especializada. |
| **Wi-Fi** | Mobilidade, fácil instalação, utilizado em diversos dispositivos. | Menor velocidade em comparação a redes cabeadas, vulnerável a interferências. |
| **Bluetooth** | Baixo consumo de energia, ideal para curtas distâncias. | Alcance muito limitado, velocidade inferior a outros meios. |
| **Satélite** | Cobertura global, útil para áreas remotas sem infraestrutura terrestre. | Alta latência, custo elevado, dependência de condições climáticas. |

## Experimento Prático

Vamos medir a latência e velocidade da rede utilizando diferentes meios de transmissão:

- Teste de velocidade em Wi-Fi vs. cabo Ethernet.
- Utilização do comando `tracert` para visualizar o caminho dos pacotes na rede.
- Análise de interferências em redes sem fio.

### Discussão

Agora que conhecemos as topologias e os meios de transmissão, vamos refletir:

1. Qual topologia é mais eficiente para grandes empresas?
2. Como escolher o melhor meio de transmissão para um ambiente específico?
3. Como interferências podem afetar redes sem fio?

## Conclusão

Nesta aula, exploramos como as redes são estruturadas por meio de diferentes topologias e estudamos os principais meios de transmissão, tanto guiados quanto não guiados. Esses conceitos são fundamentais para projetar redes eficientes, escaláveis e confiáveis.

Como tarefa, pesquise sobre tecnologias emergentes de conectividade, como redes 5G e Wi‑Fi 6/6E, e pense em como elas podem impactar o desenho de redes nos próximos anos; traga suas dúvidas e descobertas para a próxima aula.

---

## Recursos para Estudo

- **Livro:** "Redes de Computadores" - Tanenbaum
- **Cisco Networking Academy:** [https://www.netacad.com/](https://www.netacad.com/)
- **Artigo:** "The Role of Network Topologies in Modern Communication Systems" - *IEEE Communications Surveys & Tutorials*
- **Vídeo:** "Tipos de topologias de redes explicadas" - YouTube

Bons estudos e até a próxima aula!