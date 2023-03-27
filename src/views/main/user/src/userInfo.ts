import userTableVue from './userTable.vue'
import addUserVue from './addUser.vue'
import type { userTableVueParam } from './types'
class UserInfo {
  tableVue: any
  addUserVue: any
  config: any = {}
  tableVueParam: userTableVueParam = {
    tableName: '测试啊啊啊',
    tableList: ['d', 'e'],
    addUserVue: addUserVue
  }
  constructor(config?: any, tableVueP?: any, addUserVueP?: any) {
    this.config = { ...config }
    this.tableVue = tableVueP ? tableVueP : userTableVue
    this.addUserVue = addUserVueP ? addUserVueP : addUserVue
  }
  getUserInfoVue() {
    return this.tableVue
  }
  getTableVueParam() {
    return this.getTableVueParam
  }
}

export default UserInfo
