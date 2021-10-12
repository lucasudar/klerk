<template>
  <h2>Klerk Tree form JSON</h2>
  <div class="choice">
    <input type="checkbox" id="checkbox" checked>
    <label for="checkbox" @click="showExtra">Show extra</label>
  </div>
  <div @click.self="showhide"
  >{{ isShow ? 'Root [-]' : 'Root [+]' }}
    <div v-show="isShow" v-for="obj in arrList" :key="obj.id">
      <Tree :tree-data="obj"></Tree>
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
    showhide () {
      this.isShow = !this.isShow
    },
    showExtra () {
      if (this.$store.getters.extra) {
        this.$store.dispatch('fetchList', {
          value: ''
        })
        this.$store.dispatch('changeExtra', {
          value: false
        })
      } else {
        this.$store.dispatch('fetchList', {
          value: '?allowEmpty=1'
        })
        this.$store.dispatch('changeExtra', {
          value: true
        })
      }
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
