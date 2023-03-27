<template>
  <div id="modelDivGui" class="three"></div>
</template>
<script lang="ts" setup>
import MakeModelGui from './hooks/model-gui'
onMounted(() => {
  const divDom: HTMLElement | null = document.getElementById('modelDivGui')
  const model = new MakeModelGui(divDom)
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
