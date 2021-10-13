<template>
  <li class="node-tree">
        <span class="choice">
      <input type="checkbox" id="checkbox" :value="node.count" @click="calculateCount">
    </span>
    <a :href="link"
       :class="{ bold: isFolder }"
       target="_blank"
    >
      {{ node.title }}</a> ({{ node.count }} {{ sumOfChildren }})
    <span class="showhide" v-if="isFolder" @click="toggle"> [{{ isOpen ? '-' : '+' }}]</span>
    <ul v-show="isOpen"
        v-if="isFolder && node.children && node.children.length">
      <node v-for="child in node.children" :node="child" :key="child.index"></node>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'node',
  props: {
    node: Object
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    sumOfChildren () {
      if (Array.isArray(this.node.children)) {
        return this.node.children.reduce((prev, current) => prev + current.count, 0)
      }
      return 0
    },
    isFolder: function () {
      return this.node.children && this.node.children.length
    },
    link () {
      return 'https://www.klerk.ru' + this.node.url
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    calculateCount () {
      const sum = this.node.count + this.node.children.reduce((prev, current) => prev + current.count, 0)
      this.$store.dispatch('changeSum', {
        value: sum
      })
    }
  }
}
</script>

<style scoped>
.bold {
  font-weight: bold;
}

.showhide {
  font-weight: bold;
  cursor: pointer;
}

ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}

li {
  margin-top: 10px;
  list-style-type: none;
}

a {
  text-decoration: none;
  color: black
}

a:hover {
  color: red
}
</style>
