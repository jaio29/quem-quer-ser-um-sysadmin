/* -------------------------------------------------------------
   CONFIGURAÇÃO E ESTADO GLOBAL DO JOGO
   ------------------------------------------------------------- */
// Banco de Dados Local com 40 perguntas estruturadas para expansão futura
const BANCO_DE_PERGUNTAS = {
    facil: [
        {
            pergunta: "Qual é o maior planeta do nosso sistema solar?",
            alternativas: ["Terra", "Marte", "Júpiter", "Saturno"],
            correta: 2
        },
        {
            pergunta: "Qual o nome do criador do sistema operacional Linux?",
            alternativas: ["Steve Jobs", "Linus Torvalds", "Bill Gates", "Dennis Ritchie"],
            correta: 1
        },
        {
            pergunta: "Qual é a capital federal do Brasil?",
            alternativas: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            correta: 2
        },
        {
            pergunta: "Quantos continentes existem no planeta Terra?",
            alternativas: ["4", "5", "6", "7"],
            correta: 2
        },
        {
            pergunta: "Qual fruta é conhecida por ter suas sementes do lado de fora?",
            alternativas: ["Maçã", "Morango", "Melancia", "Uva"],
            correta: 1
        },
        {
            pergunta: "Quem pintou a famosa obra de arte 'Mona Lisa'?",
            alternativas: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            correta: 2
        },
        {
            pergunta: "Qual elemento químico tem o símbolo 'O' na tabela periódica?",
            alternativas: ["Ouro", "Oxigênio", "Ozônio", "Osmio"],
            correta: 1
        },
        {
            pergunta: "Quantos minutos constituem uma hora inteira?",
            alternativas: ["30", "50", "60", "100"],
            correta: 2
        },
        {
            pergunta: "Qual é o menor país do mundo em termos de área territorial?",
            alternativas: ["Mônaco", "Malta", "Vaticano", "San Marino"],
            correta: 2
        },
        {
            pergunta: "Quem escreveu a clássica peça teatral 'Romeu e Julieta'?",
            alternativas: ["William Shakespeare", "Luis de Camões", "Machado de Assis", "Oscar Wilde"],
            correta: 0
        },
        {
            pergunta: "Qual oceano banha a costa do Brasil?",
            alternativas: ["Oceano Pacífico", "Oceano Atlântico", "Oceano Índico", "Oceano Ártico"],
            correta: 1
        },
        {
            pergunta: "Quantas cores tem o arco-íris?",
            alternativas: ["5", "6", "7", "8"],
            correta: 2
        },
        {
            pergunta: "Qual é o satélite natural do planeta Terra?",
            alternativas: ["Fobos", "Deimos", "Lua", "Europa"],
            correta: 2
        },
        {
            pergunta: "Qual é o animal terrestre mais rápido do mundo?",
            alternativas: ["Leão", "Guepardo", "Cavalo", "Antilocapra"],
            correta: 1
        },
        {
            pergunta: "Qual é o principal gás que os humanos respiram para sobreviver?",
            alternativas: ["Nitrogênio", "Hélio", "Oxigênio", "Argônio"],
            correta: 2
        },
        {
            pergunta: "Qual é o metal cujo símbolo químico é 'Fe' na tabela periódica?",
            alternativas: ["Flúor", "Fósforo", "Ferro", "Férmio"],
            correta: 2
        },
        {
            pergunta: "Qual animal de grande porte é amplamente conhecido como o 'Rei da Selva'?",
            alternativas: ["Tigre", "Leão", "Elefante", "Gorila"],
            correta: 1
        },
        {
            pergunta: "De qual cor marcante é a pedra preciosa esmeralda?",
            alternativas: ["Azul", "Vermelho", "Amarelo", "Verde"],
            correta: 3
        },
        {
            pergunta: "Quantos dias tem um ano bissexto no calendário ocidental padrão?",
            alternativas: ["364", "365", "366", "367"],
            correta: 2
        },
        {
            pergunta: "De qual planta comercial é extraído o açúcar refinado comum mais consumido no Brasil?",
            alternativas: ["Beterraba", "Milho", "Cana-de-açúcar", "Mandioca"],
            correta: 2
        },
        {
            pergunta: "Quem é o famoso criador do universo infantil da 'Turma da Mônica'?",
            alternativas: ["Ziraldo", "Mauricio de Sousa", "Monteiro Lobato", "Quino"],
            correta: 1
        },
        {
            pergunta: "Qual é o principal ingrediente natural utilizado na fabricação do chocolate?",
            alternativas: ["Leite", "Açúcar", "Cacau", "Café"],
            correta: 2
        },
        {
            pergunta: "Em qual país histórico surgiram os primeiros Jogos Olímpicos na antiguidade?",
            alternativas: ["Itália", "Egito", "Grécia", "China"],
            correta: 2
        },
        {
            pergunta: "Qual é o nome do processo bioquímico pelo qual as plantas produzem seu próprio alimento?",
            alternativas: ["Respiração celular", "Fotossíntese", "Transpiração", "Fermentação"],
            correta: 1
        },
        {
            pergunta: "Quantos lados possui uma figura geométrica plana classificada como triângulo?",
            alternativas: ["3", "4", "5", "6"],
            correta: 0
        },
        {
            pergunta: "Qual nação moderna é mundialmente famosa pelas monumentais pirâmides de Gizé?",
            alternativas: ["Egito", "México", "Grécia", "Índia"],
            correta: 0
        },
        {
            pergunta: "Quem capitaneou a expedição europeia que chegou ao litoral do Brasil em 1500?",
            alternativas: ["Cristóvão Colombo", "Vasco da Gama", "Pedro Álvares Cabral", "Américo Vespúcio"],
            correta: 2
        },
        {
            pergunta: "Qual cidade europeia é mundialmente conhecida como a capital da França?",
            alternativas: ["Londres", "Paris", "Roma", "Madrid"],
            correta: 1
        },
        {
            pergunta: "Qual é a maior floresta tropical do planeta Terra?",
            alternativas: ["Floresta do Congo", "Taiga Siberiana", "Floresta Amazônica", "Floresta Negra"],
            correta: 2
        },
        {
            pergunta: "Quantas pernas possui anatomicamente um animal pertencente ao grupo das aranhas?",
            alternativas: ["6", "8", "10", "12"],
            correta: 1
        },
        {
            pergunta: "Qual órgão muscular do corpo humano é o principal responsável por bombear o sangue?",
            alternativas: ["Pulmão", "Cérebro", "Fígado", "Coração"],
            correta: 3
        },
        {
            pergunta: "Qual é a estrela central e mais próxima do planeta Terra?",
            alternativas: ["Alfa Centauri", "Sirius", "Sol", "Estrela Polar"],
            correta: 2
        },
        {
            pergunta: "Qual país europeu escandinavo é a terra natal do famoso grupo pop ABBA?",
            alternativas: ["Noruega", "Suécia", "Dinamarca", "Reino Unido"],
            correta: 1
        },
        {
            pergunta: "Em qual hemisfério do globo terrestre localiza-se a maior parte do território do Brasil?",
            alternativas: ["Hemisfério Norte", "Hemisfério Sul", "Hemisfério Ocidental", "Hemisfério Oriental"],
            correta: 1
        },
        {
            pergunta: "Qual monumento icônico ergue-se majestosamente sobre o morro do Corcovado, no Rio de Janeiro?",
            alternativas: ["Pão de Açúcar", "Cristo Redentor", "Estátua da Liberdade", "Arco do Triunfo"],
            correta: 1
        },
        {
            pergunta: "Qual é o idioma oficial constitucional falado em Portugal?",
            alternativas: ["Espanhol", "Inglês", "Português", "Francês"],
            correta: 2
        },
        {
            pergunta: "Quantos anos terrestres inteiros constituem um século?",
            alternativas: ["10", "50", "100", "1000"],
            correta: 2
        },
        {
            pergunta: "Qual é o maior animal mamífero vivo do planeta Terra?",
            alternativas: ["Elefante-africano", "Baleia-azul", "Tubarão-baleia", "Girafa"],
            correta: 1
        },
        {
            pergunta: "Qual célebre boneco de madeira das fábulas infantis tem o nariz crescido ao mentir?",
            alternativas: ["Peter Pan", "Pinóquio", "Aladdin", "Mogli"],
            correta: 1
        },
        {
            pergunta: "Qual das opções a seguir apresenta o antônimo exato da palavra 'rápido'?",
            alternativas: ["Devagar", "Lento", "Apressado", "Veloz"],
            correta: 1
        },
        {
            pergunta: "Qual cor resulta da mistura pigmentar física das cores azul e amarelo?",
            alternativas: ["Roxo", "Laranja", "Verde", "Marrom"],
            correta: 2
        },
        {
            pergunta: "Qual estação climática do ano é tradicionalmente conhecida pela derrubada das folhas das árvores?",
            alternativas: ["Primavera", "Verão", "Outono", "Inverno"],
            correta: 2
        },
        {
            pergunta: "Quantos mandamentos compõem o Decálogo sagrado na tradição bíblica abraâmica?",
            alternativas: ["7", "10", "12", "15"],
            correta: 1
        },
        {
            pergunta: "Qual país asiático oriental é o berço de origem da famosa culinária de sushis?",
            alternativas: ["China", "Coreia do Sul", "Japão", "Tailândia"],
            correta: 2
        },
        {
            pergunta: "Qual cidade é administrativamente classificada como a capital do estado de São Paulo?",
            alternativas: ["Campinas", "Santos", "São Paulo", "Ribeirão Preto"],
            correta: 2
        },
        {
            pergunta: "Qual é o nome do satélite natural do planeta Marte que é o maior de seus dois satélites?",
            alternativas: ["Fobos", "Deimos", "Lua", "Europa"],
            correta: 0
        },
        {
            pergunta: "Em qual continente se localiza o famoso Monumento Taj Mahal?",
            alternativas: ["África", "Ásia", "Europa", "América"],
            correta: 1
        },
        {
            pergunta: "Qual é a fórmula química da água purificada?",
            alternativas: ["CO2", "H2O", "NaCl", "O2"],
            correta: 1
        },
        {
            pergunta: "Quantos lados tem um quadrado perfeito?",
            alternativas: ["3", "4", "5", "6"],
            correta: 1
        },
        {
            pergunta: "Quem é considerado o 'Pai da Aviação' no Brasil devido aos seus voos históricos em Paris?",
            alternativas: ["Irmãos Wright", "Santos Dumont", "Eduardo Gomes", "Bartolomeu de Gusmão"],
            correta: 1
        },
        {
            pergunta: "Qual planeta do nosso sistema solar é comumente apelidado de 'Planeta Vermelho'?",
            alternativas: ["Vênus", "Marte", "Mercúrio", "Saturno"],
            correta: 1
        },
        {
            pergunta: "Qual é a capital da Itália, famosa por monumentos como o Coliseu?",
            alternativas: ["Roma", "Milão", "Veneza", "Florença"],
            correta: 0
        },
        {
            pergunta: "De qual cor é a neve em condições normais de pureza?",
            alternativas: ["Azul", "Cinza", "Branco", "Amarelo"],
            correta: 2
        },
        {
            pergunta: "Qual é o maior oceano do planeta Terra em extensão de água?",
            alternativas: ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Oceano Ártico"],
            correta: 2
        },
        {
            pergunta: "Quem escreveu o famoso conto infantil 'O Patinho Feio'?",
            alternativas: ["Irmãos Grimm", "Charles Perrault", "Hans Christian Andersen", "Monteiro Lobato"],
            correta: 2
        },
        {
            pergunta: "Quantos dedos uma pessoa saudável costuma ter em apenas uma das mãos?",
            alternativas: ["4", "5", "6", "10"],
            correta: 1
        },
        {
            pergunta: "Qual é a cor da bandeira que sinaliza paz em um contexto tradicional?",
            alternativas: ["Verde", "Azul", "Branco", "Amarelo"],
            correta: 2
        },
        {
            pergunta: "Qual é o animal conhecido por produzir mel nas colmeias?",
            alternativas: ["Abelha", "Vespa", "Formiga", "Cupim"],
            correta: 0
        },
        {
            pergunta: "Qual metal precioso tem o símbolo 'Ag' na tabela periódica?",
            alternativas: ["Ouro", "Prata", "Platina", "Cobre"],
            correta: 1
        },
        {
            pergunta: "Quantas estações climáticas compõem o ano terrestre?",
            alternativas: ["2", "3", "4", "6"],
            correta: 2
        },
        {
            pergunta: "Em qual país europeu fica a imponente Torre de Pisa?",
            alternativas: ["França", "Itália", "Espanha", "Grécia"],
            correta: 1
        },
        {
            pergunta: "Qual super-herói de quadrinhos tem o codinome de 'Homem-Morcego'?",
            alternativas: ["Superman", "Homem-Aranha", "Batman", "Wolverine"],
            correta: 2
        },
        {
            pergunta: "Quem pintou a famosa e dramática obra 'O Grito'?",
            alternativas: ["Pablo Picasso", "Salvador Dalí", "Edvard Munch", "Claude Monet"],
            correta: 2
        },
        {
            pergunta: "Qual é o maior país do mundo em termos de área territorial contínua?",
            alternativas: ["Canadá", "China", "Estados Unidos", "Rússia"],
            correta: 3
        },
        {
            pergunta: "Qual elemento é essencial para manter a chama do fogo acesa na combustão?",
            alternativas: ["Nitrogênio", "Hélio", "Oxigênio", "Gás Carbônico"],
            correta: 2
        },
        {
            pergunta: "Quantos anos dura um mandato presidencial de acordo com a Constituição brasileira atual?",
            alternativas: ["4 anos", "5 anos", "6 anos", "8 anos"],
            correta: 0
        },
        {
            pergunta: "De qual fruta é feita a tradicional bebida alcoólica chamada vinho?",
            alternativas: ["Maçã", "Pera", "Uva", "Cacau"],
            correta: 2
        },
        {
            pergunta: "Qual é a moeda de circulação oficial da Zona do Euro na Europa?",
            alternativas: ["Libra", "Dólar", "Euro", "Franco"],
            correta: 2
        },
        {
            pergunta: "Qual personagem da Disney é um ratinho famoso com calças vermelhas?",
            alternativas: ["Donald", "Pateta", "Pluto", "Mickey Mouse"],
            correta: 3
        },
        {
            pergunta: "Qual é o principal metal de fabricação das latas de refrigerante modernas?",
            alternativas: ["Ferro", "Aço", "Alumínio", "Estanho"],
            correta: 2
        },
        {
            pergunta: "Qual é a capital do Reino Unido, onde reside a família real?",
            alternativas: ["Edimburgo", "Cardiff", "Dublin", "Londres"],
            correta: 3
        },
        {
            pergunta: "Quantos planetas compõem oficialmente o nosso Sistema Solar após o rebaixamento de Plutão?",
            alternativas: ["7", "8", "9", "10"],
            correta: 1
        },
        {
            pergunta: "Qual animal é famoso por mudar de cor para se camuflar no ambiente?",
            alternativas: ["Lagartixa", "Camaleão", "Cobra", "Salamandra"],
            correta: 1
        },
        {
            pergunta: "Qual elemento de escrita é utilizado para riscar no quadro negro de escolas?",
            alternativas: ["Caneta", "Lápis", "Giz", "Pincel"],
            correta: 2
        },
        {
            pergunta: "Qual país sul-americano faz fronteira com o sul do estado brasileiro do Rio Grande do Sul?",
            alternativas: ["Argentina", "Uruguai", "Paraguai", "Bolívia"],
            correta: 1
        }
    ],
    medio: [
        {
            pergunta: "Em qual país atual se localiza a famosa e antiga cidade arqueológica de Petra?",
            alternativas: ["Egito", "Turquia", "Jordânia", "Grécia"],
            correta: 2
        },
        {
            pergunta: "Qual físico e cientista propôs a revolucionária Teoria da Relatividade Geral?",
            alternativas: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Stephen Hawking"],
            correta: 1
        },
        {
            pergunta: "Qual rio é tradicionalmente considerado o mais longo do mundo?",
            alternativas: ["Rio Amazonas", "Rio Nilo", "Rio Mississippi", "Rio Yangtzé"],
            correta: 1
        },
        {
            pergunta: "Qual lendária banda de rock britânica lançou o aclamado álbum 'The Dark Side of the Moon'?",
            alternativas: ["The Beatles", "Led Zeppelin", "Pink Floyd", "Queen"],
            correta: 2
        },
        {
            pergunta: "Em qual ano ocorreu o término oficial da Segunda Guerra Mundial?",
            alternativas: ["1918", "1939", "1945", "1950"],
            correta: 2
        },
        {
            pergunta: "Qual metal é famoso por ser líquido em temperatura ambiente sob condições normais?",
            alternativas: ["Chumbo", "Mercúrio", "Alumínio", "Prata"],
            correta: 1
        },
        {
            pergunta: "Qual país sul-americano sediou com sucesso os Jogos Olímpicos de Verão de 2016?",
            alternativas: ["Argentina", "Chile", "Brasil", "Colômbia"],
            correta: 2
        },
        {
            pergunta: "Qual filósofo da Grécia Antiga foi o tutor pessoal de Alexandre, o Grande?",
            alternativas: ["Sócrates", "Platão", "Aristóteles", "Pitágoras"],
            correta: 2
        },
        {
            pergunta: "Quem é o autor do clássico romance literário brasileiro 'Dom Casmurro'?",
            alternativas: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Graciliano Ramos"],
            correta: 0
        },
        {
            pergunta: "Qual é a fórmula química do sal de cozinha comum?",
            alternativas: ["H2O", "CO2", "NaCl", "HCl"],
            correta: 2
        },
        {
            pergunta: "Em qual continente terrestre localiza-se o vasto Deserto do Saara?",
            alternativas: ["Ásia", "África", "Oceania", "América do Sul"],
            correta: 1
        },
        {
            pergunta: "Qual renomado pintor pós-impressionista holandês cortou parte da sua própria orelha esquerda?",
            alternativas: ["Vincent van Gogh", "Rembrandt", "Johannes Vermeer", "Piet Mondrian"],
            correta: 0
        },
        {
            pergunta: "Qual é o gás químico mais abundante na composição da atmosfera terrestre?",
            alternativas: ["Oxigênio", "Dióxido de Carbono", "Nitrogênio", "Argônio"],
            correta: 2
        },
        {
            pergunta: "Qual clássico personagem da mitologia grega voou perto demais do Sol e caiu no mar?",
            alternativas: ["Ícaro", "Teseu", "Aquiles", "Hércules"],
            correta: 0
        },
        {
            pergunta: "Aproximadamente quantos ossos compõem a estrutura de um corpo humano adulto?",
            alternativas: ["150", "206", "300", "208"],
            correta: 1
        },
        {
            pergunta: "Qual gás possui o maior percentual na composição da atmosfera do planeta Vênus?",
            alternativas: ["Nitrogênio", "Oxigênio", "Dióxido de Carbono", "Hélio"],
            correta: 2
        },
        {
            pergunta: "Qual elemento químico tem o número atômico 6 na tabela periódica?",
            alternativas: ["Oxigênio", "Nitrogênio", "Carbono", "Hidrogênio"],
            correta: 2
        },
        {
            pergunta: "Em que ano ocorreu o trágico naufrágio do luxuoso transatlântico Titanic?",
            alternativas: ["1908", "1912", "1918", "1923"],
            correta: 1
        },
        {
            pergunta: "Qual filósofo da Grécia antiga foi o autor do clássico trabalho de filosofia 'A República'?",
            alternativas: ["Sócrates", "Platão", "Aristóteles", "Zenão"],
            correta: 1
        },
        {
            pergunta: "Quem pintou a famosa e intrigante obra de arte surrealista 'A Persistência da Memória'?",
            alternativas: ["Pablo Picasso", "Vincent van Gogh", "Salvador Dalí", "Joan Miró"],
            correta: 2
        },
        {
            pergunta: "Qual cientista britânico formulou a revolucionária Lei da Gravitação Universal?",
            alternativas: ["Galileu Galilei", "Isaac Newton", "Albert Einstein", "Copérnico"],
            correta: 1
        },
        {
            pergunta: "Qual país sediou os Jogos Olímpicos de Verão de 2008, cujo estádio principal era apelidado de Ninho de Pássaro?",
            alternativas: ["Japão", "Reino Unido", "China", "Estados Unidos"],
            correta: 2
        },
        {
            pergunta: "Quem escreveu a célebre livro infantil brasileiro 'O Menino Maluquinho'?",
            alternativas: ["Mauricio de Sousa", "Ziraldo", "Monteiro Lobato", "Ruth Rocha"],
            correta: 1
        },
        {
            pergunta: "Qual é o nome do deserto mais seco do mundo, localizado na região norte do Chile?",
            alternativas: ["Deserto do Saara", "Deserto de Gobi", "Deserto do Atacama", "Deserto da Namíbia"],
            correta: 2
        },
        {
            pergunta: "Qual é a principal função fisiológica dos glóbulos vermelhos (hemácias) no sangue?",
            alternativas: ["Combater infecções", "Coagular o sangue", "Transportar oxigênio", "Produzir hormônios"],
            correta: 2
        },
        {
            pergunta: "Quem foi o primeiro homem a viajar para o espaço sideral, completando uma órbita da Terra em 1961?",
            alternativas: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
            correta: 1
        },
        {
            pergunta: "Qual é a capital oficial do Canadá?",
            alternativas: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
            correta: 3
        },
        {
            pergunta: "Qual é o maior oceano em volume de água e profundidade média do planeta?",
            alternativas: ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Oceano Ártico"],
            correta: 2
        },
        {
            pergunta: "Qual imperador francês conquistou a maior parte da Europa no início do século XIX?",
            alternativas: ["Luís XIV", "Napoleão Bonaparte", "Carlos Magno", "Luís XVI"],
            correta: 1
        },
        {
            pergunta: "Quantas câmaras musculares possui o coração de um ser humano saudável?",
            alternativas: ["2", "3", "4", "5"],
            correta: 2
        },
        {
            pergunta: "Quem escreveu a aclamada trilogia de fantasia de alta literatura 'O Senhor dos Anéis'?",
            alternativas: ["C.S. Lewis", "J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling"],
            correta: 1
        },
        {
            pergunta: "Qual é a fórmula química representativa do gás ozônio presente na estratosfera?",
            alternativas: ["O2", "O3", "CO2", "H2O"],
            correta: 1
        },
        {
            pergunta: "Em que ano ocorreu o descobrimento ou invasão da América por Cristóvão Colombo?",
            alternativas: ["1453", "1488", "1492", "1500"],
            correta: 2
        },
        {
            pergunta: "Qual pintor renascentista é o autor do afresco monumental da abóbada da Capela Sistina?",
            alternativas: ["Leonardo da Vinci", "Rafael Sanzio", "Michelangelo", "Donatello"],
            correta: 2
        },
        {
            pergunta: "Qual elemento é o componente químico principal na fabricação de semicondutores de chips de computador?",
            alternativas: ["Cobre", "Silício", "Germânio", "Carbono"],
            correta: 1
        },
        {
            pergunta: "Qual é o maior osso em extensão longitudinal do corpo humano adulto?",
            alternativas: ["Tíbia", "Fêmur", "Úmero", "Costela"],
            correta: 1
        },
        {
            pergunta: "Em qual país europeu localiza-se o majestoso e icônico Castelo de Neuschwanstein?",
            alternativas: ["Ástria", "Suíça", "Alemanha", "França"],
            correta: 2
        },
        {
            pergunta: "Qual é a montanha mais alta do mundo em relação ao nível médio do mar?",
            alternativas: ["K2", "Monte Everest", "Kilimanjaro", "Monte Fuji"],
            correta: 1
        },
        {
            pergunta: "Quem escreveu a famosa tragédia literária dinamarquesa 'Hamlet'?",
            alternativas: ["Christopher Marlowe", "William Shakespeare", "John Milton", "Geoffrey Chaucer"],
            correta: 1
        },
        {
            pergunta: "Qual é o nome do principal pigmento que dá a cor verde característica às plantas?",
            alternativas: ["Caroteno", "Xantofila", "Clorofila", "Antocianina"],
            correta: 2
        },
        {
            pergunta: "Qual é a capital oficial da Alemanha?",
            alternativas: ["Munique", "Frankfurt", "Hamburgo", "Berlim"],
            correta: 3
        },
        {
            pergunta: "Qual foi a principal causa da extinção em massa dos dinossauros há 66 milhões de anos?",
            alternativas: ["Erupções vulcânicas", "Impacto de asteroide", "Era do Gelo", "Doença epidêmica"],
            correta: 1
        },
        {
            pergunta: "Qual elemento químico possui o símbolo 'K' na tabela periódica?",
            alternativas: ["Fósforo", "Criptônio", "Potássio", "Cálcio"],
            correta: 2
        },
        {
            pergunta: "Quem escreveu a épica obra literária clássica portuguesa 'Os Lusíadas'?",
            alternativas: ["Fernando Pessoa", "Luís de Camões", "Gil Vicente", "Eça de Queirós"],
            correta: 1
        },
        {
            pergunta: "Qual país é famoso por ter canais fluviais navegáveis que cruzam a cidade de Veneza?",
            alternativas: ["França", "Itália", "Holanda", "Bélgica"],
            correta: 1
        }
    ],
    dificil: [
        {
            pergunta: "Qual era a capital do antigo Império Bizantino antes de ser conquistada em 1453?",
            alternativas: ["Roma", "Atenas", "Constantinopla", "Alexandria"],
            correta: 2
        },
        {
            pergunta: "Quem é o autor do célebre romance de ficção distópica 'Admirável Mundo Novo'?",
            alternativas: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
            correta: 1
        },
        {
            pergunta: "Qual elemento químico possui o número atômico 79 na tabela periódica?",
            alternativas: ["Prata", "Platina", "Ouro", "Cobre"],
            correta: 2
        },
        {
            pergunta: "Em qual batalha militar histórica Napoleão Bonaparte foi definitivamente derrotado?",
            alternativas: ["Batalha de Waterloo", "Batalha de Austerlitz", "Batalha de Leipzig", "Batalha de Trafalgar"],
            correta: 0
        },
        {
            pergunta: "Qual é a partícula subatômica do átomo que apresenta carga elétrica neutra?",
            alternativas: ["Próton", "Elétron", "Nêutron", "Pósitron"],
            correta: 2
        },
        {
            pergunta: "Quem foi a primeira cientista mulher da história a ganhar um conceituado Prêmio Nobel?",
            alternativas: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Dorothy Hodgkin"],
            correta: 0
        },
        {
            pergunta: "Qual é a lua mais interna de Júpiter, notável por sua intensa e constante atividade vulcânica?",
            alternativas: ["Europa", "Ganimedes", "Calisto", "Io"],
            correta: 3
        },
        {
            pergunta: "Em qual ano histórico ocorreu o emblemático evento da queda do Muro de Berlim?",
            alternativas: ["1985", "1989", "1991", "1993"],
            correta: 1
        },
        {
            pergunta: "Qual é o nome do elemento químico superpesado sintetizado e adicionado à tabela periódica cujo símbolo é 'Og'?",
            alternativas: ["Oganessônio", "Moscóvio", "Tenesso", "Nihônio"],
            correta: 0
        },
        {
            pergunta: "Quem escreveu a consagrada obra de tragédia teatral do romantismo alemão 'Fausto'?",
            alternativas: ["Friedrich Schiller", "Goethe", "Thomas Mann", "Heinrich Heine"],
            correta: 1
        },
        {
            pergunta: "Qual é a constante matemática aproximada representada pela proporção áurea, conhecida como 'Phi'?",
            alternativas: ["1,414", "1,618", "2,718", "3,141"],
            correta: 1
        },
        {
            pergunta: "Qual imperador romano decretou o Edito de Milão em 313 d.C., concedendo liberdade de culto aos cristãos?",
            alternativas: ["Augusto", "Nero", "Constantino", "Marco Vermelho"],
            correta: 2
        },
        {
            pergunta: "Qual é o nome da maior lua do planeta Saturno, notável por sua espessa atmosfera de nitrogênio?",
            alternativas: ["Encélado", "Titã", "Mimas", "Réia"],
            correta: 1
        },
        {
            pergunta: "Em qual ano ocorreu a histórica Revolução Francesa com a emblemática tomada da Bastilha?",
            alternativas: ["1776", "1789", "1799", "1804"],
            correta: 1
        },
        {
            pergunta: "Qual é a partícula elementar da física que atua como mediadora da força eletromagnética?",
            alternativas: ["Elétron", "Fóton", "Gluon", "Gráviton"],
            correta: 1
        },
        {
            pergunta: "Quem foi a primeira e única cientista a ganhar dois prêmios Nobel em duas categorias científicas diferentes?",
            alternativas: ["Linus Pauling", "Marie Curie", "John Bardeen", "Albert Einstein"],
            correta: 1
        },
        {
            pergunta: "Qual dramaturgo francês escreveu a famosa comédia satírica clássica 'O Tartufo'?",
            alternativas: ["Jean Racine", "Pierre Corneille", "Molière", "Voltaire"],
            correta: 2
        },
        {
            pergunta: "Qual é a velocidade média exata do som no ar seco a uma temperatura padrão de 20 °C?",
            alternativas: ["300 m/s", "331 m/s", "343 m/s", "400 m/s"],
            correta: 2
        },
        {
            pergunta: "Qual dinastia imperial governou a Rússia de 1613 até a abdicação do último czar em 1917?",
            alternativas: ["Dinastia Rurik", "Dinastia Romanov", "Dinastia Habsburgo", "Dinastia Hohenzollern"],
            correta: 1
        },
        {
            pergunta: "Em qual ano histórico ocorreu a devastadora tragédia do reator nuclear em Chernobyl?",
            alternativas: ["1979", "1983", "1986", "1989"],
            correta: 2
        },
        {
            pergunta: "Quem formulou as famosas equações diferenciais unificadoras do eletromagnetismo clássico?",
            alternativas: ["Michael Faraday", "Heinrich Hertz", "James Clerk Maxwell", "André-Marie Ampère"],
            correta: 2
        },
        {
            pergunta: "Qual é a capital oficial da Turquia, centro administrativo do país?",
            alternativas: ["Istambul", "Ancara", "Esmirna", "Antália"],
            correta: 1
        },
        {
            pergunta: "Qual elemento químico tem o ponto de fusão mais alto de todos os metais puros conhecidos?",
            alternativas: ["Platina", "Tungstênio", "Tântalo", "Ósmio"],
            correta: 1
        },
        {
            pergunta: "Qual foi o primeiro satélite artificial da história lançado ao espaço, pela União Soviética em 1957?",
            alternativas: ["Vostok 1", "Sputnik 1", "Explorer 1", "Apollo 11"],
            correta: 1
        },
        {
            pergunta: "Qual é a menor e mais interna das quatro luas galileanas do planeta Júpiter?",
            alternativas: ["Io", "Europa", "Ganimedes", "Calisto"],
            correta: 0
        },
        {
            pergunta: "Quem é o autor do clássico trabalho literário da filosofia política renascentista 'O Príncipe'?",
            alternativas: ["Erasmo de Roterdã", "Thomas More", "Nicolau Maquiavel", "Montaigne"],
            correta: 2
        },
        {
            pergunta: "Qual filósofo empirista escocês escreveu o clássico 'Tratado da Natureza Humana'?",
            alternativas: ["John Locke", "George Berkeley", "David Hume", "Thomas Hobbes"],
            correta: 2
        },
        {
            pergunta: "Qual é a temperatura teórica do Zero Absoluto em graus Celsius abaixo de zero?",
            alternativas: ["-100 °C", "-200 °C", "-273,15 °C", "-300 °C"],
            correta: 2
        },
        {
            pergunta: "Quem pintou a célebre obra cubista espanhola 'Guernica', retratando o horror da guerra?",
            alternativas: ["Salvador Dalí", "Joan Miró", "Pablo Picasso", "Francisco de Goya"],
            correta: 2
        },
        {
            pergunta: "Em que ano ocorreu o Tratado de Tordesilhas entre Portugal e o Reino de Castela?",
            alternativas: ["1492", "1494", "1500", "1530"],
            correta: 1
        },
        {
            pergunta: "Qual é o nome do paradoxo cosmológico que questiona a falta de evidências de civilizações extraterrestres avançadas?",
            alternativas: ["Paradoxo de Olbers", "Paradoxo de Fermi", "Paradoxo de Drake", "Paradoxo de Dyson"],
            correta: 1
        },
        {
            pergunta: "Quem escreveu aclamado clássico romance nacionalista realista 'Canaã' em 1902?",
            alternativas: ["Lima Barreto", "Graça Aranha", "Euclides da Cunha", "Aluísio Azevedo"],
            correta: 1
        },
        {
            pergunta: "Qual é o metal precioso mais denso entre os elementos químicos da tabela periódica?",
            alternativas: ["Platina", "Ouro", "Chumbo", "Ósmio"],
            correta: 3
        },
        {
            pergunta: "Qual físico alemão é considerado o pai da física quântica pela sua descoberta dos quanta de energia?",
            alternativas: ["Albert Einstein", "Werner Heisenberg", "Max Planck", "Niels Bohr"],
            correta: 2
        },
        {
            pergunta: "Quem liderou a famosa travessia dos Alpes com elefantes durante a Segunda Guerra Púnica contra Roma?",
            alternativas: ["Júlio César", "Aníbal Barca", "Alexandre, o Grande", "Espártaco"],
            correta: 1
        },
        {
            pergunta: "Qual elemento químico tem o símbolo 'W' na tabela periódica devido ao seu nome de origem alemã?",
            alternativas: ["Tungstênio", "Bário", "Fósforo", "Potássio"],
            correta: 0
        },
        {
            pergunta: "Em qual ano a Lei Áurea foi assinada, abolindo legalmente a escravidão no Brasil?",
            alternativas: ["1850", "1871", "1885", "1888"],
            correta: 3
        },
        {
            pergunta: "Qual filósofo existencialista francês escreveu a monumental obra ontológica 'O Ser e o Nada'?",
            alternativas: ["Albert Camus", "Simone de Beauvoir", "Jean-Paul Sartre", "Martin Heidegger"],
            correta: 2
        }
    ],
    supremo: [
        {
            pergunta: "Qual matemático britânico decifrou o código Enigma na 2ª Guerra Mundial e é tido como pai da computação?",
            alternativas: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "John von Neumann"],
            correta: 0
        },
        {
            pergunta: "Qual elemento químico foi descobridor em 1868 na atmosfera solar antes de ser encontrado na Terra?",
            alternativas: ["Hélio", "Hidrogênio", "Neônio", "Argônio"],
            correta: 0
        },
        {
            pergunta: "Qual matemático indiano autodidata formulou milhares de identidades matemáticas extremamente profundas na teoria dos números?",
            alternativas: ["Srinivasa Ramanujan", "Satyendra Nath Bose", "Harish-Chandra", "C.R. Rao"],
            correta: 0
        },
        {
            pergunta: "Qual dinastia imperial unificou a China no século III a.C. sob o comando do imperador Qin Shi Huang?",
            alternativas: ["Dinastia Han", "Dinastia Qin", "Dinastia Tang", "Dinastia Ming"],
            correta: 1
        },
        {
            pergunta: "Qual é o nome do único asteroide conhecido por possuir um sistema de dois anéis concêntricos ao seu redor, descoberto em 2013?",
            alternativas: ["Ceres", "Vesta", "Chariklo", "Chiron"],
            correta: 2
        },
        {
            pergunta: "Qual filósofo pré-socrático é famoso pela sua afirmação de que a substância primordial do universo era o 'Ápeiron'?",
            alternativas: ["Tales de Mileto", "Anaxímenes", "Anaximandro", "Heráclito"],
            correta: 2
        },
        {
            pergunta: "Qual é o nome do primeiro programa de inteligência artificial a derrotar um campeão mundial humano no complexo jogo Go?",
            alternativas: ["Deep Blue", "Watson", "AlphaGo", "AlphaZero"],
            correta: 2
        },
        {
            pergunta: "Em qual ano histórico ocorreu a Paz de Westfália, pondo fim à Guerra dos Trinta Anos na Europa?",
            alternativas: ["1555", "1648", "1688", "1713"],
            correta: 1
        },
        {
            pergunta: "Qual é o termo físico dado à quantidade mínima de energia necessária para remover um elétron de uma superfície metálica no efeito fotoelétrico?",
            alternativas: ["Potencial de Ionização", "Energia de Ativação", "Função Trabalho", "Entalpia de Ligação"],
            correta: 2
        },
        {
            pergunta: "Quem foi coroado pelo Papa Leão III no dia de Natal do ano 800 d.C. como o primeiro imperador do Sacro Império Romano?",
            alternativas: ["Carlos Magno", "Oton I", "Frederico Barbarossa", "Carlos V"],
            correta: 0
        },
        {
            pergunta: "Qual dramaturgo da antiguidade clássica grega escreveu a célebre tragédia mitológica 'Édipo Rei'?",
            alternativas: ["Ésquilo", "Eurípedes", "Sófocles", "Aristófanes"],
            correta: 2
        },
        {
            pergunta: "Qual é o limite superior de massa estável que uma anã branca pode ter antes de colapsar sob sua própria gravidade?",
            alternativas: ["Limite de Tolman-Oppenheimer-Volkoff", "Limite de Chandrasekhar", "Raio de Schwarzschild", "Limite de Roche"],
            correta: 1
        },
        {
            pergunta: "Qual dinastia governou o Império Russo a partir de 1613, após a superação do chamado Período de Tribulações?",
            alternativas: ["Dinastia Rurik", "Dinastia Romanov", "Dinastia Habsburgo", "Dinastia Tudor"],
            correta: 1
        },
        {
            pergunta: "Em que ano ocorreu o catastrófico sismo de Lisboa, seguido por um tsunami e incêndios que devastaram a capital portuguesa?",
            alternativas: ["1715", "1755", "1789", "1808"],
            correta: 1
        },
        {
            pergunta: "Quem formulou a famosa conjectura matemática de que todo mapa plano pode ser colorido com no máximo 4 cores?",
            alternativas: ["Kenneth Appel", "Wolfgang Haken", "Francis Guthrie", "Arthur Cayley"],
            correta: 2
        },
        {
            pergunta: "Qual físico austríaco propôs o princípio da exclusão que afirma que dois férmions não podem ocupar o mesmo estado quântico?",
            alternativas: ["Erwin Schrödinger", "Werner Heisenberg", "Wolfgang Pauli", "Max Born"],
            correta: 2
        },
        {
            pergunta: "Qual elemento químico superpesado e sintético de número atômico 118 fecha o sétimo período da tabela periódica?",
            alternativas: ["Tenesso", "Moscóvio", "Oganessônio", "Nihônio"],
            correta: 2
        },
        {
            pergunta: "Qual foi o primeiro computador eletrônico digital de uso geral de grande escala construído nos EUA durante a 2ª Guerra Mundial?",
            alternativas: ["Colossus", "ENIAC", "UNIVAC I", "Z3"],
            correta: 1
        },
        {
            pergunta: "Qual estrela é considerada a mais brilhante do céu noturno terrestre quando vista a olho nu de qualquer hemisfério?",
            alternativas: ["Betelgeuse", "Rigel", "Sirius", "Vega"],
            correta: 2
        },
        {
            pergunta: "Quem é o autor do influente tratado de astronomia clássica 'Almagesto', escrito no século II d.C.?",
            alternativas: ["Nicolau Copérnico", "Cláudio Ptolomeu", "Johannes Kepler", "Aristarco de Samos"],
            correta: 1
        },
        {
            pergunta: "Qual filósofo austro-britânico escreveu a célebre obra de lógica e linguagem 'Tractatus Logico-Philosophicus'?",
            alternativas: ["Gottlob Frege", "Bertrand Russell", "Ludwig Wittgenstein", "Rudolf Carnap"],
            correta: 2
        },
        {
            pergunta: "Qual é o efeito físico que descreve a variação de temperatura sofrida por um gás real ao expandir-se livremente?",
            alternativas: ["Efeito Joule-Thomson", "Efeito Hall", "Efeito Seebeck", "Efeito Peltier"],
            correta: 0
        }
    ]
};

