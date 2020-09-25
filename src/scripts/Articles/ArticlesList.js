import { getArticles, useArticles, deleteArticle } from "./ArticlesDataProvider.js"

const eventHub = document.querySelector(".container")

/* Function that maps through an array then returns that array as the 
    argument for the function articleHTML
*/    
const render = () => {
    const contentTarget = document.querySelector("#articleList")
    contentTarget.innerHTML = useArticles().map(article => {
        return articleHTML(article)
    }).join("")
}

/* Function that takes the argument from the rendor function
    and creates the HTML useing the information that was passed
    as the argument.
*/    
const articleHTML = (articleObject) => {
    return `
        <div>Title: ${articleObject.title}</div>
        <div>Summary: ${articleObject.summary}</div>
        <div>Link: ${articleObject.URL}</div>
        <div>Submitted by: ${articleObject.user.username}</div>
        ${checkUserId(articleObject)}
        <p>
    `
}

/* Function that adds a delete button to each article in the list
   but only if the session user is equal to the user that posted
   the article.
*/      
const checkUserId = (article) => {
    let userId = sessionStorage.getItem("userId")
    if(parseInt(userId) === article.userId){
        return `
        <button id="deleteArticle--${article.id}">Delete</button>
        `
    }
    else{
        return ""
    }
}

/* Function exported to main.js that is responsible for calling the list to 
   be added to the DOM
*/   
export const articleList = () => {
    getArticles()
    .then(render)
}

/* Event listener that will check if the delete button was clicked.
   If the delete button was clicked then the id to be deleted will
   be passed to deleteArticle.
 */  
eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("deleteArticle")){
        const [prefix, id] = event.target.id.split("--")
        deleteArticle(id)
    }
})