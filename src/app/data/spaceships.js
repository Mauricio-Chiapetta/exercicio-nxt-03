import xWingImage from "@/app/images/Xwing-ROOCE.webp";
import TieFighterImage from "@/app/images/TIE_Fighter_DICE.webp";
import milleniumFalconImage from "@/app/images/Millennium_Falcon_Fathead_TROS.webp";
import corvetteImage from "@/app/images/CR90corvette-BTMF18.webp";
import starDestroyerImage from "@/app/images/ImperialStarDestroyer-RFGE.webp";
import slaveImage from "@/app/images/Slave_I_DICE.webp";
import yWingImage from "@/app/images/Ywing.webp";
import tieInterceptorImage from "@/app/images/TIE_Interceptor_BF.webp";
import aWingImage from "@/app/images/A-wing_DICE.webp";
import bWingImage from "@/app/images/B-wing-Squadronds.webp";
import lambdaImage from "@/app/images/LambdaShuttle-Fathead.webp";
import ebomHawkImage from "@/app/images/EbonhawkSW.webp";
import tieBomberImage from "@/app/images/TIEbomber-RFGE.webp";
import venatorImage from "@/app/images/Venator2-SWE.webp";
import nabooStarfighterImage from "@/app/images/N-1_BF2.webp";
import droidTriImage from "@/app/images/DroidTrifighter-TCWs3BR2.webp";
import arcImage from "@/app/images/ARC170starfighter.webp";
import jediInterceptorImage from "@/app/images/Eta-2JediInterceptor-USC.webp";
import ghostImage from "@/app/images/GhostLiveAction-Fathead.webp";
import superStarDestroyerImage from "@/app/images/Executor2_BF2.webp";

