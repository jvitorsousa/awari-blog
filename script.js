const posts= [
    {

        title: "Google Chrome",
        content: "Google Chrome is a web browser developed by Google",


    },

    {
        title:"Mozila Firefox",
        content:"Mozilla Firefox is an open-source web browser developed by Mozilla Firefox. has been the second most popular web browser since january,2018",

    },


    
    {
        title:"Mozila Edge",
        content:"Microsoft Edge is a web browser developed by Microsoft released in 20155",
    },

];

const wrapper= document.getElementById("posts");

for(let i = 0; i< posts.length; i++){

    const post= posts[i];

const article= document.createElement("article");
article.classList.add("post")

const title= document.createElement("h1");
title.classList.add("post-title");
const titleText= document.createTextNode(post.title);
title.appendChild(titleText);
article.appendChild(title);

const content= document.createElement("p");
const contentText= document.createTextNode(post.content);
content.appendChild(contentText);
article.appendChild(content);


wrapper.appendChild(article);


}

