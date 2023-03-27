import * as THREE from 'three'
// 引入轨道控制器扩展库OrbitControls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export default class MakeModel {
  scene: THREE.Scene | null = null
  camera: THREE.PerspectiveCamera | null = null
  renderer: THREE.WebGLRenderer | null = null
  mesh: THREE.Mesh | null = null
  initDom: HTMLElement | null = null
  controls: OrbitControls | null = null
  ambientLight: THREE.AmbientLight | null = null
  constructor(dom: HTMLElement | null, mesh?: THREE.Mesh) {
    this.initDom = dom
    this.mesh = mesh ? mesh : null
    this.init()
  }

  init(): void {
    // 第一步新建一个场景
    this.scene = new THREE.Scene()
    this.setCamera()
    this.setRenderer()
    this.setCube()
    this.setLight()
    this.addControl()
    // this.animate()
  }

  // 新建透视相机
  setCamera(): void {
    //75:视场角度 第二参数就是 长度和宽度比 默认采用浏览器  返回以像素为单位的窗口的内部宽度和高度
    // 0.1:近裁截面, 1000
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.initDom!.offsetWidth / this.initDom!.offsetHeight,
      0.1,
      1000
    )
    this.camera.position.z = 5
  }

  // 设置渲染器
  setRenderer(): void {
    this.renderer = new THREE.WebGLRenderer()
    // 设置画布的大小
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    //这里 其实就是canvas 画布  renderer.domElement
    this.initDom?.appendChild(this.renderer.domElement)
  }

  // 创建网格模型
  setCube(): void {
    if (this.scene) {
      if (!this.mesh) {
        const geometry = new THREE.BoxGeometry() //创建一个立方体几何对象Geometry
        // const material = new THREE.MeshBasicMaterial({ color: 0xff3200 }); //材质对象Material
        // const texture = new THREE.TextureLoader().load('/assets/imgs/dalishi.jpg') //首先，获取到纹理
        // const material = new THREE.MeshBasicMaterial({ map: texture }) //然后创建一个phong材质来处理着色，并传递给纹理映射
        // const material = new THREE.MeshBasicMaterial({
        //   color: 0x0000ff, //设置材质颜色
        //   transparent: true, //开启透明
        //   opacity: 1, //设置透明度
        //   side: THREE.DoubleSide //两面可见
        // })
        // 模拟镜面反射，产生一个高光效果
        const material = new THREE.MeshPhongMaterial({
          color: 0xff0000,
          shininess: 20, //高光部分的亮度，默认30
          specular: 0x444444 //高光部分的颜色
        })
        this.mesh = new THREE.Mesh(geometry, material) //网格模型对象Mesh
      }
      this.scene.add(this.mesh) //网格模型添加到场景中
    }
  }
  // 设置环境光
  setLight(): void {
    if (this.scene) {
      this.ambientLight = new THREE.AmbientLight(0xffffff, 0.4) // 环境光
      this.scene.add(this.ambientLight)
    }
  }

  // 渲染
  render(): void {
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera)
    }
  }
  //添加相机的控制，就是平时的旋转移动
  addControl() {
    //辅助观察的坐标系
    const axesHelper = new THREE.AxesHelper(100)
    this.scene!.add(axesHelper)
    this.controls = new OrbitControls(this.camera, this.initDom)
    // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
    this.controls.addEventListener('change', () => {
      this.render()
    }) //监听鼠标、键盘事件
    this.render()
  }
  // 动画
  animate(): void {
    if (this.mesh) {
      requestAnimationFrame(this.animate.bind(this))
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.01
      this.render()
    }
  }

  //canvas画布宽高度动态变化
  reRenderModelSize(): void {
    // 重置渲染器输出画布canvas尺寸
    this.renderer!.setSize(
      this.initDom!.offsetWidth,
      this.initDom!.offsetHeight
    )
    // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
    this.camera!.aspect = this.initDom!.offsetWidth / this.initDom!.offsetHeight
    // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
    // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
    // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
    this.camera!.updateProjectionMatrix()
  }
}
