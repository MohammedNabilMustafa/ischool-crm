-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2022 at 04:23 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ischool`
--

-- --------------------------------------------------------

--
-- Table structure for table `age`
--

CREATE TABLE `age` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(31) NOT NULL,
  `from_age` float NOT NULL,
  `to_age` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `age`
--

INSERT INTO `age` (`id`, `timestamp`, `name`, `from_age`, `to_age`) VALUES
(1, '2022-02-06', 'B', 6, 8.9),
(2, '2022-02-06', 'C', 9, 12.9),
(3, '2022-02-06', 'D', 13, 18);

-- --------------------------------------------------------

--
-- Table structure for table `attend`
--

CREATE TABLE `attend` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attend`
--

INSERT INTO `attend` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-01', 'Online'),
(2, '2022-02-01', 'Offline');

-- --------------------------------------------------------

--
-- Table structure for table `att_feed`
--

CREATE TABLE `att_feed` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `student_id` int(11) NOT NULL,
  `session_id` int(11) NOT NULL,
  `attendance` varchar(11) NOT NULL,
  `feedback` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `att_feed`
--

INSERT INTO `att_feed` (`id`, `timestamp`, `student_id`, `session_id`, `attendance`, `feedback`) VALUES
(213, '2022-03-10', 223, 35, '', ''),
(214, '2022-03-10', 223, 36, '', ''),
(215, '2022-03-10', 223, 37, '', ''),
(216, '2022-03-10', 223, 38, '', ''),
(217, '2022-03-10', 224, 62, 'YES', 'asdasdsad'),
(218, '2022-03-14', 232, 64, 'YES', 'fgdg'),
(272, '2022-03-20', 243, 83, '', ''),
(273, '2022-03-20', 243, 84, '', ''),
(274, '2022-03-20', 243, 85, '', ''),
(275, '2022-03-20', 243, 86, '', ''),
(276, '2022-03-20', 243, 87, '', ''),
(277, '2022-03-20', 243, 88, '', ''),
(278, '2022-03-20', 243, 89, '', ''),
(279, '2022-03-20', 243, 90, '', ''),
(280, '2022-03-20', 243, 91, '', ''),
(281, '2022-03-20', 243, 92, '', ''),
(282, '2022-03-20', 243, 93, '', ''),
(283, '2022-03-20', 243, 94, '', ''),
(284, '2022-03-20', 244, 82, '', ''),
(285, '2022-03-26', 246, 82, '', ''),
(286, '2022-03-26', 247, 82, '', ''),
(287, '2022-03-26', 248, 82, '', ''),
(288, '2022-03-26', 249, 82, '', ''),
(289, '2022-03-26', 250, 82, '', ''),
(290, '2022-03-26', 251, 95, '', ''),
(291, '2022-03-26', 252, 95, '', ''),
(292, '2022-03-26', 253, 95, '', ''),
(293, '2022-03-26', 254, 95, '', ''),
(294, '2022-03-26', 255, 95, '', ''),
(295, '2022-03-26', 256, 95, '', ''),
(296, '2022-03-26', 257, 96, '', ''),
(297, '2022-03-26', 258, 96, '', ''),
(298, '2022-03-26', 259, 96, '', ''),
(529, '2022-04-11', 274, 150, '', ''),
(530, '2022-04-11', 275, 102, '', ''),
(531, '2022-04-11', 275, 103, '', ''),
(532, '2022-04-11', 275, 104, '', ''),
(533, '2022-04-11', 275, 105, '', ''),
(534, '2022-04-11', 275, 106, '', ''),
(535, '2022-04-11', 275, 107, '', ''),
(536, '2022-04-11', 275, 108, '', ''),
(537, '2022-04-11', 275, 109, '', ''),
(538, '2022-04-11', 275, 110, '', ''),
(539, '2022-04-11', 275, 111, '', ''),
(540, '2022-04-11', 275, 112, '', ''),
(541, '2022-04-11', 275, 113, '', ''),
(542, '2022-04-11', 275, 114, '', ''),
(543, '2022-04-11', 275, 115, '', ''),
(544, '2022-04-11', 275, 116, '', ''),
(545, '2022-04-11', 275, 117, '', ''),
(546, '2022-04-11', 275, 118, '', ''),
(547, '2022-04-11', 275, 119, '', ''),
(548, '2022-04-11', 275, 120, '', ''),
(549, '2022-04-11', 275, 121, '', ''),
(550, '2022-04-11', 275, 122, '', ''),
(551, '2022-04-11', 275, 123, '', ''),
(552, '2022-04-11', 275, 124, '', ''),
(553, '2022-04-11', 275, 125, '', ''),
(554, '2022-04-11', 275, 126, '', ''),
(555, '2022-04-11', 275, 127, '', ''),
(556, '2022-04-11', 275, 128, '', ''),
(557, '2022-04-11', 275, 129, '', ''),
(558, '2022-04-11', 275, 130, '', ''),
(559, '2022-04-11', 275, 131, '', ''),
(560, '2022-04-11', 275, 132, '', ''),
(561, '2022-04-11', 275, 133, '', ''),
(562, '2022-04-11', 275, 134, '', ''),
(563, '2022-04-11', 275, 135, '', ''),
(564, '2022-04-11', 275, 136, '', ''),
(565, '2022-04-11', 275, 137, '', ''),
(566, '2022-04-11', 275, 138, '', ''),
(567, '2022-04-11', 275, 139, '', ''),
(568, '2022-04-11', 275, 140, '', ''),
(569, '2022-04-11', 275, 141, '', ''),
(570, '2022-04-11', 275, 142, '', ''),
(571, '2022-04-11', 275, 143, '', ''),
(572, '2022-04-11', 275, 144, '', ''),
(573, '2022-04-11', 275, 145, '', ''),
(574, '2022-04-11', 275, 146, '', ''),
(575, '2022-04-11', 275, 147, '', ''),
(576, '2022-04-11', 275, 148, '', ''),
(577, '2022-04-11', 275, 149, '', ''),
(578, '2022-04-11', 276, 102, '', ''),
(579, '2022-04-11', 276, 103, '', ''),
(580, '2022-04-11', 276, 104, '', ''),
(581, '2022-04-11', 276, 105, '', ''),
(582, '2022-04-11', 276, 106, '', ''),
(583, '2022-04-11', 276, 107, '', ''),
(584, '2022-04-11', 276, 108, '', ''),
(585, '2022-04-11', 276, 109, '', ''),
(586, '2022-04-11', 276, 110, '', ''),
(587, '2022-04-11', 276, 111, '', ''),
(588, '2022-04-11', 276, 112, '', ''),
(589, '2022-04-11', 276, 113, '', ''),
(590, '2022-04-11', 276, 114, '', ''),
(591, '2022-04-11', 276, 115, '', ''),
(592, '2022-04-11', 276, 116, '', ''),
(593, '2022-04-11', 276, 117, '', ''),
(594, '2022-04-11', 276, 118, '', ''),
(595, '2022-04-11', 276, 119, '', ''),
(596, '2022-04-11', 276, 120, '', ''),
(597, '2022-04-11', 276, 121, '', ''),
(598, '2022-04-11', 276, 122, '', ''),
(599, '2022-04-11', 276, 123, '', ''),
(600, '2022-04-11', 276, 124, '', ''),
(601, '2022-04-11', 276, 125, '', ''),
(602, '2022-04-11', 276, 126, '', ''),
(603, '2022-04-11', 276, 127, '', ''),
(604, '2022-04-11', 276, 128, '', ''),
(605, '2022-04-11', 276, 129, '', ''),
(606, '2022-04-11', 276, 130, '', ''),
(607, '2022-04-11', 276, 131, '', ''),
(608, '2022-04-11', 276, 132, '', ''),
(609, '2022-04-11', 276, 133, '', ''),
(610, '2022-04-11', 276, 134, '', ''),
(611, '2022-04-11', 276, 135, '', ''),
(612, '2022-04-11', 276, 136, '', ''),
(613, '2022-04-11', 276, 137, '', ''),
(614, '2022-04-11', 276, 138, '', ''),
(615, '2022-04-11', 276, 139, '', ''),
(616, '2022-04-11', 276, 140, '', ''),
(617, '2022-04-11', 276, 141, '', ''),
(618, '2022-04-11', 276, 142, '', ''),
(619, '2022-04-11', 276, 143, '', ''),
(620, '2022-04-11', 276, 144, '', ''),
(621, '2022-04-11', 276, 145, '', ''),
(622, '2022-04-11', 276, 146, '', ''),
(623, '2022-04-11', 276, 147, '', ''),
(624, '2022-04-11', 276, 148, '', ''),
(625, '2022-04-11', 276, 149, '', ''),
(626, '2022-04-11', 274, 102, '', ''),
(627, '2022-04-11', 274, 103, '', ''),
(628, '2022-04-11', 274, 104, '', ''),
(629, '2022-04-11', 274, 105, '', ''),
(630, '2022-04-11', 274, 106, '', ''),
(631, '2022-04-11', 274, 107, '', ''),
(632, '2022-04-11', 274, 108, '', ''),
(633, '2022-04-11', 274, 109, '', ''),
(634, '2022-04-11', 274, 110, '', ''),
(635, '2022-04-11', 274, 111, '', ''),
(636, '2022-04-11', 274, 112, '', ''),
(637, '2022-04-11', 274, 113, '', ''),
(638, '2022-04-11', 274, 114, '', ''),
(639, '2022-04-11', 274, 115, '', ''),
(640, '2022-04-11', 274, 116, '', ''),
(641, '2022-04-11', 274, 117, '', ''),
(642, '2022-04-11', 274, 118, '', ''),
(643, '2022-04-11', 274, 119, '', ''),
(644, '2022-04-11', 274, 120, '', ''),
(645, '2022-04-11', 274, 121, '', ''),
(646, '2022-04-11', 274, 122, '', ''),
(647, '2022-04-11', 274, 123, '', ''),
(648, '2022-04-11', 274, 124, '', ''),
(649, '2022-04-11', 274, 125, '', ''),
(650, '2022-04-11', 274, 126, '', ''),
(651, '2022-04-11', 274, 127, '', ''),
(652, '2022-04-11', 274, 128, '', ''),
(653, '2022-04-11', 274, 129, '', ''),
(654, '2022-04-11', 274, 130, '', ''),
(655, '2022-04-11', 274, 131, '', ''),
(656, '2022-04-11', 274, 132, '', ''),
(657, '2022-04-11', 274, 133, '', ''),
(658, '2022-04-11', 274, 134, '', ''),
(659, '2022-04-11', 274, 135, '', ''),
(660, '2022-04-11', 274, 136, '', ''),
(661, '2022-04-11', 274, 137, '', ''),
(662, '2022-04-11', 274, 138, '', ''),
(663, '2022-04-11', 274, 139, '', ''),
(664, '2022-04-11', 274, 140, '', ''),
(665, '2022-04-11', 274, 141, '', ''),
(666, '2022-04-11', 274, 142, '', ''),
(667, '2022-04-11', 274, 143, '', ''),
(668, '2022-04-11', 274, 144, '', ''),
(669, '2022-04-11', 274, 145, '', ''),
(670, '2022-04-11', 274, 146, '', ''),
(671, '2022-04-11', 274, 147, '', ''),
(672, '2022-04-11', 274, 148, '', ''),
(673, '2022-04-11', 274, 149, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `call_status`
--

CREATE TABLE `call_status` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `call_status`
--

INSERT INTO `call_status` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-27', 'Answer'),
(2, '2022-02-27', 'Closed'),
(3, '2022-02-27', 'Busy'),
(4, '2022-02-27', 'Call Back Later'),
(5, '2022-02-27', 'Whats App');

-- --------------------------------------------------------

--
-- Table structure for table `call_status_sales`
--

CREATE TABLE `call_status_sales` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `call_status_sales`
--

INSERT INTO `call_status_sales` (`id`, `timestamp`, `name`) VALUES
(1, '2022-03-14', 'Answer');

-- --------------------------------------------------------

--
-- Table structure for table `call_type`
--

CREATE TABLE `call_type` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `call_type`
--

INSERT INTO `call_type` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-27', 'Incoming'),
(2, '2022-02-27', 'Outgoing');

-- --------------------------------------------------------

--
-- Table structure for table `call_type_sales`
--

CREATE TABLE `call_type_sales` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `call_type_sales`
--

INSERT INTO `call_type_sales` (`id`, `timestamp`, `name`) VALUES
(1, '2022-03-14', 'Incoming');

-- --------------------------------------------------------

--
-- Table structure for table `cat`
--

CREATE TABLE `cat` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cat`
--

INSERT INTO `cat` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-27', 'Problem'),
(2, '2022-02-27', 'Refund'),
(3, '2022-02-27', 'Request'),
(4, '2022-02-27', 'Offering'),
(5, '2022-03-10', 'AR'),
(6, '2022-03-10', 'New');

-- --------------------------------------------------------

--
-- Table structure for table `cat_sales`
--

CREATE TABLE `cat_sales` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cat_sales`
--

INSERT INTO `cat_sales` (`id`, `timestamp`, `name`) VALUES
(1, '2022-03-14', 'New');

-- --------------------------------------------------------

--
-- Table structure for table `certifications`
--

CREATE TABLE `certifications` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `level_id` int(11) NOT NULL,
  `lan_id` int(11) NOT NULL,
  `session_type_id` int(11) NOT NULL,
  `track_id` int(11) NOT NULL,
  `cert_link` text NOT NULL,
  `type` text NOT NULL,
  `session_num` int(11) NOT NULL,
  `age_id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `certifications`
--

INSERT INTO `certifications` (`id`, `timestamp`, `level_id`, `lan_id`, `session_type_id`, `track_id`, `cert_link`, `type`, `session_num`, `age_id`, `name`) VALUES
(3, '2022-03-14', 2, 1, 1, 1, 'https://www.google.com/', 'attend', 5, 0, ''),
(4, '2022-03-15', 2, 1, 2, 1, 'https://www.google.com/', 'attend', 1, 1, ''),
(5, '2022-03-20', 2, 1, 2, 1, 'img/hour of code.jpg', 'attend', 1, 2, ''),
(8, '2022-03-28', 2, 1, 1, 1, 'img/hour of code.jpg', 'attend', 2, 2, 'Session 02'),
(9, '2022-03-28', 2, 1, 1, 1, 'img/hour of code.jpg', 'tasks', 1, 2, 'Session 01');

-- --------------------------------------------------------

--
-- Table structure for table `close`
--

CREATE TABLE `close` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `close`
--

INSERT INTO `close` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-27', 'Call Follow Up'),
(2, '2022-02-27', 'Call Closed');

-- --------------------------------------------------------

--
-- Table structure for table `close_sales`
--

CREATE TABLE `close_sales` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `close_sales`
--

INSERT INTO `close_sales` (`id`, `timestamp`, `name`) VALUES
(1, '2022-03-14', 'Call Follow Up'),
(2, '2022-03-14', 'Call Closed');

-- --------------------------------------------------------

--
-- Table structure for table `cs_calls`
--

CREATE TABLE `cs_calls` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `call_type_id` int(11) NOT NULL,
  `call_status_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `close_id` int(11) NOT NULL,
  `follow_date` date NOT NULL,
  `note` text NOT NULL,
  `call_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cs_calls`
--

INSERT INTO `cs_calls` (`id`, `timestamp`, `call_type_id`, `call_status_id`, `cat_id`, `close_id`, `follow_date`, `note`, `call_id`, `student_id`, `parent_id`) VALUES
(94, '2022-03-10', 1, 1, 6, 1, '2022-03-10', 'asdasd asd ', 0, 223, 137),
(95, '2022-03-10', 1, 1, 6, 2, '2022-03-10', 'asd asd ', 94, 223, 137),
(96, '2022-03-10', 1, 1, 6, 1, '2022-03-12', 'sdfsdf sdf ', 94, 223, 137),
(98, '2022-03-14', 1, 1, 5, 1, '2022-03-14', 'sad asd asd', 0, 224, 137),
(99, '2022-03-14', 1, 1, 5, 1, '2022-03-14', 'asdas dasd ', 98, 224, 137),
(100, '2022-03-27', 2, 1, 1, 1, '2022-03-28', 'asdasdasd', 0, 0, 137),
(101, '2022-03-27', 1, 2, 1, 2, '2022-03-27', 'asdasd', 100, 0, 137);

-- --------------------------------------------------------

--
-- Table structure for table `days`
--

CREATE TABLE `days` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `days`
--

INSERT INTO `days` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-06', 'Sun'),
(2, '2022-02-06', 'Mon'),
(3, '2022-02-06', 'Tue'),
(4, '2022-02-06', '-'),
(5, '2022-02-06', '-'),
(6, '2022-02-06', 'Fri'),
(7, '2022-02-06', 'Sat');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(31) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-01', 'Department Education'),
(2, '2022-02-01', 'Department Sales'),
(3, '2022-02-01', 'Department Customer Service'),
(4, '2022-02-27', 'Department Marketing'),
(5, '2022-02-27', 'Department Operation'),
(6, '2022-02-27', 'Department Finance'),
(7, '2022-02-27', 'Department R&D'),
(8, '2022-02-27', 'Department Software');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `emp_name` varchar(31) NOT NULL,
  `phone` int(11) NOT NULL,
  `email` text NOT NULL,
  `zoomlink` text NOT NULL,
  `username` text NOT NULL,
  `password_value` text NOT NULL,
  `permission_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `zoom_free` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `timestamp`, `emp_name`, `phone`, `email`, `zoomlink`, `username`, `password_value`, `permission_id`, `department_id`, `role_id`, `zoom_free`) VALUES
(9, '2022-03-03', 'Alaa Refaie', 154547, 'asdasd@asdsd.com', 'asdasdasd', 'Alaa', '1234', 2, 2, 3, ''),
(11, '2022-03-10', 'Maged Hassan', 123123, 'asdasd', 'asdasd', 'Maged', '1234', 3, 1, 1, ''),
(12, '2022-03-15', 'Nada', 123123, 'asdasd', 'https://www.google.com/', 'Nada', '1234', 1, 1, 1, 'https://www.youtube.com/'),
(13, '2022-03-03', 'Mohammed Nabil', 241545, 'mohammed.nabil.mustafa@gmail.c', '-', 'Tiger', '0630', 4, 3, 2, ''),
(14, '2022-03-02', 'Nour El-Dahan', 145234523, 'dsfgdsfg', '-', 'Nour', '1234', 3, 3, 3, ''),
(15, '2022-03-06', 'Rehab El-Hagar', 123123, 'asdasd', '-', 'Rehab', '1234', 2, 2, 2, ''),
(16, '2022-03-14', 'Nouran', 123123, 'asd', '-', 'Nouran', '1234', 7, 4, 1, ''),
(17, '2022-03-15', 'Aya El-Nagar', 123123, 'asdasd', 'https://www.google.com/', 'Aya', '1234', 1, 1, 1, 'https://www.youtube.com/');

-- --------------------------------------------------------

--
-- Table structure for table `free_session_whatsapp`
--

CREATE TABLE `free_session_whatsapp` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `free_whats_token` text NOT NULL,
  `free_whats_instance` text NOT NULL,
  `free_whats_body` text NOT NULL,
  `free_whats_num` text NOT NULL,
  `free_whats_send` text NOT NULL,
  `free_whats_msg` text NOT NULL,
  `free_whats_msg_id` int(11) NOT NULL,
  `free_whats_parent_id` int(11) NOT NULL,
  `free_whats_parent_name` text NOT NULL,
  `free_whats_parent_type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `free_session_whatsapp`
--

INSERT INTO `free_session_whatsapp` (`id`, `timestamp`, `free_whats_token`, `free_whats_instance`, `free_whats_body`, `free_whats_num`, `free_whats_send`, `free_whats_msg`, `free_whats_msg_id`, `free_whats_parent_id`, `free_whats_parent_name`, `free_whats_parent_type`) VALUES
(1, '2022-03-26', 'bbe2yuzscbr51oq0', 'instance2247', ' Hello Mohamed Nabil Mustafa\n                            hope your are doing well\n                            you can join dashboard using this link:\n                            http://localhost/ischool-crm/dashboard?username=mohammed.nabil.mustafaa@gmail.com&password=+201027713442\n\n                            or using username and password\n                            USERNAME : mohammed.nabil.mustafaa@gmail.com\n                            PASSWORD : +201027713442\n                            ', '+201027713442', 'true', 'ok', 9844, 156, 'Mohamed Nabil Mustafa', 'Intro_free'),
(2, '2022-03-26', 'bbe2yuzscbr51oq0', 'instance2247', 'Hello asdasd\nhope your are doing well\nyou can join dashboard using this link:\nhttp://localhost/ischool-crm/dashboard?username=mohammed.nabil.mustafa@gmail.com&password=+201027713442\n\nor using username and password\nUSERNAME : mohammed.nabil.mustafa@gmail.com\nPASSWORD : +201027713442\n', '+201027713442', 'true', 'ok', 9880, 152, 'asdasd', 'Intro_free'),
(3, '2022-03-26', 'bbe2yuzscbr51oq0', 'instance2247', 'Hello alaa refaie\nhope your are doing well\nyou can join dashboard using this link:\nhttp://localhost/ischool-crm/dashboard?username=aaaadss@gmail.com&password=+201009267920\n\nOr using username and password\nUSERNAME : aaaadss@gmail.com\nPASSWORD : +201009267920\n', '+201009267920', 'true', 'ok', 9949, 156, 'alaa refaie', 'Intro_free'),
(4, '2022-03-26', 'bbe2yuzscbr51oq0', 'instance2247', 'Hello Gawish\nhope your are doing well\nyou can join dashboard using this link:\nhttp://localhost/ischool-crm/dashboard?username=mohammed.nabil.gawish@gmail.com&password=+201002967920\n\nOr using username and password\nUSERNAME : mohammed.nabil.gawish@gmail.com\nPASSWORD : +201002967920\n', '+201002967920', 'true', 'ok', 9950, 156, 'Gawish', 'Intro_free'),
(5, '2022-03-26', 'bbe2yuzscbr51oq0', 'instance2247', 'Hello asdasd\nhope your are doing well\nyou can join dashboard using this link:\nhttp://localhost/ischool-crm/dashboard?username=mohammed.nabil.mustafa.gawish@gmail.com&password=+201002967920\n\nOr using username and password\nUSERNAME : mohammed.nabil.mustafa.gawish@gmail.com\nPASSWORD : +201002967920\n', '+201002967920', 'true', 'ok', 9951, 157, 'asdasd', 'Intro_free'),
(6, '2022-03-26', 'bbe2yuzscbr51oq0', 'instance2247', 'Hello Ahmed Gawish\nhope your are doing well\nyou can join dashboard using this link:\nhttp://localhost/ischool-crm/dashboard?username=gawish@gmail.com&password=+201002967920\n\nOr using username and password\nUSERNAME : gawish@gmail.com\nPASSWORD : +201002967920\n', '+201002967920', 'true', 'ok', 9952, 157, 'Ahmed Gawish', 'Intro_free'),
(7, '2022-03-26', 'bbe2yuzscbr51oq0', 'instance2247', 'Hello alaa refaie\nhope your are doing well\nyou can join dashboard using this link:\nhttp://localhost/ischool-crm/dashboard?username=mohammed.nabil.mustafaa@gmail.com&password=+201027713442\n\nOr using username and password\nUSERNAME : mohammed.nabil.mustafaa@gmail.com\nPASSWORD : +201027713442\n', '+201027713442', 'true', 'ok', 9953, 158, 'alaa refaie', 'Intro_free'),
(8, '2022-03-26', 'bbe2yuzscbr51oq0', 'instance2247', 'Hello alaa refaie\nhope your are doing well\nyou can join dashboard using this link:\nhttp://localhost/ischool-crm/dashboard?username=mohammed.nabil.mustafaa@gmail.com&password=+201027713442\n\nOr using username and password\nUSERNAME : mohammed.nabil.mustafaa@gmail.com\nPASSWORD : +201027713442\n', '+201027713442', 'true', 'ok', 9992, 159, 'alaa refaie', 'Intro_free'),
(9, '2022-03-29', 'bbe2yuzscbr51oq0', 'instance2247', 'Hello asdasd\nhope your are doing well\nyou can join dashboard using this link:\nhttp://localhost/ischool-crm/dashboard?username=mohammed.nabil.mustafa@gmail.com&password=+201027713442\n\nOr using username and password\nUSERNAME : mohammed.nabil.mustafa@gmail.com\nPASSWORD : +201027713442\n', '+201027713442', 'true', 'ok', 10488, 160, 'asdasd', 'Intro_free'),
(10, '2022-03-29', 'bbe2yuzscbr51oq0', 'instance2247', 'Hello asdasd\nhope your are doing well\nyou can join dashboard using this link:\nhttp://localhost/ischool-crm/dashboard?username=mohammed.nabil.mustafa@gmail.com&password=+201027713442\n\nOr using username and password\nUSERNAME : mohammed.nabil.mustafa@gmail.com\nPASSWORD : +201027713442\n', '+201027713442', 'true', 'ok', 10583, 160, 'asdasd', 'Intro_free'),
(11, '2022-03-29', 'bbe2yuzscbr51oq0', 'instance2247', 'Hello asdasd\nhope your are doing well\nyou can join dashboard using this link:\nhttp://localhost/ischool-crm/dashboard?username=mohammed.nabil.mustafa@gmail.com&password=+201027713442\n\nOr using username and password\nUSERNAME : mohammed.nabil.mustafa@gmail.com\nPASSWORD : +201027713442\n', '+201027713442', 'true', 'ok', 10584, 160, 'asdasd', 'Intro_free'),
(12, '2022-04-11', 'bbe2yuzscbr51oq0', 'instance2247', 'Hello Mohamed Nabil Mustafa\nhope your are doing well\nyou can join dashboard using this link:\nhttp://localhost/ischool-crm/dashboard?username=mohammed.nabil.mustafa@gmail.com&password=+201027713442\n\nOr using username and password\nUSERNAME : mohammed.nabil.mustafa@gmail.com\nPASSWORD : +201027713442\n', '+201027713442', 'true', 'ok', 11745, 162, 'Mohamed Nabil Mustafa', 'Intro_free'),
(13, '2022-04-11', 'bbe2yuzscbr51oq0', 'instance2247', 'Hello Mohamed Nabil Mustafa\nhope your are doing well\nyou can join dashboard using this link:\nhttp://localhost/ischool-crm/dashboard?username=mohammed.nabil.mustafa@gmail.com&password=+201027713442\n\nOr using username and password\nUSERNAME : mohammed.nabil.mustafa@gmail.com\nPASSWORD : +201027713442\n', '+201027713442', 'true', 'ok', 11746, 163, 'Mohamed Nabil Mustafa', 'Intro_free');

-- --------------------------------------------------------

--
-- Table structure for table `free_session_whatsapp_temp`
--

CREATE TABLE `free_session_whatsapp_temp` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `free_whats_temp_token` text NOT NULL,
  `free_whats_temp_instance` text NOT NULL,
  `free_whats_temp_body` text NOT NULL,
  `free_whats_temp_type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `free_session_whatsapp_temp`
--

INSERT INTO `free_session_whatsapp_temp` (`id`, `timestamp`, `free_whats_temp_token`, `free_whats_temp_instance`, `free_whats_temp_body`, `free_whats_temp_type`) VALUES
(1, '2022-03-26', 'bbe2yuzscbr51oq0', 'instance2247', 'hope your are doing well', 'Intro_free');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `slot_id` int(11) NOT NULL,
  `lan_id` int(11) NOT NULL,
  `att_id` int(11) NOT NULL,
  `level_id` int(11) NOT NULL,
  `track_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `days_id` int(11) NOT NULL,
  `age_id` int(11) NOT NULL,
  `opend_by` varchar(31) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `timestamp`, `slot_id`, `lan_id`, `att_id`, `level_id`, `track_id`, `type_id`, `days_id`, `age_id`, `opend_by`, `start_date`, `end_date`) VALUES
