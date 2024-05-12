-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 12 2024 г., 23:07
-- Версия сервера: 8.0.30
-- Версия PHP: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `legendcity`
--

-- --------------------------------------------------------

--
-- Структура таблицы `gifts`
--

CREATE TABLE `gifts` (
  `id` int NOT NULL,
  `title` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `quantity` int NOT NULL,
  `deadline` date NOT NULL,
  `nominal` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `gifts`
--

INSERT INTO `gifts` (`id`, `title`, `quantity`, `deadline`, `nominal`) VALUES
(1, 'Подарок 1', 20, '2024-05-31', 300),
(2, 'Подарок 2', 10, '2024-05-31', 500),
(3, 'Подарок 1', 20, '2024-05-31', 300),
(5, 'Подарок 5', 50, '2024-05-30', 300),
(6, 'Подарок 6', 5, '2024-05-30', 900);

-- --------------------------------------------------------

--
-- Структура таблицы `mailing`
--

CREATE TABLE `mailing` (
  `id` int NOT NULL,
  `name` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `quantity` int NOT NULL,
  `days` int NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `carts` text COLLATE utf8mb4_general_ci NOT NULL,
  `giftId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `mailing`
--

INSERT INTO `mailing` (`id`, `name`, `create_at`, `quantity`, `days`, `description`, `carts`, `giftId`) VALUES
(20, 'Рассылка 5', '2024-05-12 16:56:42', 1, 3, 'Описание рассылки', '231,348797', 1),
(29, 'Рассылка 1', '2024-05-12 23:00:28', 8, 2, 'Описание', '2434,23423,34234', 1),
(30, 'Рассылка 2', '2024-05-12 23:02:58', 4, 2, 'Описание акции', '234,34234,34243', 2),
(31, 'Рассылка 4', '2024-05-12 23:05:55', 7, 2, 'Описание акции', '54654,5464,34456', 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `gifts`
--
ALTER TABLE `gifts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Индексы таблицы `mailing`
--
ALTER TABLE `mailing`
  ADD PRIMARY KEY (`id`),
  ADD KEY `giftId` (`giftId`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `gifts`
--
ALTER TABLE `gifts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `mailing`
--
ALTER TABLE `mailing`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `mailing`
--
ALTER TABLE `mailing`
  ADD CONSTRAINT `mailing_ibfk_1` FOREIGN KEY (`giftId`) REFERENCES `gifts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
