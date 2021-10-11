<template>
  <h2>Klerk Tree form JSON</h2>
  <div class="choice">
    <input type="checkbox" id="checkbox" checked>
    <label for="checkbox">Show extra</label>
  </div>
  <div @click.self="showhide"
    >{{ isShow ? 'Root [-]' : 'Root [+]'}}
    <div v-show="isShow" v-for="arr in arrList" :key="arr.id">
      <Tree :tree-data="arr"></Tree>
    </div>
  </div>
</template>

<script>
import Tree from './components/Tree.vue'

export default {
  name: 'App',
  components: {
    Tree
  },
  data () {
    return {
      isShow: true
    }
  },
  async mounted () {
    await this.$store.dispatch('fetchList', {
      value: '?allowEmpty=1'
    })
  },
  methods: {
    fetchList () {
      this.$store.commit('fetchList')
    },
    showhide () {
      this.isShow = !this.isShow
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
  box-sizing: border-box;
  margin: 60px 150px;
}

.choice {
  margin: 20px;
}

.choice input:checked + label {
  font-weight: 700;
  color: green;
}
</style>
