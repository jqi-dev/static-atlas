var scene, camera, renderer, stats, bufferTexture, bufferScene;
var plane, displacement, uniforms, geometry, circle, circle2, bufferPlane;
var fov = 30,
    isUserInteracting = false,
    cameraDistance = 80,
    onMouseDownMouseX = 0, onMouseDownMouseY = 0,
    lon = 0, onMouseDownLon = 0,
    lat = 0, onMouseDownLat = 0,
    phi = 0, theta = 0;
var circle_lifetime = 10000;
var waveArray = [];
var numWaves = 0;
var animTime = new Date;
var fpsCounter = 0;

$(function() {
    init();
    let width = $('#container').outerWidth()
    let top =  $('canvas').offset().top
    document.body.style.height = width/3 + top + 5;
});

function getFPS() {
  let newTime = new Date; // get current time
  let fps = 1000 / (newTime - animTime); // conversion from millisecond to fps
  animTime = newTime;
  return fps;
}

function goodFPS(fps) {
  fpsCounter += 1;
  if (fpsCounter > 1) { // allow animation to cycle once (for loading) before determining fps
    return (fps > 10); // 10 fps
  }
  else return true;
}

function addWave(array) {
  waveArray.set(array, numWaves % 16 * 4); // mod 16 so if array is full latest wave overwrites oldest
  numWaves += 1;
}

function removeWave(index) {
  waveArray[index-2] = 0.0;
  waveArray[index-1] = 0.0;
  waveArray[index+1] = 0.0;
  numWaves -= 1;
}

function decTime() {
  for (i = 0; i < numWaves; i=i+1) {
      let n = (i * 4) + 2;
      if (waveArray[n] != 0) {
        waveArray[n] -= 0.4;
      }
      else {
        removeWave(n)
      }
    }
}

function init() {

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x0d8cc6 );

  crossScene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({antialias:true});
  let width = $('#container').outerWidth();
  renderer.setSize( width, width/3 );
  $('#container').append( renderer.domElement );

  crossrenderer = new THREE.WebGLRenderer({antialias:true});
  crossrenderer.setSize( width, width/8 );
  $('#cross-section').append( crossrenderer.domElement );

  camera = new THREE.OrthographicCamera( width / - 2,
  width / 2,
  width / 6,
  width / - 6, -10000, 10000 );

  bufferScene = new THREE.Scene();

  var renderTargetParams = {
    minFilter:THREE.LinearFilter,
    stencilBuffer:false,
    depthBuffer:false
  };

  bufferTexture = new THREE.WebGLRenderTarget( width, width/3, renderTargetParams );

  camera.zoom = width / 300; // 156 originally
  camera.updateProjectionMatrix();

  waveArray = new Float32Array(64); // max 16 waves, each with (x position, y position, time, amplitude)
  numWaves = 0; // number of active waves

  uniforms = THREE.UniformsUtils.merge([
          { activeWaves: {type: "i", value: 1} },
          { waves: {type: "fv", value: waveArray} },
          THREE.UniformsLib['lights'],
          { ambient: { type: 'c', value: new THREE.Color(0xff00ff) } },
          { color: { value: new THREE.Color( 0x00ACFC ) } }
      ]);

  var planeShader = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById( 'vertexshader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
    lights: true
  });

  planeShader.depthTest = false;

  planeShader.transparent = true;
  geometry = new THREE.PlaneBufferGeometry(300, 100, 300, 100); // 156, 52

  bufferPlane = new THREE.Mesh(
      geometry,
      planeShader
  );
  bufferScene.add( bufferPlane );

  var waveMaterial = new THREE.MeshBasicMaterial({map:bufferTexture});
  var waveGeometry = new THREE.PlaneGeometry( 300, 100, 4 );
  var waveObject = new THREE.Mesh(waveGeometry, waveMaterial);
  // Add it to the main scene
  scene.add(waveObject);

  var crossuniforms = {
    texture1: { type: "t", value: bufferTexture }
  };

  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );

  var crossShader = new THREE.ShaderMaterial({
      uniforms: crossuniforms,
      vertexShader: document.getElementById('vertexshader').innerHTML,
      fragmentShader:document.getElementById('fragmentshader-cross-texture').innerHTML
  });

  var crossPlane = new THREE.Mesh(
      geometry,
      crossShader
  );
  crossScene.add( crossPlane );

  $(window).on( 'resize', onWindowResize );
  $(renderer.domElement).click(function (e) { //Offset mouse Position
        var posX = $(this).offset().left + $(this).width()/2,
            posY = $(this).offset().top + $(this).height()/2;
        onWindowClick((e.pageX - posX), (e.pageY - posY))
    });
  animate();
}

frame = 0;

function animate() {
    // animateWave();
    render();
    decTime();
    // if (goodFPS(getFPS())) { requestAnimationFrame( animate ); }
    // else $('#container').remove();
    requestAnimationFrame( animate );
}

function render() {
  renderer.render(bufferScene, camera, bufferTexture);
  renderer.render(scene, camera);
  crossrenderer.render(bufferScene, camera, bufferTexture);
  crossrenderer.render(crossScene, camera)
}

function onWindowClick (x, y) {
  $('#message').css('opacity', '0.0');
  let sf = $('#container').outerWidth()/300 // scale factor for mouse location
  addWave([x/sf, -y/sf, 300, 1]);
}

function onWindowResize() {
  let width = $('#container').outerWidth()
  let top =  $('canvas').offset().top
  camera.updateProjectionMatrix();
  renderer.setSize( width, width/3 );
  document.body.style.height = width/3 + top + 5;
}
