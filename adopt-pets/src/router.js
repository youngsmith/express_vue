import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import cats from './views/cats.vue'
import dogs from './views/dogs.vue'
import pets from './views/pets.vue'
import posts from './views/PostComponent.vue'


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
      path: '/pets/:species/:id',
      name: 'pets',
      component: pets
    },
    {
      path: '/posts',
      name: 'posts',
      component: posts
    }
  ]
})