(53, '2022-02-18', 2, 1, 1, 2, 1, 1, 1, 2, '', '2022-02-20', '2022-02-20'),
(54, '2022-02-26', 3, 1, 1, 2, 1, 1, 1, 1, '', '2022-02-27', '2022-02-27'),
(55, '2022-02-26', 3, 1, 1, 2, 1, 1, 1, 1, '', '2022-02-27', '2022-02-27'),
(56, '2022-02-26', 2, 1, 1, 2, 1, 1, 1, 1, '', '2022-02-27', '2022-02-27'),
(57, '2022-02-26', 2, 1, 1, 2, 1, 1, 2, 1, '', '2022-02-28', '2022-02-28'),
(58, '2022-02-26', 4, 1, 1, 2, 1, 1, 1, 1, '', '2022-02-27', '2022-02-27'),
(59, '2022-02-26', 8, 1, 1, 2, 1, 1, 2, 1, '', '2022-02-28', '2022-02-28'),
(60, '2022-03-06', 6, 1, 1, 2, 1, 1, 1, 2, '', '2022-03-06', '2022-03-06'),
(61, '2022-03-07', 5, 1, 1, 2, 1, 2, 1, 1, '', '2022-03-13', '2022-03-13'),
(62, '2022-03-07', 9, 1, 1, 2, 1, 2, 1, 2, '', '2022-03-13', '2022-03-13'),
(63, '2022-03-07', 9, 1, 1, 2, 1, 2, 1, 3, '', '2022-02-13', '2022-02-13'),
(64, '2022-03-08', 5, 1, 1, 2, 1, 2, 2, 2, '', '2022-03-14', '2022-03-14'),
(65, '2022-03-14', 5, 1, 1, 2, 1, 2, 2, 2, '', '2022-03-21', '2022-03-21'),
(66, '2022-03-15', 2, 1, 1, 2, 1, 2, 1, 2, '', '2022-03-20', '2022-03-20'),
(67, '2022-03-15', 2, 1, 1, 2, 1, 1, 1, 1, '', '2022-03-20', '2022-03-20'),
(68, '2022-03-15', 2, 1, 1, 2, 1, 2, 1, 1, '', '2022-03-20', '2022-03-20'),
(69, '2022-03-15', 5, 1, 1, 2, 1, 2, 1, 1, '', '2022-03-20', '2022-03-20'),
(70, '2022-03-15', 5, 1, 1, 2, 1, 2, 1, 2, '', '2022-03-20', '2022-03-20'),
(71, '2022-03-16', 4, 1, 1, 2, 1, 1, 1, 2, '', '2022-03-20', '2022-03-20'),
(72, '2022-03-17', 2, 1, 1, 2, 1, 1, 1, 2, '', '2022-03-20', '2022-03-20'),
(73, '2022-03-18', 3, 1, 1, 2, 1, 2, 1, 2, '', '2022-03-20', '2022-03-20'),
(74, '2022-03-20', 5, 1, 1, 2, 1, 2, 1, 2, '', '2022-03-27', '2022-03-27'),
(75, '2022-03-20', 3, 1, 1, 2, 1, 1, 1, 2, '', '2022-03-27', '2022-03-27'),
(76, '2022-03-26', 2, 1, 1, 2, 1, 2, 3, 2, '', '2022-03-29', '2022-03-29'),
(77, '2022-03-26', 2, 1, 1, 2, 1, 2, 2, 2, '', '2022-03-28', '2022-03-28'),
(78, '2022-03-28', 3, 1, 1, 2, 1, 1, 2, 2, '', '2022-04-04', '2022-04-04'),
(79, '2022-03-29', 5, 1, 1, 2, 1, 2, 7, 2, '', '2022-04-02', '2022-04-02'),
(80, '2022-04-11', 3, 1, 1, 2, 1, 1, 6, 2, '', '2022-04-15', '2022-04-15'),
(81, '2022-04-11', 5, 1, 1, 2, 1, 2, 3, 2, '', '2022-04-12', '2022-04-12');

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `student_id` int(11) NOT NULL,
  `fees` float NOT NULL,
  `amount` float NOT NULL,
  `status` varchar(31) NOT NULL,
  `due_date` date NOT NULL,
  `paid_date` date NOT NULL,
  `discount` float NOT NULL,
  `attach` text NOT NULL,
  `package_id` int(11) NOT NULL,
  `qouta` int(11) NOT NULL,
  `remain` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `timestamp`, `student_id`, `fees`, `amount`, `status`, `due_date`, `paid_date`, `discount`, `attach`, `package_id`, `qouta`, `remain`) VALUES
