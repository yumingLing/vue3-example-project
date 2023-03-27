<template>
  <div>这是猫的组件:{{ useCatData.requestUrl }}</div>
  <div>本喵的叫法：{{ useCatData.getCatSay() }}</div>
  <div>本喵的爱好：{{ useCatData.getHobby() }}</div>
</template>
<script lang="ts" setup>
import useCat from '../hooks/useCat'
import type { IUseCat } from '../types'
const props = defineProps({
  msg: String,
  catHooks: {
    type: Function,
    default: useCat
  }
})
const useCatData: IUseCat = props.catHooks()
</script>

<style lang="less" scoped></style>
