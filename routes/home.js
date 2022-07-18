const router = require('express').Router();
const render = require('../lib/renderTemplate');
const HomePage = require('../views/Home');
const { Post, User } = require('../db/models')




router.get('/', async (req, res) => {
    const userInfo = req.session?.user
    console.log(userInfo);
    const postLibrary = await Post.findAll({raw: true})
    const usersname = await User.findAll({raw: true})
    // const username = await User.findOne({where: { id: postLibrary.user_id }})
  // render(HomePage, {userInfo, postLibrary, username}, res)
  render(HomePage, {userInfo, postLibrary, usersname}, res)
});




router.post('/', async (req, res) => {
  const userInfo = req.session?.user
  console.log(req.body)
  const {img, post } = req.body;
 try {
   const data = await Post.create({user_id: userInfo.id, img: img, post: post })
  //  res.json({data: data})  // dlya otrisovki bez obnovi
 } catch (err) {
  //  res.send(`error: ${err.message}`);
  res.json({err: err.message});
 }
 res.redirect('/') 
//  dlya otrisovky s obnovoi saita
});



module.exports = router;