(499, '2022-03-10', 224, 23880, 1990, 'done', '2022-03-10', '2022-03-10', 0, '', 172, 4, 0),
(500, '2022-03-14', 224, 23880, 1990, 'done', '2022-03-11', '0000-00-00', 0, '', 172, 4, 0),
(501, '2022-03-10', 224, 23880, 1990, 'done', '2022-05-09', '0000-00-00', 0, '', 172, 4, 0),
(502, '2022-03-10', 224, 23880, 1990, 'done', '2022-06-08', '0000-00-00', 0, '', 172, 4, 0),
(503, '2022-03-10', 224, 23880, 1990, 'done', '2022-07-08', '0000-00-00', 0, '', 172, 4, 0),
(504, '2022-03-10', 224, 23880, 1990, 'done', '2022-08-07', '0000-00-00', 0, '', 172, 4, 0),
(505, '2022-03-10', 224, 23880, 1990, 'done', '2022-09-06', '0000-00-00', 0, '', 172, 4, 0),
(506, '2022-03-10', 224, 23880, 1990, 'done', '2022-10-06', '0000-00-00', 0, '', 172, 4, 0),
(507, '2022-03-10', 224, 23880, 1990, 'done', '2022-11-05', '0000-00-00', 0, '', 172, 4, 0),
(508, '2022-03-10', 224, 23880, 1990, 'done', '2022-12-05', '0000-00-00', 0, '', 172, 4, 0),
(509, '2022-03-10', 224, 23880, 1990, 'done', '2023-01-04', '0000-00-00', 0, '', 172, 4, 0),
(510, '2022-03-10', 224, 23880, 1990, 'done', '2023-02-03', '0000-00-00', 0, '', 172, 4, 0),
(549, '2022-03-20', 243, 21480, 5370, 'done', '2022-03-20', '2022-03-20', 0, '', 180, 12, 0),
(550, '2022-03-26', 243, 21480, 5370, 'done', '2022-03-25', '0000-00-00', 0, '', 180, 12, 0),
(551, '2022-03-20', 243, 21480, 5370, 'done', '2022-05-01', '0000-00-00', 0, '', 180, 12, 0),
(552, '2022-03-20', 243, 21480, 5370, 'done', '2022-06-01', '0000-00-00', 0, '', 180, 12, 0),
(622, '2022-04-11', 275, 23880, 1990, 'done', '2022-04-11', '2022-04-11', 0, '', 189, 4, 0),
(623, '2022-04-11', 275, 0, 1990, 'waiting', '2022-05-01', '0000-00-00', 0, '', 189, 4, 0),
(624, '2022-04-11', 275, 0, 1990, 'waiting', '2022-06-01', '0000-00-00', 0, '', 189, 4, 0),
(625, '2022-04-11', 275, 0, 1990, 'waiting', '2022-07-01', '0000-00-00', 0, '', 189, 4, 0),
(626, '2022-04-11', 275, 0, 1990, 'waiting', '2022-08-01', '0000-00-00', 0, '', 189, 4, 0),
(627, '2022-04-11', 275, 0, 1990, 'waiting', '2022-09-01', '0000-00-00', 0, '', 189, 4, 0),
(628, '2022-04-11', 275, 0, 1990, 'waiting', '2022-10-01', '0000-00-00', 0, '', 189, 4, 0),
(629, '2022-04-11', 275, 0, 1990, 'waiting', '2022-11-01', '0000-00-00', 0, '', 189, 4, 0),
(630, '2022-04-11', 275, 0, 1990, 'waiting', '2022-12-01', '0000-00-00', 0, '', 189, 4, 0),
(631, '2022-04-11', 275, 0, 1990, 'waiting', '2023-01-01', '0000-00-00', 0, '', 189, 4, 0),
(632, '2022-04-11', 275, 0, 1990, 'waiting', '2023-02-01', '0000-00-00', 0, '', 189, 4, 0),
(633, '2022-04-11', 275, 0, 1990, 'waiting', '2023-03-01', '0000-00-00', 0, '', 189, 4, 0),
(634, '2022-04-11', 276, 21480, 5370, 'done', '2022-04-11', '2022-04-11', 0, '', 190, 12, 0),
(635, '2022-04-11', 276, 0, 5370, 'waiting', '2022-05-01', '0000-00-00', 0, '', 190, 12, 0),
(636, '2022-04-11', 276, 0, 5370, 'waiting', '2022-06-01', '0000-00-00', 0, '', 190, 12, 0),
(637, '2022-04-11', 276, 0, 5370, 'waiting', '2022-07-01', '0000-00-00', 0, '', 190, 12, 0),
(638, '2022-04-11', 274, 23880, 1990, 'done', '2022-04-11', '2022-04-11', 0, '', 192, 4, 0),
(639, '2022-04-11', 274, 0, 1990, 'waiting', '2022-05-01', '0000-00-00', 0, '', 192, 4, 0),
(640, '2022-04-11', 274, 0, 1990, 'waiting', '2022-06-01', '0000-00-00', 0, '', 192, 4, 0),
(641, '2022-04-11', 274, 0, 1990, 'waiting', '2022-07-01', '0000-00-00', 0, '', 192, 4, 0),
(642, '2022-04-11', 274, 0, 1990, 'waiting', '2022-08-01', '0000-00-00', 0, '', 192, 4, 0),
(643, '2022-04-11', 274, 0, 1990, 'waiting', '2022-09-01', '0000-00-00', 0, '', 192, 4, 0),
(644, '2022-04-11', 274, 0, 1990, 'waiting', '2022-10-01', '0000-00-00', 0, '', 192, 4, 0),
(645, '2022-04-11', 274, 0, 1990, 'waiting', '2022-11-01', '0000-00-00', 0, '', 192, 4, 0),
(646, '2022-04-11', 274, 0, 1990, 'waiting', '2022-12-01', '0000-00-00', 0, '', 192, 4, 0),
(647, '2022-04-11', 274, 0, 1990, 'waiting', '2023-01-01', '0000-00-00', 0, '', 192, 4, 0),
(648, '2022-04-11', 274, 0, 1990, 'waiting', '2023-02-01', '0000-00-00', 0, '', 192, 4, 0),
(649, '2022-04-11', 274, 0, 1990, 'waiting', '2023-03-01', '0000-00-00', 0, '', 192, 4, 0);

