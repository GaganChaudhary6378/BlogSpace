let blogEl=document.getElementById("blog-content");


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


