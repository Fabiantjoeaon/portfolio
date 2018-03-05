import * as THREE from 'three';
import interpolate from 'color-interpolate';

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let mouseX;
let mouseY;

const colorMap = interpolate(['#f5f5f5', '#fff']);
const gridVerticesArray = [];
const gridAngles = [];

const gridSpeed = 0.01;
const gridRange = 400;

// const sceneColor = new THREE.Color('#a5abff');

const planeColor = new THREE.Color('#fff');

window.colorCount = 0.0;

const renderScene = domNode => {
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        30000
    );
    camera.position.z = 1000;
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    renderer.setClearColor(new THREE.Color(window.sceneColor), 0.0);

    domNode.appendChild(renderer.domElement);

    scene.fog = new THREE.FogExp2(window.sceneColor, 0.0008);

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

    window.addEventListener('resize', () => {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    document.addEventListener('mousemove', event => {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    });

    const render = () => {
        // const c = colorMap(window.colorCount);
        // scene.fog.color.setHex(new THREE.Color(c));

        // window.colorCount =
        //     window.colorCount >= 1.0 ? 0.0 : (window.colorCount += 0.01);

        grid.geometry.verticesNeedUpdate = true;
        grid.geometry.colorsNeedUpdate = true;
        for (let i = 0; i < gridVerticesArray.length; i++) {
            grid.geometry.vertices[i].z =
                0 + Math.cos(gridAngles[i]) * gridRange;
            gridAngles[i] += gridSpeed;
        }
        grid.rotation.z += 0.0025;

        camera.lookAt(scene.position);

        scene.fog = new THREE.FogExp2(window.sceneColor, 0.0008);
        renderer.setClearColor(new THREE.Color(window.sceneColor), 0.0);

        renderer.render(scene, camera);
    };

    const animate = () => {
        requestAnimationFrame(animate);
        render();
    };

    animate();
};

export default renderScene;
