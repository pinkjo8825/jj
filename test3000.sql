-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 23, 2022 at 06:54 PM
-- Server version: 8.0.31
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test3000`
--

-- --------------------------------------------------------

--
-- Table structure for table `addition_services`
--

CREATE TABLE `addition_services` (
  `id` int NOT NULL,
  `service` varchar(255) NOT NULL,
  `price` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `addition_services`
--

INSERT INTO `addition_services` (`id`, `service`, `price`) VALUES
(1, 'cleannncncnc', 20);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `priceIn` int NOT NULL,
  `priceInOut` int NOT NULL,
  `carType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `priceIn`, `priceInOut`, `carType`) VALUES
(2, 20, 30, 'van');

-- --------------------------------------------------------

--
-- Table structure for table `payment_methods`
--

CREATE TABLE `payment_methods` (
  `id` int NOT NULL,
  `paymentType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `payment_methods`
--

INSERT INTO `payment_methods` (`id`, `paymentType`) VALUES
(1, 'credit'),
(2, 'cash'),
(3, 'notpay'),
(4, 'coin'),
(5, 'bill');

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` int NOT NULL,
  `userId` int DEFAULT NULL,
  `carType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cleaningOption` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` varchar(255) NOT NULL,
  `visible` varchar(255) NOT NULL,
  `licensePlate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `paymentMethod` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`id`, `userId`, `carType`, `cleaningOption`, `status`, `visible`, `licensePlate`, `paymentMethod`, `category`) VALUES
(7, 123, 'dsf', 'In', 'finish', '1', 'abbbabba', 'adf', '4aaadf'),
(8, 123, 'dsf', 'InOut', 'finish', '1', 'abbbabba', 'adf', '4aaadf'),
(9, 3, 'car', 'In', 'inProcess', '1', '', 'credit', '1'),
(10, 3, 'car', 'In', 'inProcess', '1', '', 'bill', '1'),
(11, 3, 'car', 'In', 'pending', '1', 'PF3344', '3', '2'),
(12, 3, 'car', 'In', 'inProcess', '1', '', 'notpay', '1'),
(13, 3, 'car', 'In', 'inProcess', '1', 'We300', 'coin', '2'),
(14, NULL, 'car', 'In', 'inProcess', '1', 'sdf', 'cash', '1'),
(15, NULL, 'car', 'In', 'inProcess', '1', 'TEST123', 'cash', '1'),
(16, 3, 'car', 'In', 'inProcess', '1', 'test3000', 'cash', '1'),
(17, 3, 'car', 'In', 'inProcess', '1', 'test555', 'credit', '1'),
(18, 3, 'pickUpXL', 'In', 'inProcess', '1', 'adf', 'coin', '1'),
(19, 3, 'car', 'In', 'inProcess', '1', 'JOhn234', 'coin', '1'),
(20, 3, 'car', 'In', 'inProcess', '1', 'adf', 'cash', '1'),
(21, 13, 'pickUpS', 'In', 'pending', '1', 'FH343', 'coin', '1'),
(22, 13, 'pickUpS', 'InOut', 'inprocess', '1', 'JJ33', 'cash', '1'),
(23, 13, 'taxi', 'InOut', 'pending', '0', 'JO4545', 'cash', '1'),
(24, 13, 'pickUpL', 'In', 'inprocess', '1', 'JJ77', 'coin', '1'),
(25, 3, 'car', 'In', 'inProcess', '1', 'HH555', 'notpay', '1'),
(28, 3, 'car', 'In', 'inProcess', '1', 'II22222222222', 'cash', '1'),
(29, 13, 'pickUpS', 'In', 'pending', '1', 'AB2323232222', 'cash', '1'),
(30, 3, 'taxi', 'In', 'pendding', '1', 'Ab232323', 'credit', '1'),
(31, 3, 'pickUpXL', 'InOut', 'inProcess', '1', '', 'coin', '1');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int NOT NULL,
  `requestId` int NOT NULL,
  `additionServiceId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `requestId`, `additionServiceId`) VALUES
(1, 23, 234);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `fullname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `username`, `password`, `img`) VALUES
(1, 'johnbob', 'sdf@gmail.com', 'bobscat123', '$2a$10$hqyWWr36Lwxw2LdP4Y9GG.A.NiuIXa2FglFYJajKZ7hKsMns.L3R2', ''),
(2, 'johnbob', 'sdf@gmail.com', 'bobscat123', '$2a$10$aUmuN8AZCCQm45ApiQkMLeHeewspLqDl3Jdle3dG0v5ZIPSS6bZZ6', ''),
(3, 'net123456fullname', 'net123456@gmail.com', 'net123456', '$2a$10$i6oldM6eoverb5tz5wdsPeJxAnTyajRQOZOKqozdbZiHlhk0Wj6ge', ''),
(4, 'john', 'john@gmail.com', 'net', '$2a$10$oaPqpIUSqQOyH/XCmdEiROCJ96kAdX1wvNtBdQ2D7RXTrMBjDEYCK', 'default-avatar.png'),
(5, 'testjohn', 'jsdf@gmail.com', 'sdfdsf', '$2a$10$meGi8oQL.BUunByktk8jSu5GyAN5jYCh67a02JtpACQH2GlTctDIq', 'default-avatar.png'),
(6, 'adsfadf', 'adfafd@gmail.com', 'net', '$2a$10$AGESOIBxDXIrKX/bROghGud2y8cNNv6BTUl8ASdMI358YcvCn0iEi', 'blob:http://localhost:8080/59659271-05c5-44f4-9660-d9e836c82bac'),
(7, 'adf', 'adf@gjmail.com', 'net', '$2a$10$zwn6uuqjet5oRAWqkr.4fesSj9WH3zL/XQAo/N90XvNv86S.tnA3i', 'blob:http://localhost:8080/a0d0f00e-12d5-4dcf-814f-42d9315d6b66'),
(8, 'sdf', 'sdf@gmail.com', 'ewr', '$2a$10$c5.1z4I8yK5T2AQ5iDgoq.Z9uvK5PtzrxzisErz5w2nkDYH0pJAQa', 'blob:http://localhost:8080/44c903c3-6041-484d-bfb4-db570333b38a'),
(9, 'adf', 'adf@gmaicl.com', 'efefwef', '$2a$10$/r6JSxs9e0C4D6.3MKqFZObbPO2VlWASS.gB3nw.OiEpsqqdzJywC', 'blob:http://localhost:8080/feb712c5-e509-45e4-bfb6-892c7d12ff1d'),
(10, 'adsf', 'adf@gmail.com', 'dsfsdf', '$2a$10$uDK7zNmyrgJB8G/m0bJOb.QzXb5lN6mcnPls78LudDCTTPij9sH7W', 'blob:http://localhost:8080/dec555b7-0ed7-4cba-8e6a-516eb8812f23'),
(11, 'cat', 'john@gmi.com', 'john123456', '$2a$10$fIqy8x2EkO9ZLt2vqXkFaOuzPiCKEDOTTG.gco1u3ZIu0aTcOPoW2', 'default-avatar.png'),
(13, 'admin admin', 'admin@admin.admin', 'admin', '$2a$10$Rkidddt8Geg84x6V7F1pheObd02X76BMrmLFcO6iJC9HpjoC0zc8G', ''),
(14, 'johnbob', 'johnbob@gmail.com', 'johnbob123456', '$2a$10$brZkwdQxUfvZV223Luup3Oqys228yh5ADF/qA/S1FNw9Jq7xw7ySe', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addition_services`
--
ALTER TABLE `addition_services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addition_services`
--
ALTER TABLE `addition_services`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
