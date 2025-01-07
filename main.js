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
