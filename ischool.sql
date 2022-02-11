-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2022 at 11:37 AM
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
(1, '2022-02-06', 44, 3, '', ''),
(2, '2022-02-06', 45, 3, '', ''),
(3, '2022-02-06', 46, 4, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `call_status`
--

CREATE TABLE `call_status` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `call_type`
--

CREATE TABLE `call_type` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cat`
--

CREATE TABLE `cat` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `close`
--

CREATE TABLE `close` (
  `id` int(11) NOT NULL,
  `timestamp` date NOT NULL,
  `name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `note` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(3, '2022-02-01', 'Department Customer Service');

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
  `password` text NOT NULL,
  `permission_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `timestamp`, `name`, `phone`, `email`, `zoomlink`, `username`, `password`, `permission_id`, `department_id`, `role_id`) VALUES
(9, '2022-02-02', 'Alaa', 154547, 'asdasd@asdsd.com', 'asdasdasd', 'asdasd', 'asdasd', 2, 2, 3),
(10, '2022-02-02', 'asd', 241545, 'asdasd', 'asdasd', 'asdasd', 'asdasd', 3, 3, 2),
(11, '2022-02-05', 'Tiger', 123123, 'asdasd', 'asdasd', 'sdasd', '213123', 1, 1, 1),
(12, '2022-02-06', 'Nada', 123123, 'asdasd', 'asdasd', 'asdasd', '123123', 1, 1, 1);

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
(48, '2022-02-09', 2, 1, 1, 2, 1, 1, 1, 1, 'Tiger', '2022-02-07', '2022-02-07'),
(49, '2022-02-11', 2, 1, 1, 2, 1, 1, 5, 1, '', '2022-02-11', '2022-02-11'),
(50, '2022-02-11', 3, 1, 1, 2, 1, 1, 5, 1, '', '2022-02-11', '2022-02-11'),
(51, '2022-02-11', 4, 1, 1, 2, 1, 1, 6, 1, '', '2022-02-11', '2022-02-11');

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
(110, '2022-02-11', 132, 21480, 5370, 'done', '2022-02-10', '2022-02-10', 0, '', 2, 12, 0),
(111, '2022-02-11', 132, 21480, 5370, 'waiting', '2022-03-10', '0000-00-00', 0, '', 2, 12, 0),
(112, '2022-02-11', 132, 21480, 5370, 'waiting', '2022-04-10', '0000-00-00', 0, '', 2, 12, 0),
(113, '2022-02-11', 132, 21480, 5370, 'waiting', '2022-05-10', '0000-00-00', 0, '', 2, 12, 0),
(114, '2022-02-11', 133, 23880, 1990, 'waiting', '2022-03-09', '0000-00-00', 0, '', 3, 4, 0),
(115, '2022-02-11', 133, 23880, 1990, 'waiting', '2022-05-09', '0000-00-00', 0, '', 3, 4, 0),
(116, '2022-02-11', 133, 23880, 1990, 'waiting', '2022-04-09', '0000-00-00', 0, '', 3, 4, 0),
(117, '2022-02-11', 133, 23880, 1990, 'waiting', '2022-06-09', '0000-00-00', 0, '', 3, 4, 0),
(118, '2022-02-11', 133, 23880, 1990, 'waiting', '2022-07-09', '0000-00-00', 0, '', 3, 4, 0),
(119, '2022-02-11', 133, 23880, 1990, 'waiting', '2022-08-09', '0000-00-00', 0, '', 3, 4, 0),
(120, '2022-02-11', 133, 23880, 1990, 'done', '2022-02-09', '2022-02-09', 0, '', 3, 4, 0),
(121, '2022-02-11', 133, 23880, 1990, 'waiting', '2022-09-09', '0000-00-00', 0, '', 3, 4, 0),
(122, '2022-02-11', 133, 23880, 1990, 'waiting', '2022-10-09', '0000-00-00', 0, '', 3, 4, 0),
(123, '2022-02-11', 133, 23880, 1990, 'waiting', '2022-11-09', '0000-00-00', 0, '', 3, 4, 0),
(124, '2022-02-11', 133, 23880, 1990, 'waiting', '2023-01-09', '0000-00-00', 0, '', 3, 4, 0),
(125, '2022-02-11', 133, 23880, 1990, 'waiting', '2022-12-09', '0000-00-00', 0, '', 3, 4, 0),
(126, '2022-02-11', 136, 21480, 5370, 'done', '2022-02-10', '2022-02-10', 0, '', 2, 12, 0),
(127, '2022-02-11', 136, 21480, 5370, 'waiting', '2022-04-10', '0000-00-00', 0, '', 2, 12, 0),
(128, '2022-02-11', 136, 21480, 5370, 'waiting', '2022-05-10', '0000-00-00', 0, '', 2, 12, 0),
(129, '2022-02-11', 136, 21480, 5370, 'waiting', '2022-03-10', '0000-00-00', 0, '', 2, 12, 0),
(130, '2022-02-11', 135, 19080, 19080, 'done', '2022-02-11', '2022-02-11', 0, '', 1, 48, 0),
(131, '2022-02-11', 137, 21480, 5370, 'done', '2022-02-09', '2022-02-09', 0, '', 2, 12, 0),
(132, '2022-02-11', 137, 21480, 5370, 'waiting', '2022-03-09', '0000-00-00', 0, '', 2, 12, 0),
(133, '2022-02-11', 137, 21480, 5370, 'waiting', '2022-04-09', '0000-00-00', 0, '', 2, 12, 0),
(134, '2022-02-11', 137, 21480, 5370, 'waiting', '2022-05-09', '0000-00-00', 0, '', 2, 12, 0),
(135, '2022-02-11', 140, 23880, 1990, 'done', '2022-02-11', '2022-02-11', 0, '', 3, 4, 0),
(136, '2022-02-11', 140, 23880, 1990, 'waiting', '2022-03-11', '0000-00-00', 0, '', 3, 4, 0),
(137, '2022-02-11', 140, 23880, 1990, 'waiting', '2022-05-11', '0000-00-00', 0, '', 3, 4, 0),
(138, '2022-02-11', 140, 23880, 1990, 'waiting', '2022-04-11', '0000-00-00', 0, '', 3, 4, 0),
(139, '2022-02-11', 140, 23880, 1990, 'waiting', '2022-06-11', '0000-00-00', 0, '', 3, 4, 0),
(140, '2022-02-11', 140, 23880, 1990, 'waiting', '2022-07-11', '0000-00-00', 0, '', 3, 4, 0),
(141, '2022-02-11', 140, 23880, 1990, 'waiting', '2022-08-11', '0000-00-00', 0, '', 3, 4, 0),
(142, '2022-02-11', 140, 23880, 1990, 'waiting', '2022-09-11', '0000-00-00', 0, '', 3, 4, 0),
(143, '2022-02-11', 140, 23880, 1990, 'waiting', '2022-10-11', '0000-00-00', 0, '', 3, 4, 0),
(144, '2022-02-11', 140, 23880, 1990, 'waiting', '2022-11-11', '0000-00-00', 0, '', 3, 4, 0),
(145, '2022-02-11', 140, 23880, 1990, 'waiting', '2023-01-11', '0000-00-00', 0, '', 3, 4, 0),
(146, '2022-02-11', 140, 23880, 1990, 'waiting', '2022-12-11', '0000-00-00', 0, '', 3, 4, 0),
(147, '2022-02-11', 138, 19080, 19080, 'done', '2022-02-11', '2022-02-11', 0, '', 1, 48, 0),
(148, '2022-02-11', 139, 21480, 5370, 'waiting', '2022-03-10', '0000-00-00', 0, '', 2, 12, 0),
(149, '2022-02-11', 139, 21480, 5370, 'done', '2022-02-10', '2022-02-10', 0, '', 2, 12, 0),
(150, '2022-02-11', 139, 21480, 5370, 'waiting', '2022-04-10', '0000-00-00', 0, '', 2, 12, 0),
(151, '2022-02-11', 139, 21480, 5370, 'waiting', '2022-05-10', '0000-00-00', 0, '', 2, 12, 0);

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
(2, '2022-02-03', 'FO1');

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
  `reg_status` varchar(11) NOT NULL,
  `customer_agent_id` int(11) NOT NULL,
  `sales_agent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parent`
--

INSERT INTO `parent` (`id`, `timestamp`, `name`, `phone`, `email`, `name_2`, `phone_2`, `email_2`, `address`, `location`, `job`, `reg_status`, `customer_agent_id`, `sales_agent_id`) VALUES
(82, '2022-02-11', 'asd', '12312', 'asdas', 'dasd', 'asdas', 'dasd', 'asd', 'asd', 'asd', 'asd', 10, 9),
(83, '2022-02-11', 'asd', 'asd', 'asd', 'asd', 'as', 'd', '', 'asd', 'asd', 'asd', 10, 9),
(84, '2022-02-11', 'asd', 'asdasd', 'asd', 'asd', 'as', 'das', 'asd', 'as', 'd', 'asd', 10, 9);

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
(3, '2022-02-01', 'Customer Support');

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
(1, '2022-02-01', 'Role Instructor'),
(2, '2022-02-01', 'Role Customer Support'),
(3, '2022-02-01', 'Role Sales');

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
  `open_by` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `timestamp`, `groups_id`, `employee_id`, `zoomlink`, `session_date`, `session_num`, `open_by`) VALUES
(19, '2022-02-07', 48, 11, '', '2022-02-07', 1, ''),
(20, '2022-02-07', 48, 11, '', '2022-02-14', 2, ''),
(21, '2022-02-07', 48, 11, '', '2022-02-21', 3, ''),
(22, '2022-02-07', 48, 11, '', '2022-02-28', 4, ''),
(23, '2022-02-07', 48, 11, '', '2022-01-31', 5, ''),
(24, '2022-02-11', 49, 11, '', '2022-02-11', 1, ''),
(25, '2022-02-11', 49, 11, '', '2022-02-18', 2, ''),
(26, '2022-02-11', 50, 11, '', '2022-02-11', 1, ''),
(27, '2022-02-11', 50, 11, '', '2022-02-18', 2, ''),
(28, '2022-02-11', 51, 11, '', '2022-02-11', 1, '');

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
  `slot` varchar(31) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `slots`
--

INSERT INTO `slots` (`id`, `timestamp`, `name`, `slot`) VALUES
(2, '2022-02-01', 'Slot 1', '01:30 - 04:00'),
(3, '2022-02-01', 'Slot 2', '04:30 - 07:00'),
(4, '2022-02-06', 'Slot 3', '07:30 - 10:00'),
(5, '2022-02-06', 'Slot 4', '02:00 - 03:00'),
(6, '2022-02-06', 'Slot 5', '03:00 - 04:00'),
(7, '2022-02-06', 'Slot 6', '05:00 - 06:00'),
(8, '2022-02-06', 'Slot 7', '06:00 - 07:00'),
(9, '2022-02-06', 'Slot 8', '08:00 - 09:00'),
(10, '2022-02-06', 'Slot 9', '09:00 - 10:00');

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
(132, '2022-02-11', 'asd', 82, 'yes', 1, 'asdasd', 'C', '2012-02-02'),
(133, '2022-02-11', 'fgh', 82, 'yes', 1, 'fghfgh', 'C', '2013-03-03'),
(134, '2022-02-11', 'asd', 82, 'yes', 1, 'asdasd', 'C', '2011-01-01'),
(135, '2022-02-11', 'asd', 83, 'yes', 1, 'asd', 'C', '2011-01-01'),
(136, '2022-02-11', 'asd', 83, 'yes', 1, 'asd', 'C', '2012-02-02'),
(137, '2022-02-11', 'fdg', 83, 'yes', 1, 'dfg', 'C', '2013-03-03'),
(138, '2022-02-11', 'asd', 84, 'yes', 1, 'asd', 'C', '2011-01-01'),
(139, '2022-02-11', 'fgh', 84, 'yes', 1, 'fgh', 'C', '2012-02-02'),
(140, '2022-02-11', 'ghjghj', 84, 'yes', 1, 'ghjghj', 'C', '2013-03-03');

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
(819, '2022-02-11', 49, 132, 'active'),
(820, '2022-02-11', 50, 133, 'active'),
(821, '2022-02-11', 48, 135, 'active'),
(822, '2022-02-11', 49, 136, 'active'),
(823, '2022-02-11', 50, 137, 'active'),
(824, '2022-02-11', 48, 138, 'active'),
(825, '2022-02-11', 49, 139, 'active'),
(826, '2022-02-11', 50, 140, 'active');

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
(48, '2022-02-11', 132, 2),
(49, '2022-02-11', 133, 3),
(50, '2022-02-11', 135, 1),
(51, '2022-02-11', 136, 2),
(52, '2022-02-11', 137, 2),
(53, '2022-02-11', 138, 1),
(54, '2022-02-11', 139, 2),
(55, '2022-02-11', 140, 3);

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
-- Indexes for table `call_type`
--
ALTER TABLE `call_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cat`
--
ALTER TABLE `cat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `close`
--
ALTER TABLE `close`
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
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `attend`
--
ALTER TABLE `attend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `att_feed`
--
ALTER TABLE `att_feed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `call_status`
--
ALTER TABLE `call_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `call_type`
--
ALTER TABLE `call_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cat`
--
ALTER TABLE `cat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `close`
--
ALTER TABLE `close`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cs_calls`
--
ALTER TABLE `cs_calls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `days`
--
ALTER TABLE `days`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `operation_status`
--
ALTER TABLE `operation_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `package`
--
ALTER TABLE `package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `parent`
--
ALTER TABLE `parent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT for table `student_groups`
--
ALTER TABLE `student_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=827;

--
-- AUTO_INCREMENT for table `student_package`
--
ALTER TABLE `student_package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

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
