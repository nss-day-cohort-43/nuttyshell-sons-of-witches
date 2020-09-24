import { getArticles, useArticles } from "./ArticlesDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".articles")

const render = () => {
    contentTarget.innerHTML = useArticles().map(article => {
        return articleHTML(article)
    })
}

const articleHTML = (articleObject) => {
    return `
        <div>Title: ${articleObject.title}</div>
        <div>Summary: ${articleObject.summary}</div>
        <div>Link: ${articleObject.URL}</div>
        <div>Submitted by: ${articleObject.user.username}</div>
    `
}

export const articleList = () => {
    getArticles()
    .then(render)
}