// Escada de Níveis: Medidor de Crise (14 Níveis)
const LADDER_VALUES = [
    { label: "Nível 1: O Chefe está em pé atrás da sua cadeira olhando sua tela (Pânico Geral)", value: 1, difficulty: "Fácil" },
    { label: "Nível 2: O sistema caiu e o Diretor está ligando no seu celular pessoal", value: 2, difficulty: "Fácil" },
    { label: "Nível 3: Cabos de fibra óptica rompidos pela escavadeira na rua", value: 3, difficulty: "Fácil" },
    { label: "Nível 4: Ar condicionado do Data Center quebrou e está saindo fumaça", value: 4, difficulty: "Fácil" },
    { label: "Nível 5: Estagiário dropou a tabela de produção sem querer", value: 5, difficulty: "Médio" },
    { label: "Nível 6: Ransomware criptografando a pasta /var/www", value: 6, difficulty: "Médio" },
    { label: "Nível 7: Ataque DDoS em andamento vindo de 40 países", value: 7, difficulty: "Médio" },
    { label: "Nível 8: Clientes reclamando em massa no Twitter/X", value: 8, difficulty: "Médio" },
    { label: "Nível 9: Alerta de Certificado SSL Expirado (Site dando tela vermelha)", value: 9, difficulty: "Médio" },
    { label: "Nível 10: Código Laranja (A memória RAM do servidor principal bateu 95%)", value: 10, difficulty: "Difícil" },
    { label: "Nível 11: Código Amarelo (Um banco de dados secundário está lento)", value: 11, difficulty: "Difícil" },
    { label: "Nível 12: Monitoramento Estável (CPU em confortáveis 40%)", value: 12, difficulty: "Difícil" },
    { label: "Nível 13: Alerta Verde (Apenas avisos bobos e automáticos no Slack)", value: 13, difficulty: "Difícil" },
    { label: "Nível 14: Silêncio Absoluto (Tudo funciona, pode ir tomar café em paz)", value: 14, difficulty: "Supremo" }
];

