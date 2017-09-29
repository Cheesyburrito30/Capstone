import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import register from '@/components/register'
import Login from '@/components/login'
import Songs from '@/components/songs'
import CreateSong from '@/components/CreateSong'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/register',
    	name: 'register',
    	component: register
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/songs',
      name: 'songs',
      component: Songs
    },
    {
      path:'/songs/create',
      name: 'CreateSongs',
      component: CreateSong
    }
  ]
})
