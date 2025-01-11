import {
  ViewerApp,
  AssetManagerPlugin,
  addBasePlugins,
  ScrollableCameraViewPlugin,
  VariationConfiguratorPlugin,
  FrameFadePlugin,
  LoadingScreenPlugin,
  PickingPlugin,
  TweakpaneUiPlugin,
  MaterialConfiguratorPlugin,

  // Import THREE.js internals
  Color,
	Texture,
  Vector3
} from 'webgi';



setupViewer();

window.onscroll = function() {
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector('.back-to-top').style.display = 'block';
  } else {
      document.querySelector('.back-to-top').style.display = 'none';
  }
};

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
      canvas: document.getElementById('preview'),
  });

  await addBasePlugins(viewer);

  const manager = await viewer.addPlugin(AssetManagerPlugin);

  // Load an environment map if not set in the glb file
  // await viewer.setEnvironmentMap("./assets/autumn_forest_2k.hdr");

  await viewer.load("./assets/WithScreen.glb");

  // Camera transform
	viewer.scene.activeCamera.position = new Vector3(1, 1, -5);
	viewer.scene.activeCamera.target = new Vector3(0, 1, 0);
		
	// Camera options
	const options = viewer.scene.activeCamera.getCameraOptions();
	options.fov = 25;
	viewer.scene.activeCamera.setCameraOptions(options);
	
	// Control options
	const controls = viewer.scene.activeCamera.controls;
	controls.autoRotate = false;
	controls.autoRotateSpeed = 5;
	controls.enableDamping = true;
	controls.rotateSpeed = 2.0;
	controls.enableZoom = true;
	controls.enablePan = true;
	controls.minDistance = 3;
	controls.maxDistance = 12;

  const picking = viewer.addPluginSync(PickingPlugin);
  picking.hoverEnabled = true;
  picking.enableWidget = false;
  console.log(picking.getSelectedObject);
  // const ui = viewer.addPluginSync(new TweakpaneUiPlugin(true));
  // ui.setupPluginUi(PickingPlugin);
  picking.addEventListener('hitObject', (e) => {
      console.log('Hit object', e, e.intersects.selectedObject);
      // set to null to prevent selection
      // e.intersects.selectedObject = null
  });


  // ui.setupPluginUi(MaterialConfiguratorPlugin);

  // const sink = manager.materials.findMaterialsByName('Standardmaterial')[0]
  // const top = manager.materials.findMaterialsByName('hh')[0]
  // const drawer = manager.materials.findMaterialsByName('draw')[0]
	// console.log(drawer);


setupViewer();

// var button = document.getElementById("button");
// button.addEventListener("click", changevid);

// function changevid(buttonlink) { 
//   document.getElementById('changevid').src = buttonlink;
// }



document.querySelector("preorderbtn")?.addEventListener('click', console.log(c)
  // document.getElemqueentById('changevid').src = ('static/assets/PokemonIDDVid.mp4')
  // console.log(c)
)

}
