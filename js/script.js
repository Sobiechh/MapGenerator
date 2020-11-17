const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const randomColor = (Math.random() * 0xffffff)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: randomColor });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 10;

let then = 0;
var t = 0;
function animate(now) {
    now *= 0.001; 
    t+=0.01;
    const delta = now - then;
    then = now;


    const randomColor = (Math.random() * 0xffffff)
    cube.rotation.x += delta * 2;
    cube.rotation.y += delta * 2;

    cube.position.y = 2*Math.cos(t) + 0;
    cube.position.x = 2*Math.sin(t) + 0; 

    cube.material.color.setHex( randomColor );
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
};

requestAnimationFrame(animate);