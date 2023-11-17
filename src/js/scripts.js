import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / innerHeight,
    0.1,
    1000
);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

camera.position.z = 5;

renderer.render(scene, camera);
