var btn = document.querySelector('button')
var vdo = document.querySelector("#vdoElement");
var img

if (navigator.mediaDevices.getUserMedia) {       
    navigator.mediaDevices.getUserMedia({vdo: true})
  .then(function(stream) {
    vdo.srcObject = stream;
  })
  .catch(function(error) {
    console.log("Something went wrong!");
  });
}

function capturevdo(vdo) {
  var canvas = document.createElement("canvas");
  canvas.width = vdo.vdoWidth;
  canvas.height = vdo.vdoHeight;
  var canvasContext = canvas.getContext("2d");
  canvasContext.drawImage(vdo, 0, 0);
  return canvas.toDataURL('image/png');
}

function showImg() {
  var src = capturevdo(vdo)
  vdo.setAttribute('hidden')
  if (!!img === false) {
    img = document.createElement('img')
  }
  else {
    img.removeAttribute('hidden')
  }
  img.src = src
	document.body.prepend(img)
  
  button.textContent = 'Video'
  button.setAttribute('onclick', 'showVdo()')
}

function showVdo() {
  var src = captureVideo(vdo)
  vdo.setAttribute('hidden')
  if (!!img === false) {
    img = document.createElement('img')
  }
  else {
    img.removeAttribute('hidden')
  }
  img.src = src
	document.body.prepend(img)

  button.textContent = 'Capture'
  button.setAttribute('onclick', 'showImg()')
}