// Estado do Jogo
let gameState = {
    playerName: "Operador",
    initialDifficulty: "Dinâmica",
    currentQuestionIndex: 0, // 0 a 13
    currentQuestion: null,
    usedQuestions: [],       // Armazena enunciados para evitar repetição imediata na mesma rodada
    skipCount: 3,
    cardsAvailable: true,
    internsAvailable: true,
    isTransitioning: false,
    startTime: null,
    uptimeTimer: null,
    telemetryTimer: null
};

/* -------------------------------------------------------------
   MAPEAMENTO DOS ELEMENTOS DO DOM
   ------------------------------------------------------------- */
const screens = {
    welcome: document.getElementById("screen-welcome"),
    loader: document.getElementById("screen-loader"),
    game: document.getElementById("screen-game"),
    gameover: document.getElementById("screen-gameover"),
    victory: document.getElementById("screen-victory")
};

const inputs = {
    playerName: document.getElementById("player-name"),
    welcomeActions: document.getElementById("welcome-actions-menu"),
    welcomeForm: document.getElementById("welcome-form-deploy"),
    btnDeploy: document.getElementById("btn-deploy-start"),
    btnViewRanking: document.getElementById("btn-view-ranking"),
    btnConfirmDeploy: document.getElementById("btn-confirm-deploy"),
    btnBackMenu: document.getElementById("btn-back-menu"),
    btnOpenAbout: document.getElementById("btn-open-about")
};

