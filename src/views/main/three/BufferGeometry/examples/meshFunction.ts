export const Rotation = (mesh: any) => {
  //绕y轴的角度设置为60度
  mesh.rotation.y += Math.PI / 3
  console.log('旋转')

  //绕y轴的角度增加60度
  //   mesh.rotation.y += Math.PI / 3
  //绕y轴的角度减去60度
  //   mesh.rotation.y -= Math.PI / 3
}
