<template>
  <div id="BufferGeometryDiv" class="three"></div>
</template>
<script lang="ts" setup>
import initModel from './examples/initBufferScene'
import PointModel from './examples/pointModel'
onMounted(() => {
  const divDom: HTMLElement | null =
    document.getElementById('BufferGeometryDiv')
  //1.创建点模型
  const point = new PointModel()
  const pointModel = point.initPoint('point')
  const lineModel = point.initPoint('line')
  const baseMesh = point.initPoint('baseMesh')

  // 2.创建场景初始化相机
  const model = new initModel(divDom)
  model.addModel(baseMesh)
  model.render()

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
