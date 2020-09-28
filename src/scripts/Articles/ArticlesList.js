import { getArticles, useArticles, deleteArticle, editArticle } from "./ArticlesDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".articles")
let contentTarget1

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
    if (parseInt(userId) === article.userId) {
        return `
        <button id="deleteArticle--${article.id}">Delete</button>
        <button id="editArticle--${article.id}">Edit</button>
        <div id="editFormTarget--${article.id}"></div>
        `
    }
    else {
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
    if (event.target.id.startsWith("deleteArticle")) {
        const [prefix, id] = event.target.id.split("--")
        deleteArticle(id)
    }
})

/* Event Listener that checks if the edit button is clicked.
    If edit was clicked it calls the editForm function and passes
    the object to be edited.
*/
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("editArticle")) {
        const [prefix, id] = event.target.id.split("--")
        let x = useArticles().find(article => {
            return parseInt(article.id) === parseInt(id)
        })
        contentTarget1 = document.querySelector(`#editFormTarget--${id}`)
        editForm(x)
    }
})

/* Function that takes an object and displays the object it editable fields
    in the HTML at a target location
 */
const editForm = (articleObject) => {
    contentTarget1.innerHTML = `
         <div class="formPopup" id="myEditForm">
            <div class="editFormContainer">
                <h3>Edit Article</h3>
                    <lable>Title</label>
                    <input type="text" id="editArticleTitle" value="${articleObject.title}"></input>
                    <lable>Summary</label>
                    <input type="text" id="editArticleSummary" value="${articleObject.summary}"></input>
                    <lable>URL</label>
                    <input type="text" id="editArticleURL" value="${articleObject.URL}"></input>
                    <button type="submit" id="editBtn--${articleObject.id}">Save</button>
                    <button type="button" id="editCancel">Cancel Edit</button>
            </div>
        </div> 
    `
}

/* Event listener that checks if save is clicked in the edit form is cliked.
    If the save button is clicked on the edit form it will call the editArticle
    function and pass the information.
 */
eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("editBtn")){
        const [prefix, id] = event.target.id.split("--")
        const editArticelObj = {
            id: parseInt(id),
            title: document.querySelector("#editArticleTitle").value,
            summary: document.querySelector("#editArticleSummary").value,
            URL: document.querySelector("#editArticleURL").value,
        }
        editArticle(editArticelObj.id, editArticelObj.title, editArticelObj.summary, editArticelObj.URL)
    }
})

/* Event listener that checks if the cancel edit button is click.
    If the button is clicked it will call the articleList function.
 */
eventHub.addEventListener("click", event => {
    if(event.target.id === "editCancel"){
        articleList()
    }
})