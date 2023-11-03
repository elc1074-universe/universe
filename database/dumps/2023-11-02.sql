CREATE DATABASE  IF NOT EXISTS `universe` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `universe`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: universe
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `option`
--

DROP TABLE IF EXISTS `option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `option` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(511) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` tinyint unsigned NOT NULL,
  `statement_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_option_description` (`description`),
  KEY `fk_option_statement` (`statement_id`),
  CONSTRAINT `fk_option_statement` FOREIGN KEY (`statement_id`) REFERENCES `statement` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option`
--

LOCK TABLES `option` WRITE;
/*!40000 ALTER TABLE `option` DISABLE KEYS */;
INSERT INTO `option` (`id`, `description`, `value`, `statement_id`) VALUES (1,'a) Decide dedicar um tempo para tentar consertar o veículo e torná-lo funcional.',1,1),(2,'b) Ignora o veículo e continua a explorar a pé, sem se preocupar com sua condição.',9,1),(3,'a) Reúne os membros do grupo e começa a construir um abrigo resistente e prático.',1,2),(4,'b) Deixa que outros cuidem da construção do abrigo e você relaxa à beira da praia.',9,2),(5,'a) Pega as ferramentas e começa a desmontá-las e a estudá-las para entender seu funcionamento.',1,3),(6,'b) Deixa as ferramentas onde estão, já que não vê utilidade imediata para elas.',9,3),(7,'a) Decide subir a colina, apreciando a paisagem e a sensação de aventura ao ar livre.',1,4),(8,'b) Opta por não subir a colina, preferindo permanecer na área mais segura e familiar.',9,4),(9,'a) Assume o desafio e cria um prato delicioso com os ingredientes à mão.',1,5),(10,'b) Deixa que outra pessoa cuide da cozinha, não se sentindo à vontade para improvisar com os ingredientes limitados.',9,5),(11,'a) Decide cuidar dela, fornecendo abrigo e alimentos para sua recuperação.',1,6),(12,'b) Ignora o animal ferido e continua explorando, não querendo se envolver com animais selvagens.',9,6),(13,'a) Assume a responsabilidade de vigiar o acampamento, permanecendo alerta e atento a qualquer movimento ou som suspeito.',1,7),(14,'b) Prefere não ficar de vigia e decide deixar essa tarefa para outra pessoa do grupo.',9,7),(15,'a) Aceita o desafio, dedicando tempo para resolver cada quebra-cabeça.',1,8),(16,'b) Opta por não participar dos quebra-cabeças, preferindo não gastar tempo com atividades desse tipo.',9,8),(17,'a) Fica animado com a oportunidade de realizar experimentos, explorando a ciência e a investigação.',1,9),(18,'b) Decide não se envolver em experimentos, não se sentindo interessado em atividades científicas.',9,9),(19,'a) Participa das apresentações com entusiasmo, apreciando a oportunidade de explorar tópicos científicos.',1,10),(20,'b) Escolhe não participar das apresentações, não tendo interesse em temas científicos.',9,10),(21,'a) Dedica tempo para desvendar o funcionamento dessas máquinas.',1,11),(22,'b) Ignora as máquinas e não se preocupa em entender seu funcionamento.',9,11),(23,'a) Analisa cuidadosamente os problemas e situações, buscando soluções baseadas em evidências e análises.',1,12),(24,'b) Evita se envolver em problemas complexos e prefere lidar com situações mais simples.',9,12),(25,'a) Trabalha com números e gráficos de forma meticulosa, apreciando a análise de dados.',1,13),(26,'b) Opta por não se envolver em tarefas que envolvem números e gráficos, não tendo interesse nesse tipo de atividade.',9,13),(27,'a) Fica confiante em suas habilidades matemáticas e aborda os desafios com destreza.',1,14),(28,'b) Evita tarefas que envolvem matemática e procura outras atividades.',9,14),(29,'a) Aprecia a oportunidade de explorar a ilha sozinho, valorizando sua independência.',1,15),(30,'b) Prefere não se aventurar sozinho e busca a companhia de outros exploradores.',9,15),(31,'a) Fica empolgado com a oportunidade de ler sobre arte e música, buscando inspiração nessas áreas.',1,16),(32,'b) Escolhe não gastar tempo lendo e busca outras atividades na ilha.',9,16),(33,'a) Aceita o convite com entusiasmo, ansioso para se envolver na escrita criativa.',1,17),(34,'b) Declina o convite, preferindo não participar do workshop de escrita.',9,17),(35,'a) Explora sua criatividade participando ativamente das atividades artísticas disponíveis.',1,18),(36,'b) Opta por não se envolver nas atividades criativas e segue explorando a ilha de outras maneiras.',9,18),(37,'a) Junta-se ao grupo e se envolve ativamente na música, aproveitando a chance de tocar ou cantar.',1,19),(38,'b) Opta por não se juntar ao grupo musical e continua explorando a ilha.',9,19),(39,'a) Aceita o convite com empolgação e se envolve na atuação teatral, explorando sua criatividade no palco.',1,20),(40,'b) Declina o convite, não se sentindo à vontade em atuar em peças teatrais.',9,20),(41,'a) Abraça a oportunidade de se expressar artisticamente, dedicando-se ao desenho e à criação visual.',1,21),(42,'b) Opta por não se envolver com isso, descansa um pouco e segue explorando a ilha de outras maneiras.',9,21),(43,'a) Lidera a equipe com empatia e coordena os esforços para salvar vidas.',1,22),(44,'b) Deixa a liderança para outra pessoa, preferindo um papel mais passivo na equipe.',9,22),(45,'a) Dedica tempo para treinar e apoiar os voluntários novatos, compartilhando seus conhecimentos.',1,23),(46,'b) Deixa que outra pessoa assuma a responsabilidade pelo treinamento, não se sentindo à vontade nesse papel.',9,23),(47,'a) Oferece apoio emocional e orientação à família, ouvindo atentamente seus problemas.',1,24),(48,'b) Deixa a situação para outros voluntários, sentindo que não é a pessoa certa para lidar com questões emocionais e dar conselhos.',9,24),(49,'a) Mostra interesse genuíno em aprender sobre as culturas locais, buscando a compreensão e o respeito mútuo.',1,25),(50,'b) Mantém-se distante das interações culturais, preferindo não se envolver muito nessas questões.',9,25),(51,'a) Inicia conversas construtivas entre os grupos, buscando um entendimento comum e soluções pacíficas.',1,26),(52,'b) Fica à margem das discussões e não se envolve na mediação dos conflitos.',9,26),(53,'a) Trabalha em equipe para construir abrigos e fornecer ajuda prática aos necessitados.',1,27),(54,'b) Deixa a construção dos abrigos para os outros, preferindo não se envolver em tarefas que exijam esforço físico.',9,27),(55,'a) Garante que os suprimentos sejam distribuídos de forma eficaz, priorizando as necessidades das pessoas.',1,28),(56,'b) Deixa a logística de distribuição para outros membros, não se envolvendo diretamente nessa questão logística.',9,28),(57,'a) Desenvolve uma estratégia persuasiva e apresenta sua ideia com entusiasmo para atrair colaboradores.',1,29),(58,'b) Opta por não compartilhar sua ideia com os outros, mantendo-a em segredo.',9,29),(59,'a) Estabelece metas ambiciosas e específicas para orientar o progresso da equipe.',1,30),(60,'b) Deixa que outros membros da equipe definam as metas, não querendo assumir o controle.',9,30),(61,'a) Assume a liderança na criação de uma estratégia de vendas, aproveitando sua habilidade em persuadir clientes.',1,31),(62,'b) Deixa que outros membros da equipe lidem com a estratégia de vendas, não se sentindo à vontade nesse papel.',9,31),(63,'a) Aceita rapidamente novas responsabilidades, mostrando disposição para liderar em diferentes áreas.',1,32),(64,'b) Prefere manter seu papel atual e evita assumir novas responsabilidades.',9,32),(65,'a) Fica entusiasmado com a perspectiva e começa a fazer planos para um negócio próprio.',1,33),(66,'b) Decide permanecer focado no negócio atual e não considera a ideia de iniciar algo novo.',9,33),(67,'a) Assume o papel de líder, orientando a equipe e tomando decisões estratégicas.',1,34),(68,'b) Recusa-se a assumir a liderança, preferindo um papel menos proeminente.',9,34),(69,'a) Prepara apresentações convincentes e assume a tarefa de falar em público para atrair investidores.',1,35),(70,'b) Deixa que outros membros da equipe lidem com as apresentações, evitando falar em público.',9,35),(71,'a) Organiza meticulosamente o acampamento, atribuindo lugares para cada item e criando um ambiente ordenado.',1,36),(72,'b) Deixa que outros cuidem dessa parte, não se importando muito com o arranjo dos itens.',9,36),(73,'a) Segue as instruções cuidadosamente, garantindo que cada passo seja seguido à risca para obter resultados precisos.',1,37),(74,'b) Tenta realizar a tarefa de maneira mais intuitiva, não seguindo estritamente as instruções fornecidas.',9,37),(75,'a) Aceita trabalhar o dia inteiro no escritório, mostrando disposição para cumprir um horário de expediente.',1,38),(76,'b) Resiste à ideia de passar o dia inteiro em um escritório e procura alternativas.',9,38),(77,'a) Investe tempo e esforço em verificar cada detalhe, garantindo a precisão e a qualidade do trabalho.',1,39),(78,'b) Aborda a tarefa de maneira mais geral, não se concentrando excessivamente nos detalhes.',9,39),(79,'a) Organiza os documentos de maneira metódica, classificando-os e arquivando-os de acordo com um sistema organizado.',1,40),(80,'b) Deixa os documentos em desordem, não se preocupando muito com a organização.',9,40),(81,'a) Mantém registros detalhados e precisos de todas as atividades da equipe, garantindo uma documentação completa.',1,41),(82,'b) Não se preocupa muito em manter registros e assume uma abordagem mais relaxada quanto à documentação.',9,41),(83,'a) Fica intrigado com a ideia de trabalhar em um escritório e considera essa opção como uma carreira possível.',1,42),(84,'b) Prefere trabalhar em um ambiente diferente, menos estruturado do que um escritório.',9,42);
/*!40000 ALTER TABLE `option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pathway`
--

DROP TABLE IF EXISTS `pathway`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pathway` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(63) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_pathway_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pathway`
--

LOCK TABLES `pathway` WRITE;
/*!40000 ALTER TABLE `pathway` DISABLE KEYS */;
INSERT INTO `pathway` (`id`, `name`) VALUES (44,'Administração'),(1,'Agricultura'),(7,'Alimentação e hotelaria'),(26,'Arquitetura'),(22,'Artes plásticas e cênicas'),(2,'Assistência em saúde'),(46,'Bancos'),(40,'Bancos/finanças'),(12,'Biologia marinha'),(38,'Ciência política'),(39,'Comércio internacional'),(3,'Computação'),(20,'Comunicação'),(11,'Comunicação e arte'),(4,'Construção'),(27,'Consultoria'),(41,'Contabilidade'),(21,'Cosmetologia'),(25,'Design de interiores'),(37,'Direito'),(16,'Economia do consumidor'),(33,'Educação'),(28,'Enfermagem'),(6,'Engenharia'),(29,'Fisioterapia'),(23,'Fotografia'),(34,'Marketing de moda'),(5,'Mecânica/maquinário'),(15,'Medicina'),(35,'Mercado imobiliário'),(18,'Negócios'),(47,'Processamento de dados'),(36,'Propaganda/vendas'),(17,'Psicologia'),(31,'Publicidade'),(13,'Química'),(24,'Rádio e televisão'),(8,'Recursos naturais'),(45,'Registros médicos'),(32,'Relações públicas'),(42,'Relatórios judiciais'),(43,'Seguros'),(9,'Serviços de saúde'),(19,'Serviços públicos e humanitários'),(10,'Tecnologia industrial e de engenharia'),(30,'Turismo'),(14,'Zoologia');
/*!40000 ALTER TABLE `pathway` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personality`
--