export const spaceships = [
  {
    id: 1,
    name: "X-Wing",
    model: "T-65B X-Wing",
    category: "Starfighter",
    description:
      "O T-65B X-Wing é o lendário caça estelar da Aliança Rebelde, projetado para proporcionar uma combinação única de versatilidade e poder. Famoso por sua capacidade de operar tanto em combate espacial quanto atmosférico, este caça é equipado com canhões laser de alta potência, torpedos de prótons e um avançado sistema astromecânico, que garante máxima eficiência e suporte durante missões críticas e de longo alcance. Sua característica icônica, as asas em forma de X, se abrem em combate, proporcionando um desempenho aerodinâmico superior.",
    imageUrl: xWingImage,
  },
  {
    id: 2,
    name: "TIE Fighter",
    model: "TIE/ln Space Superiority Starfighter",
    category: "Starfighter",
    description:
      "O TIE Fighter é a nave padrão da frota imperial, caracterizada por seu design ameaçador com asas hexagonais e sua impressionante capacidade de manobra. Embora sua construção simples não seja voltada para resistência, sua agilidade e velocidade excepcionais a tornam ideal para confrontos rápidos e ataques surpresa. A falta de sistemas de escudos e blindagem é compensada pela sua alta taxa de aceleração e impressionante precisão, tornando-a uma presença temida nos campos de batalha espaciais.",
    imageUrl: TieFighterImage,
  },
  {
    id: 3,
    name: "Millennium Falcon",
    model: "YT-1300 Light Freighter",
    category: "Freighter",
    description:
      "A Millennium Falcon é uma das naves mais emblemáticas da galáxia, famosa tanto por sua aparência improvisada quanto por seu desempenho extraordinário. Originalmente uma nave de carga modificada, ela passou a ser uma das mais rápidas da galáxia devido a modificações extensivas em seus motores e sistemas de navegação. Suportada por uma tripulação improvável, composta por Han Solo e Chewbacca, a Falcon resistiu a inúmeras batalhas e escapou de situações aparentemente impossíveis, tornando-se um símbolo de coragem e engenhosidade.",
    imageUrl: milleniumFalconImage,
  },
  {
    id: 4,
    name: "Corellian Corvette",
    model: "CR90 Corvette",
    category: "Corvette",
    description:
      "A CR90 Corvette, uma nave consular elegante, foi inicialmente projetada para missões diplomáticas e transporte de autoridades, mas foi adaptada pela Aliança Rebelde para ser uma nave de combate rápida e eficaz. Seu design compacto esconde uma impressionante capacidade de resistência e agilidade, tornando-a ideal para operações rápidas e missões de apoio tático em batalhas. Sua capacidade de transportar tropas e fornecer cobertura para naves maiores a torna uma peça chave em conflitos estratégicos.",
    imageUrl: corvetteImage,
  },
  {
    id: 5,
    name: "Star Destroyer",
    model: "Imperial I-class Star Destroyer",
    category: "Capital Ship",
    description:
      "O Imperial I-class Star Destroyer é uma das naves de guerra mais imponentes do Império Galáctico, projetada para esmagar qualquer resistência com sua força massiva. Com uma impressionante quantidade de armamento, incluindo canhões de laser pesados e vastos hangares para TIE Fighters, ele também tem capacidade para transportar tropas e veículos de combate, o que o transforma em uma verdadeira fortaleza móvel. Seu tamanho colossal e poder de fogo fazem dele um símbolo do domínio do Império sobre a galáxia.",
    imageUrl: starDestroyerImage,
  },
  {
    id: 6,
    name: "Slave I",
    model: "Firespray-31-class Patrol and Attack Craft",
    category: "Patrol Craft",
    description:
      "A Slave I é a nave icônica de Boba Fett, projetada para ser uma máquina de guerra tanto no espaço quanto no combate terrestre. Com seu design incomum e sua estrutura altamente modificada, é uma nave de patrulha e ataque extremamente eficaz. Equipado com um arsenal impressionante de armamentos avançados, incluindo lasers pesados, mísseis e outros dispositivos especializados, a Slave I é tanto uma ferramenta de caça implacável quanto um símbolo de medo e respeito no universo de caçadores de recompensas.",
    imageUrl: slaveImage,
  },
  {
    id: 7,
    name: "Y-Wing",
    model: "BTL-A4 Y-Wing",
    category: "Bomber",
    description:
      "O BTL-A4 Y-Wing é um bombardeiro pesado e robusto da Aliança Rebelde, projetado para sobreviver aos rigores da batalha enquanto destrói alvos de grande porte. Sua durabilidade é sua principal característica, sendo capaz de resistir a danos pesados enquanto continua a executar suas missões de bombardeio. Além disso, sua capacidade de fornecer suporte aéreo durante batalhas faz com que o Y-Wing seja um aliado indispensável nas missões mais difíceis, onde poder de fogo e resistência são essenciais.",
    imageUrl: yWingImage,
  },
  {
    id: 8,
    name: "TIE Interceptor",
    model: "TIE/IN Starfighter",
    category: "Starfighter",
    description:
      "O TIE Interceptor é uma versão avançada do clássico TIE Fighter, projetada para ser uma nave de combate de alta velocidade e precisão. Com suas asas em forma de lâmina e motores melhorados, ela oferece uma performance superior em termos de manobrabilidade e velocidade, tornando-se uma das naves mais mortais da frota imperial. Sua agilidade permite que ela execute ataques rápidos e letais, sendo temida por qualquer inimigo que se atreva a enfrentá-la em combate direto.",
    imageUrl: tieInterceptorImage,
  },
  {
    id: 9,
    name: "A-Wing",
    model: "RZ-1 A-Wing Interceptor",
    category: "Interceptor",
    description:
      "O RZ-1 A-Wing Interceptor é um dos caças mais rápidos da Aliança Rebelde, projetado para missões de interceptação e ataques rápidos. Sua velocidade e manobrabilidade excepcionais o tornam uma ameaça constante para qualquer nave inimiga que se atreva a enfrentá-lo. Com uma construção leve e sistemas de armamento avançados, o A-Wing é ideal para confrontos rápidos e ações surpresa, sendo um pesadelo para os adversários despreparados.",
    imageUrl: aWingImage,
  },
  {
    id: 10,
    name: "B-Wing",
    model: "A/SF-01 B-Wing Starfighter",
    category: "Bomber",
    description:
      "O A/SF-01 B-Wing é uma nave de combate da Aliança Rebelde projetada para destruir grandes alvos, como naves capitais inimigas. Sua configuração única de asas rotacionáveis e sua capacidade de carregar um arsenal pesado de armamentos, incluindo lasers de alta potência e bombas, fazem dela uma máquina de guerra formidável. Perfeita para missões de bombardeio em larga escala, a B-Wing pode enfrentar e derrotar ameaças inimigas muito superiores em poder de fogo.",
    imageUrl: bWingImage,
  },
  {
    id: 11,
    name: "Imperial Shuttle",
    model: "Lambda-class T-4a Shuttle",
    category: "Transport",
    description:
      "O Lambda-class T-4a Shuttle é uma nave de transporte de alto nível usada pelo Império Galáctico para mover tropas e oficiais de alta patente entre diferentes locais estratégicos. Seu design elegante e funcionalidade a tornam uma peça chave para as operações imperiais. Embora não seja uma nave de combate, sua versatilidade permite que seja usada para transporte de pessoal, fornecimento e evacuação de áreas de batalha.",
    imageUrl: lambdaImage,
  },
  {
    id: 12,
    name: "Ebon Hawk",
    model: "Dynamic-class Freighter",
    category: "Freighter",
    description:
      "A Ebon Hawk é uma nave icônica da Velha República, famosa por sua robustez e incrível confiabilidade em missões desafiadoras. Originalmente projetada para o transporte de carga, ela foi adaptada ao longo do tempo com sistemas avançados e modificações tecnológicas, tornando-se uma das naves mais notáveis da galáxia. Sua resistência, capacidade de operar em ambientes hostis e adaptabilidade a diversas situações de combate fizeram dela uma escolha favorita entre exploradores e heróis durante a guerra contra os Sith.",
    imageUrl: ebomHawkImage,
  },
  {
    id: 13,
    name: "TIE Bomber",
    model: "TIE/sa Bomber",
    category: "Bomber",
    description:
      "O TIE Bomber é uma nave de ataque imperial especializada em destruição de alvos terrestres e espaciais. Com um design robusto e imponente, ele carrega uma grande quantidade de bombas e mísseis, capazes de causar danos massivos a instalações inimigas, além de ser equipado com sistemas de mísseis guiados para maior precisão. Embora não seja tão ágil quanto outras naves de combate, sua capacidade de destruir alvos de forma letal o torna uma força poderosa no campo de batalha.",
    imageUrl: tieBomberImage,
  },
  {
    id: 14,
    name: "Republic Attack Cruiser",
    model: "Venator-class Star Destroyer",
    category: "Capital Ship",
    description:
      "O Venator-class Star Destroyer é um dos principais símbolos do poder militar da República Galáctica durante as Guerras Clônicas. Esta imensa nave de combate foi projetada para travar batalhas prolongadas, com capacidade para enfrentar grandes flotas inimigas, enquanto transporta vastos contingentes de tropas e caças. Seu formato distinto e sua impressionante quantidade de armamentos fazem dela uma plataforma de ataque versátil e uma das naves mais formidáveis da época, capaz de lançar ataques devastadores contra qualquer ameaça.",
    imageUrl: venatorImage,
  },
  {
    id: 15,
    name: "Naboo Starfighter",
    model: "N-1 Starfighter",
    category: "Starfighter",
    description:
      "O Naboo N-1 Starfighter é uma nave de combate elegante e avançada, projetada para atender às necessidades das forças militares de Naboo. Seu design aerodinâmico, com linhas suaves e uma aparência futurista, reflete a excelência tecnológica da região. Apesar de seu tamanho relativamente pequeno, a nave é altamente eficaz em combate, equipada com sistemas avançados de armamento e manobrabilidade superior, tornando-se uma verdadeira joia da engenharia espacial. A sua velocidade e agilidade, além de seu design sofisticado, fazem dela uma nave ideal para missões de interceptação e defesa.",
    imageUrl: nabooStarfighterImage,
  },
  {
    id: 16,
    name: "Tri-Fighter",
    model: "Droid Tri-fighter",
    category: "Starfighter",
    description:
      "O Droid Tri-Fighter é uma nave de combate avançada da Confederação de Sistemas Independentes, projetada para realizar ataques rápidos e mortais com a precisão de uma máquina. Diferente das naves convencionais, o Tri-Fighter é autônomo, sem necessidade de tripulação, o que o torna extremamente eficiente e letal em batalha. Seu formato incomum em três braços, junto com sua velocidade e armamentos poderosos, permite-lhe realizar ataques em alta velocidade, causando danos significativos aos inimigos sem dar-lhes chance de reação.",
    imageUrl: droidTriImage,
  },
  {
    id: 17,
    name: "ARC-170",
    model: "Aggressive Reconnaissance-170 Starfighter",
    category: "Starfighter",
    description:
      "O ARC-170 Starfighter é uma nave pesada e versátil da República Galáctica, projetada para missões de combate e reconhecimento em zonas de guerra intensas. Com uma tripulação de três membros, esta nave poderosa combina agilidade e resistência, capaz de enfrentar tanto caças inimigos quanto realizar missões de espionagem. Equipado com armamentos pesados e um design robusto, o ARC-170 é ideal para missões de longo alcance e combate aéreo, destacando-se em batalhas tanto no espaço quanto na atmosfera.",
    imageUrl: arcImage,
  },
  {
    id: 18,
    name: "Jedi Interceptor",
    model: "Eta-2 Actis-class Interceptor",
    category: "Starfighter",
    description:
      "O Jedi Interceptor é uma nave altamente ágil e compacta, usada pelos Jedi durante as Guerras Clônicas para combates rápidos e precisos. Seu design elegante, com formas finas e aerodinâmicas, reflete a sua funcionalidade excepcional em combates de alta velocidade. Equipado com sistemas avançados de armamento e escudos, o Jedi Interceptor é uma nave que combina leveza e letalidade, permitindo aos Jedi a habilidade de realizar ataques rápidos e evasivos. Sua capacidade de manobra e desempenho em combates intensos fazem dela uma das naves mais temidas pelos inimigos da Ordem Jedi.",
    imageUrl: jediInterceptorImage,
  },
  {
    id: 19,
    name: "Ghost",
    model: "VCX-100 Light Freighter",
    category: "Freighter",
    description:
      "Uma nave versátil e robusta, a Ghost é o coração da tripulação rebelde liderada por Hera Syndulla. Equipado com avançados sistemas furtivos, este cargueiro leve é capaz de evitar detecções até nas situações mais arriscadas. Sua modularidade e espaço interno permitem personalizações, enquanto a nave secundária Phantom adiciona ainda mais flexibilidade às missões. Um símbolo de resistência e inovação no combate ao Império Galáctico.",
    imageUrl: ghostImage,
  },
  {
    id: 20,
    name: "Super Star Destroyer",
    model: "Executor-class Star Dreadnought",
    category: "Capital Ship",
    description:
      "O Super Star Destroyer, também conhecido como Executor, é uma das maiores e mais temidas naves já construídas pelo Império Galáctico. Como nave capitânia de Darth Vader, sua presença simboliza poder absoluto e controle opressor. Com mais de 19 quilômetros de comprimento, esta gigantesca nave estelar está equipada com armamento pesado, incluindo turbolasers e sistemas de defesa impenetráveis, além de abrigar milhares de tropas, caças TIE e veículos terrestres. Um verdadeiro colosso do espaço projetado para subjugar qualquer resistência.",
    imageUrl: superStarDestroyerImage,
  },
];
