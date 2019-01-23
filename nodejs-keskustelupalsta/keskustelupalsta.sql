-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 06.01.2019 klo 02:24
-- Palvelimen versio: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `keskustelupalsta`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `keskustelut`
--

CREATE TABLE `keskustelut` (
  `id` int(11) NOT NULL,
  `nimi` text COLLATE utf8mb4_swedish_ci NOT NULL,
  `otsikko` text COLLATE utf8mb4_swedish_ci NOT NULL,
  `teksti` text COLLATE utf8mb4_swedish_ci NOT NULL,
  `aika` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_swedish_ci;

--
-- Vedos taulusta `keskustelut`
--

INSERT INTO `keskustelut` (`id`, `nimi`, `otsikko`, `teksti`, `aika`) VALUES
(21, 'Riikka Tossavainen', 'Ensimmäinen Postaus', '<p><em><strong>Lorem ipsum dolor sit amet</strong></em></p><ul><li>Consectetur adipiscing elit.</li><li>Suspendisse dignissim viverra dui eu egestas.</li><li>Quisque bibendum, metus a accumsan gravida, odio lorem eleifend velit, eget pellentesque est ipsum nec erat.</li><li>Quisque ligula urna, cursus luctus ante sit amet, semper fringilla magna.</li></ul><p>Nunc rhoncus dolor id mauris sodales aliquam. Phasellus eget nunc tincidunt, mattis lorem vel, tristique diam. Sed quis nibh vulputate, tincidunt urna at, tincidunt risus. Proin luctus imperdiet ante id commodo. Praesent semper purus a nibh accumsan, at cursus lorem fermentum. Vestibulum faucibus fermentum diam, id venenatis nunc mattis ut. In pellentesque, purus sit amet finibus mattis, neque massa congue ligula, sit amet condimentum est eros sit amet ligula. In vitae dapibus urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p><p>Nunc at fermentum nisi. Nullam eu lorem ante. Integer arcu lectus, egestas euismod convallis vel, ultricies sed erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam vulputate malesuada nisi, ac ultrices lorem efficitur imperdiet. Phasellus laoreet in diam quis condimentum. Nullam placerat fermentum mauris vel sagittis. Fusce bibendum nulla metus, vitae aliquet nisi sollicitudin a. Quisque a aliquam leo. Aliquam a neque justo. Curabitur in nisi a risus feugiat porttitor. Sed nec ligula commodo, facilisis lorem ac, tincidunt lacus. Vestibulum facilisis, diam eget mollis tempus, magna metus tincidunt leo, sit amet laoreet lectus magna eget ex. Donec quam sem, elementum et ligula nec, tempus posuere risus. Pellentesque vulputate facilisis leo sit amet placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Nam a ligula at mi ullamcorper convallis vitae eget tortor. Quisque cursus, velit a eleifend blandit, libero ligula mollis quam, ac volutpat risus sem ut eros. Integer ornare odio ut sapien tempus auctor. Fusce velit tortor, sollicitudin id dapibus in, placerat vel urna. Vivamus a tortor a nibh faucibus facilisis eget sed magna. Quisque id velit non risus elementum posuere quis id erat. Maecenas porttitor ultrices est imperdiet dapibus. Vivamus ut enim tempus tortor lobortis efficitur non quis ligula. Donec nec massa a neque hendrerit finibus ac at diam. Aliquam ac fermentum lectus, non fermentum nisl.</p><p>Quisque quis dictum dui. Duis a purus mollis, eleifend odio sed, placerat justo. Pellentesque convallis, nisl a molestie faucibus, elit dolor venenatis erat, ac tempus ex tortor finibus lectus. Aliquam erat volutpat. Ut fringilla dui eu justo eleifend, ac egestas elit sodales. Donec nec sodales sem, vel fermentum nisl. Maecenas et velit sed ligula consequat porta tristique in enim. Nullam vitae magna elementum, posuere tortor eu, pharetra risus. Nulla tincidunt vitae neque et auctor. Nullam congue viverra lobortis. Nulla fermentum enim ut risus viverra consectetur. Fusce ac odio orci.</p><p>In vestibulum ex sed enim mattis aliquam. In molestie diam a nunc tempor consectetur. Proin gravida laoreet mi eu pellentesque. Etiam pellentesque turpis eu nibh venenatis lacinia. Pellentesque hendrerit ipsum in finibus rutrum. Pellentesque ac pulvinar urna. Suspendisse scelerisque metus lobortis lobortis consectetur. Nunc posuere finibus vulputate. Phasellus maximus nec augue ut eleifend.</p>', '2019-01-05 16:52:29'),
(22, 'Anonyymi', 'Tammikuu', '<p>Riikka</p>', '2019-01-05 17:58:38'),
(23, 'Tosi Väsynyt', 'Kolmas Kissa', '<p>T&auml;ss&auml; viel&auml; joku postaus testi</p>', '2019-01-05 23:43:54');

-- --------------------------------------------------------

--
-- Rakenne taululle `viestit`
--

CREATE TABLE `viestit` (
  `id` int(11) NOT NULL,
  `nimi` text COLLATE utf8mb4_swedish_ci NOT NULL,
  `teksti` text COLLATE utf8mb4_swedish_ci NOT NULL,
  `aika` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `keskusteluID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_swedish_ci;

--
-- Vedos taulusta `viestit`
--

INSERT INTO `viestit` (`id`, `nimi`, `teksti`, `aika`, `keskusteluID`) VALUES
(20, 'Vihainen ', '<p>Joko nyt????</p>', '2019-01-05 22:01:37', 21),
(21, 'Anonyymi', '<p>En jaksa</p>', '2019-01-05 22:56:17', 21),
(22, 'Mitä ihmettä', '<p>T&auml;h&auml;n vaan kysylene?</p>', '2019-01-05 23:17:19', 22),
(23, 'Anonyymi', '<p>Onko oikein?</p>', '2019-01-05 23:18:28', 21),
(24, 'Anonyymi', '<p>Kokeilu</p>', '2019-01-05 23:20:33', 22),
(25, 'Väsynyt', '<p>Uusin testi</p>', '2019-01-05 23:42:23', 22),
(26, 'Anonyymi', '<p>Testing testing testing</p>', '2019-01-05 23:44:16', 21),
(27, 'Anonyymi', '<p>T&auml;m&auml; on vastaus</p>', '2019-01-05 23:44:39', 23),
(28, 'Anonyymi', '<p>Testing more</p>', '2019-01-05 23:45:04', 21),
(29, 'Anonyymi', '<p>Testausta viel&auml; jaksaa</p>', '2019-01-05 23:47:19', 22),
(30, 'Riikka', '<p>TEstit jatkuu</p>', '2019-01-05 23:59:03', 21),
(31, 'Anonyymi', '<p>kokeilalana</p>', '2019-01-06 00:04:17', 22),
(32, 'Anonyymi', '<p>Mit&auml; n&auml;kyy</p>', '2019-01-06 00:04:24', 23),
(33, 'Anonyymi', '<p>TULEEKO EKAKSI?</p>', '2019-01-06 00:13:27', 22);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `keskustelut`
--
ALTER TABLE `keskustelut`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `viestit`
--
ALTER TABLE `viestit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `keskustelut`
--
ALTER TABLE `keskustelut`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `viestit`
--
ALTER TABLE `viestit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
