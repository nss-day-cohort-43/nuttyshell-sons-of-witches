import { getArticles, useArticles } from "./Articles/ArticlesDataProvider.js"
import { renderArticleForm } from "./Articles/ArticlesForm.js"
import { articleList } from "./Articles/ArticlesList.js"
import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { eventList } from "./Events/EventsList.js"
import { dummyLogin } from "./dummyLogin.js"
import { Nutshell } from "./Nutshell.js"
import { renderChat } from './Chat/ChatForm.js'
import { chatList } from './Chat/ChatList.js'
import { getTasks, useTasks } from "./Tasks/TasksDataProvider.js"
import { renderTasksForm } from "./Tasks/TasksForm.js"
import { tasksList } from "./Tasks/TasksList.js"


/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
dummyLogin();
articleList()
eventList();
renderArticleForm();
renderChat()
chatList()
renderTasksForm();

tasksList();
