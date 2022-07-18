const router = require('express').Router();
const render = require('../lib/renderTemplate');
const HomePage = require('../views/Home');
const { Post } = require('../db/models')




router.get('/', async (req, res) => {
    const userInfo = req.session?.user
    console.log(userInfo);
    const lib = await Post.findAll({raw: true})
  render(HomePage, {userInfo, lib}, res)
});

module.exports = router;
