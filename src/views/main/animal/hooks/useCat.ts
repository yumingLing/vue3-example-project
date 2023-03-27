import { ref, watch } from 'vue'
import type { IUseCat } from '../types'

export default function (catUrl = '这是猫的请求地址'): IUseCat {
  const titleRef = ref(catUrl)
  const requestUrl = ref('')
  const getCatSay = () => {
    return '喵喵喵'
  }
  const getHobby = (hobby = '吃鱼') => {
    return hobby
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
    getCatSay,
    getHobby,
    requestUrl
  }
}
