<template>
<!--    <div class="card">-->
<!--      <div v-for="list in allLists" :key="list.id">-->
<!--        <h3>{{ list.title }}</h3>-->
<!--        <h4>Children: {{ list.children }}</h4>-->
<!--      </div>-->
<!--    </div>-->
  <div class="tree">
    <ul class="tree-list">
      <node-tree :node="treeData"></node-tree>
    </ul>
  </div>
</template>

<script>
import NodeTree from './NodeTree'

export default {
  components: {
    NodeTree
  },
  props: {
    treeData: Object
  }
}
</script>

<style scoped>
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
</style>
