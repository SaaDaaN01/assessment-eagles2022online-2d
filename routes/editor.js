const router = require('express').Router();
const render = require('../lib/renderTemplate');
const CreatePost = require('../views/CreatePost');
const { Post } = require('../db/models')
const Editor = require('../views/Editor')
const MapOrders = require('../views/Posts');

router.get('/', (req, res) => {
  const userInfo = req.session?.user
render(Editor, {userInfo}, res)
});




router.post('/edit', async (req, res) => {
  const userInfo = req.session?.user
 const {img, post, id} = req.body

  const dataRes = await Post.update({  img: img, post: post }, 
   {
     where: {id:id}
   })
  res.redirect('/')
  })



module.exports = router;
