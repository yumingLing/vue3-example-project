<template>
  <div id="TextureLoaderDiv" class="three"></div>
</template>
<script lang="ts" setup>
import initModelScene from './example/initTextureScene'
import { initModel, circleModelTexture } from './example/loadTexture'
const modelData: any = {
  model: '',
  mesh: ''
}

onMounted(() => {
  const divDom: HTMLElement | null = document.getElementById('TextureLoaderDiv')
  //1.创建点模型
  //   const modelMesh = initModel()
  //   圆形的切图
  const modelMesh = circleModelTexture()

  modelData.mesh = modelMesh
  // 2.创建场景初始化相机
  const model = new initModelScene(divDom)
  model.addModel(modelMesh)
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
