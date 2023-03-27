<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="action">count is {{ count }}</button>
    <p>
      <span> 姓名： {{ myData.name }} </span>
      <span> 年龄：{{ myData.age }} </span>
    </p>
  </div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
</template>
<script setup lang="ts">
// import { ref } from 'vue'
import { globalStore } from '@/store'
defineProps<{ msg: string }>()
const count = ref(0)
const myData = reactive({ name: 'll', age: 18 })
const store = globalStore()
const action = () => {
  count.value++
  myData.age++
}

onMounted(() => {
  console.log('测试自动化引入onMounted', store.token)
})
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
