const router = require('express').Router();
const render = require('../lib/renderTemplate');
const CreateOrder = require('../views/CreatePost');
const { Post } = require('../db/models')
// const MapOrder = require('../views/Posts')








router.get('/', async (req, res) => {
  const userInfo = req.session?.user
  const create = await Post.findAll({raw: true})
  render(CreateOrder, {userInfo, create}, res)
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
