-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 11, 2023 at 01:15 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `siit_tabletop`
--

CREATE DATABASE IF NOT EXISTS siit_tabletop;
USE siit_tabletop;

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `e_name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `topic` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`e_name`, `topic`) VALUES
('battleCON course', 'Tutorial for students who want to play battleCON.'),
('Introduction', 'Introduction of the club.');

-- --------------------------------------------------------

--
-- Table structure for table `boardgame`
--

CREATE TABLE `boardgame` (
  `b_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `store` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `boardgame`
--

INSERT INTO `boardgame` (`b_name`, `description`, `store`, `weight`, `type`) VALUES
('7 Wonders: Architects', 'Seven wonder architect is a 2-7 players race to become a leader of the ancient world by completing an architectural wonder that will last through the ages. Players receive an unconstructed wonder at the beginning of the game and must collect resources to build their society, develop military might to navigate conflicts, oversee resource management, research science improvements, and collect civil victory points as they race to leave their mark on world history.', 'Lanlalen', '1.35', 'Casual'),
('Agricola', 'Agricola is a turn-based game. There are 14 game rounds occurring in 6 stages, with a Harvest at the end of each stage. Each player starts with two playing tokens and thus can take two turns, or actions, per round. There are multiple options, and while the game progresses, you\'ll have more and more: first thing in a round, a new action card is flipped over.', 'Lanlalen', '3.64', 'Euro'),
('Azul', 'In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how they\'ve placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the player\'s score. ', 'Tower Tactic Games', '1.76', 'Casual'),
('BattleCON Devastation of Indines', 'BattleCON: Devastation of Indines is a dueling card game for head-to-head or team play. Characters have unique gameplay mechanisms for strategic combat. While characters have diverse play styles, they all use the same foundational tactics, making it accessible yet challenging. Players navigate a seven-space board, combining unique styles and abilities with shared cards for attacks. The last one standing emerges as the victor.', 'Golden Goblin Games', '3.09', 'Euro'),
('China town', 'China towns is a multiplayer negotiation game.Player will play as Chinese people that move and settle in Chinatown town. For each turn people will be given start money, random deed and store after that every player will be freely to negotiate to each other then player will take turn to open their store .At the end of turn player will get salary base on store If they create store next to their own ,they will be given a bonus money.This game will end in 6 round or years and who have the most money will win.', 'Siam Board Games', '2.25', 'Casual'),
('Marco Polo II', 'Marco Polo II: In the Service of the Khan, an epic follow-up to The Voyages of Marco Polo. After traveling to Beijing, your travels now take you back to the West in the service of the Khan, sending you to the farthest reaches of his empire in search of wealth and fame. ', 'Lanlalen', '3.38', 'Euro'),
('Pictures', 'Pictures is a quick-playing family game with very simple rules. Form the image on your secret picture card with one set of components, either shoelaces, color cubes, icon cards, sticks and stones or building blocks in such a way that the other players guess what image you have pictured. ', 'Lanlalen', '1.02', 'Party'),
('Root', 'Root is a game of adventure and war in which 2 to 4 (1 to 6 with the \'Riverfolk\' expansion) players battle for control of a vast wilderness.', 'Tower Tactic Games', '3.78', 'Euro'),
('Splendor', 'Splendors is a multiplayer strategy game. Player will play as a merchant that tries to sell jewelry. Player will take turn to collect jewel from market and use it to buy mines.They are 3 level of mines the better the more point it will give,This game will end after a player reach 15 points but the high level mine will require lot of jewel too so player will need to buy small mines first to give them discount to other mine.', 'Siam Board Games', '1.78', 'Casual'),
('Terraforming Mars: Ares Expedition', 'Terraforming Mars: Ares Expedition is an engine-building game in which players control interplanetary corporations with the goal of making Mars habitable (and profitable). You will do this by investing mega credits (MC) into project cards that will directly or indirectly contribute to the terraforming process. In order to win, you will want to accumulate a high terraform rating (TR) and as many victory points (VP) as you can. Players raise their TR by increasing global parameters: oceans, oxygen, and temperature. ', 'Lanlalen', '2.91', 'Euro');

-- --------------------------------------------------------

--
-- Table structure for table `competition`
--

