const React = require('react');
const Layout = require('./Layout');
// import { useEffect } from "react";

module.exports = function Editor({ userInfo, result }) {
 
  return (
    <Layout userInfo={userInfo}>
    <h1>Редактирование </h1>
    <p>Редактируйте запись поста</p>
    <form 
    className='Orders'  
    name='OrderForm' 
    method='POST' 
    action='/edit/edit'> 
<div className="mb-3">
<input id='img' type='text' name='img' placeholder='img' value=''/>
</div>

<div className="mb-3">
<input id='post' type='text' name='post' placeholder='post' value='' />
</div>
<div className='mb3'>
<input  type='hidden' id='inputid' name='id' value=''></input>
</div>
<button type="text" className="btn btn-primary" >
   редактировать
</button>
</form>
  </Layout>
  );
};
