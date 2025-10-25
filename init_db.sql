-- Создать базу (выполнить от имени пользователя с правами)
-- CREATE DATABASE umra_db;

-- Создать пользователя (если нужно)
-- CREATE USER umra_user WITH PASSWORD 'supersecretpassword';
-- GRANT ALL PRIVILEGES ON DATABASE umra_db TO umra_user;

-- Создать таблицы
CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(200) NOT NULL,
  package VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Примерные данные
INSERT INTO bookings (name, phone, email, package)
VALUES ('Аслан Қ.', '+77071234567', 'aslan@example.com', 'Эконом пакет');

INSERT INTO messages (name, email, message)
VALUES ('Гүлнұр', 'gulnur@example.com', 'Сәлеметсіз бе! 10 шілде күні экскурсия бар ма?');
