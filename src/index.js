import './style.css'
import * as THREE from 'three'
import * as dat from 'dat.gui'

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const group = new THREE.Group()
group.scale.y = 1
group.rotation.y = 0

scene.add(group)

const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const obj1 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1, 0.1), material1)
obj1.position.x = -0.9
group.add(obj1)

const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const obj2 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1, 0.05), material2)
obj2.position.x = 0
group.add(obj2)

const material3 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const obj3 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1, 0.1), material3)
obj3.position.x = 0.9
group.add(obj3)

// Debug config
gui.add(group.rotation, 'x', -5, 5, 0.1)
gui.add(material1, 'wireframe').name('wireframe1')
gui.add(material2, 'wireframe').name('wireframe2')
gui.add(material3, 'wireframe').name('wireframe3')

// Size
const sizes = {
  width: 800,
  height: 500,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})

renderer.setSize(sizes.width, sizes.height)

const tick = () => {
  group.rotation.y += 1
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()
