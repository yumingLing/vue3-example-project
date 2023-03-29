<template>
  <el-button @click="rotation">旋转</el-button>
  <div id="BufferGeometryDiv" class="three"></div>
</template>
<script lang="ts" setup>
import initModel from './examples/initBufferScene'
import PointModel from './examples/pointModel'
import { Rotation } from './examples/meshFunction'
const modelData: any = {
  model: '',
  mesh: ''
}
const rotation = () => {
  Rotation(modelData.mesh)
  modelData.model.render()
}
onMounted(() => {
  const divDom: HTMLElement | null =
    document.getElementById('BufferGeometryDiv')
  //1.创建点模型
  const point = new PointModel()
  const pointModel = point.initPoint('point')
  const lineModel = point.initPoint('line')
  const baseMesh = point.initPoint('baseMesh')
  const boxMesh = point.initPoint('box')

  modelData.mesh = boxMesh

  // 2.创建场景初始化相机
  const model = new initModel(divDom)
  model.addModel(boxMesh)
  model.render()

  modelData.model = model

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
