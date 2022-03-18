-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2022 at 09:42 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

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
(217, '2022-03-10', 224, 62, '', ''),
(218, '2022-03-14', 232, 64, 'YES', 'fgdg'),
(219, '2022-03-14', 233, 64, '', ''),
(220, '2022-03-14', 234, 64, '', ''),
(245, '2022-03-16', 239, 67, '', ''),
(246, '2022-03-16', 239, 68, '', ''),
(247, '2022-03-16', 239, 69, '', ''),
(248, '2022-03-16', 239, 70, '', ''),
(249, '2022-03-16', 239, 71, '', ''),
(250, '2022-03-16', 239, 72, '', ''),
(251, '2022-03-16', 239, 73, '', ''),
(252, '2022-03-16', 239, 74, '', ''),
(253, '2022-03-16', 239, 75, '', ''),
(254, '2022-03-16', 239, 76, '', ''),
(255, '2022-03-16', 239, 77, '', ''),
(256, '2022-03-16', 239, 78, '', ''),
(257, '2022-03-17', 240, 79, '', ''),
(258, '2022-03-17', 240, 80, '', '');

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
  `age_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `certifications`
--

INSERT INTO `certifications` (`id`, `timestamp`, `level_id`, `lan_id`, `session_type_id`, `track_id`, `cert_link`, `type`, `session_num`, `age_id`) VALUES
(3, '2022-03-14', 2, 1, 1, 1, 'https://www.google.com/', 'attend', 5, 0),
(4, '2022-03-15', 2, 1, 2, 1, 'https://www.google.com/', 'attend', 1, 1);

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
(99, '2022-03-14', 1, 1, 5, 1, '2022-03-14', 'asdas dasd ', 98, 224, 137);

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
  `name` varchar(31) NOT NULL,
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

INSERT INTO `employee` (`id`, `timestamp`, `name`, `phone`, `email`, `zoomlink`, `username`, `password_value`, `permission_id`, `department_id`, `role_id`, `zoom_free`) VALUES
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
(72, '2022-03-17', 2, 1, 1, 2, 1, 1, 1, 2, '', '2022-03-20', '2022-03-20');

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
(500, '2022-03-14', 224, 23880, 1990, 'waiting', '2022-03-11', '0000-00-00', 0, '', 172, 4, 0),
(501, '2022-03-10', 224, 23880, 1990, 'waiting', '2022-05-09', '0000-00-00', 0, '', 172, 4, 0),
(502, '2022-03-10', 224, 23880, 1990, 'waiting', '2022-06-08', '0000-00-00', 0, '', 172, 4, 0),
(503, '2022-03-10', 224, 23880, 1990, 'waiting', '2022-07-08', '0000-00-00', 0, '', 172, 4, 0),
(504, '2022-03-10', 224, 23880, 1990, 'waiting', '2022-08-07', '0000-00-00', 0, '', 172, 4, 0),
(505, '2022-03-10', 224, 23880, 1990, 'waiting', '2022-09-06', '0000-00-00', 0, '', 172, 4, 0),
(506, '2022-03-10', 224, 23880, 1990, 'waiting', '2022-10-06', '0000-00-00', 0, '', 172, 4, 0),
(507, '2022-03-10', 224, 23880, 1990, 'waiting', '2022-11-05', '0000-00-00', 0, '', 172, 4, 0),
(508, '2022-03-10', 224, 23880, 1990, 'waiting', '2022-12-05', '0000-00-00', 0, '', 172, 4, 0),
(509, '2022-03-10', 224, 23880, 1990, 'waiting', '2023-01-04', '0000-00-00', 0, '', 172, 4, 0),
(510, '2022-03-10', 224, 23880, 1990, 'waiting', '2023-02-03', '0000-00-00', 0, '', 172, 4, 0),
(512, '2022-03-16', 236, 19080, 19080, 'done', '2022-03-16', '2022-03-16', 0, '', 174, 48, 0),
(529, '2022-03-16', 239, 21480, 5370, 'done', '2022-03-16', '2022-03-16', 0, '', 177, 12, 0),
(530, '2022-03-16', 239, 21480, 5370, 'waiting', '2022-04-01', '0000-00-00', 0, '', 177, 12, 0),
(531, '2022-03-16', 239, 21480, 5370, 'waiting', '2022-05-01', '0000-00-00', 0, '', 177, 12, 0),
(532, '2022-03-16', 239, 21480, 5370, 'waiting', '2022-06-01', '0000-00-00', 0, '', 177, 12, 0),
(533, '2022-03-17', 240, 23880, 1990, 'done', '2022-03-17', '2022-03-17', 0, '', 178, 4, 0),
(534, '2022-03-17', 240, 23880, 1990, 'waiting', '2022-04-01', '0000-00-00', 0, '', 178, 4, 0),
(535, '2022-03-17', 240, 23880, 1990, 'waiting', '2022-05-01', '0000-00-00', 0, '', 178, 4, 0),
(536, '2022-03-17', 240, 23880, 1990, 'waiting', '2022-06-01', '0000-00-00', 0, '', 178, 4, 0),
(537, '2022-03-17', 240, 23880, 1990, 'waiting', '2022-07-01', '0000-00-00', 0, '', 178, 4, 0),
(538, '2022-03-17', 240, 23880, 1990, 'waiting', '2022-08-01', '0000-00-00', 0, '', 178, 4, 0),
(539, '2022-03-17', 240, 23880, 1990, 'waiting', '2022-09-01', '0000-00-00', 0, '', 178, 4, 0),
(540, '2022-03-17', 240, 23880, 1990, 'waiting', '2022-10-01', '0000-00-00', 0, '', 178, 4, 0),
(541, '2022-03-17', 240, 23880, 1990, 'waiting', '2022-11-01', '0000-00-00', 0, '', 178, 4, 0),
(542, '2022-03-17', 240, 23880, 1990, 'waiting', '2022-12-01', '0000-00-00', 0, '', 178, 4, 0),
(543, '2022-03-17', 240, 23880, 1990, 'waiting', '2023-01-01', '0000-00-00', 0, '', 178, 4, 0),
(544, '2022-03-17', 240, 23880, 1990, 'waiting', '2023-02-01', '0000-00-00', 0, '', 178, 4, 0);

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
(2, '2022-03-15', 2, 1, 2, 1, 'https://www.google.com/', '', 1, 2);

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
(137, '2022-03-10', 'Ahmed', '01242544', 'asdasd', 'Mohammed Nabil', '01027713442', 'asd', 'aseq', 'asd', 'asd', 0, 11, 9, '', ''),
(138, '2022-03-14', 'Gawish', 'asd', 'asd', 'Mohammed Nabil', 'asd', 'asd', 'asd', 'we', ' qweasd', 3, 14, 15, 'asd', 'asd'),
(139, '2022-03-14', 'asdasd', '1444', 'eqq2qe@gmail.com', '', '', '', '', 'eg', '', 3, 11, 9, 'eqq2qe@gmail.com', '1444'),
(140, '2022-03-14', 'asdasd', '1123', 'eqqaaqe@gmail.com', '', '', '', '', 'eg', '', 0, 14, 15, 'eqqaaqe@gmail.com', '1123'),
(141, '2022-03-14', 'aras', '5487547', 'asdasdww@gmail.com', '', '', '', '', 'eg', '', 0, 11, 9, 'asdasdww@gmail.com', '5487547'),
(142, '2022-03-14', 'Mohamed Nabil Mustafa', '45622', 'asdasdeee@gmail.com', '', '', '', '', 'eg', '', 0, 14, 15, 'asdasdeee@gmail.com', '45622'),
(143, '2022-03-14', 'asdasd', '5487511', 'asdasdqq@gmail.com', '', '', '', '', 'eg', '', 4, 11, 9, 'asdasdqq@gmail.com', '5487511'),
(145, '2022-03-16', 'Mohamed Nabil Mustafa', '01027713443', 'mohammedd.nabil.mustafa@gmail.com', '', '', '', '', 'ad', '', 0, 11, 9, 'mohammedd.nabil.mustafa@gmail.com', '01027713443'),
(148, '2022-03-16', 'Mohamed Nabil Mustafa', '01027713442', 'mohammed.nabil.mustafa@gmail.com', '', '', '', '', 'ad', '', 0, 14, 15, 'mohammed.nabil.mustafa@gmail.com', '01027713442'),
(149, '2022-03-17', 'Mohamed Nabil Mustafa', '01027713472', 'mohammed.nabil.mutafa@gmail.com', '', '', '', '', 'ad', '', 0, 11, 9, 'mohammed.nabil.mutafa@gmail.com', '01027713472');

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
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registeration`
--

