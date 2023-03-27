export const menuList = [
  {
    id: 1,
    type: 1,
    icon: 'Guide',
    name: '面向对象',
    children: [
      {
        id: '1-1',
        type: 2,
        name: '动物案例',
        icon: '',
        url: '/animal'
      },
      {
        id: '1-2',
        type: 2,
        name: '人员管理',
        icon: '',
        url: '/user'
      }
    ]
  },
  {
    id: '2',
    type: 1,
    name: 'threeJS',
    icon: 'DataLine',
    children: [
      {
        id: '2-1',
        type: 2,
        name: '案例入口',
        icon: '',
        url: '/three-example'
      },
      {
        id: '2-2',
        type: 2,
        name: '初始化',
        icon: '',
        url: '/three-init'
      },
      {
        id: '2-3',
        type: 2,
        name: 'gui的使用',
        icon: '',
        url: '/three-gui'
      }
    ]
  }
]
