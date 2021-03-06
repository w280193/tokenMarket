import Vue from 'vue'
import Router from 'vue-router'
import Market from '@/components/Market'
import CreateToken from '@/components/CreateToken'
import MyCollection from '@/components/MyCollection'
import Tutorial from '@/components/Tutorial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Market',
      name: 'Market',
      component: Market
    },
    {
      path: '/',
      name: 'CreateToken',
      component: CreateToken
    },
    {
      path: '/MyCollection',
      name: 'MyCollection',
      component: MyCollection
    },
    {
      path: '/Tutorial',
      name: 'Tutorial',
      component: Tutorial
    }
  ]
})
