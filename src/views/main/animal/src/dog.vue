<template>
  <div>这是狗的组件:{{ requestUrl }}</div>
  <div>本汪的叫法：{{ getDogSay() }}</div>
  <div>本汪的爱好：{{ getHobby() }}</div>
  <!-- <slot id="dog-power">
    <dog-power></dog-power>
  </slot> -->
  <component :is="props.dogPowerVue" @warn="warnToDog"></component>
</template>
<script lang="ts" setup>
import useDog from '../hooks/useDog'
import dogPower from './dogPower.vue'
const props = defineProps({
  dogPowerVue: {
    type: Object,
    default: dogPower
  },
  dogHooks: {
    type: Function,
    default: useDog
  }
})
const { getDogSay, getHobby, requestUrl } = props.dogHooks()
const warnToDog = () => {
  alert(getDogSay())
}
</script>

<style lang="less" scoped></style>
