USE universe;

INSERT INTO personality (id, letter, `name`, `description`, story_title, story_description) VALUES (
    1,
    'R',
    'Realista',
    'Essas pessoas costumam ser boas em trabalhos mecânicos ou atléticos. Bons cursos universitários para pessoas realistas são...',
    'A Jornada na Vila dos Desafios.',
    'Ao desembarcar na Ilha você chega primeiro na vila dos Desafios, onde você se encontra em um grupo de exploradores destemidos. O desafio é enfrentar o desconhecido e superar obstáculos físicos. Cada decisão que você toma molda sua jornada, testando sua coragem, habilidades práticas e determinação.'
);

INSERT INTO personality (id, letter, `name`, `description`, story_title, story_description) VALUES (
    2,
    'I',
    'Investigativo',
    'Essas pessoas gostam de observar, aprender, analisar e resolver problemas. Bons cursos universitários para pessoas investigativas são...',
    'A Aventura Investigativa na Vila do Conhecimento',
    'Após uma longa jornada de desafios, você se depara com um ambiente dedicado à ciência e pesquisa. Os habitantes locais são estudiosos apaixonados por descobertas. Suas escolhas ao interagir com eles revelarão sua inclinação para a análise lógica, resolução de problemas e curiosidade intelectual.'
);

INSERT INTO personality (id, letter, `name`, `description`, story_title, story_description) VALUES (
    3,
    'A',
    'Artístico',
    'Essas pessoas gostam de trabalhar em situações não estruturadas, onde possam usar a criatividade. Bons cursos para pessoas artísticas são...',
    'A Jornada Criativa na Vila das Artes e Expressão',
    'A próxima parada é a Vila das Artes e Expressão. Aqui, a criatividade flui como água. Envolva-se em desafios que exploram sua capacidade artística e sua preferência por expressão individual. A interação com artistas locais revelará aspectos essenciais de sua alma criativa.
'
);

INSERT INTO personality (id, letter, `name`, `description`, story_title, story_description) VALUES (
    4,
    'S',
    'Social',
    'Essas pessoas gostam de trabalhar com outras pessoas, em vez de trabalhar com coisas. Bons cursos universitários para pessoas sociais são...',
    'A Missão de Ajuda na Vila da Solidariedade',
    'Na Vila da Solidariedade, você se une a uma missão humanitária. Sua empatia e disposição para ajudar os outros são postas à prova. As histórias compartilhadas e desafios enfrentados destacarão suas habilidades sociais e o impacto positivo que você pode ter na comunidade.'
);

INSERT INTO personality (id, letter, `name`, `description`, story_title, story_description) VALUES (
    5,
    'E',
    'Empreendedor',
    'Essas pessoas gostam de trabalhar com outras pessoas e gostam de persuadir e atuar. Bons cursos universitários para pessoas empreendedoras são...',
    'A Aventura Empreendedora na Vila das Oportunidades',
    'Já na Vila das Oportunidades, você é envolvido pela atmosfera empreendedora. Hospedado em um resort de visão futurista, desafios empresariais estimulam sua ambição e habilidades empreendedoras. Conecte-se com visionários locais para descobrir o alcance de seus sonhos de negócios.'
);

