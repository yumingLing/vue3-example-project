import { ref, watch } from 'vue'

export default function (dogUrl = '这是狗的请求地址') {
  const titleRef = ref(dogUrl)
  const requestUrl = ref('')
  const getDogSay = () => {
    return '汪汪汪'
  }
  const getHobby = (hobby = '吃骨头') => {
    return hobby
  }
  const dogPower = (power = '看家') => {
    return power
  }
  watch(
    titleRef,
    (newVal) => {
      requestUrl.value = newVal
    },
    {
      immediate: true
    }
  )
  return {
    getDogSay,
    getHobby,
    requestUrl,
    dogPower
  }
}