-- --------------------------------------------------------

--
-- Table structure for table `invoice_status`
--

CREATE TABLE `invoice_status` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(31) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice_status`
--

INSERT INTO `invoice_status` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-11', 'done'),
(2, '2022-02-11', 'waiting'),
(3, '2022-02-11', 'refund'),
(4, '2022-02-11', 'ar-refund');

-- --------------------------------------------------------

--
-- Table structure for table `lan`
--

CREATE TABLE `lan` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lan`
--

INSERT INTO `lan` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-01', 'English'),
(2, '2022-02-02', 'Arabic');

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`id`, `timestamp`, `name`) VALUES
(2, '2022-02-03', 'FO1'),
(3, '2022-02-16', 'FO2');

-- --------------------------------------------------------

--
-- Table structure for table `marketing`
--

CREATE TABLE `marketing` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL,
  `disc` text NOT NULL,
  `mrkt_type_id` int(11) NOT NULL,
  `mrkt_conv_type_id` int(11) NOT NULL,
  `mrkt_source_id` int(11) NOT NULL,
  `mrkt_others_id` int(11) NOT NULL,
  `url_camp` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `marketing`
--

INSERT INTO `marketing` (`id`, `timestamp`, `name`, `disc`, `mrkt_type_id`, `mrkt_conv_type_id`, `mrkt_source_id`, `mrkt_others_id`, `url_camp`) VALUES
(3, '2022-03-14', 'Mohamed', 'asd', 1, 1, 1, 1, 'file:///C:/xampp/htdocs/ischool/ischool-crm/free/index.html'),
(4, '2022-03-14', 'aasd', 'asd', 2, 1, 1, 1, 'file:///C:/xampp/htdocs/ischool/ischool-crm/free/index.html');

-- --------------------------------------------------------

--
-- Table structure for table `material`
--

