const React = require('react');
const Layout = require('./Layout');

module.exports = function HomePage({ userInfo, postLibrary, usersname }) {
//  console.log(userInfo.isadmin);
  return (
    <Layout userInfo={userInfo}>
     <>
    Посты
    </>
    {userInfo?.name ? (
        <>
        <form 
    className='Orders'  
    name='OrderForm' 
    method='POST' 
    action='/'> 
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
          <div className='parent'>
            {postLibrary && postLibrary.map(element => (<form
              // className={`${element.id}`}
              id={`${element.id}`}
              key={element.id}
              method="post"
              action="/" >
              <div>Картинка:</div>
              <div className='img'>
                {element.img}
              </div>
              <div>Пост:</div>
              <div className='post'>
                {element.post}
              </div><div>date:</div>
              <div className='post'>
                {element.date}
              </div>
              <div>Автор поста:</div>
              <div className='date'>
                {usersname && usersname.map(el => (el.id === element.user_id ? (<div>{el.name}</div>):(<b></b>))) }
              </div>

              <button type='click' className='delete'>delete</button>
              <button type='click' className='editor'>edit</button>
            </form>))}
          </div>
        </>
      ) : (
        <>
          <div className='parent'>
            {postLibrary && postLibrary.map(element => (<form
              // className={`${element.id}`}
              id={`${element.id}`}
              key={element.id}
              method="post"
              action="/" >
              <div>Картинка:</div>
              <div className='img'>
                {element.img}
              </div>
              <div>Пост:</div>
              <div className='post'>
                {element.post}
              </div>
              <div>Автор поста:</div>
              <div className='date'>
                {usersname && usersname.map(el => (el.id === element.user_id ? (<div>{el.name}</div>):(<b></b>))) }
              </div>

              
            </form>))}
          </div>
        </>
                        )}
    </Layout>
  );
};
