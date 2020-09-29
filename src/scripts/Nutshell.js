import { renderArticleForm } from "./Articles/ArticlesForm.js"
import { articleList } from "./Articles/ArticlesList.js"
import { eventList } from "./Events/EventsList.js"
import { renderChat } from './Chat/ChatForm.js'
import { chatList } from './Chat/ChatList.js'




export const Nutshell = () => {
    articleList();
    eventList();
    renderArticleForm();
    renderChat();
    chatList();
}