import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Person from '@/components/Person'
import Message from '@/components/Message'
import Subject from '@/components/Subject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      components: {
        person: Person
      }
    },
    {
      path: '/message/:id',
      name: 'message',
      redirect: '/message/:id/subject/1'
    },
    {
      path: '/message/:id/subject/:idsubject',
      name: 'subject',
      components: {
        person: Person,
        message: Message,
        subject: Subject
      }
    }
  ]
})