INSERT INTO personality (id, letter, `name`, `description`, story_title, story_description) VALUES (
    6,
    'C',
    'Convencional',
    'Essas pessoas são muito detalhistas, organizadas e gostam de trabalhar com dados. Bons cursos universitários para pessoas convencionais são...',
    'A Experiência na Vila da Organização e Eficiência',
    'A última parada é a Vila da Organização e Eficiência. Aqui, a precisão é valorizada, e o ambiente de escritório é altamente estruturado. Enfrente desafios que testam suas habilidades organizacionais e sua afinidade por ambientes controlados.'
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    1,
    'I like to work on cars',
    'Desafio Mecânico na Floresta',
    'Enquanto explora a densa floresta da ilha, você encontra um antigo veículo abandonado. Ele está estragado, mas você percebe que pode ser consertado e usado para explorar a ilha com mais facilidade. O que você faz?',
    (SELECT id FROM personality WHERE letter = 'R')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    2,
    'I like to build things',
    'Construção de Abrigo na Praia',
    'Você e seu grupo chegam à praia e percebem que precisam de um abrigo para passar a noite. O que você faz?',
    (SELECT id FROM personality WHERE letter = 'R')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    3,
    'I like putting things together or assembling things',
    'Trabalhando com as Ferramentas',
    'Você encontra um conjunto de ferramentas abandonadas em uma clareira da floresta. O que você faz?',
    (SELECT id FROM personality WHERE letter = 'R')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    4,
    'I like to work outdoors',
    'Exploração ao Ar Livre',
    'Durante uma caminhada, você se depara com um caminho que leva a uma colina com vista para o oceano. O que você faz?',
    (SELECT id FROM personality WHERE letter = 'R')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    5,
    'I like to cook',
    'Cozinhando no Acampamento',
    'À noite, é a sua vez de preparar o jantar para o grupo, porém há poucos ingredientes. O que você faz?',
    (SELECT id FROM personality WHERE letter = 'R')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    6,
    'I like to take care of animals',
    'Cuidando dos Animais na Ilha',
    'Você encontra um animal ferido na ilha. O que você faz?',
    (SELECT id FROM personality WHERE letter = 'R')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    7,
    'I am a practical person',
    'Vigilância Noturna do Acampamento',
    'Durante a noite, o grupo decide que alguém deve ficar de vigia para garantir a segurança do acampamento. O que você faz?',
    (SELECT id FROM personality WHERE letter = 'R')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    8,
    'I like to do puzzles',
    'Resolvendo Quebra-Cabeças Complexos',
    'Você encontra uma oficina de quebra-cabeças que desafiam sua lógica e raciocínio. O que você faz?',
    (SELECT id FROM personality WHERE letter = 'I')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    9,
    'I like to do experiments',
    'Conduzindo Experimentos Científicos',
    'Um laboratório de experimentos científicos está disponível na ilha. Como você se sente ao conduzir experimentos?',
    (SELECT id FROM personality WHERE letter = 'I')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    10,
    'I enjoy science',
    'Explorando a Ciência com Paixão',
    'Você se depara com uma série de apresentações científicas na ilha. Como você reage a essa oportunidade de aprender mais sobre a ciência?',
    (SELECT id FROM personality WHERE letter = 'I')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    11,
    'I enjoy trying to figure out how things work',
    'Desvendando o Funcionamento das Coisas',
    'Enquanto explora, você se depara com dispositivos e máquinas complexas. Como você reage à oportunidade de entender como esses objetos funcionam?',
    (SELECT id FROM personality WHERE letter = 'I')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    12,
    'I like to analyze things (problems/situations)',
    'Analisando Problemas e Situações',
    'Em sua jornada, você é confrontado com problemas complexos que exigem análise e solução. Como você lida com esses desafios?',
    (SELECT id FROM personality WHERE letter = 'I')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    13,
    'I like working with numbers or charts',
    'Trabalhando com Números e Gráficos',
    'Você encontra uma oportunidade de trabalhar com dados, números e gráficos. Como você aborda essa tarefa?',
    (SELECT id FROM personality WHERE letter = 'I')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    14,
    "I'm good at math",
    'Habilidade em Matemática',
    'Durante sua estadia na ilha, você percebe que suas habilidades matemáticas são essenciais para resolver diversos desafios. Como você se sente sobre isso?',
    (SELECT id FROM personality WHERE letter = 'I')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    15,
    'I am good at working independently',
    'Explorando a Ilha Sozinho',
    'Você decide começar sua jornada explorando a ilha por conta própria. Como você se sente em relação a essa escolha?',
    (SELECT id FROM personality WHERE letter = 'A')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    16,
    'I like to read about art and music',
    'Leitura sobre Arte e Música',
    'Durante sua jornada, você encontra uma biblioteca repleta de livros sobre arte e música. Como você decide gastar seu tempo?',
    (SELECT id FROM personality WHERE letter = 'A')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    17,
    'I enjoy creative writing',
    'Escrevendo de Forma Criativa',
    'Ao seguir em frente, você encontra no chão um convite para um workshop de escrita criativa acontecendo ao oeste da ilha. Como você aborda essa oportunidade?',
    (SELECT id FROM personality WHERE letter = 'A')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    18,
    'I am a creative person',
    'Explorando sua Criatividade',
    'Enquanto caminha, você se depara com outras pessoas realizando uma série de atividades, como pintura e escultura. Como você decide se envolver nessas atividades?',
    (SELECT id FROM personality WHERE letter = 'A')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    19,
    'I like to play instruments or sing',
    'Tocando Instrumentos Musicais e Cantando',
    'Em uma árvore, há um cartaz de um grupo de músicos, o cartaz informa que estão procurando um novo integrante, você terá a oportunidade de tocar instrumentos musicais ou cantar com eles. O que decide fazer?',
    (SELECT id FROM personality WHERE letter = 'A')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    20,
    'I like acting in plays',
    'Atuando em Peças Teatrais',
    'Um membro de uma companhia de teatro local avista você e o convida para participar de uma peça teatral. Como você reage a essa oportunidade de atuar?',
    (SELECT id FROM personality WHERE letter = 'A')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    21,
    'I like to draw',
    'Expressão Artística por Meio do Desenho',
    'Ao final do dia, você encontra um local tranquilo com uma linda paisagem, o lugar ideal para praticar o desenho e a arte visual. Como você decide usar seu tempo?',
    (SELECT id FROM personality WHERE letter = 'A')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    22,
    'I like to work in teams',
    'Equipe de Resgate na Floresta',
    'Ao chegar na ilha, você se tornou membro de uma equipe de resgate responsável por encontrar e ajudar sobreviventes de um acidente em uma área remota da ilha. Como você aborda a coordenação da equipe e o apoio às vítimas?',
    (SELECT id FROM personality WHERE letter = 'S')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    23,
    'I like to teach or train people',
    'Treinando Novos Voluntários',
    'Novos voluntários chegam na ilha e você é encarregado de treiná-los nas tarefas de ajuda humanitária. Como você aborda a tarefa de ensinar e orientar os novos membros?',
    (SELECT id FROM personality WHERE letter = 'S')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    24,
    'I like trying to help people solve their problems',
    'Aconselhando uma Família em Crise',
    'Você encontra uma família na ilha que está passando por uma crise emocional devido ao trauma do acidente. Como você lida com a situação para ajudá-los a superar seus problemas?',
    (SELECT id FROM personality WHERE letter = 'S')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    25,
    'I enjoy learning about other cultures',
    'Promovendo a Compreensão Cultural',
    'Durante suas interações com os habitantes locais, você percebe que existem diferentes costumes e tradições culturais. Como você reage a essa diversidade cultural?',
    (SELECT id FROM personality WHERE letter = 'S')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    26,
    'I like to get into discussions about issues',
    'Facilitando Discussões entre Grupos',
    'Em um momento de tensão, habitantes de diferentes bairros têm opiniões conflitantes sobre como lidar com os desafios. Como você aborda a situação para promover o diálogo e a resolução de conflitos?',
    (SELECT id FROM personality WHERE letter = 'S')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    27,
    'I am interested in healing people',
    'Assistência na Construção de Abrigos',
    'Parte da missão inclui a construção de abrigos temporários para os necessitados na costa da ilha. Como você contribui para essa tarefa?',
    (SELECT id FROM personality WHERE letter = 'S')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    28,
    'I like helping people',
    'Auxílio na Organização de Suprimentos',
    'Você foi designado a organizar e distribuir suprimentos vitais para os necessitados na costa da ilha. Como você lida com essa tarefa crucial?',
    (SELECT id FROM personality WHERE letter = 'S')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    29,
    'I like to try to influence or persuade people',
    'Identificando uma Oportunidade de Negócio',
    'Enquanto caminha pelas instalações, você identifica uma oportunidade de negócio única. Como você aborda a tarefa de convencer outros a se juntarem a você nessa empreitada?',
    (SELECT id FROM personality WHERE letter = 'E')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    30,
    'I set goals for myself',
    'Definindo Metas para o Negócio',
    'Você ingressou em um time de empreendedores, é hora de definir metas claras para o negócio. Como você conduz essa etapa?',
    (SELECT id FROM personality WHERE letter = 'E')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    31,
    'I like selling things',
    'Desenvolvendo uma Estratégia de Vendas',
    'Para que o negócio do seu time prospere, é crucial desenvolver uma estratégia de vendas eficaz. Como você se envolve nesse processo?',
    (SELECT id FROM personality WHERE letter = 'E')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    32,
    'I am quick to take on new responsibilities',
    'Assumindo Novas Responsabilidades',
    'À medida que o negócio cresce, novas responsabilidades surgem. Como você reage ao assumir novos desafios?',
    (SELECT id FROM personality WHERE letter = 'E')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    33,
    'I would like to start my own business',
    'Perspectiva de Abrir Seu Próprio Negócio',
    'Com o conhecimento que você adquiriu no time, você começa a considerar a possibilidade de iniciar seu próprio empreendimento. Como você aborda essa ideia?',
    (SELECT id FROM personality WHERE letter = 'E')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    34,
    'I like to lead',
    'Assumindo a Liderança da Equipe',
    'Com o crescimento do negócio, você acaba sendo escolhido como líder da equipe. Como você exerce essa liderança?',
    (SELECT id FROM personality WHERE letter = 'E')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    35,
    'I like to give speeches',
    'Realizando Apresentações de Negócios',
    'Chega o momento de apresentar seu negócio a investidores em potencial. Como você se prepara e conduz as apresentações?',
    (SELECT id FROM personality WHERE letter = 'E')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    36,
    'I like to organize things (files, desks/offices)',
    'Organizando o Acampamento',
    'Quando você chega à ilha, é responsável por organizar o acampamento base. Como você aborda a tarefa de criar um espaço organizado e funcional?',
    (SELECT id FROM personality WHERE letter = 'C')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    37,
    'I like to have clear instructions to follow',
    'Seguindo Instruções Cruciais',
    'Durante uma atividade no acampamento, você recebe instruções críticas para uma tarefa importante. Como você lida com as instruções detalhadas?',
    (SELECT id FROM personality WHERE letter = 'C')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    38,
    "I wouldn't mind working 8 hours per day in an office",
    'Trabalho em Horário de Expediente',
    'Você foi escolhido para trabalhar em um escritório, organizando papéis e materiais por um dia inteiro. Como você aborda essa situação?',
    (SELECT id FROM personality WHERE letter = 'C')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    39,
    'I pay attention to details',
    'Atenção aos Detalhes',
    'Enquanto realiza uma tarefa minuciosa, você percebe que a atenção aos detalhes é essencial. Como você lida com essa demanda?',
    (SELECT id FROM personality WHERE letter = 'C')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    40,
    'I like to do filing or typing',
    'Organizando Documentos de Missão',
    'Você é designado para organizar documentos importantes relacionados a missões anteriores. Como você enfrenta essa tarefa de arquivamento?',
    (SELECT id FROM personality WHERE letter = 'C')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    41,
    'I am good at keeping records of my work',
    'Mantendo Registros Precisos',
    'Durante uma missão, você deverá manter registros precisos das atividades da equipe. Como você aborda essa responsabilidade?',
    (SELECT id FROM personality WHERE letter = 'C')
);

