const React = require('react');
const Layout = require('./Layout');

module.exports = function HomePage({ userInfo, lib}) {
 
  return (
    <Layout userInfo={userInfo}>
        <>
    Книги
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

{/* <div className='parent'>
{order && order.map(element => ( <form 
type='submit'
// className={`${element.id}`}
id={`${element.id}`}
key={element.id}
    method="post" 
      action="/posts" >
        <div>Order:</div>
        <div className='product'>
         {element.actionadress}
        </div>
        <div>Price:</div>
         <div className='price'>
           {element.content} 
           </div>
        <button className='order'>заказать</button>
  </form>))}
  </div>
    )}  */}
    </Layout>
  );
};
//window local storage
