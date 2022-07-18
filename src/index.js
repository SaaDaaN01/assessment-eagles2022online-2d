require('@babel/register');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const express = require('express')
const app = express();

const ReactDOMServer = require('react-dom/server');
const React = require('react');


const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const render = require('../lib/renderTemplate')


const authRouter = require('../routes/auth');
const allPosts = require('../routes/posts');
const createPost = require('../routes/createPost')
const editOrder = require('../routes/editor')
const HomeRouter = require('../routes/home');
const HomePage = require('../views/Home');

const PORT = 3000;

const sessionConfig = {
  name: 'sid', // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies //node====>>> require('crypto').randomBytes(10).toString('hex')
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 10,
  },
}

app.use(session(sessionConfig));

// Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на
// сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут
// находится статические файлы, т.е.файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, '../public')));
// Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов
// типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые
// в формате JSON в body HTTP - запроса.
app.use(express.json());

app.use('/', HomeRouter);
app.use('/auth', authRouter);
app.use('/posts', allPosts);
app.use('/create', createPost);
app.use('/edit', editOrder);




// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил
// на запрос.Это значит, что искомого раздела просто нет на сайте.Для таких ситуаций используется
// код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
app.use((req, res, next) => {
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
  next(error);
});

// Отлавливаем HTTP-запрос с ошибкой и отправляем на него ответ.
app.use((err, req, res) => {
  // Получаем текущий ражим работы приложения.
  const appMode = req.app.get('env');
  // Создаём объект, в котором будет храниться ошибка.
  let error;

  // Если мы находимся в режиме разработки, то отправим в ответе настоящую ошибку.
  // В противно случае отправим пустой объект.
  if (appMode === 'development') {
    error = err;
  } else {
    error = {};
  }

  // Записываем информацию об ошибке и сам объект ошибки в специальные переменные,
  // доступные на сервере глобально, но только в рамках одного HTTP - запроса.
  res.locals.message = err.message;
  res.locals.error = error;

  // Задаём в будущем ответе статус ошибки. Берём его из объекта ошибки, если он там есть.
  // В противно случае записываем универсальный стату ошибки на сервере - 500.
  res.status(err.status || 500);
  // Ренедрим React-компонент Error и отправляем его на клиент в качестве ответа.
  const errorPage = React.createElement(Error, res.locals);
  const html = ReactDOMServer.renderToStaticMarkup(errorPage);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});

// npx sequelize model:generate --name Book --attributes name:string,skin:string,description:string,userid:integer

// npx sequelize model:generate --name User --attributes name:string,password:string,login:string,group:string,year:string
