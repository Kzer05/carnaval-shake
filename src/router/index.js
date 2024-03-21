import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import EventView from '../views/EventView.vue'
import SignupView from '../views/SignupView.vue'
import SigninView from '../views/SigninView.vue'
import ChoseStickerView from '../views/ChoseStickerView.vue'
import SendMessageView from '../views/SendMessageView.vue'
import CodeFriendView from '../views/CodeFriendView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeView
    },
    {
      path: '/event',
      name: 'event',
      component: EventView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView
    },
    {
      path: '/chose_sticker',
      name: 'chose_sticker',
      component: ChoseStickerView
    },
    {
      path: '/send_message',
      name: 'send_message',
      component: SendMessageView
    },
    {
      path: '/code_friend',
      name: 'code_friend',
      component: CodeFriendView
    },
  ]
})

export default router