CREATE TABLE `material` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `level_id` int(11) NOT NULL,
  `lan_id` int(11) NOT NULL,
  `session_type_id` int(11) NOT NULL,
  `track_id` int(11) NOT NULL,
  `video_link` text NOT NULL,
  `slide` text NOT NULL,
  `session_num` int(11) NOT NULL,
  `age_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `material`
--

INSERT INTO `material` (`id`, `timestamp`, `level_id`, `lan_id`, `session_type_id`, `track_id`, `video_link`, `slide`, `session_num`, `age_id`) VALUES
(1, '2022-03-14', 2, 1, 1, 1, 'https://www.google.com/', '', 1, 0),
(2, '2022-03-15', 2, 1, 2, 1, 'https://www.google.com/', '', 1, 2),
(3, '2022-03-28', 2, 1, 1, 1, 'https://www.google.com/', 'https://www.google.com/', 1, 2),
(4, '2022-03-28', 2, 1, 1, 1, 'https://www.google.com/', 'https://www.google.com/', 2, 2),
(5, '2022-03-28', 2, 1, 1, 1, 'https://www.google.com/', 'https://www.google.com/', 3, 2),
(6, '2022-03-28', 2, 1, 1, 1, 'https://www.google.com/', 'https://www.google.com/', 4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `mrkt_conv_type`
--

CREATE TABLE `mrkt_conv_type` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mrkt_conv_type`
--

INSERT INTO `mrkt_conv_type` (`id`, `timestamp`, `name`) VALUES
(1, '2022-03-14', 'Free Session'),
(2, '2022-03-14', 'Direct Registration');

-- --------------------------------------------------------

--
-- Table structure for table `mrkt_others`
--

CREATE TABLE `mrkt_others` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mrkt_others`
--

INSERT INTO `mrkt_others` (`id`, `timestamp`, `name`) VALUES
(1, '2022-03-14', 'Comment'),
(2, '2022-03-14', 'Msg'),
(3, '2022-03-14', 'Reschedule');

-- --------------------------------------------------------

--
-- Table structure for table `mrkt_source`
--

CREATE TABLE `mrkt_source` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mrkt_source`
--

INSERT INTO `mrkt_source` (`id`, `timestamp`, `name`) VALUES
(1, '2022-03-14', 'Fb'),
(2, '2022-03-14', 'Inst'),
(3, '2022-03-14', 'Tiktok'),
(4, '2022-03-14', 'Whatsapp'),
(5, '2022-03-14', 'GAds'),
(6, '2022-03-14', 'Direct calls');

-- --------------------------------------------------------

--
-- Table structure for table `mrkt_type`
--

CREATE TABLE `mrkt_type` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mrkt_type`
--

INSERT INTO `mrkt_type` (`id`, `timestamp`, `name`) VALUES
(1, '2022-03-14', 'Organic'),
(2, '2022-03-14', 'Organic Paid'),
(3, '2022-03-14', 'Ad'),
(4, '2022-03-14', 'Bio');

-- --------------------------------------------------------

--
-- Table structure for table `operation_status`
--

CREATE TABLE `operation_status` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(31) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `operation_status`
--

INSERT INTO `operation_status` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-03', 'Active'),
(2, '2022-02-05', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(11) NOT NULL,
  `fees` float NOT NULL,
  `quota` int(11) NOT NULL,
  `discount` float NOT NULL,
  `installments` int(11) NOT NULL,
  `paid_as` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`id`, `timestamp`, `name`, `fees`, `quota`, `discount`, `installments`, `paid_as`) VALUES
(1, '2022-02-08', 'Annually', 19080, 48, 0, 1, 19080),
(2, '2022-02-08', 'Quarterly', 21480, 48, 0, 4, 5370),
(3, '2022-02-08', 'Monthly', 23880, 48, 0, 12, 1990);

-- --------------------------------------------------------

--
-- Table structure for table `parent`
--

CREATE TABLE `parent` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` text NOT NULL,
  `phone` varchar(31) NOT NULL,
  `email` text NOT NULL,
  `name_2` text NOT NULL,
  `phone_2` varchar(31) NOT NULL,
  `email_2` text NOT NULL,
  `address` text NOT NULL,
  `location` text NOT NULL,
  `job` text NOT NULL,
  `marketing_id` int(11) NOT NULL,
  `customer_agent_id` int(11) NOT NULL,
  `sales_agent_id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parent`
--

INSERT INTO `parent` (`id`, `timestamp`, `name`, `phone`, `email`, `name_2`, `phone_2`, `email_2`, `address`, `location`, `job`, `marketing_id`, `customer_agent_id`, `sales_agent_id`, `username`, `password`) VALUES
(137, '2022-03-27', 'Ahmed', '01242544', 'asdasd', 'Mohammed Nabil', '01027713442', 'asd', 'aseq', 'asd', 'asd', 0, 11, 9, 'm', '123'),
(138, '2022-03-14', 'Gawish', 'asd', 'asd', 'Mohammed Nabil', 'asd', 'asd', 'asd', 'we', ' qweasd', 3, 14, 15, 'asd', 'asd'),
(139, '2022-03-14', 'asdasd', '1444', 'eqq2qe@gmail.com', '', '', '', '', 'eg', '', 3, 11, 9, 'eqq2qe@gmail.com', '1444'),
(140, '2022-03-14', 'asdasd', '1123', 'eqqaaqe@gmail.com', '', '', '', '', 'eg', '', 0, 14, 15, 'eqqaaqe@gmail.com', '1123'),
(141, '2022-03-14', 'aras', '5487547', 'asdasdww@gmail.com', '', '', '', '', 'eg', '', 0, 11, 9, 'asdasdww@gmail.com', '5487547'),
(163, '2022-04-11', 'Mohamed Nabil Mustafa', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', '', '', '', '', '', '', 0, 14, 15, 'mohammed.nabil.mustafa@gmail.com', '+201027713442');

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(31) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `permission`
--

INSERT INTO `permission` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-01', 'Instructor'),
(2, '2022-02-01', 'Sales'),
(3, '2022-02-01', 'Customer Support'),
(4, '2022-02-27', 'Admin'),
(5, '2022-02-27', 'Operation'),
(6, '2022-02-27', 'Finance'),
(7, '2022-02-27', 'Marketing'),
(8, '2022-02-27', 'R&D');

-- --------------------------------------------------------

--
-- Table structure for table `registeration`
--

CREATE TABLE `registeration` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `parent_name` text NOT NULL,
  `student_name` text NOT NULL,
  `phone` text NOT NULL,
  `email` text NOT NULL,
  `camp_id` int(11) NOT NULL,
  `country` text NOT NULL,
  `birthdate` date NOT NULL,
  `group_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `status` text NOT NULL,
  `type` text NOT NULL,
  `parent_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `inst` int(11) NOT NULL,
  `upgrade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registeration`
--

INSERT INTO `registeration` (`id`, `timestamp`, `parent_name`, `student_name`, `phone`, `email`, `camp_id`, `country`, `birthdate`, `group_id`, `package_id`, `status`, `type`, `parent_id`, `student_id`, `inst`, `upgrade`) VALUES
(17, '2022-03-16', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'ad', '2012-02-02', 71, 3, 'UNPAID', 'PayAtFawry', 0, 0, 0, 0),
(18, '2022-03-16', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'ad', '2012-02-02', 71, 3, 'pending', '', 0, 0, 0, 0),
(19, '2022-03-16', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'ad', '2012-02-02', 71, 3, 'UNPAID', 'PayAtFawry', 0, 0, 0, 0),
(20, '2022-03-16', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'ad', '2012-02-01', 71, 2, 'PAID', 'PayUsingCC', 0, 0, 0, 0),
(23, '2022-03-17', 'Mohamed Nabil Mustafa', 'ahmed', '01027713742', 'mohammed.nabil.mstafa@gmail.com', 0, 'ad', '2012-02-02', 72, 3, 'pending', '', 0, 0, 0, 0),
(24, '2022-03-17', 'Mohamed Nabil Mustafa', 'ahmed', '01027713472', 'mohammed.nabil.mutafa@gmail.com', 0, 'ad', '2012-02-02', 72, 3, 'PAID', 'PayUsingCC', 0, 0, 0, 0),
(25, '2022-03-20', 'Mohamed Nabil Mustafa', 'ali', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'eg', '2012-02-02', 75, 1, 'pending', '', 0, 0, 0, 0),
(26, '2022-03-20', 'Mohamed Nabil Mustafa', 'ali', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'eg', '2012-02-02', 75, 1, 'pending', '', 0, 0, 0, 0),
(27, '2022-03-20', 'Mohamed Nabil Mustafa', 'ali', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'eg', '2012-02-02', 75, 1, 'pending', '', 0, 0, 0, 0),
(28, '2022-03-20', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'eg', '2012-02-02', 75, 3, 'pending', '', 0, 0, 0, 0),
(29, '2022-03-20', 'Mohamed Nabil Mustafa', 'ali', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'eg', '2012-02-02', 75, 2, 'pending', '', 0, 0, 0, 0),
(30, '2022-03-20', 'Mohamed Nabil Mustafa', 'aa', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'eg', '2012-02-02', 75, 1, 'pending', '', 0, 0, 0, 0),
(31, '2022-03-20', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'eg', '2012-02-02', 75, 2, 'pending', '', 0, 0, 0, 0),
(32, '2022-03-20', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'eg', '2012-02-02', 75, 3, 'pending', '', 0, 0, 0, 0),
(33, '2022-03-20', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'eg', '2012-02-02', 75, 3, 'pending', '', 0, 0, 0, 0),
(34, '2022-03-20', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'eg', '2012-02-02', 75, 3, 'pending', '', 0, 0, 0, 0),
(35, '2022-03-20', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'eg', '2012-02-02', 75, 2, 'pending', '', 0, 0, 0, 0),
(39, '2022-04-11', 'Mohamed Nabil Mustafa', 'alaa refaie', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '0000-00-00', 0, 3, 'PAID', 'Accept', 0, 0, 0, 0),
(40, '2022-04-11', 'Mohamed Nabil Mustafa', 'ahmed', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '0000-00-00', 80, 2, 'PAID', 'Accept', 0, 0, 0, 0),
(41, '2022-04-11', 'Mohamed Nabil Mustafa', 'ahmed', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '0000-00-00', -1, 0, 'PAID', 'Accept', 161, 267, 578, 0),
(42, '2022-04-11', 'Mohamed Nabil Mustafa', 'alaa refaie', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '0000-00-00', -1, 0, 'PAID', 'Accept', 161, 266, -1, 0),
(43, '2022-04-11', 'Mohamed Nabil Mustafa', 'kly', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '0000-00-00', 80, 1, 'PAID', 'Accept', 0, 0, 0, 0),
(44, '2022-04-11', 'Mohamed Nabil Mustafa', 'aa', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '0000-00-00', 80, 2, 'PAID', 'Accept', 0, 0, 0, 0),
(45, '2022-04-11', 'Mohamed Nabil Mustafa', 'ali', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '0000-00-00', 80, 3, 'PAID', 'Accept', 0, 0, 0, 0),
(46, '2022-04-11', 'Mohamed Nabil Mustafa', 'ali', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '0000-00-00', -1, 0, 'PAID', 'Accept', 161, 270, -1, 0),
(47, '2022-04-11', 'Mohamed Nabil Mustafa', 'alaa refaie', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '0000-00-00', 0, 3, 'PAID', 'Accept', 0, 0, 0, 0),
(48, '2022-04-11', 'Mohamed Nabil Mustafa', 'ahmed', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '0000-00-00', 80, 3, 'PAID', 'Accept', 0, 0, 0, 0),
(49, '2022-04-11', 'Mohamed Nabil Mustafa', 'alaa refaie', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '0000-00-00', -1, 0, 'PAID', 'Accept', 162, 271, -1, 0),
(50, '2022-04-11', 'Mohamed Nabil Mustafa', 'ahmed', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '0000-00-00', -1, 0, 'PAID', 'Accept', 162, 272, 611, 0),
(51, '2022-04-11', 'Mohamed Nabil Mustafa', 'ahmed', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '2011-01-08', 80, 3, 'PAID', 'Accept', 0, 0, 0, 0),
(52, '2022-04-11', 'Mohamed Nabil Mustafa', 'Mohamed Nabil Mustafa', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '2011-01-14', 80, 2, 'PAID', 'Accept', 163, 274, 0, 0),
(53, '2022-04-11', 'Mohamed Nabil Mustafa', 'Mohamed Nabil Mustafa', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '2011-01-14', 80, 3, 'PAID', 'Accept', 163, 274, 0, -1),
(54, '2022-04-11', 'Mohamed Nabil Mustafa', 'Mohamed Nabil Mustafa', '+201027713442', 'mohammed.nabil.mustafa@gmail.com', 0, '', '2011-01-14', 80, 3, 'PAID', 'Accept', 163, 274, 0, -1);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(31) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-27', 'Junior'),
(2, '2022-02-27', 'Standard'),
(3, '2022-02-27', 'Senior'),
(4, '2022-02-27', 'Team Leader'),
(5, '2022-02-27', 'Head');

-- --------------------------------------------------------

--
-- Table structure for table `sales_calls`
--

CREATE TABLE `sales_calls` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `call_type_id` int(11) NOT NULL,
  `call_status_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `close_id` int(11) NOT NULL,
  `follow_date` date NOT NULL,
  `note` text NOT NULL,
  `call_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `groups_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `zoomlink` text NOT NULL,
  `session_date` date NOT NULL,
  `session_num` int(11) NOT NULL,
  `open_by` text NOT NULL,
  `material_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `timestamp`, `groups_id`, `employee_id`, `zoomlink`, `session_date`, `session_num`, `open_by`, `material_id`) VALUES
