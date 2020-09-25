const eventHub = document.querySelector(".container")

let articles

export const getArticles = () => {
    return fetch(`http://localhost:8088/articles?_expand=user`)
        .then(response => response.json())
        .then(parsedArticles => {
            articles = parsedArticles
        })
}

export const saveArticles = (articlesObj) => {
    return fetch(`http://localhost:8088/articles?_expand=user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articlesObj)
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent)
}

export const useArticles = () => {
    return articles.slice()
}