INSERT INTO `statement` (id, riasec_title, story_title, story_text, personality_id) VALUES (
    42,
    'I would like to work in an office',
    'Trabalhando em um Ambiente de Escritório',
    'Após sua experiência na ilha, você considera a possibilidade de trabalhar em um ambiente de escritório como uma carreira desejável?',
    (SELECT id FROM personality WHERE letter = 'C')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Decide dedicar um tempo para tentar consertar o veículo e torná-lo funcional.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to work on cars')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Ignora o veículo e continua a explorar a pé, sem se preocupar com sua condição.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to work on cars')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Reúne os membros do grupo e começa a construir um abrigo resistente e prático.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to build things')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa que outros cuidem da construção do abrigo e você relaxa à beira da praia.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to build things')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Pega as ferramentas e começa a desmontá-las e a estudá-las para entender seu funcionamento.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like putting things together or assembling things')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa as ferramentas onde estão, já que não vê utilidade imediata para elas.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like putting things together or assembling things')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Decide subir a colina, apreciando a paisagem e a sensação de aventura ao ar livre.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to work outdoors')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Opta por não subir a colina, preferindo permanecer na área mais segura e familiar.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to work outdoors')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Assume o desafio e cria um prato delicioso com os ingredientes à mão.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to cook')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa que outra pessoa cuide da cozinha, não se sentindo à vontade para improvisar com os ingredientes limitados.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to cook')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Decide cuidar dela, fornecendo abrigo e alimentos para sua recuperação.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to take care of animals')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Ignora o animal ferido e continua explorando, não querendo se envolver com animais selvagens.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to take care of animals')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Assume a responsabilidade de vigiar o acampamento, permanecendo alerta e atento a qualquer movimento ou som suspeito.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am a practical person')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Prefere não ficar de vigia e decide deixar essa tarefa para outra pessoa do grupo.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am a practical person')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Aceita o desafio, dedicando tempo para resolver cada quebra-cabeça.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to do puzzles')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Opta por não participar dos quebra-cabeças, preferindo não gastar tempo com atividades desse tipo.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to do puzzles')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Fica animado com a oportunidade de realizar experimentos, explorando a ciência e a investigação.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to do experiments')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Decide não se envolver em experimentos, não se sentindo interessado em atividades científicas.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to do experiments')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Participa das apresentações com entusiasmo, apreciando a oportunidade de explorar tópicos científicos.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy science')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Escolhe não participar das apresentações, não tendo interesse em temas científicos.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy science')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Dedica tempo para desvendar o funcionamento dessas máquinas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy trying to figure out how things work')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Ignora as máquinas e não se preocupa em entender seu funcionamento.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy trying to figure out how things work')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Analisa cuidadosamente os problemas e situações, buscando soluções baseadas em evidências e análises.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to analyze things (problems/situations)')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Evita se envolver em problemas complexos e prefere lidar com situações mais simples.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to analyze things (problems/situations)')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Trabalha com números e gráficos de forma meticulosa, apreciando a análise de dados.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like working with numbers or charts')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Opta por não se envolver em tarefas que envolvem números e gráficos, não tendo interesse nesse tipo de atividade.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like working with numbers or charts')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Fica confiante em suas habilidades matemáticas e aborda os desafios com destreza.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = "I'm good at math")
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Evita tarefas que envolvem matemática e procura outras atividades.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = "I'm good at math")
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Aprecia a oportunidade de explorar a ilha sozinho, valorizando sua independência.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am good at working independently')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Prefere não se aventurar sozinho e busca a companhia de outros exploradores.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am good at working independently')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Fica empolgado com a oportunidade de ler sobre arte e música, buscando inspiração nessas áreas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to read about art and music')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Escolhe não gastar tempo lendo e busca outras atividades na ilha.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to read about art and music')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Aceita o convite com entusiasmo, ansioso para se envolver na escrita criativa.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy creative writing')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Declina o convite, preferindo não participar do workshop de escrita.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy creative writing')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Explora sua criatividade participando ativamente das atividades artísticas disponíveis.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am a creative person')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Opta por não se envolver nas atividades criativas e segue explorando a ilha de outras maneiras.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am a creative person')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Junta-se ao grupo e se envolve ativamente na música, aproveitando a chance de tocar ou cantar.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to play instruments or sing')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Opta por não se juntar ao grupo musical e continua explorando a ilha.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to play instruments or sing')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Aceita o convite com empolgação e se envolve na atuação teatral, explorando sua criatividade no palco.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like acting in plays')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Declina o convite, não se sentindo à vontade em atuar em peças teatrais.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like acting in plays')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Abraça a oportunidade de se expressar artisticamente, dedicando-se ao desenho e à criação visual.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to draw')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Opta por não se envolver com isso, descansa um pouco e segue explorando a ilha de outras maneiras.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to draw')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Lidera a equipe com empatia e coordena os esforços para salvar vidas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to work in teams')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa a liderança para outra pessoa, preferindo um papel mais passivo na equipe.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to work in teams')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Dedica tempo para treinar e apoiar os voluntários novatos, compartilhando seus conhecimentos.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to teach or train people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa que outra pessoa assuma a responsabilidade pelo treinamento, não se sentindo à vontade nesse papel.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to teach or train people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Oferece apoio emocional e orientação à família, ouvindo atentamente seus problemas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like trying to help people solve their problems')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa a situação para outros voluntários, sentindo que não é a pessoa certa para lidar com questões emocionais e dar conselhos.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like trying to help people solve their problems')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Mostra interesse genuíno em aprender sobre as culturas locais, buscando a compreensão e o respeito mútuo.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy learning about other cultures')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Mantém-se distante das interações culturais, preferindo não se envolver muito nessas questões.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy learning about other cultures')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Inicia conversas construtivas entre os grupos, buscando um entendimento comum e soluções pacíficas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to get into discussions about issues')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Fica à margem das discussões e não se envolve na mediação dos conflitos.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to get into discussions about issues')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Trabalha em equipe para construir abrigos e fornecer ajuda prática aos necessitados.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am interested in healing people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa a construção dos abrigos para os outros, preferindo não se envolver em tarefas que exijam esforço físico.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am interested in healing people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Garante que os suprimentos sejam distribuídos de forma eficaz, priorizando as necessidades das pessoas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like helping people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa a logística de distribuição para outros membros, não se envolvendo diretamente nessa questão logística.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like helping people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Desenvolve uma estratégia persuasiva e apresenta sua ideia com entusiasmo para atrair colaboradores.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to try to influence or persuade people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Opta por não compartilhar sua ideia com os outros, mantendo-a em segredo.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to try to influence or persuade people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Estabelece metas ambiciosas e específicas para orientar o progresso da equipe.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I set goals for myself')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa que outros membros da equipe definam as metas, não querendo assumir o controle.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I set goals for myself')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Assume a liderança na criação de uma estratégia de vendas, aproveitando sua habilidade em persuadir clientes.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like selling things')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa que outros membros da equipe lidem com a estratégia de vendas, não se sentindo à vontade nesse papel.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like selling things')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Aceita rapidamente novas responsabilidades, mostrando disposição para liderar em diferentes áreas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am quick to take on new responsibilities')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Prefere manter seu papel atual e evita assumir novas responsabilidades.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am quick to take on new responsibilities')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Fica entusiasmado com a perspectiva e começa a fazer planos para um negócio próprio.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I would like to start my own business')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Decide permanecer focado no negócio atual e não considera a ideia de iniciar algo novo.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I would like to start my own business')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Assume o papel de líder, orientando a equipe e tomando decisões estratégicas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to lead')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Recusa-se a assumir a liderança, preferindo um papel menos proeminente.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to lead')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Prepara apresentações convincentes e assume a tarefa de falar em público para atrair investidores.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to give speeches')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa que outros membros da equipe lidem com as apresentações, evitando falar em público.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to give speeches')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Organiza meticulosamente o acampamento, atribuindo lugares para cada item e criando um ambiente ordenado.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to organize things (files, desks/offices)')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa que outros cuidem dessa parte, não se importando muito com o arranjo dos itens.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to organize things (files, desks/offices)')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Segue as instruções cuidadosamente, garantindo que cada passo seja seguido à risca para obter resultados precisos.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to have clear instructions to follow')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Tenta realizar a tarefa de maneira mais intuitiva, não seguindo estritamente as instruções fornecidas.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to have clear instructions to follow')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Aceita trabalhar o dia inteiro no escritório, mostrando disposição para cumprir um horário de expediente.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = "I wouldn't mind working 8 hours per day in an office")
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Resiste à ideia de passar o dia inteiro em um escritório e procura alternativas.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = "I wouldn't mind working 8 hours per day in an office")
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Investe tempo e esforço em verificar cada detalhe, garantindo a precisão e a qualidade do trabalho.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I pay attention to details')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Aborda a tarefa de maneira mais geral, não se concentrando excessivamente nos detalhes.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I pay attention to details')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Organiza os documentos de maneira metódica, classificando-os e arquivando-os de acordo com um sistema organizado.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to do filing or typing')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Deixa os documentos em desordem, não se preocupando muito com a organização.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to do filing or typing')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Mantém registros detalhados e precisos de todas as atividades da equipe, garantindo uma documentação completa.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am good at keeping records of my work')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Não se preocupa muito em manter registros e assume uma abordagem mais relaxada quanto à documentação.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am good at keeping records of my work')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Fica intrigado com a ideia de trabalhar em um escritório e considera essa opção como uma carreira possível.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I would like to work in an office')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'Prefere trabalhar em um ambiente diferente, menos estruturado do que um escritório.',
    5 * 2 + 1 - 2,
    (SELECT id FROM `statement` WHERE riasec_title = 'I would like to work in an office')
);

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (1, 'Administração', 'https://www.ufsm.br/cursos/graduacao/santa-maria/administracao', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (2, 'Administração', 'https://www.ufsm.br/cursos/tecnico/santa-maria/administracao', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (3, 'Agricultura', 'https://www.ufsm.br/cursos/tecnico/santa-maria/agricultura', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (4, 'Agricultura de Precisão', 'https://www.ufsm.br/cursos/tecnico/santa-maria/agricultura-de-precisao', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (5, 'Agrimensura', 'https://www.ufsm.br/cursos/tecnico/santa-maria/agrimensura', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (6, 'Agronegócio', 'https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-agronegocio', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (7, 'Agronomia', 'https://www.ufsm.br/cursos/graduacao/santa-maria/agronomia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (8, 'Agropecuária', 'https://www.ufsm.br/cursos/tecnico/santa-maria/agropecuaria', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (9, 'Alimentos', 'https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-alimentos', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (10, 'Alimentos', 'https://www.ufsm.br/cursos/tecnico/santa-maria/alimentos', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (11, 'Arquitetura e Urbanismo', 'https://www.ufsm.br/cursos/graduacao/santa-maria/arquitetura-e-urbanismo', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (12, 'Arquivologia', 'https://www.ufsm.br/cursos/graduacao/santa-maria/arquivologia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (13, 'Artes Cênicas', 'https://www.ufsm.br/cursos/graduacao/santa-maria/artes-cenicas', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (14, 'Artes Visuais', 'https://www.ufsm.br/cursos/graduacao/santa-maria/artes-visuais', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (15, 'Automação Industrial', 'https://www.ufsm.br/cursos/tecnico/santa-maria/automacao-industrial', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (16, 'Ciência da Computação', 'https://www.ufsm.br/cursos/graduacao/santa-maria/ciencia-da-computacao', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (17, 'Ciências Biológicas', 'https://www.ufsm.br/cursos/graduacao/santa-maria/ciencias-biologicas', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (18, 'Ciências Contábeis', 'https://www.ufsm.br/cursos/graduacao/santa-maria/ciencias-contabeis', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (19, 'Ciências da Religião', 'https://www.ufsm.br/cursos/graduacao/educacao-a-distancia/ciencias-da-religiao', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (20, 'Ciências Econômicas', 'https://www.ufsm.br/cursos/graduacao/santa-maria/ciencias-economicas', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (21, 'Ciências Sociais', 'https://www.ufsm.br/cursos/graduacao/santa-maria/ciencias-sociais', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (22, 'Comércio', 'https://www.ufsm.br/cursos/tecnico/santa-maria/comercio', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (23, 'Contabilidade', 'https://www.ufsm.br/cursos/tecnico/santa-maria/contabilidade', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (24, 'Cuidados de Idosos', 'https://www.ufsm.br/cursos/tecnico/santa-maria/cuidados-de-idosos', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (25, 'Dança', 'https://www.ufsm.br/cursos/graduacao/santa-maria/danca', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (26, 'Desenho Industrial', 'https://www.ufsm.br/cursos/graduacao/santa-maria/desenho-industrial', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (27, 'Direito', 'https://www.ufsm.br/cursos/graduacao/santa-maria/direito', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (28, 'Educação do Campo', 'https://www.ufsm.br/cursos/graduacao/educacao-a-distancia/educacao-do-campo', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (29, 'Educação Especial', 'https://www.ufsm.br/cursos/graduacao/santa-maria/educacao-especial', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (30, 'Educação Física', 'https://www.ufsm.br/cursos/graduacao/santa-maria/educacao-fisica', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (31, 'Educação Indígena', 'https://www.ufsm.br/cursos/graduacao/educacao-a-distancia/educacao-indigena', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (32, 'Eletromecânica', 'https://www.ufsm.br/cursos/tecnico/santa-maria/eletromecanica', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (33, 'Eletrônica', 'https://www.ufsm.br/cursos/tecnico/santa-maria/eletronica', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (34, 'Eletrônica Industrial', 'https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-eletronica-industrial', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (35, 'Eletrotécnica', 'https://www.ufsm.br/cursos/tecnico/santa-maria/eletrotecnica', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (36, 'Enfermagem', 'https://www.ufsm.br/cursos/graduacao/santa-maria/enfermagem', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (37, 'Enfermagem', 'https://www.ufsm.br/cursos/tecnico/santa-maria/enfermagem', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (38, 'Engenharia Acústica', 'https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-acustica', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (39, 'Engenharia Aeroespacial', 'https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-aeroespacial', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (40, 'Engenharia Agrícola', 'https://www.ufsm.br/cursos/graduacao/cachoeira-do-sul/engenharia-agricola', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (41, 'Engenharia Ambiental e Sanitária', 'https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-sanitaria-e-ambiental', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (42, 'Engenharia Civil', 'https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-civil', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (43, 'Engenharia da Computação', 'https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-de-computacao', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (44, 'Engenharia de Controle e Automação', 'https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-de-controle-e-automacao', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (45, 'Engenharia de Produção', 'https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-de-producao', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (46, 'Engenharia de Telecomunicações', 'https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-de-telecomunicacoes', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (47, 'Engenharia de Transportes e Logística', 'https://www.ufsm.br/cursos/graduacao/cachoeira-do-sul/engenharia-de-transportes-e-logistica', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (48, 'Engenharia Elétrica', 'https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-eletrica', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (49, 'Engenharia Florestal', 'https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-florestal', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (50, 'Engenharia Mecânica', 'https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-mecanica', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (51, 'Engenharia Química', 'https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-quimica', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (52, 'Estatística', 'https://www.ufsm.br/cursos/graduacao/santa-maria/estatistica', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (53, 'Fabricação Mecânica', 'https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-fabricacao-mecanica', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (54, 'Farmácia', 'https://www.ufsm.br/cursos/graduacao/santa-maria/farmacia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (55, 'Farmácia', 'https://www.ufsm.br/cursos/tecnico/santa-maria/farmacia', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (56, 'Filosofia', 'https://www.ufsm.br/cursos/graduacao/santa-maria/filosofia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (57, 'Física', 'https://www.ufsm.br/cursos/graduacao/santa-maria/fisica', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (58, 'Fisioterapia', 'https://www.ufsm.br/cursos/graduacao/santa-maria/fisioterapia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (59, 'Fonoaudiologia', 'https://www.ufsm.br/cursos/graduacao/santa-maria/fonoaudiologia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (60, 'Fruticultura', 'https://www.ufsm.br/cursos/tecnico/santa-maria/fruticultura', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (61, 'Geografia', 'https://www.ufsm.br/cursos/graduacao/santa-maria/geografia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (62, 'Geoprocessamento', 'https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-geoprocessamento', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (63, 'Geoprocessamento', 'https://www.ufsm.br/cursos/tecnico/santa-maria/geoprocessamento', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (64, 'Gestão Ambiental', 'https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-gestao-ambiental', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (65, 'Gestão de Cooperativas', 'https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-gestao-de-cooperativas', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (66, 'Gestão de Turismo', 'https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-gestao-de-turismo', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (67, 'História', 'https://www.ufsm.br/cursos/graduacao/santa-maria/historia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (68, 'Informática', 'https://www.ufsm.br/cursos/tecnico/santa-maria/informatica', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (69, 'Informática para Internet', 'https://www.ufsm.br/cursos/tecnico/santa-maria/informatica-para-internet', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (70, 'Jornalismo', 'https://www.ufsm.br/cursos/graduacao/santa-maria/jornalismo', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (71, 'Letras', 'https://www.ufsm.br/cursos/graduacao/santa-maria/letras', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (72, 'Matemática', 'https://www.ufsm.br/cursos/graduacao/santa-maria/matematica', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (73, 'Mecânica', 'https://www.ufsm.br/cursos/tecnico/santa-maria/mecanica', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (74, 'Medicina', 'https://www.ufsm.br/cursos/graduacao/santa-maria/medicina', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (75, 'Medicina Veterinária', 'https://www.ufsm.br/cursos/graduacao/santa-maria/medicina-veterinaria', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (76, 'Meio Ambiente', 'https://www.ufsm.br/cursos/tecnico/santa-maria/meio-ambiente', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (77, 'Meteorologia', 'https://www.ufsm.br/cursos/graduacao/santa-maria/meteorologia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (78, 'Música', 'https://www.ufsm.br/cursos/graduacao/santa-maria/musica', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (79, 'Nutrição', 'https://www.ufsm.br/cursos/graduacao/santa-maria/nutricao', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (80, 'Odontologia', 'https://www.ufsm.br/cursos/graduacao/santa-maria/odontologia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (81, 'Paisagismo', 'https://www.ufsm.br/cursos/tecnico/santa-maria/paisagismo', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (82, 'Pedagogia', 'https://www.ufsm.br/cursos/graduacao/santa-maria/pedagogia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (83, 'Processos Químicos', 'https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-processos-quimicos', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (84, 'Produção Editorial', 'https://www.ufsm.br/cursos/graduacao/santa-maria/producao-editorial', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (85, 'Psicologia', 'https://www.ufsm.br/cursos/graduacao/santa-maria/psicologia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (86, 'Química', 'https://www.ufsm.br/cursos/graduacao/santa-maria/quimica', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (87, 'Química Industrial', 'https://www.ufsm.br/cursos/graduacao/santa-maria/quimica-industrial', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (88, 'Redes de Computadores', 'https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-redes-de-computadores', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (89, 'Relações Internacionais', 'https://www.ufsm.br/cursos/graduacao/santa-maria/relacoes-internacionais', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (90, 'Relações Públicas', 'https://www.ufsm.br/cursos/graduacao/santa-maria/relacoes-publicas', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (91, 'Secretariado', 'https://www.ufsm.br/cursos/tecnico/santa-maria/secretariado', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (92, 'Segurança do Trabalho', 'https://www.ufsm.br/cursos/tecnico/santa-maria/seguranca-do-trabalho', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (93, 'Serviço Social', 'https://www.ufsm.br/cursos/graduacao/santa-maria/servico-social', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (94, 'Sistemas de Informação', 'https://www.ufsm.br/cursos/graduacao/santa-maria/sistemas-de-informacao', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (95, 'Sistemas para Internet', 'https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (96, 'Soldagem', 'https://www.ufsm.br/cursos/tecnico/santa-maria/soldagem', 'Técnico');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (97, 'Teatro', 'https://www.ufsm.br/cursos/graduacao/santa-maria/licenciatura-em-teatro', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (98, 'Terapia Ocupacional', 'https://www.ufsm.br/cursos/graduacao/santa-maria/terapia-ocupacional', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (99, 'Zootecnia', 'https://www.ufsm.br/cursos/graduacao/santa-maria/zootecnia', 'Graduação');

INSERT INTO ufsm_course (id, `name`, `site`, `level`) VALUES (100, 'Zootecnia', 'https://www.ufsm.br/cursos/tecnico/santa-maria/zootecnia', 'Técnico');

INSERT INTO pathway (`name`) VALUES ('Agricultura');

INSERT INTO pathway (`name`) VALUES ('Assistência em saúde');

INSERT INTO pathway (`name`) VALUES ('Computação');

INSERT INTO pathway (`name`) VALUES ('Construção');

INSERT INTO pathway (`name`) VALUES ('Mecânica/maquinário');

INSERT INTO pathway (`name`) VALUES ('Engenharia');

INSERT INTO pathway (`name`) VALUES ('Alimentação e hotelaria');

INSERT INTO pathway (`name`) VALUES ('Recursos naturais');

INSERT INTO pathway (`name`) VALUES ('Serviços de saúde');

INSERT INTO pathway (`name`) VALUES ('Tecnologia industrial e de engenharia');

INSERT INTO pathway (`name`) VALUES ('Comunicação e arte');

INSERT INTO pathway (`name`) VALUES ('Biologia marinha');

INSERT INTO pathway (`name`) VALUES ('Química');

INSERT INTO pathway (`name`) VALUES ('Zoologia');

INSERT INTO pathway (`name`) VALUES ('Medicina');

INSERT INTO pathway (`name`) VALUES ('Economia do consumidor');

INSERT INTO pathway (`name`) VALUES ('Psicologia');

INSERT INTO pathway (`name`) VALUES ('Negócios');

INSERT INTO pathway (`name`) VALUES ('Serviços públicos e humanitários');

INSERT INTO pathway (`name`) VALUES ('Comunicação');

INSERT INTO pathway (`name`) VALUES ('Cosmetologia');

INSERT INTO pathway (`name`) VALUES ('Artes plásticas e cênicas');

INSERT INTO pathway (`name`) VALUES ('Fotografia');

INSERT INTO pathway (`name`) VALUES ('Rádio e televisão');

INSERT INTO pathway (`name`) VALUES ('Design de interiores');

INSERT INTO pathway (`name`) VALUES ('Arquitetura');

INSERT INTO pathway (`name`) VALUES ('Consultoria');

INSERT INTO pathway (`name`) VALUES ('Enfermagem');

INSERT INTO pathway (`name`) VALUES ('Fisioterapia');

INSERT INTO pathway (`name`) VALUES ('Turismo');

INSERT INTO pathway (`name`) VALUES ('Publicidade');

INSERT INTO pathway (`name`) VALUES ('Relações públicas');

INSERT INTO pathway (`name`) VALUES ('Educação');

INSERT INTO pathway (`name`) VALUES ('Marketing de moda');

INSERT INTO pathway (`name`) VALUES ('Mercado imobiliário');

INSERT INTO pathway (`name`) VALUES ('Propaganda/vendas');

INSERT INTO pathway (`name`) VALUES ('Direito');

INSERT INTO pathway (`name`) VALUES ('Ciência política');

INSERT INTO pathway (`name`) VALUES ('Comércio internacional');

INSERT INTO pathway (`name`) VALUES ('Bancos/finanças');

INSERT INTO pathway (`name`) VALUES ('Contabilidade');

INSERT INTO pathway (`name`) VALUES ('Relatórios judiciais');

INSERT INTO pathway (`name`) VALUES ('Seguros');

INSERT INTO pathway (`name`) VALUES ('Administração');

INSERT INTO pathway (`name`) VALUES ('Registros médicos');

INSERT INTO pathway (`name`) VALUES ('Bancos');

INSERT INTO pathway (`name`) VALUES ('Processamento de dados');

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'R'),
    (SELECT id FROM pathway WHERE `name` = 'Agricultura'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'R'),
    (SELECT id FROM pathway WHERE `name` = 'Assistência em saúde'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'R'),
    (SELECT id FROM pathway WHERE `name` = 'Computação'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'R'),
    (SELECT id FROM pathway WHERE `name` = 'Construção'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'R'),
    (SELECT id FROM pathway WHERE `name` = 'Mecânica/maquinário'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'R'),
    (SELECT id FROM pathway WHERE `name` = 'Engenharia'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'R'),
    (SELECT id FROM pathway WHERE `name` = 'Alimentação e hotelaria'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'R'),
    (SELECT id FROM pathway WHERE `name` = 'Recursos naturais'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'R'),
    (SELECT id FROM pathway WHERE `name` = 'Serviços de saúde'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'R'),
    (SELECT id FROM pathway WHERE `name` = 'Tecnologia industrial e de engenharia'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'R'),
    (SELECT id FROM pathway WHERE `name` = 'Comunicação e arte'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'I'),
    (SELECT id FROM pathway WHERE `name` = 'Biologia marinha'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'I'),
    (SELECT id FROM pathway WHERE `name` = 'Engenharia'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'I'),
    (SELECT id FROM pathway WHERE `name` = 'Quimica'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'I'),
    (SELECT id FROM pathway WHERE `name` = 'Zoologia'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'I'),
    (SELECT id FROM pathway WHERE `name` = 'Medicina'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'I'),
    (SELECT id FROM pathway WHERE `name` = 'Economia do consumidor'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'I'),
    (SELECT id FROM pathway WHERE `name` = 'Psicologia'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'I'),
    (SELECT id FROM pathway WHERE `name` = 'Serviços de saúde'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'I'),
    (SELECT id FROM pathway WHERE `name` = 'Negócios'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'I'),
    (SELECT id FROM pathway WHERE `name` = 'Serviços públicos e humanitários'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'I'),
    (SELECT id FROM pathway WHERE `name` = 'Tecnologia industrial e de engenharia'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'A'),
    (SELECT id FROM pathway WHERE `name` = 'Comunicação'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'A'),
    (SELECT id FROM pathway WHERE `name` = 'Cosmetologia'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'A'),
    (SELECT id FROM pathway WHERE `name` = 'Artes plásticas e cênicas'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'A'),
    (SELECT id FROM pathway WHERE `name` = 'Fotografia'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'A'),
    (SELECT id FROM pathway WHERE `name` = 'Rádio e televisão'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'A'),
    (SELECT id FROM pathway WHERE `name` = 'Design de interiores'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'A'),
    (SELECT id FROM pathway WHERE `name` = 'Arquitetura'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'A'),
    (SELECT id FROM pathway WHERE `name` = 'Serviços públicos e humanitários'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'A'),
    (SELECT id FROM pathway WHERE `name` = 'Comunicação e arte'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'S'),
    (SELECT id FROM pathway WHERE `name` = 'Consultoria'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'S'),
    (SELECT id FROM pathway WHERE `name` = 'Enfermagem'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'S'),
    (SELECT id FROM pathway WHERE `name` = 'Fisioterapia'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'S'),
    (SELECT id FROM pathway WHERE `name` = 'Turismo'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'S'),
    (SELECT id FROM pathway WHERE `name` = 'Publicidade'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'S'),
    (SELECT id FROM pathway WHERE `name` = 'Relações públicas'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'S'),
    (SELECT id FROM pathway WHERE `name` = 'Educação'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'S'),
    (SELECT id FROM pathway WHERE `name` = 'Serviços de saúde'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'S'),
    (SELECT id FROM pathway WHERE `name` = 'Serviços públicos e humanitários'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'E'),
    (SELECT id FROM pathway WHERE `name` = 'Marketing de moda'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'E'),
    (SELECT id FROM pathway WHERE `name` = 'Mercado imobiliário'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'E'),
    (SELECT id FROM pathway WHERE `name` = 'Propaganda/vendas'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'E'),
    (SELECT id FROM pathway WHERE `name` = 'Direito'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'E'),
    (SELECT id FROM pathway WHERE `name` = 'Ciência política'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'E'),
    (SELECT id FROM pathway WHERE `name` = 'Comércio internacional'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'E'),
    (SELECT id FROM pathway WHERE `name` = 'Bancos/finanças'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'E'),
    (SELECT id FROM pathway WHERE `name` = 'Negócios'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'E'),
    (SELECT id FROM pathway WHERE `name` = 'Serviços públicos e humanitários'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'E'),
    (SELECT id FROM pathway WHERE `name` = 'Comunicação e arte'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'C'),
    (SELECT id FROM pathway WHERE `name` = 'Contabilidade'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'C'),
    (SELECT id FROM pathway WHERE `name` = 'Relatórios judiciais'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'C'),
    (SELECT id FROM pathway WHERE `name` = 'Seguros'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'C'),
    (SELECT id FROM pathway WHERE `name` = 'Administração'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'C'),
    (SELECT id FROM pathway WHERE `name` = 'Registros médicos'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'C'),
    (SELECT id FROM pathway WHERE `name` = 'Bancos'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'C'),
    (SELECT id FROM pathway WHERE `name` = 'Processamento de dados'),
    1
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'C'),
    (SELECT id FROM pathway WHERE `name` = 'Serviços de saúde'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'C'),
    (SELECT id FROM pathway WHERE `name` = 'Negócios'),
    0
);

INSERT INTO personality_pathway (personality_id, pathway_id, is_main_pathway) VALUES (
    (SELECT id FROM personality WHERE letter = 'C'),
    (SELECT id FROM pathway WHERE `name` = 'Tecnologia industrial e de engenharia'),
    0
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    3
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    4
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    5
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    6
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    7
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    8
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    9
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    10
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    28
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    40
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    60
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    64
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    65
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Agricultura')),
    76
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Assistência em saúde')),
    24
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Assistência em saúde')),
    36
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Assistência em saúde')),
    37
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Assistência em saúde')),
    58
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Assistência em saúde')),
    74
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Assistência em saúde')),
    85
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Assistência em saúde')),
    93
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Assistência em saúde')),
    98
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Computação')),
    16
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Computação')),
    43
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Computação')),
    68
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Computação')),
    69
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Computação')),
    88
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Computação')),
    94
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Computação')),
    95
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Construção')),
    11
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Construção')),
    15
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Construção')),
    26
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Construção')),
    42
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Construção')),
    44
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Construção')),
    50
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Construção')),
    53
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Construção')),
    73
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Construção')),
    96
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Mecânica/maquinário')),
    4
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Mecânica/maquinário')),
    5
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Mecânica/maquinário')),
    15
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Mecânica/maquinário')),
    32
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Mecânica/maquinário')),
    50
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Mecânica/maquinário')),
    53
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Mecânica/maquinário')),
    73
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Mecânica/maquinário')),
    96
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    38
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    39
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    40
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    41
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    42
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    43
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    44
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    45
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    46
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    47
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    48
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    49
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    50
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Engenharia')),
    51
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Alimentação e hotelaria')),
    9
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Alimentação e hotelaria')),
    10
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Alimentação e hotelaria')),
    66
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Alimentação e hotelaria')),
    79
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Alimentação e hotelaria')),
    83
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Alimentação e hotelaria')),
    86
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Alimentação e hotelaria')),
    87
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Alimentação e hotelaria')),
    89
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Alimentação e hotelaria')),
    90
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Recursos naturais')),
    17
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Recursos naturais')),
    28
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Recursos naturais')),
    31
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Recursos naturais')),
    41
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Recursos naturais')),
    49
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Recursos naturais')),
    61
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Recursos naturais')),
    64
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Recursos naturais')),
    76
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Recursos naturais')),
    81
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Recursos naturais')),
    20
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Serviços de saúde')),
    24
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Serviços de saúde')),
    36
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Serviços de saúde')),
    37
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Serviços de saúde')),
    74
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Serviços de saúde')),
    75
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Serviços de saúde')),
    79
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Serviços de saúde')),
    80
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Serviços de saúde')),
    85
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Serviços de saúde')),
    92
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Serviços de saúde')),
    98
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    15
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    32
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    33
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    34
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    35
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    44
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    46
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    48
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    53
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    62
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    63
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    83
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Tecnologia industrial e de engenharia')),
    87
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Comunicação e arte')),
    13
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Comunicação e arte')),
    14
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Comunicação e arte')),
    25
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Comunicação e arte')),
    26
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Comunicação e arte')),
    70
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Comunicação e arte')),
    78
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Comunicação e arte')),
    81
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Comunicação e arte')),
    89
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Comunicação e arte')),
    90
);

INSERT INTO personality_pathway_ufsm_course (personality_pathway_id, ufsm_course_id) VALUES (
    (SELECT id FROM personality_pathway WHERE personality_id = 1 AND pathway_id = (SELECT id FROM pathway WHERE `name` LIKE 'Comunicação e arte')),
    97
);

INSERT INTO user (code, username, email) VALUES ('AAA', 'teste', 'teste@gmail.com');

INSERT INTO test (user_id) VALUES ((SELECT id FROM user WHERE code = 'AAA'));

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    1,
    2
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    2,
    4
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    3,
    6
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    4,
    8
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    5,
    10
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    6,
    11
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    7,
    13
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    8,
    15
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    9,
    17
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    10,
    20
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    11,
    22
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    12,
    24
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    13,
    26
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    14,
    27
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    15,
    29
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    16,
    32
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    17,
    34
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    18,
    35
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    19,
    37
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    20,
    39
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    21,
    42
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    22,
    44
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    23,
    46
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    24,
    48
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    25,
    49
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    26,
    51
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    27,
    53
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    28,
    55
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    29,
    57
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    30,
    59
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    31,
    61
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    32,
    64
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    33,
    65
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    34,
    67
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    35,
    70
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    36,
    71
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    37,
    73
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    38,
    76
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    39,
    77
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    40,
    79
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    41,
    81
);

INSERT INTO test_statement (test_id, statement_id, selected_option_id) VALUES (
    (SELECT id FROM test WHERE user_id = (SELECT id FROM user WHERE code = 'AAA')),
    42,
    84
);
