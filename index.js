let blogEl=document.getElementById("blog-content");
const buttonEl=document.getElementById("bt");
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => 
  {
    const postsArr=data.slice(0,5);
    let str='';
    for(let post of postsArr){
        str+=`
        <h3 class="heading-el">${post.title}</h3>
        <p class="body-el">${post.body}</p>
        <hr>
        `
    }
    blogEl.innerHTML=str;

  });

  buttonEl.addEventListener('click',function(e){
    e.preventDefault;
    const postTitle=document.getElementById("post-title").value;
    const postBody=document.getElementById("post-body").value;
    const data={
        title:postTitle,
        body:postBody
    }
    const options={
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts",options)
        .then(res => res.json())
        .then(data =>console.log(data))
    })
 
// fetch("https://apis.scrimba.com/jsonplaceholder/todos",{
//     method:"POST",
//     body:JSON.stringify({
//         title:"Buy milk",
//         completed:false
//     }),
//     headers:{
//         "Content-Type":"application/json"// basically we are teeling server that we are sending json and you have to parse the javascript to me and it gives the database we have plus it gives the id also.
//     }
// })
//     .then(res => res.json())
//     .then(data => console.log(data))