DROP TABLE IF EXISTS `personality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personality` (
  `id` int NOT NULL,
  `letter` char(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `story_title` varchar(63) COLLATE utf8mb4_unicode_ci NOT NULL,
  `story_description` varchar(511) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_personality_letter` (`letter`),
  UNIQUE KEY `uq_personality_name` (`name`),
  UNIQUE KEY `uq_personality_description` (`description`),
  UNIQUE KEY `uq_personality_story_title` (`story_title`),
  UNIQUE KEY `uq_personality_story_description` (`story_description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personality`
--

LOCK TABLES `personality` WRITE;
/*!40000 ALTER TABLE `personality` DISABLE KEYS */;
INSERT INTO `personality` (`id`, `letter`, `name`, `description`, `story_title`, `story_description`) VALUES (1,'R','Realista','Essas pessoas costumam ser boas em trabalhos mecânicos ou atléticos. Bons cursos universitários para pessoas realistas são...','A Jornada na Ilha dos Desafios','Você se encontra em uma aventura empolgante em uma ilha remota. Você está em um grupo de exploradores que está prestes a enfrentar desafios desconhecidos.'),(2,'I','Investigativo','Essas pessoas gostam de observar, aprender, analisar e resolver problemas. Bons cursos universitários para pessoas investigativas são...','A Aventura Investigativa na Ilha do Conhecimento','Você desembarca na Ilha do Conhecimento, um lugar dedicado à exploração da ciência, pesquisa e resolução de problemas.'),(3,'A','Artístico','Essas pessoas gostam de trabalhar em situações não estruturadas, onde possam usar a criatividade. Bons cursos para pessoas artísticas são...','A Jornada Criativa na Ilha das Artes e Expressão','Você chega à Ilha das Artes e Expressão, um lugar dedicado à criatividade e à expressão artística. Durante sua estadia na ilha, você enfrentará desafios que testarão suas habilidades criativas e sua preferência por trabalhar de forma independente.'),(4,'S','Social','Essas pessoas gostam de trabalhar com outras pessoas, em vez de trabalhar com coisas. Bons cursos universitários para pessoas sociais são...','A Missão de Ajuda na Ilha da Solidariedade','Você está em uma missão humanitária na Ilha da Solidariedade, onde a empatia e a ajuda às pessoas são essenciais. Durante sua jornada, você enfrentará desafios que testarão suas habilidades sociais e sua disposição para trabalhar em prol dos outros.'),(5,'E','Empreendedor','Essas pessoas gostam de trabalhar com outras pessoas e gostam de persuadir e atuar. Bons cursos universitários para pessoas empreendedoras são...','A Aventura Empreendedora na Ilha das Oportunidades','Você se encontra na Ilha das Oportunidades, onde empreendedores visionários têm a chance de realizar seus sonhos de negócios. Durante sua estadia na ilha você ficará hospedado em um resort, onde enfrentará desafios que testarão suas habilidades empreendedoras e sua ambição.'),(6,'C','Convencional','Essas pessoas são muito detalhistas, organizadas e gostam de trabalhar com dados. Bons cursos universitários para pessoas convencionais são...','A Experiência na Ilha da Organização e Eficiência','Você chega à Ilha da Organização e Eficiência, onde a precisão e o trabalho de escritório são altamente valorizados. Sua jornada na ilha incluirá desafios que testarão suas habilidades organizacionais e seu desejo de trabalhar em ambientes estruturados.');
/*!40000 ALTER TABLE `personality` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personality_pathway`
--

DROP TABLE IF EXISTS `personality_pathway`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personality_pathway` (
  `id` int NOT NULL AUTO_INCREMENT,
  `personality_id` int NOT NULL,
  `pathway_id` int NOT NULL,
  `is_main_pathway` tinyint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_personality_pathway_personality_id_and_pathway_id` (`personality_id`,`pathway_id`),
  KEY `fk_personality_pathway_pathway` (`pathway_id`),
  CONSTRAINT `fk_personality_pathway_pathway` FOREIGN KEY (`pathway_id`) REFERENCES `pathway` (`id`),
  CONSTRAINT `fk_personality_pathway_personality` FOREIGN KEY (`personality_id`) REFERENCES `personality` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personality_pathway`
--

LOCK TABLES `personality_pathway` WRITE;
/*!40000 ALTER TABLE `personality_pathway` DISABLE KEYS */;
INSERT INTO `personality_pathway` (`id`, `personality_id`, `pathway_id`, `is_main_pathway`) VALUES (1,1,1,1),(2,1,2,1),(3,1,3,1),(4,1,4,1),(5,1,5,1),(6,1,6,1),(7,1,7,1),(8,1,8,0),(9,1,9,0),(10,1,10,0),(11,1,11,0),(12,2,12,1),(13,2,6,1),(14,2,13,1),(15,2,14,1),(16,2,15,1),(17,2,16,1),(18,2,17,1),(19,2,9,0),(20,2,18,0),(21,2,19,0),(22,2,10,0),(23,3,20,1),(24,3,21,1),(25,3,22,1),(26,3,23,1),(27,3,24,1),(28,3,25,1),(29,3,26,1),(30,3,19,0),(31,3,11,0),(32,4,27,1),(33,4,28,1),(34,4,29,1),(35,4,30,1),(36,4,31,1),(37,4,32,1),(38,4,33,1),(39,4,9,0),(40,4,19,0),(41,5,34,1),(42,5,35,1),(43,5,36,1),(44,5,37,1),(45,5,38,1),(46,5,39,1),(47,5,40,1),(48,5,18,0),(49,5,19,0),(50,5,11,0),(51,6,41,1),(52,6,42,1),(53,6,43,1),(54,6,44,1),(55,6,45,1),(56,6,46,1),(57,6,47,1),(58,6,9,0),(59,6,18,0),(60,6,10,0);
/*!40000 ALTER TABLE `personality_pathway` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personality_pathway_ufsm_course`
--

DROP TABLE IF EXISTS `personality_pathway_ufsm_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personality_pathway_ufsm_course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `personality_pathway_id` int NOT NULL,
  `ufsm_course_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_personality_pathway_ufsm_course_pp_id_and_uc_id` (`personality_pathway_id`,`ufsm_course_id`),
  KEY `fk_personality_pathway_ufsm_course_ufsm_course` (`ufsm_course_id`),
  CONSTRAINT `fk_personality_pathway_ufsm_course_personality_pathway` FOREIGN KEY (`personality_pathway_id`) REFERENCES `personality_pathway` (`id`),
  CONSTRAINT `fk_personality_pathway_ufsm_course_ufsm_course` FOREIGN KEY (`ufsm_course_id`) REFERENCES `ufsm_course` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personality_pathway_ufsm_course`
--

LOCK TABLES `personality_pathway_ufsm_course` WRITE;
/*!40000 ALTER TABLE `personality_pathway_ufsm_course` DISABLE KEYS */;
/*!40000 ALTER TABLE `personality_pathway_ufsm_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `result`
--

DROP TABLE IF EXISTS `result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_code` char(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `r_score` int NOT NULL DEFAULT '0',
  `i_score` int NOT NULL DEFAULT '0',
  `a_score` int NOT NULL DEFAULT '0',
  `s_score` int NOT NULL DEFAULT '0',
  `e_score` int NOT NULL DEFAULT '0',
  `c_score` int NOT NULL DEFAULT '0',
  `interest_code` char(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_result_user_code` (`user_code`),
  UNIQUE KEY `uq_result_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `result`
--

LOCK TABLES `result` WRITE;
/*!40000 ALTER TABLE `result` DISABLE KEYS */;
/*!40000 ALTER TABLE `result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statement`
--

DROP TABLE IF EXISTS `statement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statement` (
  `id` int NOT NULL,
  `riasec_title` varchar(63) COLLATE utf8mb4_unicode_ci NOT NULL,
  `story_title` varchar(63) COLLATE utf8mb4_unicode_ci NOT NULL,
  `story_text` varchar(511) COLLATE utf8mb4_unicode_ci NOT NULL,
  `personality_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_statement_riasec_title` (`riasec_title`),
  KEY `fk_statement_personality` (`personality_id`),
  CONSTRAINT `fk_statement_personality` FOREIGN KEY (`personality_id`) REFERENCES `personality` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statement`
--

LOCK TABLES `statement` WRITE;
/*!40000 ALTER TABLE `statement` DISABLE KEYS */;
INSERT INTO `statement` (`id`, `riasec_title`, `story_title`, `story_text`, `personality_id`) VALUES (1,'I like to work on cars','Desafio Mecânico na Floresta','Enquanto explora a densa floresta da ilha, você encontra um antigo veículo abandonado. Ele está estragado, mas você percebe que pode ser consertado e usado para explorar a ilha com mais facilidade. O que você faz?',1),(2,'I like to build things','Construção de Abrigo na Praia','Você e seu grupo chegam à praia e percebem que precisam de um abrigo para passar a noite. O que você faz?',1),(3,'I like putting things together or assembling things','Trabalhando com as Ferramentas','Você encontra um conjunto de ferramentas abandonadas em uma clareira da floresta. O que você faz?',1),(4,'I like to work outdoors','Exploração ao Ar Livre','Durante uma caminhada, você se depara com um caminho que leva a uma colina com vista para o oceano. O que você faz?',1),(5,'I like to cook','Cozinhando no Acampamento','À noite, é a sua vez de preparar o jantar para o grupo, porém há poucos ingredientes. O que você faz?',1),(6,'I like to take care of animals','Cuidando dos Animais na Ilha','Você encontra um animal ferido na ilha. O que você faz?',1),(7,'I am a practical person','Vigilância Noturna do Acampamento','Durante a noite, o grupo decide que alguém deve ficar de vigia para garantir a segurança do acampamento. O que você faz?',1),(8,'I like to do puzzles','Resolvendo Quebra-Cabeças Complexos','Você encontra uma oficina de quebra-cabeças que desafiam sua lógica e raciocínio. O que você faz?',2),(9,'I like to do experiments','Conduzindo Experimentos Científicos','Um laboratório de experimentos científicos está disponível na ilha. Como você se sente ao conduzir experimentos?',2),(10,'I enjoy science','Explorando a Ciência com Paixão','Você se depara com uma série de apresentações científicas na ilha. Como você reage a essa oportunidade de aprender mais sobre a ciência?',2),(11,'I enjoy trying to figure out how things work','Desvendando o Funcionamento das Coisas','Enquanto explora, você se depara com dispositivos e máquinas complexas. Como você reage à oportunidade de entender como esses objetos funcionam?',2),(12,'I like to analyze things (problems/situations)','Analisando Problemas e Situações','Em sua jornada, você é confrontado com problemas complexos que exigem análise e solução. Como você lida com esses desafios?',2),(13,'I like working with numbers or charts','Trabalhando com Números e Gráficos','Você encontra uma oportunidade de trabalhar com dados, números e gráficos. Como você aborda essa tarefa?',2),(14,'I\'m good at math','Habilidade em Matemática','Durante sua estadia na ilha, você percebe que suas habilidades matemáticas são essenciais para resolver diversos desafios. Como você se sente sobre isso?',2),(15,'I am good at working independently','Explorando a Ilha Sozinho','Você decide começar sua jornada explorando a ilha por conta própria. Como você se sente em relação a essa escolha?',3),(16,'I like to read about art and music','Leitura sobre Arte e Música','Durante sua jornada, você encontra uma biblioteca repleta de livros sobre arte e música. Como você decide gastar seu tempo?',3),(17,'I enjoy creative writing','Escrevendo de Forma Criativa','Ao seguir em frente, você encontra no chão um convite para um workshop de escrita criativa acontecendo ao oeste da ilha. Como você aborda essa oportunidade?',3),(18,'I am a creative person','Explorando sua Criatividade','Enquanto caminha, você se depara com outras pessoas realizando uma série de atividades, como pintura e escultura. Como você decide se envolver nessas atividades?',3),(19,'I like to play instruments or sing','Tocando Instrumentos Musicais e Cantando','Em uma árvore, há um cartaz de um grupo de músicos, o cartaz informa que estão procurando um novo integrante, você terá a oportunidade de tocar instrumentos musicais ou cantar com eles. O que decide fazer?',3),(20,'I like acting in plays','Atuando em Peças Teatrais','Um membro de uma companhia de teatro local avista você e o convida para participar de uma peça teatral. Como você reage a essa oportunidade de atuar?',3),(21,'I like to draw','Expressão Artística por Meio do Desenho','Ao final do dia, você encontra um local tranquilo com uma linda paisagem, o lugar ideal para praticar o desenho e a arte visual. Como você decide usar seu tempo?',3),(22,'I like to work in teams','Equipe de Resgate na Floresta','Ao chegar na ilha, você se tornou membro de uma equipe de resgate responsável por encontrar e ajudar sobreviventes de um acidente em uma área remota da ilha. Como você aborda a coordenação da equipe e o apoio às vítimas?',4),(23,'I like to teach or train people','Treinando Novos Voluntários','Novos voluntários chegam na ilha e você é encarregado de treiná-los nas tarefas de ajuda humanitária. Como você aborda a tarefa de ensinar e orientar os novos membros?',4),(24,'I like trying to help people solve their problems','Aconselhando uma Família em Crise','Você encontra uma família na ilha que está passando por uma crise emocional devido ao trauma do acidente. Como você lida com a situação para ajudá-los a superar seus problemas?',4),(25,'I enjoy learning about other cultures','Promovendo a Compreensão Cultural','Durante suas interações com os habitantes locais, você percebe que existem diferentes costumes e tradições culturais. Como você reage a essa diversidade cultural?',4),(26,'I like to get into discussions about issues','Facilitando Discussões entre Grupos','Em um momento de tensão, habitantes de diferentes bairros têm opiniões conflitantes sobre como lidar com os desafios. Como você aborda a situação para promover o diálogo e a resolução de conflitos?',4),(27,'I am interested in healing people','Assistência na Construção de Abrigos','Parte da missão inclui a construção de abrigos temporários para os necessitados na costa da ilha. Como você contribui para essa tarefa?',4),(28,'I like helping people','Auxílio na Organização de Suprimentos','Você foi designado a organizar e distribuir suprimentos vitais para os necessitados na costa da ilha. Como você lida com essa tarefa crucial?',4),(29,'I like to try to influence or persuade people','Identificando uma Oportunidade de Negócio','Enquanto caminha pelas instalações, você identifica uma oportunidade de negócio única. Como você aborda a tarefa de convencer outros a se juntarem a você nessa empreitada?',5),(30,'I set goals for myself','Definindo Metas para o Negócio','Você ingressou em um time de empreendedores, é hora de definir metas claras para o negócio. Como você conduz essa etapa?',5),(31,'I like selling things','Desenvolvendo uma Estratégia de Vendas','Para que o negócio do seu time prospere, é crucial desenvolver uma estratégia de vendas eficaz. Como você se envolve nesse processo?',5),(32,'I am quick to take on new responsibilities','Assumindo Novas Responsabilidades','À medida que o negócio cresce, novas responsabilidades surgem. Como você reage ao assumir novos desafios?',5),(33,'I would like to start my own business','Perspectiva de Abrir Seu Próprio Negócio','Com o conhecimento que você adquiriu no time, você começa a considerar a possibilidade de iniciar seu próprio empreendimento. Como você aborda essa ideia?',5),(34,'I like to lead','Assumindo a Liderança da Equipe','Com o crescimento do negócio, você acaba sendo escolhido como líder da equipe. Como você exerce essa liderança?',5),(35,'I like to give speeches','Realizando Apresentações de Negócios','Chega o momento de apresentar seu negócio a investidores em potencial. Como você se prepara e conduz as apresentações?',5),(36,'I like to organize things (files, desks/offices)','Organizando o Acampamento','Quando você chega à ilha, é responsável por organizar o acampamento base. Como você aborda a tarefa de criar um espaço organizado e funcional?',6),(37,'I like to have clear instructions to follow','Seguindo Instruções Cruciais','Durante uma atividade no acampamento, você recebe instruções críticas para uma tarefa importante. Como você lida com as instruções detalhadas?',6),(38,'I wouldn\'t mind working 8 hours per day in an office','Trabalho em Horário de Expediente','Você foi escolhido para trabalhar em um escritório, organizando papéis e materiais por um dia inteiro. Como você aborda essa situação?',6),(39,'I pay attention to details','Atenção aos Detalhes','Enquanto realiza uma tarefa minuciosa, você percebe que a atenção aos detalhes é essencial. Como você lida com essa demanda?',6),(40,'I like to do filing or typing','Organizando Documentos de Missão','Você é designado para organizar documentos importantes relacionados a missões anteriores. Como você enfrenta essa tarefa de arquivamento?',6),(41,'I am good at keeping records of my work','Mantendo Registros Precisos','Durante uma missão, você deverá manter registros precisos das atividades da equipe. Como você aborda essa responsabilidade?',6),(42,'I would like to work in an office','Trabalhando em um Ambiente de Escritório','Após sua experiência na ilha, você considera a possibilidade de trabalhar em um ambiente de escritório como uma carreira desejável?',6);
/*!40000 ALTER TABLE `statement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_test_user_id` (`user_id`),
  UNIQUE KEY `uq_test_created_at` (`created_at`),
  CONSTRAINT `fk_test_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` (`id`, `user_id`, `created_at`) VALUES (1,1,'2023-11-02 12:55:43');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_statement`
--

DROP TABLE IF EXISTS `test_statement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_statement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `test_id` int NOT NULL,
  `statement_id` int NOT NULL,
  `selected_option_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_test_statement_test_id_and_statement_id` (`test_id`,`statement_id`),
  KEY `fk_test_statement_statement` (`statement_id`),
  KEY `fk_test_statement_option` (`selected_option_id`),
  CONSTRAINT `fk_test_statement_option` FOREIGN KEY (`selected_option_id`) REFERENCES `option` (`id`),
  CONSTRAINT `fk_test_statement_statement` FOREIGN KEY (`statement_id`) REFERENCES `statement` (`id`),
  CONSTRAINT `fk_test_statement_test` FOREIGN KEY (`test_id`) REFERENCES `test` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_statement`
--

LOCK TABLES `test_statement` WRITE;
/*!40000 ALTER TABLE `test_statement` DISABLE KEYS */;
INSERT INTO `test_statement` (`id`, `test_id`, `statement_id`, `selected_option_id`) VALUES (1,1,1,2),(2,1,2,4),(3,1,3,6),(4,1,4,8),(5,1,5,10),(6,1,6,11),(7,1,7,13),(8,1,8,15),(9,1,9,17),(10,1,10,20),(11,1,11,22),(12,1,12,24),(13,1,13,26),(14,1,14,27),(15,1,15,29),(16,1,16,32),(17,1,17,34),(18,1,18,35),(19,1,19,37),(20,1,20,39),(21,1,21,42),(22,1,22,44),(23,1,23,46),(24,1,24,48),(25,1,25,49),(26,1,26,51),(27,1,27,53),(28,1,28,55),(29,1,29,57),(30,1,30,59),(31,1,31,61),(32,1,32,64),(33,1,33,65),(34,1,34,67),(35,1,35,70),(36,1,36,71),(37,1,37,73),(38,1,38,76),(39,1,39,77),(40,1,40,79),(41,1,41,81),(42,1,42,84);
/*!40000 ALTER TABLE `test_statement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ufsm_course`
--

DROP TABLE IF EXISTS `ufsm_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ufsm_course` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `site` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `check_ufsm_course_level` CHECK ((`level` in (_utf8mb4'Técnico',_utf8mb4'Graduação')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ufsm_course`
--

LOCK TABLES `ufsm_course` WRITE;
/*!40000 ALTER TABLE `ufsm_course` DISABLE KEYS */;
INSERT INTO `ufsm_course` (`id`, `name`, `site`, `level`) VALUES (1,'Administração','https://www.ufsm.br/cursos/graduacao/santa-maria/administracao','Graduação'),(2,'Administração','https://www.ufsm.br/cursos/tecnico/santa-maria/administracao','Técnico'),(3,'Agricultura','https://www.ufsm.br/cursos/tecnico/santa-maria/agricultura','Técnico'),(4,'Agricultura de Precisão','https://www.ufsm.br/cursos/tecnico/santa-maria/agricultura-de-precisao','Técnico'),(5,'Agrimensura','https://www.ufsm.br/cursos/tecnico/santa-maria/agrimensura','Técnico'),(6,'Agronegócio','https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-agronegocio','Graduação'),(7,'Agronomia','https://www.ufsm.br/cursos/graduacao/santa-maria/agronomia','Graduação'),(8,'Agropecuária','https://www.ufsm.br/cursos/tecnico/santa-maria/agropecuaria','Técnico'),(9,'Alimentos','https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-alimentos','Graduação'),(10,'Alimentos','https://www.ufsm.br/cursos/tecnico/santa-maria/alimentos','Técnico'),(11,'Arquitetura e Urbanismo','https://www.ufsm.br/cursos/graduacao/santa-maria/arquitetura-e-urbanismo','Graduação'),(12,'Arquivologia','https://www.ufsm.br/cursos/graduacao/santa-maria/arquivologia','Graduação'),(13,'Artes Cênicas','https://www.ufsm.br/cursos/graduacao/santa-maria/artes-cenicas','Graduação'),(14,'Artes Visuais','https://www.ufsm.br/cursos/graduacao/santa-maria/artes-visuais','Graduação'),(15,'Automação Industrial','https://www.ufsm.br/cursos/tecnico/santa-maria/automacao-industrial','Técnico'),(16,'Ciência da Computação','https://www.ufsm.br/cursos/graduacao/santa-maria/ciencia-da-computacao','Graduação'),(17,'Ciências Biológicas','https://www.ufsm.br/cursos/graduacao/santa-maria/ciencias-biologicas','Graduação'),(18,'Ciências Contábeis','https://www.ufsm.br/cursos/graduacao/santa-maria/ciencias-contabeis','Graduação'),(19,'Ciências da Religião','https://www.ufsm.br/cursos/graduacao/educacao-a-distancia/ciencias-da-religiao','Graduação'),(20,'Ciências Econômicas','https://www.ufsm.br/cursos/graduacao/santa-maria/ciencias-economicas','Graduação'),(21,'Ciências Sociais','https://www.ufsm.br/cursos/graduacao/santa-maria/ciencias-sociais','Graduação'),(22,'Comércio','https://www.ufsm.br/cursos/tecnico/santa-maria/comercio','Técnico'),(23,'Contabilidade','https://www.ufsm.br/cursos/tecnico/santa-maria/contabilidade','Técnico'),(24,'Cuidados de Idosos','https://www.ufsm.br/cursos/tecnico/santa-maria/cuidados-de-idosos','Técnico'),(25,'Dança','https://www.ufsm.br/cursos/graduacao/santa-maria/danca','Graduação'),(26,'Desenho Industrial','https://www.ufsm.br/cursos/graduacao/santa-maria/desenho-industrial','Graduação'),(27,'Direito','https://www.ufsm.br/cursos/graduacao/santa-maria/direito','Graduação'),(28,'Educação do Campo','https://www.ufsm.br/cursos/graduacao/educacao-a-distancia/educacao-do-campo','Graduação'),(29,'Educação Especial','https://www.ufsm.br/cursos/graduacao/santa-maria/educacao-especial','Graduação'),(30,'Educação Física','https://www.ufsm.br/cursos/graduacao/santa-maria/educacao-fisica','Graduação'),(31,'Educação Indígena','https://www.ufsm.br/cursos/graduacao/educacao-a-distancia/educacao-indigena','Graduação'),(32,'Eletromecânica','https://www.ufsm.br/cursos/tecnico/santa-maria/eletromecanica','Técnico'),(33,'Eletrônica','https://www.ufsm.br/cursos/tecnico/santa-maria/eletronica','Técnico'),(34,'Eletrônica Industrial','https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-eletronica-industrial','Graduação'),(35,'Eletrotécnica','https://www.ufsm.br/cursos/tecnico/santa-maria/eletrotecnica','Técnico'),(36,'Enfermagem','https://www.ufsm.br/cursos/graduacao/santa-maria/enfermagem','Graduação'),(37,'Enfermagem','https://www.ufsm.br/cursos/tecnico/santa-maria/enfermagem','Técnico'),(38,'Engenharia Acústica','https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-acustica','Graduação'),(39,'Engenharia Aeroespacial','https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-aeroespacial','Graduação'),(40,'Engenharia Agrícola','https://www.ufsm.br/cursos/graduacao/cachoeira-do-sul/engenharia-agricola','Graduação'),(41,'Engenharia Ambiental e Sanitária','https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-sanitaria-e-ambiental','Graduação'),(42,'Engenharia Civil','https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-civil','Graduação'),(43,'Engenharia da Computação','https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-de-computacao','Graduação'),(44,'Engenharia de Controle e Automação','https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-de-controle-e-automacao','Graduação'),(45,'Engenharia de Produção','https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-de-producao','Graduação'),(46,'Engenharia de Telecomunicações','https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-de-telecomunicacoes','Graduação'),(47,'Engenharia de Transportes e Logística','https://www.ufsm.br/cursos/graduacao/cachoeira-do-sul/engenharia-de-transportes-e-logistica','Graduação'),(48,'Engenharia Elétrica','https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-eletrica','Graduação'),(49,'Engenharia Florestal','https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-florestal','Graduação'),(50,'Engenharia Mecânica','https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-mecanica','Graduação'),(51,'Engenharia Química','https://www.ufsm.br/cursos/graduacao/santa-maria/engenharia-quimica','Graduação'),(52,'Estatística','https://www.ufsm.br/cursos/graduacao/santa-maria/estatistica','Graduação'),(53,'Fabricação Mecânica','https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-fabricacao-mecanica','Graduação'),(54,'Farmácia','https://www.ufsm.br/cursos/graduacao/santa-maria/farmacia','Graduação'),(55,'Farmácia','https://www.ufsm.br/cursos/tecnico/santa-maria/farmacia','Técnico'),(56,'Filosofia','https://www.ufsm.br/cursos/graduacao/santa-maria/filosofia','Graduação'),(57,'Física','https://www.ufsm.br/cursos/graduacao/santa-maria/fisica','Graduação'),(58,'Fisioterapia','https://www.ufsm.br/cursos/graduacao/santa-maria/fisioterapia','Graduação'),(59,'Fonoaudiologia','https://www.ufsm.br/cursos/graduacao/santa-maria/fonoaudiologia','Graduação'),(60,'Fruticultura','https://www.ufsm.br/cursos/tecnico/santa-maria/fruticultura','Técnico'),(61,'Geografia','https://www.ufsm.br/cursos/graduacao/santa-maria/geografia','Graduação'),(62,'Geoprocessamento','https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-geoprocessamento','Graduação'),(63,'Geoprocessamento','https://www.ufsm.br/cursos/tecnico/santa-maria/geoprocessamento','Técnico'),(64,'Gestão Ambiental','https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-gestao-ambiental','Graduação'),(65,'Gestão de Cooperativas','https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-gestao-de-cooperativas','Graduação'),(66,'Gestão de Turismo','https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-gestao-de-turismo','Graduação'),(67,'História','https://www.ufsm.br/cursos/graduacao/santa-maria/historia','Graduação'),(68,'Informática','https://www.ufsm.br/cursos/tecnico/santa-maria/informatica','Técnico'),(69,'Informática para Internet','https://www.ufsm.br/cursos/tecnico/santa-maria/informatica-para-internet','Técnico'),(70,'Jornalismo','https://www.ufsm.br/cursos/graduacao/santa-maria/jornalismo','Graduação'),(71,'Letras','https://www.ufsm.br/cursos/graduacao/santa-maria/letras','Graduação'),(72,'Matemática','https://www.ufsm.br/cursos/graduacao/santa-maria/matematica','Graduação'),(73,'Mecânica','https://www.ufsm.br/cursos/tecnico/santa-maria/mecanica','Técnico'),(74,'Medicina','https://www.ufsm.br/cursos/graduacao/santa-maria/medicina','Graduação'),(75,'Medicina Veterinária','https://www.ufsm.br/cursos/graduacao/santa-maria/medicina-veterinaria','Graduação'),(76,'Meio Ambiente','https://www.ufsm.br/cursos/tecnico/santa-maria/meio-ambiente','Técnico'),(77,'Meteorologia','https://www.ufsm.br/cursos/graduacao/santa-maria/meteorologia','Graduação'),(78,'Música','https://www.ufsm.br/cursos/graduacao/santa-maria/musica','Graduação'),(79,'Nutrição','https://www.ufsm.br/cursos/graduacao/santa-maria/nutricao','Graduação'),(80,'Odontologia','https://www.ufsm.br/cursos/graduacao/santa-maria/odontologia','Graduação'),(81,'Paisagismo','https://www.ufsm.br/cursos/tecnico/santa-maria/paisagismo','Técnico'),(82,'Pedagogia','https://www.ufsm.br/cursos/graduacao/santa-maria/pedagogia','Graduação'),(83,'Processos Químicos','https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-processos-quimicos','Graduação'),(84,'Produção Editorial','https://www.ufsm.br/cursos/graduacao/santa-maria/producao-editorial','Graduação'),(85,'Psicologia','https://www.ufsm.br/cursos/graduacao/santa-maria/psicologia','Graduação'),(86,'Química','https://www.ufsm.br/cursos/graduacao/santa-maria/quimica','Graduação'),(87,'Química Industrial','https://www.ufsm.br/cursos/graduacao/santa-maria/quimica-industrial','Graduação'),(88,'Redes de Computadores','https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-redes-de-computadores','Graduação'),(89,'Relações Internacionais','https://www.ufsm.br/cursos/graduacao/santa-maria/relacoes-internacionais','Graduação'),(90,'Relações Públicas','https://www.ufsm.br/cursos/graduacao/santa-maria/relacoes-publicas','Graduação'),(91,'Secretariado','https://www.ufsm.br/cursos/tecnico/santa-maria/secretariado','Técnico'),(92,'Segurança do Trabalho','https://www.ufsm.br/cursos/tecnico/santa-maria/seguranca-do-trabalho','Técnico'),(93,'Serviço Social','https://www.ufsm.br/cursos/graduacao/santa-maria/servico-social','Graduação'),(94,'Sistemas de Informação','https://www.ufsm.br/cursos/graduacao/santa-maria/sistemas-de-informacao','Graduação'),(95,'Sistemas para Internet','https://www.ufsm.br/cursos/graduacao/santa-maria/tecnologia-em-sistemas-para-internet','Graduação'),(96,'Soldagem','https://www.ufsm.br/cursos/tecnico/santa-maria/soldagem','Técnico'),(97,'Teatro','https://www.ufsm.br/cursos/graduacao/santa-maria/licenciatura-em-teatro','Graduação'),(98,'Terapia Ocupacional','https://www.ufsm.br/cursos/graduacao/santa-maria/terapia-ocupacional','Graduação'),(99,'Zootecnia','https://www.ufsm.br/cursos/graduacao/santa-maria/zootecnia','Graduação'),(100,'Zootecnia','https://www.ufsm.br/cursos/tecnico/santa-maria/zootecnia','Técnico');
/*!40000 ALTER TABLE `ufsm_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` char(3) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(63) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_user_code` (`code`),
  UNIQUE KEY `uq_user_created_at` (`created_at`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `code`, `username`, `email`, `created_at`) VALUES (1,'AAA','teste','teste@gmail.com','2023-11-02 12:55:43');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'universe'
--

--
-- Dumping routines for database 'universe'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-02 13:03:44
