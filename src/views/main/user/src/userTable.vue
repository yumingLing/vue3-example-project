<template>
  <div>
    <p>表名：{{ props.userTableParam.tableName }}</p>
    <p v-for="item in tableList" :key="item">{{ item }}</p>
    <component :is="props.userTableParam.addUserVue"></component>
  </div>
</template>
<script lang="ts" setup>
import { userTableVueParam } from './types'
const props = defineProps<{ userTableParam: userTableVueParam }>()
const dealTableData = (list: any[]) => {
  return list
}
const tableList = dealTableData(props.userTableParam.tableList)
</script>

<style lang="less" scoped></style>