const gamePanel = {
    difficultyBadge: document.getElementById("current-difficulty-badge"),
    questionIndex: document.getElementById("question-index-display"),
    questionText: document.getElementById("question-text"),
    altButtons: document.querySelectorAll(".alt-btn"),
    ladderList: document.getElementById("ladder-list"),
    terminal: document.getElementById("terminal-output"),
    latency: document.getElementById("latency-telemetry"),
    uptime: document.getElementById("uptime-telemetry"),
    loaderLogs: document.getElementById("loader-logs")
};

const hud = {
    btnSkip: document.getElementById("btn-help-skip"),
    btnCards: document.getElementById("btn-help-cards"),
    btnInterns: document.getElementById("btn-help-interns"),
    btnQuit: document.getElementById("btn-help-quit"),
    skipUses: document.getElementById("skip-uses"),
    cardsStatus: document.getElementById("cards-status"),
    internsStatus: document.getElementById("interns-status")
};

const modals = {
    interns: document.getElementById("modal-interns"),
    btnCloseInterns: document.getElementById("btn-close-interns"),
    ranking: document.getElementById("modal-ranking"),
    btnCloseRanking: document.getElementById("btn-close-ranking"),
    btnClearRanking: document.getElementById("btn-clear-ranking"),
    rankingBody: document.getElementById("ranking-body"),
    about: document.getElementById("modal-about"),
    btnCloseAbout: document.getElementById("btn-close-about"),
    btnCloseAboutX: document.getElementById("btn-close-about-x"),
    restore: document.getElementById("modal-restore"),
    btnRestoreYes: document.getElementById("btn-restore-yes"),
    btnRestoreNo: document.getElementById("btn-restore-no"),
    restoreName: document.getElementById("restore-player-name"),
    restoreProgress: document.getElementById("restore-player-progress")
};

