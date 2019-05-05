import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import cats from './views/cats.vue'
import dogs from './views/dogs.vue'
import posts from './views/PostComponent.vue'
import read from './views/read.vue'
import write from './views/Editor.vue'
import gmaps from './views/gmaps.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cats',
      name: 'cats',
      component: cats
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: dogs
    },
    {
      path: '/posts',
      name: 'posts',
      component: posts
    },
    {
      path: '/posts/:index',
      name: 'read',
      component: read
    },
    {
      path: '/write',
      name: 'write',
      component: write
    },
    {
      path: '/gmaps',
      name: 'gmaps',
      component: gmaps
    }
  ]
})
