import * as THREE from 'three'
const img = await import('./earth.jpg')
const textureImg = await import('./texture.jpg')
/**
 * 通过纹理贴图加载器TextureLoader的load()方法加载一张图片可以返回一个纹理对象Texture，
 * 纹理对象Texture可以作为模型材质颜色贴图.map属性的值。
 *
 * */

export const initModel = () => {
  // const geometry = new THREE.PlaneGeometry(200, 100);//矩形
  // const geometry = new THREE.BoxGeometry(100, 100, 100); //长方体
  const geometry = new THREE.SphereGeometry(100) //球体
  //纹理贴图加载器TextureLoader
  const texLoader = new THREE.TextureLoader()
  // .load()方法加载图像，返回一个纹理对象Texture
  const texture = texLoader.load(img.default)
  const material = new THREE.MeshLambertMaterial({
    // color: 0x00ffff,
    // 设置纹理贴图：Texture对象作为材质map属性的属性值
    map: texture //map表示材质的颜色贴图属性
  })

  // material.map = texture;//也可以通过map属性直接设置，材质的参数设置一样
  const model = new THREE.Mesh(geometry, material)
  return model
}

export const circleModelTexture = () => {
  //CircleGeometry的顶点UV坐标是按照圆形采样纹理贴图
  const geometry = new THREE.CircleGeometry(60, 100)
  //纹理贴图加载器TextureLoader
  const texLoader = new THREE.TextureLoader()
  const texture = texLoader.load(textureImg.default)
  const material = new THREE.MeshBasicMaterial({
    map: texture, //map表示材质的颜色贴图属性
    side: THREE.DoubleSide
  })
  const mesh = new THREE.Mesh(geometry, material)
  return mesh
}
