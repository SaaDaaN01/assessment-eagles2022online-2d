const router = require('express').Router();
const render = require('../lib/renderTemplate');
const Registration = require('../views/SignUpForm');
const { User } = require('../db/models');
const bcrypt = require('bcrypt'); // подключаем bcrypt
const soldRound = 10; // добавляем шифрование 

//прокидываем формы
const HomePage = require('../views/Home');
const LoginPage = require('../views/LoginForm');


const failAuth = (res, err) => {
  return res.status(401).json({ err: err });
};



router.get('/signup', (req, res) => {
  render(Registration, {}, res);
});

router.post('/signup', async (req, res) => {
  const { name, pass, email } = req.body;
 
//   console.log(req.body);
  // const user = {name, pass};
//   console.log(user);
  const hash = await bcrypt.hash(pass, soldRound); // добавляем шифровку пароля
  // console.log(hash);
  const user = await User.create({ name:name, password: hash, email: email }); // hash - зашифрованный пароль
  // console.log(user);
  req.session.user = user; //добавляем кукис и сессию 
  
  const userInfo = req.session?.user;

  render(HomePage, { userInfo }, res)
//   res.redirect('/')
  // render(EntriesList, { entries, username: name }, res);
  
});

router.get('/login', (req, res) => {
  render(LoginPage, {}, res);
});

router.post('/login', async(req, res) => {
  
  const { name, pass } = req.body;
  let user = {};
 
  user = await User.findOne({where: { name: name }});
  if(!user) return failAuth(res, 'неверное имя или пароль!');
  // console.log(user);
  
  
  const isValidPassword = await bcrypt.compare(pass, user.password);
  if(!isValidPassword) return failAuth(res, 'неверное имя или пароль!!!');
  req.session.user = user;
  const userInfo = req.session?.user;
  render(HomePage, { userInfo }, res)
  
})




const destroySession = (req, res, next) => {
  console.log('hello');
  req.session.destroy((err) => {
     if (err) return res.send(err.message);
     
     res.clearCookie('sid');
     render(HomePage, {}, res);
  })
 };

router.get('/signout', destroySession)



module.exports = router;
