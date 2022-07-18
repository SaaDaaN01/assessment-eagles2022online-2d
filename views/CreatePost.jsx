const React = require('react');
const Layout = require('./Layout');

module.exports = function CreateOrder({ userInfo }) {
  return (
    <Layout userInfo={userInfo}>
    <h1>Posts</h1>
    <p>Создать пост</p>
    <form 
    className='Orders'  
    name='OrderForm' 
    method='POST' 
    action='/create/posts'> 
<div className="mb-3">
<input type='text' name='img' placeholder='картинка' />
</div>
<div className="mb-3">
<input type='text' name='post' placeholder='пост' />
</div>
<button type="text" className="btn btn-primary">
  добавить пост
</button>
</form>
  </Layout>
  );
};
