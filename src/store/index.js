import { createStore } from 'vuex'
import Tree from './plugins/Tree'

const store = createStore({
  modules: {
    Tree
  }
})

export default store
