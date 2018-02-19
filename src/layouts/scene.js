import * as THREE from 'three';

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

const gridVerticesArray = [];
const gridAngles = [];

const gridSpeed = 0.02;
const gridRange = 400;

const sceneColor = new THREE.Color('#fff');
const planeColor = 0x58929a;

const renderScene = domNode => {
    console.log(domNode);
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        30000
    );
    camera.position.z = 1000;
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(sceneColor);

    domNode.appendChild(renderer.domElement);

    scene.fog = new THREE.FogExp2(sceneColor, 0.0015);

    const geometry = new THREE.PlaneGeometry(5000, 5000, 30, 30);
    geometry.vertices.forEach((vert, i) => {
        gridVerticesArray.push(vert);
        gridAngles.push(i * 0.2);
    });
    const material = new THREE.MeshBasicMaterial({
        wireframe: true,
        color: planeColor
    });
    const grid = new THREE.Mesh(geometry, material);
    scene.add(grid);

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);

    const onWindowResize = () => {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onDocumentMouseMove = event => {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    };

    const render = () => {
        grid.geometry.verticesNeedUpdate = true;
        grid.geometry.colorsNeedUpdate = true;
        for (let i = 0; i < gridVerticesArray.length; i++) {
            grid.geometry.vertices[i].z =
                0 + Math.cos(gridAngles[i]) * gridRange;
            gridAngles[i] += gridSpeed;
        }
        grid.rotation.z += 0.0025;

        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };

    const animate = () => {
        requestAnimationFrame(animate);
        render();
    };

    animate();
};

export default renderScene;
