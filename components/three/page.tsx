"use client"
 
import { RootState } from '@/store';
import React, { useEffect, useRef } from 'react';  
import { useSelector } from 'react-redux';
import * as THREE from 'three';  

const ThreeDScene = () => {  
    const mountRef = useRef<HTMLDivElement | null>(null);  
    let renderer: THREE.WebGLRenderer | null = null; 
    const value = useSelector((state: RootState) => state.status.value)
    useEffect(() => {  
        if(mountRef.current ){
            const scene = new THREE.Scene();  
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  
            renderer = new THREE.WebGLRenderer({ alpha: true });  
            renderer.setSize(window.innerWidth, window.innerHeight);  
            mountRef.current.appendChild(renderer.domElement);  
    
            // Star Field Parameters  
            const starCount = 5000;  
            const starGeometry = new THREE.BufferGeometry();  
            const starPositions = new Float32Array(starCount * 3);  
    
            for (let i = 0; i < starCount * 3; i++) {  
                starPositions[i] = (Math.random() - 0.5) * 2000; // Random position within -1000 to 1000  
            }  
            
            starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));  
    
            const starMaterial = new THREE.PointsMaterial({  
                color: 0xFFFFFF,  
                size: 0.5,  
                sizeAttenuation: true,  
                transparent: true,  
                opacity: 0.8,  
            });  
    
            const starField = new THREE.Points(starGeometry, starMaterial);  
            scene.add(starField);  
    
            camera.position.z = 5;  
    
            const animateStars = () => {  
                if (renderer) {  // Check if renderer is not null
                    starField.rotation.y += 0.001; // Rotate slowly for movement effect  
                    renderer.render(scene, camera);  
                } 
                requestAnimationFrame(animateStars);  
            };  
    
            animateStars();  
    
        }
 
        // Clean up on component unmount  
        return () => {  
            if(mountRef.current && renderer)
            mountRef.current.removeChild(renderer.domElement);  
        };  
    }, []);  

    return <div ref={mountRef}  style={{ zIndex:value?"-1":"0",width: '100vw', height: '100vh', position:"fixed"}} />;  
};  

export default ThreeDScene; 