CREATE TABLE `competition` (
  `e_name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `competition`
--

INSERT INTO `competition` (`e_name`) VALUES
('TYBC');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `e_name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `open_for_public` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`e_name`, `date`, `time`, `open_for_public`) VALUES
('battleCON course', '2023-12-20', '10:00:00', 1),
('Introduction', '2023-12-01', '10:00:00', 0),
('TYBC', '2023-11-19', '09:50:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `game_use`
--

CREATE TABLE `game_use` (
  `e_name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `game` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `game_use`
--

INSERT INTO `game_use` (`e_name`, `game`) VALUES
('TYBC', 'Meduris'),
('TYBC', 'Newton');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `std_id` bigint(10) NOT NULL,
  `name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `curriculum` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `core` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`std_id`, `name`, `tel`, `password`, `curriculum`, `core`) VALUES
(6422000000, 'Maddox Williams', '0922901230', 'MaddoxInwza', 'cpe', 1),
(6422000001, 'Caden Houghton', '0684421123', 'gogogoCaden', 'ee', 1),
(6422000002, 'Kiran Murphy', '0983453334', '1212312121', 'de', 1),
(6422000003, 'Lynn Wilson', '0884836109', 'battleCONisthebest', 'ie', 0),
(6422000004, 'Cameron Davis', '0939555545', 'root_oh_root', 'cpe', 0),
(6422000005, 'Denny Hayes', '0728713324', 'sasageyo', 'de', 0),
(6422000006, 'Harley Wright', '0667867784', 'Wright_now', 'cpe', 0),
(6422000007, 'Hayden Hopkins', '0999299999', '999999q9999', 'ee', 0),
(6422000008, 'Franky Jackson', '0954728375', 'jop94jfjuejkf', 'che', 0),
(6422000009, 'Elliot White', '0902618452', 'e333rreff4tfr', 'me', 0);

-- --------------------------------------------------------

--
-- Table structure for table `participate`
--

CREATE TABLE `participate` (
  `p_std_id` bigint(10) NOT NULL,
  `p_e_name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `participate`
--

INSERT INTO `participate` (`p_std_id`, `p_e_name`) VALUES
(6422000000, 'Introduction'),
(6422000001, 'Introduction'),
(6422000001, 'TYBC'),
(6422000003, 'battleCON course'),
(6422000004, 'Introduction'),
(6422000004, 'TYBC'),
(6422000005, 'battleCON course'),
(6422000005, 'Introduction'),
(6422000006, 'Introduction'),
(6422000007, 'Introduction'),
(6422000008, 'Introduction'),
(6422000008, 'TYBC'),
(6422000009, 'battleCON course'),
(6422000009, 'Introduction'),
(6422000009, 'TYBC');

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `person_id` bigint(10) NOT NULL,
  `name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `curriculum` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`person_id`, `name`, `tel`, `curriculum`) VALUES
(6422111111, 'Lennon Foster', '0873343345', 'cpe'),
(6422111112, 'Marley Macdonald', '0787844561', 'de'),
(6422111113, 'Zachary Hayes', '0931231234', 'de');

-- --------------------------------------------------------

--
-- Table structure for table `play`
--

CREATE TABLE `play` (
  `std_id` bigint(10) NOT NULL,
  `b_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `play`
--

INSERT INTO `play` (`std_id`, `b_name`, `date`, `start_time`, `end_time`) VALUES
(6422000001, '7 Wonders: Architects', '2023-11-10', '11:01:33', '12:05:44'),
(6422000001, 'Agricola', '2023-11-11', '17:00:55', '19:23:34'),
(6422000001, 'Agricola', '2023-11-15', '17:53:44', '19:45:26'),
(6422000001, 'Root', '2023-11-16', '17:04:56', '18:55:37'),
(6422000005, 'Pictures', '2023-11-13', '16:10:24', '16:43:22'),
(6422000006, 'Terraforming Mars: Ares Expedition', '2023-11-19', '16:34:29', '18:31:56'),
(6422000007, 'BattleCON Devastation of Indines', '2023-11-13', '16:30:23', '17:05:44'),
(6422000007, 'Splendor', '2023-11-15', '18:43:44', '18:59:59'),
(6422000008, 'Terraforming Mars: Ares Expedition', '2023-11-20', '18:00:03', '20:12:33'),
(6422000009, 'Splendor', '2023-11-15', '18:02:33', '18:35:23');

-- --------------------------------------------------------

--
-- Table structure for table `public_participate`
--

CREATE TABLE `public_participate` (
  `pp_e_name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pp_person_id` bigint(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `public_participate`
--

INSERT INTO `public_participate` (`pp_e_name`, `pp_person_id`) VALUES
('battleCON course', 6422111111),
('battleCON course', 6422111112),
('TYBC', 6422111113);

-- --------------------------------------------------------

--
-- Table structure for table `record`
--

CREATE TABLE `record` (
  `std_id` bigint(10) NOT NULL,
  `b_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `winner` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `point` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `record`
--

INSERT INTO `record` (`std_id`, `b_name`, `date`, `winner`, `point`) VALUES
(6422000001, 'Agricola', '2023-11-11', 'Maddox', ''),
(6422000001, 'Root', '2023-11-16', 'Kiran', ''),
(6422000006, 'Terraforming Mars: Ares Expedition', '2023-11-19', 'Harley', ''),
(6422000007, 'Splendor', '2023-11-15', 'Denny', '');

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `r_id` int(10) NOT NULL,
  `r_date` date NOT NULL,
  `r_time` time NOT NULL,
  `r_std_id` bigint(10) NOT NULL,
  `r_b_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `r_cancel` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`r_id`, `r_date`, `r_time`, `r_std_id`, `r_b_name`, `r_cancel`) VALUES
(1, '2023-11-20', '16:30:00', 6422000008, 'Marco Polo II', 0),
(2, '2023-11-21', '17:00:00', 6422000001, 'China town', 0),
(3, '2023-11-23', '18:00:00', 6422000003, 'Root', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`e_name`);

--
-- Indexes for table `boardgame`
--
ALTER TABLE `boardgame`
  ADD PRIMARY KEY (`b_name`);

--
-- Indexes for table `competition`
--
ALTER TABLE `competition`
  ADD PRIMARY KEY (`e_name`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`e_name`);

--
-- Indexes for table `game_use`
--
ALTER TABLE `game_use`
  ADD PRIMARY KEY (`e_name`,`game`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`std_id`);

--
-- Indexes for table `participate`
--
ALTER TABLE `participate`
  ADD PRIMARY KEY (`p_std_id`,`p_e_name`),
  ADD KEY `p_e_name` (`p_e_name`),
  ADD KEY `p_std_id` (`p_std_id`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`person_id`);

--
-- Indexes for table `play`
--
ALTER TABLE `play`
  ADD PRIMARY KEY (`std_id`,`b_name`,`date`),
  ADD KEY `date` (`date`),
  ADD KEY `b_name` (`b_name`),
  ADD KEY `std_id` (`std_id`);

--
-- Indexes for table `public_participate`
--
ALTER TABLE `public_participate`
  ADD PRIMARY KEY (`pp_e_name`,`pp_person_id`),
  ADD KEY `pp_person_id` (`pp_person_id`);

--
-- Indexes for table `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`std_id`,`b_name`,`date`),
  ADD KEY `b_name` (`b_name`),
  ADD KEY `date` (`date`),
  ADD KEY `std_id` (`std_id`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`r_id`),
  ADD KEY `r_std_id` (`r_std_id`,`r_b_name`),
  ADD KEY `r_b_name` (`r_b_name`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activity`
--
ALTER TABLE `activity`
  ADD CONSTRAINT `activity_ibfk_1` FOREIGN KEY (`e_name`) REFERENCES `event` (`e_name`);

--
-- Constraints for table `competition`
--
ALTER TABLE `competition`
  ADD CONSTRAINT `competition_ibfk_1` FOREIGN KEY (`e_name`) REFERENCES `event` (`e_name`);

--
-- Constraints for table `game_use`
--
ALTER TABLE `game_use`
  ADD CONSTRAINT `game_use_ibfk_1` FOREIGN KEY (`e_name`) REFERENCES `competition` (`e_name`);

--
-- Constraints for table `participate`
--
ALTER TABLE `participate`
  ADD CONSTRAINT `participate_ibfk_1` FOREIGN KEY (`p_std_id`) REFERENCES `member` (`std_id`),
  ADD CONSTRAINT `participate_ibfk_2` FOREIGN KEY (`p_e_name`) REFERENCES `event` (`e_name`);

--
-- Constraints for table `play`
--
ALTER TABLE `play`
  ADD CONSTRAINT `play_ibfk_1` FOREIGN KEY (`b_name`) REFERENCES `boardgame` (`b_name`),
  ADD CONSTRAINT `play_ibfk_2` FOREIGN KEY (`std_id`) REFERENCES `member` (`std_id`);

--
-- Constraints for table `public_participate`
--
ALTER TABLE `public_participate`
  ADD CONSTRAINT `public_participate_ibfk_1` FOREIGN KEY (`pp_person_id`) REFERENCES `person` (`person_id`),
  ADD CONSTRAINT `public_participate_ibfk_2` FOREIGN KEY (`pp_e_name`) REFERENCES `event` (`e_name`);

--
-- Constraints for table `record`
--
ALTER TABLE `record`
  ADD CONSTRAINT `record_ibfk_1` FOREIGN KEY (`std_id`) REFERENCES `play` (`std_id`),
  ADD CONSTRAINT `record_ibfk_2` FOREIGN KEY (`b_name`) REFERENCES `play` (`b_name`),
  ADD CONSTRAINT `record_ibfk_3` FOREIGN KEY (`date`) REFERENCES `play` (`date`);

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`r_std_id`) REFERENCES `member` (`std_id`),
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`r_b_name`) REFERENCES `boardgame` (`b_name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
