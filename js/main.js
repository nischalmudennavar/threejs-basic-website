import "../styles/style.css";

import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);

// isohedron grometry 
const geometry = new THREE.IcosahedronGeometry(10, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0xff67e7,
  wireframe: true,
//   wireframeLinewidth: 3,
});




const iso = new THREE.Mesh(geometry, material);
iso.position.set(0,0,0)
scene.add(iso);

const subgeometry = new THREE.IcosahedronGeometry(7, 0);
const submaterial = new THREE.MeshStandardMaterial({ color: 0xc400ff });
const subiso = new THREE.Mesh(subgeometry, submaterial);
subiso.position.set(0,0,0)
scene.add(subiso);

const pointLight = new THREE.PointLight(0xffffff,1, 100);
pointLight.position.set(10, 10, 10)
scene.add(pointLight);

// point light helper 
const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);
scene.add(pointLightHelper);


function animate() {
    requestAnimationFrame(animate);
    iso.rotation.x += 0.01;
    iso.rotation.y += 0.01;
    iso.rotateOnAxis.z += 0.001;
    subiso.rotation.x -= 0.001;
    subiso.rotation.y += 0.001;
    subiso.rotateOnAxis.z = 0.01;

    // pointLight.position.x += 0.01;
    // pointLight.position.y -= 0.01;
    // pointLight.position.z += 0.01;
    // pointLight.intensity -= 0.001;

    renderer.render(scene, camera);

}
animate();