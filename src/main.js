import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import {routes} from './routes'

import {store} from './store/index'
import axios from 'axios'

axios.defaults.baseURL = "https://smarty-a6a1a-default-rtdb.firebaseio.com"

const router = createRouter({
    routes,
    history:createWebHistory()
  })

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')

