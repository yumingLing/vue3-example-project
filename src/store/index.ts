import { defineStore, createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

export const globalStore = defineStore({
  id: 'global-store',
  state: () => ({
    name: '--',
    token: '4545646'
  }),
  getters: {},
  actions: {
    setName(name: string) {
      this.name = name
    }
  },
  persist: {
    enabled: true, //开启之后，默认会对整个 Store 的 state 内容进行 sessionStorage 储存
    strategies: [
      {
        // 自定义存储的 key，默认是 store.$id
        key: 'my-store',
        // 可以指定任何 extends Storage 的实例，默认是 sessionStorage
        storage: localStorage,
        // state 中的字段名，按组打包储存
        paths: ['token']
      }
    ]
  }
})
const store = createPinia()
store.use(piniaPluginPersist)

export default store
