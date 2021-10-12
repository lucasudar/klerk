export default {
  actions: {
    async fetchList (ctx, payload) {
      const result = await fetch(`https://www.klerk.ru/yindex.php/v3/event/rubrics/${payload.value}`)
      const list = await result.json()

      ctx.commit('updateList', list)
    },
    changeExtra (ctx, payload) {
      const value = payload.value
      ctx.commit('updateExtra', value)
    }
  },
  mutations: {
    updateList (state, list) {
      state.list = list
    },
    updateExtra (state, value) {
      state.isExtra = value
    }
  },
  state: {
    list: [],
    isExtra: true
  },
  getters: {
    allLists (state) {
      return state.list
    },
    extra (state) {
      return state.isExtra
    }
  }
}
