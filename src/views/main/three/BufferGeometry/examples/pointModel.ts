import * as THREE from 'three'
class PointModel {
  // constructor() {}
  initPoint = (type: 'point' | 'line' | 'baseMesh' | 'box') => {
    //1.创建一个空的几何体对象
    const geometry = new THREE.BufferGeometry()
    //2.类型化数组创建顶点数据
    const vertices = new Float32Array([
      0,
      0,
      0, //顶点1坐标
      50,
      0,
      0, //顶点2坐标
      0,
      100,
      0, //顶点3坐标
      0,
      0,
      10, //顶点4坐标
      0,
      0,
      100, //顶点5坐标
      50,
      0,
      10 //顶点6坐标
    ])
    // 3.通过threejs的属性缓冲区对象BufferAttribute表示threejs几何体顶点数据。
    // 创建属性缓冲区对象
    //3个为一组，表示一个顶点的xyz坐标
    const attribue = new THREE.BufferAttribute(vertices, 3)
    // 设置几何体attributes属性的位置属性
    geometry.attributes.position = attribue
    const m = this.getModleByType(type, geometry)
    return m
  }

  getModleByType(type: string, geometry: THREE.BufferGeometry) {
    let model = null
    if (type == 'point') {
      // 4.网格模型Mesh有自己对应的网格材质，同样点模型Points有自己对应的点材质PointsMaterial
      // 点渲染模式
      const material = new THREE.PointsMaterial({
        color: 0xff0000,
        size: 10.0 //点对象像素尺寸
      })
      model = new THREE.Points(geometry, material) //点模型对象
    } else if (type == 'line') {
      // 5.线材质对象
      const material = new THREE.LineBasicMaterial({
        color: 0xff0000 //线条颜色
      })
      // 创建线模型对象
      model = new THREE.Line(geometry, material)
      // 闭合线条
      // const line = new THREE.LineLoop(geometry, material);
      //非连续的线条
      // const line = new THREE.LineSegments(geometry, material);
    } else if (type == 'baseMesh') {
      /**
       *  side: THREE.FrontSide //默认只有正面可见
       *   side: THREE.DoubleSide, //两面可见
       * side: THREE.BackSide, //设置只有背面可见
       */
      const material = new THREE.MeshBasicMaterial({
        color: 0x0000ff, //材质颜色
        side: THREE.FrontSide //默认只有正面可见
      })
      model = new THREE.Mesh(geometry, material)
    } else if (type == 'box') {
      const geometry = new THREE.BoxGeometry(20, 20, 20)
      const material = new THREE.MeshBasicMaterial({
        color: '#eb9e10',
        transparent: true, //开启透明
        opacity: 0.5 //设置透明度
      })
      model = new THREE.Mesh(geometry, material)
    }

    return model
  }
}
export default PointModel
