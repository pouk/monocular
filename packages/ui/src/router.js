import Vue from 'vue'
import Router from 'vue-router'

import MonocularView from './views/Monocular'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:imageFileName',
      name: 'MonocularView',
      component: MonocularView,
      props: true
    }
  ]
})
