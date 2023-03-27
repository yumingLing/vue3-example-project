<template>
  <div>
    <component
      :is="userVue"
      :userTableParam="userInfo.tableVueParam"
    ></component>
  </div>
</template>
<script lang="ts" setup>
import UserInfo from './src/userInfo'
const userInfo = new UserInfo()
const userVue = userInfo.getUserInfoVue()
</script>

<style lang="less" scoped></style>
