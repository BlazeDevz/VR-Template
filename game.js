with(BABYLON) {
  let win = window

  function q(x) {
    return document.querySelector(x)
  }




  let can = q('canvas')
  let eng = new Engine(can)
  let scene = new Scene(eng)
 
  
  let light = new HemisphericLight('l', new Vector3(0.8, 0.7, 1), scene)
  let box1 = MeshBuilder.CreateBox('box', {}, scene)
  let box2 = MeshBuilder.CreateBox('box', {}, scene)
  box2.position.x=2
  
  
   
  let cam = new DeviceOrientationCamera('cam', new Vector3(0, 2, 0), scene)
  cam.setTarget(new Vector3(0,0,0))
  cam.angularSensibility = 10;
  cam.moveSensibility = 10;
  cam.attachControl(can)


  function loop() {
    scene.render()
    //some more looped sh*t
    /*let x = cam.rotation.y
    let y = cam.rotation.x
    let z = cam.rotation.z
    cam.rotation = new Vector3(x,y,z)*/
  }

  eng.runRenderLoop(loop)
  win.onresize = function() {
    eng.resize()
  }
}