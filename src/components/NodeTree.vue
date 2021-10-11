<template>
  <li class="node-tree">
    <span class="label">{{ node.title }} ({{ node.count }} {{ sumOfChildren }})</span>
    <ul v-if="node.children && node.children.length">
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
    }
  }
}
</script>

<style scoped>

</style>
