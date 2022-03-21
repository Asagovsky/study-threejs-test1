import * as THREE from "three";
import { useEffect } from "react";
import { useJumpAnimation } from "./useJumpAnimation";

export const useRenderJumpingBoxes = (ref) => {
  const setJumpAnimation = useJumpAnimation();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 10, 18);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor("#e5e5e5");
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  geometry.translate(0, -1 / 2, 0);
  const material = new THREE.MeshStandardMaterial({ color: 0xffcc00 });

  const box1 = new THREE.Mesh(geometry, material);
  box1.position.set(0, 20, 1);
  box1.rotation.set(0, 0.5, 0);
  box1.castShadow = true;
  box1.receiveShadow = false;
  scene.add(box1);

  const box2 = new THREE.Mesh(geometry, material);
  box2.position.set(5, 20, 1);
  box2.rotation.set(0, 0.5, 0);
  box2.castShadow = true;
  box2.receiveShadow = false;
  scene.add(box2);

  const box3 = new THREE.Mesh(geometry, material);
  box3.position.set(-3, 20, 4);
  box3.rotation.set(0, 0.5, 0);
  box3.castShadow = true;
  box3.receiveShadow = false;
  scene.add(box3);

  const upperLight = new THREE.PointLight(0xffffff, 1, 2000);
  upperLight.castShadow = true;
  upperLight.shadow.camera.far = 5;
  upperLight.shadow.mapSize.width = 1024;
  upperLight.shadow.mapSize.height = 1024;
  upperLight.shadow.radius = 1024;
  upperLight.position.set(20, 200, 40);
  scene.add(upperLight);

  const frontLight = new THREE.PointLight(0xffffff, 1, 2000);
  frontLight.position.set(0, 0, 40);
  scene.add(frontLight);

  const planeGeometry = new THREE.PlaneBufferGeometry(20, 10);
  const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xe5e5e5 });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;
  plane.position.set(0, 0, 0);
  plane.rotation.set(-1.5, 0, 0);
  scene.add(plane);

  const render = () => {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  };

  useEffect(() => {
    const mount = ref.current;

    mount.appendChild(renderer.domElement);

    const sizeListener = window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    setJumpAnimation(box1);
    setJumpAnimation(box2);
    setJumpAnimation(box3);

    render();

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", sizeListener);
    };
  });
};
