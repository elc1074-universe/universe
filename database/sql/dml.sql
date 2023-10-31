USE universe;

INSERT INTO personality (id, letter, `name`, `description`, story_title, story_description) VALUES (
    1,
    'R',
    'Realista',
    'Essas pessoas costumam ser boas em trabalhos mecânicos ou atléticos. Bons cursos universitários para pessoas realistas são...',
    'A Jornada na Ilha dos Desafios',
    'Você se encontra em uma aventura empolgante em uma ilha remota. Você está em um grupo de exploradores que está prestes a enfrentar desafios desconhecidos.'
);

INSERT INTO personality (id, letter, `name`, `description`, story_title, story_description) VALUES (
    2,
    'I',
    'Investigativo',
    'Essas pessoas gostam de observar, aprender, analisar e resolver problemas. Bons cursos universitários para pessoas investigativas são...',
    'A Aventura Investigativa na Ilha do Conhecimento',
    'Você desembarca na Ilha do Conhecimento, um lugar dedicado à exploração da ciência, pesquisa e resolução de problemas.'
);

INSERT INTO personality (id, letter, `name`, `description`, story_title, story_description) VALUES (
    3,
    'A',
    'Artístico',
    'Essas pessoas gostam de trabalhar em situações não estruturadas, onde possam usar a criatividade. Bons cursos para pessoas artísticas são...',
    'A Jornada Criativa na Ilha das Artes e Expressão',
    'Você chega à Ilha das Artes e Expressão, um lugar dedicado à criatividade e à expressão artística. Durante sua estadia na ilha, você enfrentará desafios que testarão suas habilidades criativas e sua preferência por trabalhar de forma independente.'
);

INSERT INTO personality (id, letter, `name`, `description`, story_title, story_description) VALUES (
    4,
    'S',
    'Social',
    'Essas pessoas gostam de trabalhar com outras pessoas, em vez de trabalhar com coisas. Bons cursos universitários para pessoas sociais são...',
    'A Missão de Ajuda na Ilha da Solidariedade',
    'Você está em uma missão humanitária na Ilha da Solidariedade, onde a empatia e a ajuda às pessoas são essenciais. Durante sua jornada, você enfrentará desafios que testarão suas habilidades sociais e sua disposição para trabalhar em prol dos outros.'
);

INSERT INTO personality (id, letter, `name`, `description`, story_title, story_description) VALUES (
    5,
    'E',
    'Empreendedor',
    'Essas pessoas gostam de trabalhar com outras pessoas e gostam de persuadir e atuar. Bons cursos universitários para pessoas empreendedoras são...',
    'A Aventura Empreendedora na Ilha das Oportunidades',
    'Você se encontra na Ilha das Oportunidades, onde empreendedores visionários têm a chance de realizar seus sonhos de negócios. Durante sua estadia na ilha você ficará hospedado em um resort, onde enfrentará desafios que testarão suas habilidades empreendedoras e sua ambição.'
);

