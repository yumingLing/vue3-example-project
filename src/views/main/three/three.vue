<template>
  <div id="modelDiv" class="three"></div>
</template>
<script lang="ts" setup>
import MakeModel from './hooks/init'
onMounted(() => {
  const divDom: HTMLElement | null = document.getElementById('modelDiv')
  const model = new MakeModel(divDom)
  console.log(model)
  window.onresize = () => {
    model.reRenderModelSize()
  }
})
</script>

<style lang="less" scoped>
.three {
  width: 100%;
  height: 100%;
  background: beige;
}
</style>
