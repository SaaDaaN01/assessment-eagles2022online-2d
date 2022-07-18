const router = require('express').Router();
const render = require('../lib/renderTemplate');
const Posts = require('../views/Posts');
const { Post } = require('../db/models');
// const action = require('../db/models/action');
const Editor = require('../views/Editor');



router.get('/', async (req, res) => {
  const userInfo = req.session?.user
  const lib = await Post.findAll({raw: true})
  render(Posts, {userInfo, lib}, res)
});


router.delete('/', async (req,res) =>{
  // const lib = await Book.destroy({id: id})
  const delete1 = req.body.id
  console.log(delete1)
 await Post.destroy({where:{ id: delete1 }})
  res.json(delete1)
});

router.patch('/edit', async (req, res) => {
  // const order = await Action.findAll({raw: true})
  // render(Editor, {order}, res)
  const userInfo = req.session?.user
   const result = req.body
   console.log(result)
    res.json(result)
    // render(Editor, {userInfo, result}, res)
  })

module.exports = router;
