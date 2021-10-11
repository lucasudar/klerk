<template>
  <h2>Klerk Tree form JSON</h2>
  <div v-for="arr in arrList" :key="arr.id">
    <Tree :tree-data="arr"></Tree>
  </div>
</template>

<script>
import Tree from './components/Tree.vue'

export default {
  name: 'App',
  components: {
    Tree
  },
  async mounted () {
    await this.$store.dispatch('fetchList', {
      value: '?allowEmpty=1'
    })
  },
  methods: {
    fetchList () {
      this.$store.commit('fetchList')
    }
  },
  computed: {
    arrList () {
      return this.$store.getters.allLists
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
