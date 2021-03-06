import { renderArticleForm } from "./Articles/ArticlesForm.js"
import { articleList } from "./Articles/ArticlesList.js"
import { eventList } from "./Events/EventsList.js"
import { renderChat } from './Chat/ChatForm.js'
import { chatList } from './Chat/ChatList.js'
import { tasksList } from './Tasks/TasksList.js'
import { renderTasksForm } from './Tasks/TasksForm.js'
import { renderEventForm } from "./Events/EventsForm.js"
import { renderFriend } from './Friends/FriendsForm.js'

export const Nutshell = () => {
    articleList();
    eventList();
    renderArticleForm();
    renderChat();
    chatList();
    renderTasksForm();
    tasksList();
    renderEventForm();
    renderFriend()
}