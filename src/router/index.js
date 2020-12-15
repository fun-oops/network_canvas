import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import draft_1 from '@/components/draft_1'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'draft_1',
      component: draft_1
    }
  ]
})
// 下一步，编写vue的动态网络生成的模板，在router中引用即可