const eventHub = document.querySelector(".dashboard")

const dispatchStateChangeEvent = () => {
    const newsStateChangedEvent = new CustomEvent("newsStateChanged")
}

let news

export const getNews = () => {
    return fetch(`http://local:8088/database?_expand=news`)
        .then(response => response.json)
        .then(parsedNews => {
            news = parsedNews
        })
}

export const saveNews = (newsObj) => {
    return(`http://local:8088/database`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newsObj)
    })
    .then(getNews)
    .then(dispatchStateChangeEvent)
}

export const useNews = () => {
    return news.slice()
}