(31, '2022-02-18', 53, 11, '', '2022-02-20', 1, '', 0),
(32, '2022-02-18', 53, 11, '', '2022-02-27', 2, '', 0),
(33, '2022-02-18', 53, 11, '', '2022-03-06', 3, '', 0),
(34, '2022-02-18', 53, 11, '', '2022-03-13', 4, '', 0),
(35, '2022-02-26', 54, 11, '', '2022-02-27', 1, '', 0),
(36, '2022-02-26', 54, 11, '', '2022-03-06', 2, '', 0),
(37, '2022-02-26', 54, 11, '', '2022-03-13', 3, '', 0),
(38, '2022-02-26', 54, 11, '', '2022-03-20', 4, '', 0),
(39, '2022-02-26', 55, 12, '', '2022-02-27', 1, '', 0),
(40, '2022-02-26', 55, 12, '', '2022-03-13', 3, '', 0),
(41, '2022-02-26', 55, 12, '', '2022-03-06', 2, '', 0),
(42, '2022-02-26', 55, 12, '', '2022-03-20', 4, '', 0),
(43, '2022-02-26', 56, 12, '', '2022-02-27', 1, '', 0),
(44, '2022-02-26', 57, 11, '', '2022-02-28', 1, '', 0),
(45, '2022-02-26', 58, 11, '', '2022-02-27', 1, '', 0),
(46, '2022-02-26', 59, 11, '', '2022-02-28', 1, '', 0),
(47, '2022-02-26', 59, 11, '', '2022-03-07', 2, '', 0),
(48, '2022-03-06', 60, 12, '', '2022-03-06', 1, '', 0),
(49, '2022-03-06', 60, 12, '', '2022-03-13', 2, '', 0),
(50, '2022-03-06', 60, 12, '', '2022-03-27', 4, '', 0),
(51, '2022-03-06', 60, 12, '', '2022-04-03', 5, '', 0),
(52, '2022-03-06', 60, 12, '', '2022-04-10', 6, '', 0),
(53, '2022-03-06', 60, 12, '', '2022-04-17', 7, '', 0),
(54, '2022-03-06', 60, 12, '', '2022-04-24', 8, '', 0),
(55, '2022-03-06', 60, 12, '', '2022-05-01', 9, '', 0),
(56, '2022-03-06', 60, 12, '', '2022-05-08', 10, '', 0),
(57, '2022-03-06', 60, 12, '', '2022-05-15', 11, '', 0),
(58, '2022-03-06', 60, 12, '', '2022-05-22', 12, '', 0),
(59, '2022-03-06', 60, 12, '', '2022-03-20', 3, '', 0),
(60, '2022-03-07', 61, 12, '', '2022-03-13', 1, '', 0),
(61, '2022-03-07', 62, 12, '', '2022-03-13', 1, '', 0),
(62, '2022-03-07', 63, 12, '', '2022-02-13', 1, '', 0),
(63, '2022-03-08', 64, 12, '', '2022-03-14', 1, '', 0),
(64, '2022-03-15', 65, 12, '', '2022-03-07', 1, '', 2),
(66, '2022-03-15', 70, 12, '', '2022-03-20', 1, '', 2),
(67, '2022-03-16', 71, 12, '', '2022-03-20', 1, '', 0),
(68, '2022-03-16', 71, 12, '', '2022-03-27', 2, '', 0),
(69, '2022-03-16', 71, 12, '', '2022-04-03', 3, '', 0),
(70, '2022-03-16', 71, 12, '', '2022-04-10', 4, '', 0),
(71, '2022-03-16', 71, 12, '', '2022-04-17', 5, '', 0),
(72, '2022-03-16', 71, 12, '', '2022-04-24', 6, '', 0),
(73, '2022-03-16', 71, 12, '', '2022-05-01', 7, '', 0),
(74, '2022-03-16', 71, 12, '', '2022-05-08', 8, '', 0),
(75, '2022-03-16', 71, 12, '', '2022-05-15', 9, '', 0),
(76, '2022-03-16', 71, 12, '', '2022-05-22', 10, '', 0),
(77, '2022-03-16', 71, 12, '', '2022-05-29', 11, '', 0),
(78, '2022-03-16', 71, 12, '', '2022-06-05', 12, '', 0),
(79, '2022-03-17', 72, 17, '', '2022-03-20', 1, '', 0),
(80, '2022-03-17', 72, 17, '', '2022-03-27', 2, '', 0),
(81, '2022-03-18', 73, 17, '', '2022-03-20', 1, '', 2),
(82, '2022-03-20', 74, 12, '', '2022-03-27', 1, '', 2),
(83, '2022-03-20', 75, 12, '', '2022-03-27', 1, '', 0),
(84, '2022-03-20', 75, 12, '', '2022-04-03', 2, '', 0),
(85, '2022-03-20', 75, 12, '', '2022-04-10', 3, '', 0),
(86, '2022-03-20', 75, 12, '', '2022-04-17', 4, '', 0),
(87, '2022-03-20', 75, 12, '', '2022-04-24', 5, '', 0),
(88, '2022-03-20', 75, 12, '', '2022-05-01', 6, '', 0),
(89, '2022-03-20', 75, 12, '', '2022-05-08', 7, '', 0),
(90, '2022-03-20', 75, 12, '', '2022-05-15', 8, '', 0),
(91, '2022-03-20', 75, 12, '', '2022-05-22', 9, '', 0),
(92, '2022-03-20', 75, 12, '', '2022-05-29', 10, '', 0),
(93, '2022-03-20', 75, 12, '', '2022-06-05', 11, '', 0),
(94, '2022-03-20', 75, 12, '', '2022-06-12', 12, '', 0),
(95, '2022-03-26', 76, 12, '', '2022-03-29', 1, '', 2),
(96, '2022-03-26', 77, 17, '', '2022-03-28', 1, '', 2),
(97, '2022-03-28', 78, 12, '', '2022-03-14', 1, '', 3),
(98, '2022-03-28', 78, 12, '', '2022-03-21', 2, '', 4),
(99, '2022-03-28', 78, 12, '', '2022-04-18', 3, '', 5),
(100, '2022-03-28', 78, 12, '', '2022-04-25', 4, '', 6),
(101, '2022-03-29', 79, 12, '', '2022-04-02', 1, '', 2),
(102, '2022-04-11', 80, 12, '', '2022-04-15', 1, '', 3),
(103, '2022-04-11', 80, 12, '', '2022-04-22', 2, '', 4),
(104, '2022-04-11', 80, 12, '', '2022-04-29', 3, '', 5),
(105, '2022-04-11', 80, 12, '', '2022-05-06', 4, '', 6),
(106, '2022-04-11', 80, 12, '', '2022-05-13', 5, '', 0),
(107, '2022-04-11', 80, 12, '', '2022-05-20', 6, '', 0),
(108, '2022-04-11', 80, 12, '', '2022-05-27', 7, '', 0),
(109, '2022-04-11', 80, 12, '', '2022-06-03', 8, '', 0),
(110, '2022-04-11', 80, 12, '', '2022-06-10', 9, '', 0),
(111, '2022-04-11', 80, 12, '', '2022-06-17', 10, '', 0),
(112, '2022-04-11', 80, 12, '', '2022-06-24', 11, '', 0),
(113, '2022-04-11', 80, 12, '', '2022-07-01', 12, '', 0),
(114, '2022-04-11', 80, 12, '', '2022-07-08', 13, '', 0),
(115, '2022-04-11', 80, 12, '', '2022-07-15', 14, '', 0),
(116, '2022-04-11', 80, 12, '', '2022-07-22', 15, '', 0),
(117, '2022-04-11', 80, 12, '', '2022-07-29', 16, '', 0),
(118, '2022-04-11', 80, 12, '', '2022-08-05', 17, '', 0),
(119, '2022-04-11', 80, 12, '', '2022-08-12', 18, '', 0),
(120, '2022-04-11', 80, 12, '', '2022-08-19', 19, '', 0),
(121, '2022-04-11', 80, 12, '', '2022-08-26', 20, '', 0),
(122, '2022-04-11', 80, 12, '', '2022-09-02', 21, '', 0),
(123, '2022-04-11', 80, 12, '', '2022-09-09', 22, '', 0),
(124, '2022-04-11', 80, 12, '', '2022-09-16', 23, '', 0),
(125, '2022-04-11', 80, 12, '', '2022-09-23', 24, '', 0),
(126, '2022-04-11', 80, 12, '', '2022-09-30', 25, '', 0),
(127, '2022-04-11', 80, 12, '', '2022-10-07', 26, '', 0),
(128, '2022-04-11', 80, 12, '', '2022-10-14', 27, '', 0),
(129, '2022-04-11', 80, 12, '', '2022-10-21', 28, '', 0),
(130, '2022-04-11', 80, 12, '', '2022-10-28', 29, '', 0),
(131, '2022-04-11', 80, 12, '', '2022-11-04', 30, '', 0),
(132, '2022-04-11', 80, 12, '', '2022-11-11', 31, '', 0),
(133, '2022-04-11', 80, 12, '', '2022-11-18', 32, '', 0),
(134, '2022-04-11', 80, 12, '', '2022-11-25', 33, '', 0),
(135, '2022-04-11', 80, 12, '', '2022-12-02', 34, '', 0),
(136, '2022-04-11', 80, 12, '', '2022-12-09', 35, '', 0),
(137, '2022-04-11', 80, 12, '', '2022-12-16', 36, '', 0),
(138, '2022-04-11', 80, 12, '', '2022-12-23', 37, '', 0),
(139, '2022-04-11', 80, 12, '', '2022-12-30', 38, '', 0),
(140, '2022-04-11', 80, 12, '', '2023-01-06', 39, '', 0),
(141, '2022-04-11', 80, 12, '', '2023-01-13', 40, '', 0),
(142, '2022-04-11', 80, 12, '', '2023-01-20', 41, '', 0),
(143, '2022-04-11', 80, 12, '', '2023-01-27', 42, '', 0),
(144, '2022-04-11', 80, 12, '', '2023-02-03', 43, '', 0),
(145, '2022-04-11', 80, 12, '', '2023-02-10', 44, '', 0),
(146, '2022-04-11', 80, 12, '', '2023-02-17', 45, '', 0),
(147, '2022-04-11', 80, 12, '', '2023-02-24', 46, '', 0),
(148, '2022-04-11', 80, 12, '', '2023-03-03', 47, '', 0),
(149, '2022-04-11', 80, 12, '', '2023-03-10', 48, '', 0),
(150, '2022-04-11', 81, 12, '', '2022-04-12', 1, '', 2);

