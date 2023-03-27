import MakeModel from './init'
// 引入dat.gui.js的一个类GUI
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'

export default class MakeModelGui extends MakeModel {
  gui: GUI | null = null
  constructor(dom: HTMLElement | null, mesh?: THREE.Mesh) {
    super(dom, mesh)
    this.initGui()
  }
  initGui() {
    this.gui = new GUI()
    //改变交互界面style属性 ,改变默认的style样式，比如位置、宽度等
    this.gui.domElement.style.right = '0px'
    this.gui.domElement.style.width = '300px'

    this.gui.add(this.mesh!.position, 'x', 0, 180)
    this.gui.add(this.mesh!.position, 'y', 0, 180)
    this.gui.add(this.mesh!.position, 'z', 0, 180)

    const obj = {
      color: 0x00ffff
    }
    // .addColor()生成颜色值改变的交互界面
    this.gui.addColor(obj, 'color').onChange((value: any) => {
      ;(this.mesh!.material as any).color.set(value)
    })
  }
}
