<template>
  <div class="power">
    <div>这是狗狗的本领组件：{{ dogPower() }}</div>
    <div>
      发现陌生人：<el-button @click="warnToDog">向父组件狗狗触发报警</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useDog from '../hooks/useDog'
const emit = defineEmits(['warn'])
const { dogPower } = useDog()
const warnToDog = () => {
  emit('warn')
}
</script>

<style lang="less" scoped>
.power {
  border: 1px rgb(182, 181, 181) solid;
  padding: 5px;
  width: 300px;
}
</style>
