// "use client"
// // components/Photo3D.js  
// import { useEffect, useRef } from 'react';  
// import * as THREE from 'three';  

// const Photo3D = () => {  
//     const mountRef = useRef(null);  
//     let renderer: THREE.WebGLRenderer | null = null; 

//     useEffect(() => {  
//         // Set up scene, camera, and renderer 
//         if(mountRef.current) {
//             const scene = new THREE.Scene();  
//             const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  
//             const renderer = new THREE.WebGLRenderer();  
    
//             renderer.setSize(window.innerWidth, window.innerHeight);  
//             mountRef.current.appendChild(renderer.domElement);  
    
//             // Create a plane geometry for the photo  
//             const geometry = new THREE.PlaneGeometry(5, 5);  
//             const texture = new THREE.TextureLoader().load('/home_234.png'); // Replace with your image path  
//             const material = new THREE.MeshBasicMaterial({ map: texture });  
//             const photoMesh = new THREE.Mesh(geometry, material);  
//             scene.add(photoMesh);  
    
//             // Position the camera  
//             camera.position.z = 5;  
    
//             const animate = () => {  
//                 requestAnimationFrame(animate);  
//                 photoMesh.rotation.y += 0.01; // Adding some rotation for effect  
//                 renderer.render(scene, camera);  
//             };  
//             animate();  
//         }

        

//         // Clean up on unmount  
//         return () => {  
//             mountRef.current.removeChild(renderer.domElement);  
//             geometry.dispose();  
//             material.dispose();  
//             texture.dispose();  
//         };  
//     }, []);  

//     return <div ref={mountRef} />;  
// };  

// export default Photo3D; 