const endScreens = {
    gameoverReason: document.getElementById("gameover-reason"),
    gameoverScore: document.getElementById("gameover-score"),
    btnRestartCrash: document.getElementById("btn-restart-crash"),
    victoryScore: document.getElementById("victory-score"),
    btnRestartVictory: document.getElementById("btn-restart-victory")
};

/* -------------------------------------------------------------
   INICIALIZAÇÃO E SIMULAÇÕES DE TELEMETRIA
   ------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    initEventListeners();
    buildLadderUI();
    startBackgroundTelemetry();
    checkForSavedSession();
});

// Event Listeners Principais
function initEventListeners() {


    // Iniciar fluxo de Deploy
    inputs.btnDeploy.addEventListener("click", () => {
        inputs.welcomeActions.classList.add("hidden");
        inputs.welcomeForm.classList.remove("hidden");
        document.getElementById("welcome-about-menu").classList.add("hidden");
        inputs.playerName.focus();
        logTerminal("Fluxo de Deploy iniciado. Aguardando credenciais do SysAdmin...");
    });

    // Retornar ao Menu Principal
    inputs.btnBackMenu.addEventListener("click", () => {
        inputs.welcomeForm.classList.add("hidden");
        inputs.welcomeActions.classList.remove("hidden");
        document.getElementById("welcome-about-menu").classList.remove("hidden");
        logTerminal("Retornando ao menu principal...");
    });

    // Confirmar deploy e iniciar jogo
    inputs.btnConfirmDeploy.addEventListener("click", startNewGame);

    // Ver Ranking
    inputs.btnViewRanking.addEventListener("click", openRankingModal);

    // Abrir About
    inputs.btnOpenAbout.addEventListener("click", openAboutModal);

    // Seleção de alternativas
    gamePanel.altButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (gameState.isTransitioning) return;
            selectAlternative(parseInt(btn.getAttribute("data-index")));
        });
    });

    // Ajudas
    hud.btnSkip.addEventListener("click", executeSkipHelp);
    hud.btnCards.addEventListener("click", executeServerRestartHelp);
    hud.btnInterns.addEventListener("click", openInternsHelp);
    hud.btnQuit.addEventListener("click", executeQuitGame);

    // Controles de Modais
    modals.btnCloseInterns.addEventListener("click", () => modals.interns.classList.remove("active"));

    // Controles de Ranking
    modals.btnCloseRanking.addEventListener("click", () => modals.ranking.classList.remove("active"));
    modals.btnClearRanking.addEventListener("click", clearRanking);

    // Controles de About
    modals.btnCloseAbout.addEventListener("click", () => modals.about.classList.remove("active"));
    modals.btnCloseAboutX.addEventListener("click", () => modals.about.classList.remove("active"));
    modals.about.addEventListener("click", (e) => {
        if (e.target === modals.about) {
            modals.about.classList.remove("active");
        }
    });

    // Controles de Recuperação (Restore)
    modals.btnRestoreYes.addEventListener("click", () => {
        playClickSound();
        const saved = JSON.parse(localStorage.getItem("sysadmin_session"));
        if (saved) {
            restoreGameSession(saved);
        }
    });
    modals.btnRestoreNo.addEventListener("click", () => {
        playClickSound();
        clearSessionState();
        modals.restore.classList.remove("active");
    });

    // Reiniciar
    endScreens.btnRestartCrash.addEventListener("click", resetToWelcome);
    endScreens.btnRestartVictory.addEventListener("click", resetToWelcome);
}

// Simulação de Telemetria de Servidor Real
function startBackgroundTelemetry() {
    gameState.telemetryTimer = setInterval(() => {
        // CPU oscila levemente
        const cpuValue = Math.floor(Math.random() * 15) + 5;
        const cpuFill = document.querySelector("#tel-cpu .fill");
        const cpuText = document.querySelector("#tel-cpu .value");
        if (cpuFill && cpuText) {
            cpuFill.style.width = cpuValue + "%";
            cpuText.textContent = cpuValue + "%";
        }

        // RAM oscila levemente
        const ramFill = document.querySelector("#tel-ram .fill");
        const ramText = document.querySelector("#tel-ram .value");
        if (ramFill && ramText) {
            const usage = (4.0 + Math.random() * 0.5).toFixed(1);
            const percentage = Math.round((usage / 8.0) * 100);
            ramFill.style.width = percentage + "%";
            ramText.textContent = usage + "GB";
        }
    }, 3000);
}

// Ticker de Uptime
function startUptimeTicker() {
    gameState.startTime = Date.now();
    gameState.uptimeTimer = setInterval(() => {
        const diffMs = Date.now() - gameState.startTime;
        const totalSecs = Math.floor(diffMs / 1000);
        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;
        gamePanel.uptime.textContent = `0d 0h ${mins}m ${secs}s`;
    }, 1000);
}

// Logger do Terminal inferior
function logTerminal(message, type = "info") {
    const p = document.createElement("p");
    let prefix = "[sysadmin@datacenter ~]$";
    if (type === "error") prefix = "[ERROR]";
    if (type === "success") prefix = "[SUCCESS]";
    
    p.textContent = `${prefix} ${message}`;
    if (type === "error") p.style.color = "var(--color-red)";
    if (type === "success") p.style.color = "var(--color-green)";
    
    gamePanel.terminal.appendChild(p);
    gamePanel.terminal.scrollTop = gamePanel.terminal.scrollHeight;
}

/* -------------------------------------------------------------
   CONSTRUÇÃO DA ESCADA DE PONTUAÇÃO (LADDER)
   ------------------------------------------------------------- */
