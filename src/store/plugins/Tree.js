export default {
  actions: {
    async fetchList (ctx, payload) {
      const result = await fetch(`https://www.klerk.ru/yindex.php/v3/event/rubrics/${payload.value}`)
      const list = await result.json()

      ctx.commit('updateList', list)
      // TODO: сделать нажатие чекбокса для передачи параметра в эндпойнт
      // ctx.commit('updatePage', payload)
    }
  },
  mutations: {
    updateList (state, list) {
      state.list = list
    }
  },
  state: {
    list: []
  },
  getters: {
    allLists (state) {
      return state.list
    }
  }
}
