<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <Fold v-if="!isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <div>
        <!-- <NavBreadcrumb :breadcrumbs="breadcrumbs"></NavBreadcrumb> -->
      </div>
      <!-- <user-info></user-info> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { useStore } from 'vuex'
// import { useRoute } from 'vue-router'
// import { pathMapBreadcrumbs } from '@/utils/map-menus'
const emit = defineEmits(['foldChange'])
const isFold = ref(true)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>
<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
