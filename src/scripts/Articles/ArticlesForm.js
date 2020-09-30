import { getArticles, saveArticles } from "./ArticlesDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".articles")

/* Function that adds a form to the display.
*/
export const renderArticleForm = () => {
    contentTarget.innerHTML = `
    <div class="articleForm">
            <h3 class="addArticlesHeader">Add News Article</h3>
        <fieldset>
            <label>Title</label>
            <input type="text" id="articleTitle">
        </fieldset>
        <fieldset>
            <label>Summary</label>
            <input type="text" id="articleSummary">
        </fieldset>
        <fieldset>
            <label>URL</label>
            <input type="text" id="articleURL">
        </fieldset>
        <fieldset>
            <button id="articleSaveBtn">Save</button>
        </fieldset>
        </div>
        <h3 class="articlesHeader">Articles</h3>
        <div id="articleList"></div> 

`
}

/* Event Listener that will pass an object to the saveArticles
   function if the target.id is equal to the ID of articleSaveBtn
*/
eventHub.addEventListener("click", event => {
    if (event.target.id === "articleSaveBtn") {
        const newArticelObj = {
            userId: parseInt(sessionStorage.getItem("userId")),
            title: document.querySelector("#articleTitle").value,
            summary: document.querySelector("#articleSummary").value,
            URL: document.querySelector("#articleURL").value,
            date: new Date()
        }
        saveArticles(newArticelObj)
        renderArticleForm()
    }
})
