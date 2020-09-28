import { getArticles, useArticles } from "./Articles/ArticlesDataProvider.js"
import { renderArticleForm } from "./Articles/ArticlesForm.js"
import { articleList } from "./Articles/ArticlesList.js"
import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { eventList } from "./Events/EventsList.js"
import { renderEventForm } from "./Events/EventsForm.js";
import { dummyLogin } from "./dummyLogin.js"
import { Nutshell } from "./Nutshell.js"
import { renderChat } from './Chat/ChatForm.js'
import { chatList } from './Chat/ChatList.js'


/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
dummyLogin();
articleList()
renderEventForm();
eventList();
renderArticleForm();
renderChat()
chatList()

