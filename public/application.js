const parent = document.querySelector('.parent')
const buttonDelete = document.getElementsByClassName('delete')
//for each
// console.log(parent)
// parent?.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log(event.target, event.target.parentNode)
  
  
// })


/// DELETE I  EDIT FOR ADMIN 

parent?.addEventListener('click', async (event) => {
  event.preventDefault();
  // const id = event.target.id
  // console.log(event)
  const targetButton = event.target.innerText
  const form = event.target.parentNode
  const id = form.id
  const img = form.querySelector('.img')
  const post = form.querySelector('.post')
  if(targetButton === 'delete'){
    // console.log('delete')
    const responce = await fetch('/posts', {
          method: 'DELETE', // destroy || put || patch 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id
          })
        })
        const result = await responce.json()
        parent.removeChild(form)
  }

  if(targetButton === 'edit'){
    console.log(img.innerText);
    // console.log(price.innerText);
    const responce = await fetch('/posts/edit', {
      method: 'PATCH', // destroy || put || patch 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        img: img.innerText,
        post: post.innerText,
        
      })
    })
 const data = await responce.json()
 localStorage.setItem('img', data.img)
 localStorage.setItem('post', data.post)
 localStorage.setItem('id', data.id)
  console.log(data.price)
    window.location.href = '/edit'   
    // const data1 = localStorage.setItem('product', data.product)
    
    
  
    // console.log(await responce.json())
    // const result = await responce.json()
    // parent
  }
})

  
window.addEventListener("load",function(){
  console.log(window.location.search)//naiti dva inputa 
   document.querySelector('#img').value = localStorage.getItem('img')
   document.querySelector('#post').value = localStorage.getItem('post')
   document.querySelector('#inputid').value = localStorage.getItem('id')
   


  // const data14 = localStorage.getItem('product')
  // console.log(data14)
  // console.log(data12, '12341')
  // id price and orders
});
