<template>
  <div>
    <!-- <BufferGeometry></BufferGeometry> -->
    <TextureLoader></TextureLoader>
  </div>
</template>
<script lang="ts" setup>
import BufferGeometry from './BufferGeometry/BufferGeometry.vue'
import TextureLoader from './TextureLoader/TextureLoader.vue'
</script>

<style lang="less" scoped>
.three {
  width: 100%;
  height: 100%;
  background: beige;
}
</style>