INSERT INTO `registeration` (`id`, `timestamp`, `parent_name`, `student_name`, `phone`, `email`, `camp_id`, `country`, `birthdate`, `group_id`, `package_id`, `status`, `type`) VALUES
(17, '2022-03-16', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'ad', '2012-02-02', 71, 3, 'UNPAID', 'PayAtFawry'),
(18, '2022-03-16', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'ad', '2012-02-02', 71, 3, 'pending', ''),
(19, '2022-03-16', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'ad', '2012-02-02', 71, 3, 'UNPAID', 'PayAtFawry'),
(20, '2022-03-16', 'Mohamed Nabil Mustafa', 'ahmed', '01027713442', 'mohammed.nabil.mustafa@gmail.com', 0, 'ad', '2012-02-01', 71, 2, 'PAID', 'PayUsingCC'),
(23, '2022-03-17', 'Mohamed Nabil Mustafa', 'ahmed', '01027713742', 'mohammed.nabil.mstafa@gmail.com', 0, 'ad', '2012-02-02', 72, 3, 'pending', ''),
(24, '2022-03-17', 'Mohamed Nabil Mustafa', 'ahmed', '01027713472', 'mohammed.nabil.mutafa@gmail.com', 0, 'ad', '2012-02-02', 72, 3, 'PAID', 'PayUsingCC');

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
(80, '2022-03-17', 72, 17, '', '2022-03-27', 2, '', 0);

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
(4, '2022-03-17', 80, 10);

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
  `live_slot` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `slots`
