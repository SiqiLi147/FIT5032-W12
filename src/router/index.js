import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AddBookView from '../views/AddBookView.vue'
import GetBookCountView from '../views/GetBookCountView.vue'
import WeatherView from '../views/WeatherView.vue'
import CountBookAPI from '../views/ConutBookAPI.vue'
import { compile } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  { 
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path:'/WeatherCheck',
    name:'WeatherCheck',
    component:WeatherView
  },
  {
    path:'/CountBookAPI',
    name:'CountBookAPI',
    component: CountBookAPI
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router