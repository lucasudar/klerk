<template>
  <li class="node-tree">
    <span class="label">{{ node.title }}</span>
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
  }
}
</script>

<style scoped>

</style>