function buildLadderUI() {
    gamePanel.ladderList.innerHTML = "";
    // Nível 14 no topo, Nível 1 na base
    for (let i = LADDER_VALUES.length - 1; i >= 0; i--) {
        const item = LADDER_VALUES[i];
        const li = document.createElement("li");
        li.className = "ladder-item";
        li.id = `ladder-item-${i}`;
        
        // Aplica colorização baseada no nível de crise
        if (i < 5) {
            li.classList.add("crise-level");
        } else if (i < 10) {
            li.classList.add("alerta-level");
        } else {
            li.classList.add("paz-level");
        }
        
        li.innerHTML = `
            <span class="ladder-val">${item.label}</span>
        `;
        gamePanel.ladderList.appendChild(li);
    }
}

function updateLadderHighlight() {
    for (let i = 0; i < LADDER_VALUES.length; i++) {
        const li = document.getElementById(`ladder-item-${i}`);
        if (!li) continue;
        
        li.classList.remove("active", "past");
        if (i === gameState.currentQuestionIndex) {
            li.classList.add("active");
            li.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else if (i < gameState.currentQuestionIndex) {
            li.classList.add("past");
        }
    }
}

/* -------------------------------------------------------------
   FLUXO DO JOGO
   ------------------------------------------------------------- */
function startNewGame() {
    const nameInput = inputs.playerName.value.trim();
    if (!nameInput) {
        logTerminal("FALHA DE DEPLOY: O username do SysAdmin não pode estar vazio.", "error");
        inputs.playerName.focus();
        // Adiciona um feedback visual temporário na borda do input
        const wrapper = document.querySelector(".terminal-input-wrapper");
        if (wrapper) {
            wrapper.style.borderColor = "var(--color-red)";
            setTimeout(() => { wrapper.style.borderColor = ""; }, 1000);
        }
        return;
    }

    gameState.playerName = nameInput;
    gameState.currentQuestionIndex = 0;
    gameState.skipCount = 3;
    gameState.cardsAvailable = true;
    gameState.internsAvailable = true;
    gameState.isTransitioning = false;
    gameState.usedQuestions = [];
    
    // Reset HUD
    hud.skipUses.textContent = "3 Usos";
    hud.btnSkip.classList.remove("used");
    hud.btnSkip.disabled = false;
    hud.cardsStatus.textContent = "Disponível";
    hud.btnCards.classList.remove("used");
    hud.btnCards.disabled = false;
    hud.internsStatus.textContent = "Disponível";
    hud.btnInterns.classList.remove("used");
    hud.btnInterns.disabled = false;
    
    logTerminal(`Sessão iniciada para o operador: ${gameState.playerName}`);
    logTerminal(`Dificuldade: Gerenciada pela Crise (Escalada Automática)`);

    saveSessionState();

    // Ir para tela de carregamento e buscar pergunta
    switchScreen("loader");
    fetchQuestion();
    startUptimeTicker();
}

function switchScreen(screenKey) {
    Object.keys(screens).forEach(key => {
        screens[key].classList.remove("active");
    });
    screens[screenKey].classList.add("active");
}

// Determinar a dificuldade com base na progressão (escalonamento inteligente)
function getCurrentDifficultyForQuestion() {
    const idx = gameState.currentQuestionIndex; // 0 a 13
    if (idx < 4) return "Fácil";
    if (idx < 9) return "Médio";
    if (idx < 13) return "Difícil";
    return "Supremo";
}

// Buscar pergunta do Banco de Dados Local
function fetchQuestion(isRetry = false) {
    const activeDifficulty = getCurrentDifficultyForQuestion();
    
    // Logs de carregamento simulados no loader
    gamePanel.loaderLogs.innerHTML = `
        <p>> [SYSTEM] Solicitando pergunta nível [${activeDifficulty}] para a contingência local...</p>
        <p>> [SYSTEM] Consultando tabelas offline em memória...</p>
    `;
    
    const startTime = Date.now();
    
    // Simula um pequeno atraso (300 a 600ms) para manter a imersão visual do terminal
    const delay = Math.floor(Math.random() * 300) + 300;
    
    setTimeout(() => {
        try {
            // Mapeamento para as chaves desacentuadas do BANCO_DE_PERGUNTAS
            const difficultyMapping = {
                "Fácil": "facil",
                "Médio": "medio",
                "Difícil": "dificil",
                "Supremo": "supremo"
            };
            const dbKey = difficultyMapping[activeDifficulty] || "facil";
            const pool = BANCO_DE_PERGUNTAS[dbKey];
            if (!pool || pool.length === 0) {
                throw new Error(`Nenhuma pergunta cadastrada para a dificuldade ${activeDifficulty}.`);
            }
            
            // Filtra as perguntas não utilizadas na rodada atual
            let availableQuestions = pool.filter(q => !gameState.usedQuestions.includes(q.pergunta));
            
            // Se todas as perguntas da categoria já foram usadas, resetamos para esta categoria e permitimos reuso
            if (availableQuestions.length === 0) {
                // Filtramos do gameState.usedQuestions apenas aquelas que pertencem a este pool
                const poolQuestionsTexts = pool.map(q => q.pergunta);
                gameState.usedQuestions = gameState.usedQuestions.filter(text => !poolQuestionsTexts.includes(text));
                availableQuestions = pool;
            }
            
            // Seleciona uma aleatória
            const randomIndex = Math.floor(Math.random() * availableQuestions.length);
            const questionData = availableQuestions[randomIndex];
            
            // Guarda no histórico de perguntas usadas
            gameState.usedQuestions.push(questionData.pergunta);
            gameState.currentQuestion = questionData;
            
            // Simula latência ultra-baixa de acesso ao disco local
            const latency = Math.floor(Math.random() * 4) + 1; // 1 a 4ms
            gamePanel.latency.textContent = `${latency} ms`;
            
            logTerminal(`Chamado #${gameState.currentQuestionIndex + 1} carregado com sucesso do DB local (${latency}ms). Dificuldade: ${activeDifficulty}`);
            
            // Exibe tela do jogo e renderiza pergunta
            switchScreen("game");
            renderQuestion();
            updateLadderHighlight();
            
        } catch (error) {
            logTerminal(error.message, "error");
            
            gamePanel.loaderLogs.innerHTML += `
                <p style="color: var(--color-red)">> [CRITICAL_ERROR] Falha de Banco de Dados: ${error.message}</p>
                <button onclick="resetToWelcome()" class="btn-primary-small" style="margin-top: 15px;">Voltar ao Menu</button>
            `;
        }
    }, delay);
}

// Renderiza a pergunta na UI
function renderQuestion() {
    const q = gameState.currentQuestion;
    gamePanel.difficultyBadge.textContent = getCurrentDifficultyForQuestion();
    gamePanel.questionIndex.textContent = `Chamado #${gameState.currentQuestionIndex + 1} / 14`;
    gamePanel.questionText.textContent = q.pergunta;
    
    gamePanel.altButtons.forEach((btn, index) => {
        btn.className = "alt-btn glass"; // Limpa estados anteriores de classes
        btn.disabled = false;            // Garante que o botão está nativamente ativo para a nova pergunta
        btn.style.opacity = "";          // Limpa opacidade residual do 'Reiniciar Servidor'
        btn.style.pointerEvents = "";    // Garante reativação dos cliques para a nova pergunta
        const altTextEl = document.getElementById(`alt-${index}-text`);
        altTextEl.textContent = q.alternativas[index];
    });
    
    gameState.isTransitioning = false;
}

/* -------------------------------------------------------------
   SELEÇÃO DE RESPOSTAS
   ------------------------------------------------------------- */
function selectAlternative(selectedIndex) {
    gameState.isTransitioning = true;
    playClickSound();
    
    // Destaca a alternativa selecionada visualmente
    gamePanel.altButtons.forEach((btn, idx) => {
        if (idx === selectedIndex) {
            btn.classList.add("selected");
        }
        btn.classList.add("disabled"); // impede novos cliques
        btn.disabled = true;           // Desabilita nativamente para evitar cliques múltiplos
    });
    
    logTerminal(`Operador selecionou a alternativa: ${String.fromCharCode(65 + selectedIndex)}`);
    
    // Efeito de suspense antes de dar o resultado (1.5 segundos)
    setTimeout(() => {
        const correctIndex = gameState.currentQuestion.correta;
        
        if (selectedIndex === correctIndex) {
            // Acertou!
            playSuccessSound();
            gamePanel.altButtons[selectedIndex].classList.remove("selected");
            gamePanel.altButtons[selectedIndex].classList.add("correct");
            logTerminal(`Alternativa CORRETA! Processamento concluído sem gargalos.`, "success");
            
            setTimeout(() => {
                advanceGame();
            }, 1800);
            
        } else {
            // Errou!
            playFailureSound();
            gamePanel.altButtons[selectedIndex].classList.remove("selected");
            gamePanel.altButtons[selectedIndex].classList.add("incorrect");
            gamePanel.altButtons[correctIndex].classList.add("correct"); // Revela correta
            
            const correctText = gameState.currentQuestion.alternativas[correctIndex];
            logTerminal(`Alternativa INCORRETA! A resposta correta era: ${String.fromCharCode(65 + correctIndex)}) ${correctText}`, "error");
            
            // Adiciona classe de Kernel Panic para acionar o efeito visual no CSS
            document.body.classList.add("kernel-panic");
            
            setTimeout(() => {
                triggerGameOver(false); // Fim de jogo por falha
            }, 2000);
        }
    }, 1500);
}

// Avança para a próxima pergunta ou tela de vitória
function advanceGame() {
    if (gameState.currentQuestionIndex === 13) {
        // Chegou ao fim da escada e ganhou!
        triggerGameOver(true);
    } else {
        gameState.currentQuestionIndex++;
        saveSessionState();
        switchScreen("loader");
        fetchQuestion();
    }
}

/* -------------------------------------------------------------
   MECÂNICAS DE AJUDAS (LIFELINES)
   ------------------------------------------------------------- */

// 1. REBOOT (sudo reboot)
function executeSkipHelp() {
    if (gameState.isTransitioning || gameState.skipCount <= 0) return;
    
    playClickSound();
    gameState.skipCount--;
    hud.skipUses.textContent = `${gameState.skipCount} Usos`;
    
    if (gameState.skipCount === 0) {
        hud.btnSkip.classList.add("used");
        hud.btnSkip.disabled = true; // Desabilita nativamente após esgotar os 3 usos
    }
    
    saveSessionState();
    logTerminal(`Comando 'sudo reboot' enviado. Reiniciando chamado sem impacto na pontuação...`);
    switchScreen("loader");
    fetchQuestion();
}

// 2. REINICIAR O SERVIDOR (ELIMINA 2 ALTERNATIVAS INCORRETAS)
function executeServerRestartHelp() {
    if (gameState.isTransitioning || !gameState.cardsAvailable) return;
    
    playClickSound();
    gameState.cardsAvailable = false;
    hud.cardsStatus.textContent = "Indisponível";
    hud.btnCards.classList.add("used");
    hud.btnCards.disabled = true; // Desabilita nativamente o botão de ajuda (uso único por jogo)
    
    saveSessionState();
    logTerminal(`Reiniciando o servidor de aplicação para limpar conexões zumbis...`);
    
    // Encontra as 3 alternativas erradas
    const correctIdx = gameState.currentQuestion.correta;
    let incorrectIndices = [0, 1, 2, 3].filter(idx => idx !== correctIdx);
    
    // Escolhe exatamente duas alternativas erradas aleatoriamente
    shuffleArray(incorrectIndices);
    const toDisable = incorrectIndices.slice(0, 2);
    
    // Desabilita visualmente e impede cliques
    toDisable.forEach(idx => {
        gamePanel.altButtons[idx].classList.add("disabled");
        gamePanel.altButtons[idx].disabled = true; // Desabilita nativamente o botão na pergunta atual
        gamePanel.altButtons[idx].style.opacity = "0.25";
    });
    
    logTerminal(`Servidor reiniciado. Duas alternativas incorretas foram eliminadas com sucesso.`, "success");
}

// 3. CHAMAR OS DEVS (UNIVERSITÁRIOS)
function openInternsHelp() {
    if (gameState.isTransitioning || !gameState.internsAvailable) return;
    
    playClickSound();
    gameState.internsAvailable = false;
    hud.internsStatus.textContent = "Indisponível";
    hud.btnInterns.classList.add("used");
    hud.btnInterns.disabled = true; // Desabilita nativamente o botão de ajuda (uso único por jogo)
    
    saveSessionState();
    logTerminal(`Acionando time de desenvolvedores para analisar a arquitetura...`);
    
    const correctIdx = gameState.currentQuestion.correta;
    const diff = getCurrentDifficultyForQuestion();
    
    // Define a probabilidade dos devs acertarem com base na dificuldade
    let correctVotes = 0;
    if (diff === "Fácil") {
        correctVotes = Math.floor(Math.random() * 15) + 70; // 70-84%
    } else if (diff === "Médio") {
        correctVotes = Math.floor(Math.random() * 15) + 55; // 55-69%
    } else if (diff === "Difícil") {
        correctVotes = Math.floor(Math.random() * 11) + 42; // 42-52%
    } else {
        correctVotes = Math.floor(Math.random() * 7) + 34; // 34-40%
    }
    
    let votes = [0, 0, 0, 0];
    votes[correctIdx] = correctVotes;
    
    let remainingVotes = 100 - correctVotes;
    let incorrectIndices = [0, 1, 2, 3].filter(idx => idx !== correctIdx);
    
    // Distribui os votos de forma que a resposta correta seja estritamente maior
    let attempts = 0;
    while (attempts < 100) {
        let v1 = Math.floor(Math.random() * (Math.min(remainingVotes, correctVotes - 1) + 1));
        let remaining2 = remainingVotes - v1;
        let v2 = Math.floor(Math.random() * (Math.min(remaining2, correctVotes - 1) + 1));
        let v3 = remaining2 - v2;
        
        if (v3 < correctVotes && v1 + v2 + v3 === remainingVotes) {
            votes[incorrectIndices[0]] = v1;
            votes[incorrectIndices[1]] = v2;
            votes[incorrectIndices[2]] = v3;
            break;
        }
        attempts++;
    }
    
    // Fallback de contingência
    if (votes[incorrectIndices[0]] + votes[incorrectIndices[1]] + votes[incorrectIndices[2]] !== remainingVotes) {
        const share = Math.floor(remainingVotes / 3);
        votes[incorrectIndices[0]] = share;
        votes[incorrectIndices[1]] = share;
        votes[incorrectIndices[2]] = remainingVotes - (share * 2);
    }
    
    // Atualiza barras visuais no modal com delay para animação
    modals.interns.classList.add("active");
    
    const labels = ["a", "b", "c", "d"];
    labels.forEach((label, idx) => {
        const fill = document.getElementById(`bar-${label}`);
        const text = document.getElementById(`pct-${label}`);
        
        // Força animação partindo de 0%
        fill.style.height = "0%";
        text.textContent = "0%";
        
        setTimeout(() => {
            fill.style.height = `${votes[idx]}%`;
            text.textContent = `${votes[idx]}%`;
        }, 150);
    });
    
    logTerminal(`Desenvolvedores responderam: "Eles disseram que na máquina deles funciona!"`);
}

// 4. DESISTÊNCIA (PEDIR DEMISSÃO)
function executeQuitGame() {
    if (gameState.isTransitioning) return;
    
    playClickSound();
    // Pega o valor da última pergunta respondida com sucesso
    const lastAnsweredIdx = gameState.currentQuestionIndex - 1;
    const finalAmountLabel = lastAnsweredIdx >= 0 ? LADDER_VALUES[lastAnsweredIdx].label : "Nenhum (Resignou no Início)";
    const finalAmountVal = lastAnsweredIdx >= 0 ? lastAnsweredIdx + 1 : 0;
    
    logTerminal(`O operador ${gameState.playerName} assinou o pedido de demissão voluntária.`);
    
    clearInterval(gameState.uptimeTimer);
    clearSessionState();
    
    saveScore(finalAmountLabel, finalAmountVal);
    
    endScreens.gameoverReason.textContent = "Motivo: O operador solicitou demissão voluntária para evitar sobrecarga de estresse e garantir o status estável alcançado.";
    endScreens.gameoverScore.textContent = `Status de Crise Final: ${finalAmountLabel}`;
    
    switchScreen("gameover");
}

/* -------------------------------------------------------------
   MECÂNICA DE FIM DE JOGO E REBOOT
   ------------------------------------------------------------- */
function triggerGameOver(isVictory) {
    clearInterval(gameState.uptimeTimer);
    clearSessionState();
    
    if (isVictory) {
        const winLabel = LADDER_VALUES[13].label;
        logTerminal(`Parabéns! 100% Uptime atingido pelo operador ${gameState.playerName}!`, "success");
        endScreens.victoryScore.textContent = `Status de Crise Final: ${winLabel}`;
        saveScore(winLabel, 14);
        switchScreen("victory");
    } else {
        const failedLevel = LADDER_VALUES[gameState.currentQuestionIndex].label;
        const correctIndex = gameState.currentQuestion.correta;
        const correctText = gameState.currentQuestion.alternativas[correctIndex];
        
        logTerminal(`Servidor caiu! Kernel Panic no Datacenter de Produção.`, "error");
        saveScore(failedLevel, gameState.currentQuestionIndex + 1);
        
        endScreens.gameoverReason.textContent = `Motivo: A resposta incorreta na pergunta #${gameState.currentQuestionIndex + 1} comprometeu o banco de dados. A resposta correta era a alternativa ${String.fromCharCode(65 + correctIndex)}: "${correctText}".`;
        endScreens.gameoverScore.textContent = `Status de Crise Final: ${failedLevel}`;
        
        // Remove a classe de Kernel Panic para voltar a exibição normal
        document.body.classList.remove("kernel-panic");
        
        switchScreen("gameover");
    }
}

function resetToWelcome() {
    playClickSound();
    clearInterval(gameState.uptimeTimer);
    clearSessionState();
    gamePanel.uptime.textContent = "0d 0h 0m";
    
    // Reseta visibilidade da tela inicial e limpa nome
    inputs.welcomeForm.classList.add("hidden");
    inputs.welcomeActions.classList.remove("hidden");
    document.getElementById("welcome-about-menu").classList.remove("hidden");
    inputs.playerName.value = "";
    
    switchScreen("welcome");
}

/* -------------------------------------------------------------
   MÉTODOS AUXILIARES
   ------------------------------------------------------------- */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/* -------------------------------------------------------------
   SISTEMA DE RANKING (LOCALSTORAGE)
   ------------------------------------------------------------- */
function saveScore(prizeLabel, prizeValue) {
    try {
        let ranking = JSON.parse(localStorage.getItem("sysadmin_ranking")) || [];
        
        // Novo registro de pontuação
        const newScore = {
            name: gameState.playerName,
            difficulty: gameState.initialDifficulty,
            prize: prizeLabel,
            numericPrize: prizeValue,
            timestamp: Date.now()
        };
        
        ranking.push(newScore);
        
        // Ordena por maior pontuação (numericPrize desc), depois mais recente
        ranking.sort((a, b) => {
            if (b.numericPrize !== a.numericPrize) {
                return b.numericPrize - a.numericPrize;
            }
            return b.timestamp - a.timestamp;
        });
        
        // Mantém apenas o Top 5
        ranking = ranking.slice(0, 5);
        
        localStorage.setItem("sysadmin_ranking", JSON.stringify(ranking));
        logTerminal(`Pontuação salva no ranking local: ${prizeLabel} (${gameState.playerName})`);
    } catch (e) {
        logTerminal("Falha ao salvar dados no localStorage.", "error");
    }
}

function openRankingModal() {
    try {
        const ranking = JSON.parse(localStorage.getItem("sysadmin_ranking")) || [];
        modals.rankingBody.innerHTML = "";
        
        if (ranking.length === 0) {
            modals.rankingBody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align: center; color: var(--color-text-secondary); font-style: italic;">
                        Nenhum SysAdmin no Hall da Fama ainda. Seja o primeiro a fazer o deploy!
                    </td>
                </tr>
            `;
        } else {
            // Garante exibição de apenas o Top 5
            ranking.slice(0, 5).forEach((score, index) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td style="font-weight: 700;">#${index + 1}</td>
                    <td>${escapeHTML(score.name)}</td>
                    <td><span class="badge" style="font-size: 0.65rem;">${score.difficulty}</span></td>
                    <td style="color: var(--color-green); font-weight: 700;">${score.prize}</td>
                `;
                modals.rankingBody.appendChild(tr);
            });
        }
        
        modals.ranking.classList.add("active");
        logTerminal("Hall da Fama (Ranking) carregado e exibido.");
    } catch (e) {
        logTerminal("Falha ao ler dados de ranking do localStorage.", "error");
    }
}