--

INSERT INTO `slots` (`id`, `timestamp`, `name`, `slot`, `live_slot`) VALUES
(2, '2022-03-07', 'Slot 1', '01:30 - 04:00', '01:30 PM'),
(3, '2022-03-07', 'Slot 2', '04:30 - 07:00', '04:30 PM'),
(4, '2022-03-07', 'Slot 3', '07:30 - 10:00', '07:30 PM'),
(5, '2022-03-07', 'Slot 4', '02:00 - 03:00', '02:00 PM'),
(6, '2022-03-07', 'Slot 5', '03:00 - 04:00', '03:00 PM'),
(7, '2022-03-07', 'Slot 6', '05:00 - 06:00', '05:00 PM'),
(8, '2022-03-07', 'Slot 7', '06:00 - 07:00', '06:00 PM'),
(9, '2022-03-07', 'Slot 8', '08:00 - 09:00', '08:00 PM'),
(10, '2022-03-07', 'Slot 9', '09:00 - 10:00', '09:00 PM');

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
  `name` varchar(31) NOT NULL,
  `age` text NOT NULL,
  `birthdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `timestamp`, `std_id`, `parent_id`, `free_session_status`, `std_status`, `name`, `age`, `birthdate`) VALUES
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
(233, '2022-03-14', '', 142, 'yes', 0, 'Mohamed Nabil Mustafa', 'C', '2012-02-02'),
(234, '2022-03-14', '', 143, 'yes', 0, 'asdasd', 'C', '2012-02-02'),
(236, '2022-03-16', '', 145, 'yes', 0, 'ali', '', '2012-02-02'),
(239, '2022-03-16', '', 148, 'yes', 0, 'ahmed', '', '2012-02-01'),
(240, '2022-03-17', '', 149, 'yes', 0, 'ahmed', '', '2012-02-02');

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
(6, '2022-03-17', 257, 9, 'asd', 'Right');

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
(905, '2022-03-14', 65, 233, 'active'),
(906, '2022-03-14', 65, 234, 'active'),
(909, '2022-03-16', 71, 239, 'active'),
(910, '2022-03-17', 72, 240, 'active');

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
(174, '2022-03-16', 236, 1),
(177, '2022-03-16', 239, 2),
(178, '2022-03-17', 240, 3);

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
(10, '2022-03-17', 2, 1, 1, 1, 2, 'multi', 'asd', 'asdasd', 'asdasd', 'option2', 10, 'how are you', 2);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=259;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

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
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=545;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `registeration`
--
ALTER TABLE `registeration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `session_tasks`
--
ALTER TABLE `session_tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;

--
-- AUTO_INCREMENT for table `students_ans`
--
ALTER TABLE `students_ans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `student_groups`
--
ALTER TABLE `student_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=911;

--
-- AUTO_INCREMENT for table `student_package`
--
ALTER TABLE `student_package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=179;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