-- --------------------------------------------------------

--
-- Table structure for table `session_tasks`
--

CREATE TABLE `session_tasks` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `session_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `session_tasks`
--

INSERT INTO `session_tasks` (`id`, `timestamp`, `session_id`, `task_id`) VALUES
(1, '2022-03-15', 64, 7),
(2, '2022-03-17', 79, 8),
(3, '2022-03-17', 79, 9),
(4, '2022-03-17', 80, 10),
(5, '2022-03-18', 81, 7),
(6, '2022-03-20', 82, 7),
(7, '2022-03-20', 83, 8),
(8, '2022-03-20', 83, 9),
(9, '2022-03-20', 84, 10),
(10, '2022-03-26', 95, 7),
(11, '2022-03-26', 96, 7),
(12, '2022-03-28', 97, 8),
(13, '2022-03-28', 97, 11),
(14, '2022-03-28', 97, 9),
(15, '2022-03-28', 97, 12),
(16, '2022-03-28', 98, 10),
(17, '2022-03-28', 100, 13),
(18, '2022-03-29', 101, 7),
(19, '2022-04-11', 102, 8),
(20, '2022-04-11', 102, 9),
(21, '2022-04-11', 102, 11),
(22, '2022-04-11', 102, 12),
(23, '2022-04-11', 103, 10),
(24, '2022-04-11', 105, 13),
(25, '2022-04-11', 150, 7);

-- --------------------------------------------------------

--
-- Table structure for table `session_type`
--

CREATE TABLE `session_type` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `session_type`
--

INSERT INTO `session_type` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-01', 'Normal'),
(2, '2022-02-01', 'Free'),
(3, '2022-02-01', 'Recap');

-- --------------------------------------------------------

--
-- Table structure for table `slots`
--

CREATE TABLE `slots` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(31) NOT NULL,
  `slot` varchar(31) NOT NULL,
  `live_slot` text NOT NULL,
  `from_value` text NOT NULL,
  `to_value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `slots`
--

