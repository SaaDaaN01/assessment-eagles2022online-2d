const React = require('react');
const Layout = require('./Layout');

module.exports = function HomePage({ userInfo, lib }) {
//  console.log(userInfo.isadmin);
  return (
    <Layout userInfo={userInfo}>
     <>
    Посты
    </>

    <div className='parent'>
{lib && lib.map(element => ( <form 
// className={`${element.id}`}
id={`${element.id}`}
key={element.id}
    method="post" 
      action="/posts" >
        <div>Картинка:</div>
        <div className='img'>
         {element.img}
        </div>
        <div>Пост:</div>
         <div className='post'>
           {element.post} 
           </div>
          
        <button type='click'  className='delete'>delete</button>
        <button type='click' className='editor'>edit</button>
  </form>))}
  </div>
    </Layout>
  );
};
