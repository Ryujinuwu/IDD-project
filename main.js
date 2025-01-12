


import {
  ViewerApp,
  AssetManagerPlugin,
  addBasePlugins,
  ScrollableCameraViewPlugin,
  VariationConfiguratorPlugin,
  FrameFadePlugin,

  PickingPlugin,
  TweakpaneUiPlugin,
  MaterialConfiguratorPlugin,

  // Import THREE.js internals
  Color,
	Texture,
  Vector3
} from 'webgi';




import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const loader = new THREE.TextureLoader();


// window.onscroll = function() {
//   if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//       document.querySelector('.back-to-top').style.display = 'block';
//   } else {
//       document.querySelector('.back-to-top').style.display = 'none';
//   }
// };



let scrollSpeed = 1.0;

// Add an event listener for the 'wheel' event
document.addEventListener('wheel', function(event) {
  // Prevent default scrolling behavior
  event.preventDefault();

  // Calculate the new scroll position
  let delta = event.deltaY;
  let scrollPosition = window.scrollY + (delta * scrollSpeed);

  // Set the new scroll position
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
},
{ passive: false });


async function setupViewer() {
  const viewer = new ViewerApp({
      canvas: document.getElementById('web-canvas'),
  });

  await addBasePlugins(viewer);

  const manager = await viewer.addPlugin(AssetManagerPlugin);

  //const manager = await viewer.addPlugin(AssetManagerPlugin);
  // const manager = await viewer.getPlugin(AssetManagerPlugin);
  // This must be called after adding any plugin that changes the render pipeline.
	viewer.renderer.refreshPipeline();

  // Load an environment map if not set in the glb file
  await viewer.setEnvironmentMap("./assets/autumn forest.hdr");

  // await manager.addFromPath("./assets/casio watch.glb");
  const model = await viewer.load("./assets/BaseIDDLaptop.glb");

  // let scrollSection = document.getElementById("scrollSection");
  // await viewer.getPlugin(new ScrollableCameraViewPlugin(scrollSection));


const laptop = manager.materials.findMaterialsByName('lambert1')[0]
const screen = manager.materials.findMaterialsByName('Screen')[0]
const design = new THREE.MeshBasicMaterial({map: new Texture(manager.materials.findMaterialsByName('lambert2')[0]).Texture})
document.querySelector('.red0')?.addEventListener('click', () => {
  changeColor(new Color(0xd35d6e), "assets/PokemonIDDVid.mp4", 'assets/CPokemon.png')
  console.log("red pressed");
})

document.querySelector('.green0')?.addEventListener('click', () => {
  changeColor(new Color(0x4caf50), "assets/MarioVid.mp4")
})

document.querySelector('.blue0')?.addEventListener('click', () => {
  changeColor(new Color(0x4f5fd8), "assets/PacMadIDDVid.mp4")
})


document.querySelector('.black0')?.addEventListener('click', () => {
  changeColor(new Color(0x000000), null)
})

function changeColor(colorToBeChanged, newvid, pic) {
  laptop.color = colorToBeChanged;
  screen.color = new Color(0x000000);
  console.log(design.map)
  //loader.load(design.map).dispose()
  //var texture2 = loader.load('assets/CPokemon.png')
  //design.map = texture2;
  //const geometry = new THREE.
  //mesh = new THREE.Mesh( geometry, design )

  //manager.getObjectByName('polySurface2_lambert2_0').material.map = new Texture(pic)

  document.getElementById("changevid").src = newvid;
  viewer.scene.setDirty();
}
// new
document.querySelector('.red0')?.addEventListener('click', () => {
  changeDesignTexture('/assets/CPokemon.png');
});

document.querySelector('.green0')?.addEventListener('click', () => {
  changeDesignTexture('/assets/CMario.png');
});

document.querySelector('.blue0')?.addEventListener('click', () => {
  changeDesignTexture('/assets/CPacMan.png');
});

document.querySelector('.black0')?.addEventListener('click', () => {
  changeDesignTexture('/assets/CNorm.png');
});

function changeDesignTexture(texturePath) {
  const backMaterial = manager.materials.findMaterialsByName('lambert2')[0]; 
  if (!backMaterial) {
    console.error('Material "lambert2" not found.');
    return;
  }

  if (texturePath) {
    const loader = new THREE.TextureLoader();
    loader.load(texturePath, (texture) => {
      backMaterial.map = texture; 
      backMaterial.needsUpdate = true;
      viewer.scene.setDirty(); 
    });
  } else {
    backMaterial.map = null;
    backMaterial.needsUpdate = true; 
    viewer.scene.setDirty(); 
  }
}


}

async function setupViewerhome() {
  const viewer = new ViewerApp({
      canvas: document.getElementById('web-canvashome'),
  });

  await addBasePlugins(viewer);

  const manager = await viewer.addPlugin(AssetManagerPlugin);
  await viewer.addPlugin(ScrollableCameraViewPlugin);
  //const manager = await viewer.addPlugin(AssetManagerPlugin);
  // const manager = await viewer.getPlugin(AssetManagerPlugin);
  // This must be called after adding any plugin that changes the render pipeline.
	viewer.renderer.refreshPipeline();

  // Load an environment map if not set in the glb file
  await viewer.setEnvironmentMap("./assets/autumn forest.hdr");

  // await manager.addFromPath("./assets/casio watch.glb");
  const model = await viewer.load("./assets/LaptopHeroAnim.glb");

  // let scrollSection = document.getElementById("scrollSection");
  // await viewer.getPlugin(new ScrollableCameraViewPlugin(scrollSection));
}

async function setupViewerlast() {
  const viewer = new ViewerApp({
      canvas: document.getElementById('web-canvaslast'),
  });

  await addBasePlugins(viewer);

  const manager = await viewer.addPlugin(AssetManagerPlugin);

  //const manager = await viewer.addPlugin(AssetManagerPlugin);
  // const manager = await viewer.getPlugin(AssetManagerPlugin);
  // This must be called after adding any plugin that changes the render pipeline.
	viewer.renderer.refreshPipeline();

  // Load an environment map if not set in the glb file
  await viewer.setEnvironmentMap("./assets/autumn forest.hdr");

  // await manager.addFromPath("./assets/casio watch.glb");
  const model = await viewer.load("./assets/JumpAnim.glb");

  // let scrollSection = document.getElementById("scrollSection");
  // await viewer.getPlugin(new ScrollableCameraViewPlugin(scrollSection));
}
// 
// const renderer = new THREE.WebGLRenderer({ antiallias: true});
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setSize(window.innerWidth, window,innerHeight);
// renderer.setClearColor(0x000000);
// renderer.setPixelRatio(window.devicePixelRatio);

// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window,innerHeight, 1, 1000);
// camera.position.set(4, 5, 11);
// camera.lookAt(0, 0, 0);

// // geometry for laptop to be on
// const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
// groundGeometry.rotateX(-Math.PI / 2); // rotate by 90
// const groundMaterial = new THREE.MeshStandardMaterial({
//   color : 0x555555,
//   side: THREE.DoubleSide
// });

// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// scene.add("groundMesh"); //issue here

// //add light to scene
// const Light = new THREE.Light(0xffffff, 3, 100, 0.2, 0.5);
// Light.position.set(0, 25, 0);
// scene.add(Light);

// 
// const loader = new GLTFLoader().setPath('./assets/BaseIDDLaptop.glb')

// function animate() 
// {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }

// animate();
setupViewer();
setupViewerhome();
setupViewerlast();