function clearRanking() {
    if (confirm("Deseja realmente limpar todos os logs de ranking do Datacenter?")) {
        localStorage.removeItem("sysadmin_ranking");
        openRankingModal();
        logTerminal("Logs de ranking resetados com sucesso.", "success");
    }
}

// Utilitário para evitar ataques XSS na tabela de ranking
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function openAboutModal() {
    playClickSound();
    modals.about.classList.add("active");
    logTerminal("Modal 'About' aberto.");
}

/* -------------------------------------------------------------
   PERSISTÊNCIA DE SESSÃO E RECOVERY
   ------------------------------------------------------------- */
function saveSessionState() {
    try {
        const sessionData = {
            playerName: gameState.playerName,
            currentQuestionIndex: gameState.currentQuestionIndex,
            skipCount: gameState.skipCount,
            cardsAvailable: gameState.cardsAvailable,
            internsAvailable: gameState.internsAvailable,
            usedQuestions: gameState.usedQuestions,
            inGame: true
        };
        localStorage.setItem("sysadmin_session", JSON.stringify(sessionData));
    } catch (e) {
        console.error("Error saving session state:", e);
    }
}

function clearSessionState() {
    try {
        localStorage.removeItem("sysadmin_session");
    } catch (e) {
        console.error("Error clearing session state:", e);
    }
}

