import { articleList } from "./ArticlesList.js"

const eventHub = document.querySelector(".container")



/* Creation of custom event which allows a refresh to happen
    without the user hitting the refresh command
*/
const dispatchStateChangeEvent = () => {
    const articleStateChangedEvent = new CustomEvent("articleStateChanged")

    eventHub.dispatchEvent(articleStateChangedEvent)
}

eventHub.addEventListener("articleStateChanged", event => {
    articleList()
})


let articles

/* Function that fetches the articles from the database.
    This function also sets the returned information equal
    to articles
 */
export const getArticles = () => {
    return fetch(`http://localhost:8088/articles?_expand=user&_sort=id&_order=DESC`)
        .then(response => response.json())
        .then(parsedArticles => {
            articles = parsedArticles
        })
}

/* Function that POST new information to the database.
    After posting to the database the function calls for 
    the getArticles function and for the dispatchStateChangeEvent 
    function to be run.
 */
export const saveArticles = (articlesObj) => {
    return fetch(`http://localhost:8088/articles`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articlesObj)
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent)
}

/* Function that takes the articles and makes a copy to be used */
export const useArticles = () => {
    return articles.slice()
}

/* Function that deletes an article from the database.
    Then calls for the articles with the getArticles function.
    Then calls for the dispatchStateChangeEvent function. */
export const deleteArticle = (id) => {
    return fetch(`http://localhost:8088/articles/${id}`, {
        method: 'DELETE'
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent)
}

/* Function that edits the article in the database. Then
    calls for the getArticles function. Then the dispatchStateChangeEvent
*/
export const editArticle = (id, title, summary, URL) => {
    return fetch(`http://localhost:8088/articles/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            summary: summary,
            URL: URL
        })
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent)
}