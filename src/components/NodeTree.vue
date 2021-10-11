<template>
  <li class="node-tree">
    <span :class="{bold: isFolder}"
          @click="toggle"
    >
          {{ node.title }} ({{ node.count }} {{ sumOfChildren }})
    </span>
    <span class="showhide" v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
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
      } else {
        let sum = 0
        for (const subnode of Object.values(this.node)) {
          sum += this.sumOfChildren(subnode)
        }
        return sum
      }
    },
    isFolder: function () {
      return this.node.children && this.node.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    }
  }
}
</script>

<style scoped>
.bold {
  font-weight: bold;
  cursor: pointer;
}
.showhide {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}

</style>