function checkForSavedSession() {
    try {
        const saved = JSON.parse(localStorage.getItem("sysadmin_session"));
        if (saved && saved.inGame) {
            modals.restoreName.textContent = saved.playerName;
            modals.restoreProgress.textContent = `Chamado #${saved.currentQuestionIndex + 1} / 14`;
            modals.restore.classList.add("active");
        }
    } catch (e) {
        console.error("Error reading saved session:", e);
    }
}

function restoreGameSession(sessionData) {
    gameState.playerName = sessionData.playerName;
    gameState.currentQuestionIndex = sessionData.currentQuestionIndex;
    gameState.skipCount = sessionData.skipCount;
    gameState.cardsAvailable = sessionData.cardsAvailable;
    gameState.internsAvailable = sessionData.internsAvailable;
    gameState.usedQuestions = sessionData.usedQuestions || [];
    gameState.isTransitioning = false;
    
    // Restore HUD state
    hud.skipUses.textContent = `${gameState.skipCount} Usos`;
    if (gameState.skipCount === 0) {
        hud.btnSkip.classList.add("used");
        hud.btnSkip.disabled = true;
    } else {
        hud.btnSkip.classList.remove("used");
        hud.btnSkip.disabled = false;
    }
    
    if (!gameState.cardsAvailable) {
        hud.cardsStatus.textContent = "Indisponível";
        hud.btnCards.classList.add("used");
        hud.btnCards.disabled = true;
    } else {
        hud.cardsStatus.textContent = "Disponível";
        hud.btnCards.classList.remove("used");
        hud.btnCards.disabled = false;
    }
    
    if (!gameState.internsAvailable) {
        hud.internsStatus.textContent = "Indisponível";
        hud.btnInterns.classList.add("used");
        hud.btnInterns.disabled = true;
    } else {
        hud.internsStatus.textContent = "Disponível";
        hud.btnInterns.classList.remove("used");
        hud.btnInterns.disabled = false;
    }
    
    logTerminal(`Sessão restaurada para o operador: ${gameState.playerName}`);
    logTerminal(`Retomando do chamado chamado #${gameState.currentQuestionIndex + 1}...`);
    
    // Close modal
    modals.restore.classList.remove("active");
    
    // Go to loader and fetch question
    switchScreen("loader");
    fetchQuestion();
    startUptimeTicker();
}

/* -------------------------------------------------------------
   EFEITOS SONOROS NATIVOS (WEB AUDIO API)
   ------------------------------------------------------------- */
let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playClickSound() {
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);
        
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
        console.error("Audio error:", e);
    }
}

function playSuccessSound() {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        
        const notes = [261.63, 329.63, 392.00, 523.25];
        const duration = 0.1;
        const gap = 0.08;
        
        notes.forEach((freq, index) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = "square";
            osc.frequency.setValueAtTime(freq, now + index * gap);
            
            gain.gain.setValueAtTime(0.0, now + index * gap);
            gain.gain.linearRampToValueAtTime(0.15, now + index * gap + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.01, now + index * gap + duration);
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start(now + index * gap);
            osc.stop(now + index * gap + duration);
        });
    } catch (e) {
        console.error("Audio error:", e);
    }
}

function playFailureSound() {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        const duration = 1.0;
        
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(60, now + duration);
        
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 10;
        lfoGain.gain.value = 30;
        
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.2, now + duration - 0.2);
        gain.gain.exponentialRampToValueAtTime(0.01, now + duration);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        lfo.start(now);
        osc.start(now);
        
        lfo.stop(now + duration);
        osc.stop(now + duration);
    } catch (e) {
        console.error("Audio error:", e);
    }
}