INSERT INTO personality (id, letter, `name`, `description`, story_title, story_description) VALUES (
    6,
    'C',
    'Convencional',
    'Essas pessoas são muito detalhistas, organizadas e gostam de trabalhar com dados. Bons cursos universitários para pessoas convencionais são...',
    'A Experiência na Ilha da Organização e Eficiência',
    'Você chega à Ilha da Organização e Eficiência, onde a precisão e o trabalho de escritório são altamente valorizados. Sua jornada na ilha incluirá desafios que testarão suas habilidades organizacionais e seu desejo de trabalhar em ambientes estruturados.'
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
    'a) Decide dedicar um tempo para tentar consertar o veículo e torná-lo funcional.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to work on cars')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Ignora o veículo e continua a explorar a pé, sem se preocupar com sua condição.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to work on cars')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Reúne os membros do grupo e começa a construir um abrigo resistente e prático.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to build things')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa que outros cuidem da construção do abrigo e você relaxa à beira da praia.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to build things')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Pega as ferramentas e começa a desmontá-las e a estudá-las para entender seu funcionamento.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like putting things together or assembling things')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa as ferramentas onde estão, já que não vê utilidade imediata para elas.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like putting things together or assembling things')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Decide subir a colina, apreciando a paisagem e a sensação de aventura ao ar livre.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to work outdoors')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Opta por não subir a colina, preferindo permanecer na área mais segura e familiar.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to work outdoors')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Assume o desafio e cria um prato delicioso com os ingredientes à mão.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to cook')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa que outra pessoa cuide da cozinha, não se sentindo à vontade para improvisar com os ingredientes limitados.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to cook')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Decide cuidar dela, fornecendo abrigo e alimentos para sua recuperação.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to take care of animals')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Ignora o animal ferido e continua explorando, não querendo se envolver com animais selvagens.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to take care of animals')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Assume a responsabilidade de vigiar o acampamento, permanecendo alerta e atento a qualquer movimento ou som suspeito.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am a practical person')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Prefere não ficar de vigia e decide deixar essa tarefa para outra pessoa do grupo.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am a practical person')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Aceita o desafio, dedicando tempo para resolver cada quebra-cabeça.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to do puzzles')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Opta por não participar dos quebra-cabeças, preferindo não gastar tempo com atividades desse tipo.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to do puzzles')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Fica animado com a oportunidade de realizar experimentos, explorando a ciência e a investigação.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to do experiments')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Decide não se envolver em experimentos, não se sentindo interessado em atividades científicas.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to do experiments')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Participa das apresentações com entusiasmo, apreciando a oportunidade de explorar tópicos científicos.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy science')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Escolhe não participar das apresentações, não tendo interesse em temas científicos.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy science')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Dedica tempo para desvendar o funcionamento dessas máquinas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy trying to figure out how things work')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Ignora as máquinas e não se preocupa em entender seu funcionamento.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy trying to figure out how things work')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Analisa cuidadosamente os problemas e situações, buscando soluções baseadas em evidências e análises.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to analyze things (problems/situations)')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Evita se envolver em problemas complexos e prefere lidar com situações mais simples.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to analyze things (problems/situations)')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Trabalha com números e gráficos de forma meticulosa, apreciando a análise de dados.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like working with numbers or charts')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Opta por não se envolver em tarefas que envolvem números e gráficos, não tendo interesse nesse tipo de atividade.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like working with numbers or charts')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Fica confiante em suas habilidades matemáticas e aborda os desafios com destreza.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = "I'm good at math")
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Evita tarefas que envolvem matemática e procura outras atividades.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = "I'm good at math")
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Aprecia a oportunidade de explorar a ilha sozinho, valorizando sua independência.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am good at working independently')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Prefere não se aventurar sozinho e busca a companhia de outros exploradores.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am good at working independently')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Fica empolgado com a oportunidade de ler sobre arte e música, buscando inspiração nessas áreas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to read about art and music')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Escolhe não gastar tempo lendo e busca outras atividades na ilha.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to read about art and music')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Aceita o convite com entusiasmo, ansioso para se envolver na escrita criativa.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy creative writing')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Declina o convite, preferindo não participar do workshop de escrita.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy creative writing')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Explora sua criatividade participando ativamente das atividades artísticas disponíveis.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am a creative person')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Opta por não se envolver nas atividades criativas e segue explorando a ilha de outras maneiras.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am a creative person')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Junta-se ao grupo e se envolve ativamente na música, aproveitando a chance de tocar ou cantar.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to play instruments or sing')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Opta por não se juntar ao grupo musical e continua explorando a ilha.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to play instruments or sing')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Aceita o convite com empolgação e se envolve na atuação teatral, explorando sua criatividade no palco.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like acting in plays')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Declina o convite, não se sentindo à vontade em atuar em peças teatrais.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like acting in plays')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Abraça a oportunidade de se expressar artisticamente, dedicando-se ao desenho e à criação visual.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to draw')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Opta por não se envolver com isso, descansa um pouco e segue explorando a ilha de outras maneiras.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to draw')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Lidera a equipe com empatia e coordena os esforços para salvar vidas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to work in teams')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa a liderança para outra pessoa, preferindo um papel mais passivo na equipe.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to work in teams')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Dedica tempo para treinar e apoiar os voluntários novatos, compartilhando seus conhecimentos.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to teach or train people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa que outra pessoa assuma a responsabilidade pelo treinamento, não se sentindo à vontade nesse papel.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to teach or train people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Oferece apoio emocional e orientação à família, ouvindo atentamente seus problemas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like trying to help people solve their problems')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa a situação para outros voluntários, sentindo que não é a pessoa certa para lidar com questões emocionais e dar conselhos.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like trying to help people solve their problems')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Mostra interesse genuíno em aprender sobre as culturas locais, buscando a compreensão e o respeito mútuo.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy learning about other cultures')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Mantém-se distante das interações culturais, preferindo não se envolver muito nessas questões.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I enjoy learning about other cultures')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Inicia conversas construtivas entre os grupos, buscando um entendimento comum e soluções pacíficas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to get into discussions about issues')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Fica à margem das discussões e não se envolve na mediação dos conflitos.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to get into discussions about issues')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Trabalha em equipe para construir abrigos e fornecer ajuda prática aos necessitados.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am interested in healing people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa a construção dos abrigos para os outros, preferindo não se envolver em tarefas que exijam esforço físico.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am interested in healing people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Garante que os suprimentos sejam distribuídos de forma eficaz, priorizando as necessidades das pessoas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like helping people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa a logística de distribuição para outros membros, não se envolvendo diretamente nessa questão logística.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like helping people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Desenvolve uma estratégia persuasiva e apresenta sua ideia com entusiasmo para atrair colaboradores.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to try to influence or persuade people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Opta por não compartilhar sua ideia com os outros, mantendo-a em segredo.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to try to influence or persuade people')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Estabelece metas ambiciosas e específicas para orientar o progresso da equipe.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I set goals for myself')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa que outros membros da equipe definam as metas, não querendo assumir o controle.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I set goals for myself')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Assume a liderança na criação de uma estratégia de vendas, aproveitando sua habilidade em persuadir clientes.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like selling things')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa que outros membros da equipe lidem com a estratégia de vendas, não se sentindo à vontade nesse papel.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like selling things')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Aceita rapidamente novas responsabilidades, mostrando disposição para liderar em diferentes áreas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am quick to take on new responsibilities')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Prefere manter seu papel atual e evita assumir novas responsabilidades.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am quick to take on new responsibilities')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Fica entusiasmado com a perspectiva e começa a fazer planos para um negócio próprio.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I would like to start my own business')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Decide permanecer focado no negócio atual e não considera a ideia de iniciar algo novo.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I would like to start my own business')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Assume o papel de líder, orientando a equipe e tomando decisões estratégicas.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to lead')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Recusa-se a assumir a liderança, preferindo um papel menos proeminente.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to lead')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Prepara apresentações convincentes e assume a tarefa de falar em público para atrair investidores.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to give speeches')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa que outros membros da equipe lidem com as apresentações, evitando falar em público.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to give speeches')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Organiza meticulosamente o acampamento, atribuindo lugares para cada item e criando um ambiente ordenado.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to organize things (files, desks/offices)')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa que outros cuidem dessa parte, não se importando muito com o arranjo dos itens.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to organize things (files, desks/offices)')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Segue as instruções cuidadosamente, garantindo que cada passo seja seguido à risca para obter resultados precisos.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to have clear instructions to follow')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Tenta realizar a tarefa de maneira mais intuitiva, não seguindo estritamente as instruções fornecidas.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to have clear instructions to follow')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Aceita trabalhar o dia inteiro no escritório, mostrando disposição para cumprir um horário de expediente.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = "I wouldn't mind working 8 hours per day in an office")
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Resiste à ideia de passar o dia inteiro em um escritório e procura alternativas.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = "I wouldn't mind working 8 hours per day in an office")
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Investe tempo e esforço em verificar cada detalhe, garantindo a precisão e a qualidade do trabalho.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I pay attention to details')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Aborda a tarefa de maneira mais geral, não se concentrando excessivamente nos detalhes.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I pay attention to details')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Organiza os documentos de maneira metódica, classificando-os e arquivando-os de acordo com um sistema organizado.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to do filing or typing')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Deixa os documentos em desordem, não se preocupando muito com a organização.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I like to do filing or typing')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Mantém registros detalhados e precisos de todas as atividades da equipe, garantindo uma documentação completa.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am good at keeping records of my work')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Não se preocupa muito em manter registros e assume uma abordagem mais relaxada quanto à documentação.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I am good at keeping records of my work')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'a) Fica intrigado com a ideia de trabalhar em um escritório e considera essa opção como uma carreira possível.',
    1,
    (SELECT id FROM `statement` WHERE riasec_title = 'I would like to work in an office')
);

INSERT INTO `option` (`description`, `value`, statement_id) VALUES (
    'b) Prefere trabalhar em um ambiente diferente, menos estruturado do que um escritório.',
    0,
    (SELECT id FROM `statement` WHERE riasec_title = 'I would like to work in an office')
);
