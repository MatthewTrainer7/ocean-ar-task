function goBack() {
  window.location.href = '/index.html';
}

var sneakerEl = document.querySelector('#sneakerModel');

// const urlParams = new URLSearchParams(window.location.search);
// const selectedColor = urlParams.get('color');
// const modelEntity = document.getElementById('shoe-model');

// // Load the corresponding GLB model based on the selection
// if (selectedColor === 'Blue_Orange') {
//   modelEntity.setAttribute('gltf-model', 'url(/assets/3d/Sneaker_Blue_Orange.glb)');
// } else if (selectedColor === 'Red_Blue') {
//   modelEntity.setAttribute('gltf-model', 'url(/assets/3d/Sneaker_Red_Blue.glb)');
// } else if (selectedColor === 'Yellow_Green') {
//   modelEntity.setAttribute('gltf-model', 'url(/assets/3d/Sneaker_Yellow_Green.glb)');
// }