INSERT INTO `slots` (`id`, `timestamp`, `name`, `slot`, `live_slot`, `from_value`, `to_value`) VALUES
(2, '2022-03-19', 'Slot 1', '01:30 - 04:00', '01:30 PM', '13:30:00', '16:00:00'),
(3, '2022-03-19', 'Slot 2', '04:30 - 07:00', '04:30 PM', '16:30:00', '19:00:00'),
(4, '2022-03-19', 'Slot 3', '07:30 - 10:00', '07:30 PM', '19:30:00', '22:00:00'),
(5, '2022-03-19', 'Slot 4', '02:00 - 03:00', '02:00 PM', '14:00:00', '15:00:00'),
(6, '2022-03-19', 'Slot 5', '03:00 - 04:00', '03:00 PM', '15:00:00', '16:00:00'),
(7, '2022-03-19', 'Slot 6', '05:00 - 06:00', '05:00 PM', '17:00:00', '18:00:00'),
(8, '2022-03-19', 'Slot 7', '06:00 - 07:00', '06:00 PM', '18:00:00', '19:00:00'),
(9, '2022-03-19', 'Slot 8', '08:00 - 09:00', '08:00 PM', '20:00:00', '21:00:00'),
(10, '2022-03-19', 'Slot 9', '09:00 - 10:00', '09:00 PM', '21:00:00', '22:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `std_id` varchar(31) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `free_session_status` varchar(31) NOT NULL,
  `std_status` int(11) NOT NULL,
  `st_name` varchar(31) NOT NULL,
  `age` text NOT NULL,
  `birthdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `timestamp`, `std_id`, `parent_id`, `free_session_status`, `std_status`, `st_name`, `age`, `birthdate`) VALUES
(218, '2022-03-10', '1012', 133, 'no', 0, 'Eyad', 'C', '2012-02-02'),
(220, '2022-03-10', '', 133, 'yes', 0, 'Mohamed Nabil Mustafa', 'C', '2012-02-02'),
(223, '2022-03-10', '1542', 137, 'no', 0, 'asd', 'B', '2015-02-02'),
(224, '2022-03-10', '1547', 137, 'no', 0, 'dasd', 'D', '2008-02-02'),
(225, '2022-03-14', '124', 138, 'no', 0, 'asd', 'C', '2012-02-02'),
(226, '2022-03-14', '', 138, 'yes', 0, 'Mohamed Nabil Mustafa', 'C', '2012-02-02'),
(227, '2022-03-14', '', 138, 'yes', 0, 'Mohamed Nabil Mustafa', 'C', '2012-02-02'),
(228, '2022-03-14', '', 139, 'yes', 0, 'asdasd', 'C', '2012-02-02'),
(229, '2022-03-14', '', 140, 'yes', 0, 'asdasd', 'C', '2012-02-02'),
(230, '2022-03-14', '', 133, 'yes', 0, 'Mohamed Nabil Mustafa', 'T', '2022-03-14'),
(232, '2022-03-14', '', 141, 'yes', 0, 'aras', 'C', '2012-01-01'),
(243, '2022-03-20', '', 152, 'yes', 0, 'ahmed', '', '2012-02-02'),
(244, '2022-03-20', '', 152, 'yes', 0, 'Mohamed Nabil Mustafa', 'C', '2012-02-02'),
(245, '2022-03-26', '', 155, 'yes', 0, 'alaa refaie', 'C', '2012-02-02'),
(246, '2022-03-26', '', 156, 'yes', 0, 'alaa refaie', 'C', '2012-02-02'),
(247, '2022-03-26', '', 156, 'yes', 0, 'asdasd', 'C', '2012-02-02'),
(248, '2022-03-26', '', 156, 'yes', 0, 'asdasd', 'C', '2012-02-02'),
(249, '2022-03-26', '', 156, 'yes', 0, 'asdasd', 'C', '2012-02-02'),
(250, '2022-03-26', '', 156, 'yes', 0, 'alaa refaie', 'C', '2012-02-02'),
(251, '2022-03-26', '', 156, 'yes', 0, 'asdasd', 'C', '2012-02-02'),
(252, '2022-03-26', '', 156, 'yes', 0, 'Mohamed Nabil Mustafa', 'C', '2012-02-02'),
(253, '2022-03-26', '', 152, 'yes', 0, 'asdasd', 'C', '2012-02-02'),
(254, '2022-03-26', '', 152, 'yes', 0, 'Mohamed Nabil Mustafa', 'C', '2012-02-02'),
(255, '2022-03-26', '', 156, 'yes', 0, 'alaa refaie', 'C', '2012-02-02'),
(256, '2022-03-26', '', 156, 'yes', 0, 'alaa refaie', 'C', '2012-02-02'),
(257, '2022-03-26', '', 156, 'yes', 0, 'Gawish', 'C', '2012-02-02'),
(258, '2022-03-26', '', 157, 'yes', 0, 'asdasd', 'C', '2012-02-02'),
(259, '2022-03-26', '', 157, 'yes', 0, 'Ahmed Gawish', 'C', '2012-02-02'),
(260, '2022-03-26', '', 158, 'yes', 0, 'alaa refaie', 'C', '2012-02-02'),
(262, '2022-03-28', '', 160, 'yes', 0, 'alaa nabil', '', '2012-02-02'),
(263, '2022-03-29', '', 160, 'yes', 0, 'asdasd', '', '0000-00-00'),
(264, '2022-03-29', '', 160, 'yes', 0, 'asdasd', '', '0000-00-00'),
(266, '2022-04-11', '', 161, 'yes', 0, 'alaa refaie', '', '0000-00-00'),
(267, '2022-04-11', '', 161, 'yes', 0, 'ahmed', '', '0000-00-00'),
(268, '2022-04-11', '', 161, 'yes', 0, 'kly', '', '0000-00-00'),
(269, '2022-04-11', '', 161, 'yes', 0, 'aa', '', '0000-00-00'),
(271, '2022-04-11', '', 162, 'yes', 0, 'alaa refaie', '', '0000-00-00'),
(272, '2022-04-11', '', 162, 'yes', 0, 'ahmed', '', '0000-00-00'),
(274, '2022-04-11', '', 163, 'yes', 0, 'Mohamed Nabil Mustafa', '', '2011-01-14'),
(275, '2022-04-11', '', 163, 'yes', 0, 'ahmed', '', '2011-01-08'),
(276, '2022-04-11', '', 163, 'yes', 0, 'Mohamed Nabil Mustafa', '', '2011-01-14');

-- --------------------------------------------------------

--
-- Table structure for table `students_ans`
--

CREATE TABLE `students_ans` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `att_feed_id` int(11) NOT NULL,
  `tasks_id` int(11) NOT NULL,
  `answer` text NOT NULL,
  `correct` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students_ans`
--

INSERT INTO `students_ans` (`id`, `timestamp`, `att_feed_id`, `tasks_id`, `answer`, `correct`) VALUES
(1, '2022-03-17', 218, 7, 'well', ''),
(2, '2022-03-17', 218, 7, 'good', ''),
(3, '2022-03-17', 257, 8, 'good', 'Right'),
(4, '2022-03-17', 257, 9, '', ''),
(5, '2022-03-17', 258, 10, 'asdasd', 'Right'),
(6, '2022-03-17', 257, 9, 'asd', 'Right'),
(7, '2022-03-28', 298, 7, 'good', 'Right');

-- --------------------------------------------------------

--
-- Table structure for table `student_groups`
--

CREATE TABLE `student_groups` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `groups_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `status` varchar(31) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_groups`
--

INSERT INTO `student_groups` (`id`, `timestamp`, `groups_id`, `student_id`, `status`) VALUES
(902, '2022-03-10', 54, 223, 'active'),
(903, '2022-03-10', 63, 224, 'active'),
(904, '2022-03-14', 65, 232, 'active'),
(913, '2022-03-20', 75, 243, 'active'),
(914, '2022-03-20', 74, 244, 'active'),
(915, '2022-03-26', 74, 246, 'active'),
(916, '2022-03-26', 74, 247, 'active'),
(917, '2022-03-26', 74, 248, 'active'),
(918, '2022-03-26', 74, 249, 'active'),
(919, '2022-03-26', 74, 250, 'active'),
(920, '2022-03-26', 76, 251, 'active'),
(921, '2022-03-26', 76, 252, 'active'),
(922, '2022-03-26', 76, 253, 'active'),
(923, '2022-03-26', 76, 254, 'active'),
(924, '2022-03-26', 76, 255, 'active'),
(925, '2022-03-26', 76, 256, 'active'),
(926, '2022-03-26', 77, 257, 'active'),
(927, '2022-03-26', 77, 258, 'active'),
(928, '2022-03-26', 77, 259, 'active'),
(940, '2022-04-11', 81, 274, 'active'),
(941, '2022-04-11', 80, 275, 'active'),
(942, '2022-04-11', 80, 276, 'active'),
(943, '2022-04-11', 80, 274, 'active');

-- --------------------------------------------------------

--
-- Table structure for table `student_package`
--

CREATE TABLE `student_package` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `student_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_package`
--

INSERT INTO `student_package` (`id`, `timestamp`, `student_id`, `package_id`) VALUES
(66, '2022-02-26', 158, 3),
(67, '2022-02-26', 159, 2),
(172, '2022-03-10', 224, 3),
(180, '2022-03-20', 243, 2),
(189, '2022-04-11', 275, 3),
(190, '2022-04-11', 276, 2),
(192, '2022-04-11', 274, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `level_id` int(11) NOT NULL,
  `lan_id` int(11) NOT NULL,
  `session_type_id` int(11) NOT NULL,
  `track_id` int(11) NOT NULL,
  `session_num` int(11) NOT NULL,
  `type` text NOT NULL,
  `option1` text NOT NULL,
  `option2` text NOT NULL,
  `option3` text NOT NULL,
  `correct` text NOT NULL,
  `points` int(11) NOT NULL,
  `question` text NOT NULL,
  `age_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `timestamp`, `level_id`, `lan_id`, `session_type_id`, `track_id`, `session_num`, `type`, `option1`, `option2`, `option3`, `correct`, `points`, `question`, `age_id`) VALUES
(7, '2022-03-15', 2, 1, 2, 1, 1, 'multi', 'good', 'well', 'asd', 'option1', 10, 'how are you', 2),
(8, '2022-03-17', 2, 1, 1, 1, 1, 'multi', 'good', 'well', 'bad', 'option1', 10, 'how are you', 2),
(9, '2022-03-17', 2, 1, 1, 1, 1, 'tf', 'asd', 'asdasd', '', 'option1', 10, 'how are you', 2),
(10, '2022-03-17', 2, 1, 1, 1, 2, 'multi', 'asd', 'asdasd', 'asdasd', 'option2', 10, 'how are you', 2),
(11, '2022-03-28', 2, 1, 1, 1, 1, 'multi', 'good', 'well', 'bad', 'option2', 10, 'how are you', 2),
(12, '2022-03-28', 2, 1, 1, 1, 1, 'tf', 'yes', 'no', '', 'option1', 20, 'how are you', 2),
(13, '2022-03-28', 2, 1, 1, 1, 4, 'multi', 'good', 'well', 'bad', 'option3', 10, 'enta fan', 2);

-- --------------------------------------------------------

--
-- Table structure for table `track`
--

CREATE TABLE `track` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `track`
--

INSERT INTO `track` (`id`, `timestamp`, `name`) VALUES
(1, '2022-02-01', 'CS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `age`
--
ALTER TABLE `age`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attend`
--
ALTER TABLE `attend`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `att_feed`
--
ALTER TABLE `att_feed`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `call_status`
--
ALTER TABLE `call_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `call_status_sales`
--
ALTER TABLE `call_status_sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `call_type`
--
ALTER TABLE `call_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `call_type_sales`
--
ALTER TABLE `call_type_sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cat`
--
ALTER TABLE `cat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cat_sales`
--
ALTER TABLE `cat_sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `certifications`
--
ALTER TABLE `certifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `close`
--
ALTER TABLE `close`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `close_sales`
--
ALTER TABLE `close_sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cs_calls`
--
ALTER TABLE `cs_calls`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `days`
--
ALTER TABLE `days`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permission_id` (`permission_id`),
  ADD KEY `role_id` (`role_id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `free_session_whatsapp`
--
ALTER TABLE `free_session_whatsapp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `free_session_whatsapp_temp`
--
ALTER TABLE `free_session_whatsapp_temp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice_status`
--
ALTER TABLE `invoice_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lan`
--
ALTER TABLE `lan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `marketing`
--
ALTER TABLE `marketing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mrkt_conv_type`
--
ALTER TABLE `mrkt_conv_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mrkt_others`
--
ALTER TABLE `mrkt_others`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mrkt_source`
--
ALTER TABLE `mrkt_source`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mrkt_type`
--
ALTER TABLE `mrkt_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `operation_status`
--
ALTER TABLE `operation_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parent`
--
ALTER TABLE `parent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registeration`
--
ALTER TABLE `registeration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_calls`
--
ALTER TABLE `sales_calls`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `session_tasks`
--
ALTER TABLE `session_tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `session_type`
--
ALTER TABLE `session_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slots`
--
ALTER TABLE `slots`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students_ans`
--
ALTER TABLE `students_ans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_groups`
--
ALTER TABLE `student_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_package`
--
ALTER TABLE `student_package`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `track`
--
ALTER TABLE `track`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `age`
--
ALTER TABLE `age`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `attend`
--
ALTER TABLE `attend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `att_feed`
--
ALTER TABLE `att_feed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=674;

--
-- AUTO_INCREMENT for table `call_status`
--
ALTER TABLE `call_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `call_status_sales`
--
ALTER TABLE `call_status_sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `call_type`
--
ALTER TABLE `call_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `call_type_sales`
--
ALTER TABLE `call_type_sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cat`
--
ALTER TABLE `cat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cat_sales`
--
ALTER TABLE `cat_sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `certifications`
--
ALTER TABLE `certifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `close`
--
ALTER TABLE `close`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `close_sales`
--
ALTER TABLE `close_sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cs_calls`
--
ALTER TABLE `cs_calls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `days`
--
ALTER TABLE `days`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `free_session_whatsapp`
--
ALTER TABLE `free_session_whatsapp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `free_session_whatsapp_temp`
--
ALTER TABLE `free_session_whatsapp_temp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=650;

--
-- AUTO_INCREMENT for table `invoice_status`
--
ALTER TABLE `invoice_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `lan`
--
ALTER TABLE `lan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `marketing`
--
ALTER TABLE `marketing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `material`
--
ALTER TABLE `material`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `mrkt_conv_type`
--
ALTER TABLE `mrkt_conv_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mrkt_others`
--
ALTER TABLE `mrkt_others`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `mrkt_source`
--
ALTER TABLE `mrkt_source`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `mrkt_type`
--
ALTER TABLE `mrkt_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `operation_status`
--
ALTER TABLE `operation_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `package`
--
ALTER TABLE `package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `parent`
--
ALTER TABLE `parent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=164;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `registeration`
--
ALTER TABLE `registeration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sales_calls`
--
ALTER TABLE `sales_calls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `session_tasks`
--
ALTER TABLE `session_tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `session_type`
--
ALTER TABLE `session_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `slots`
--
ALTER TABLE `slots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=277;

--
-- AUTO_INCREMENT for table `students_ans`
--
ALTER TABLE `students_ans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `student_groups`
--
ALTER TABLE `student_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=944;

--
-- AUTO_INCREMENT for table `student_package`
--
ALTER TABLE `student_package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `track`
--
ALTER TABLE `track`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`),
  ADD CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  ADD CONSTRAINT `employee_ibfk_3` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
