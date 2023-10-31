var btn = document.querySelector('button')
var vdo = document.querySelector('video');
var img

if (navigator.mediaDevices.getUserMedia) {       
  navigator.mediaDevices.getUserMedia({video: true})
  .then(function(stream) {
    vdo.srcObject = stream;
  })
  .catch(function(error) {
    console.log('Something went wrong!');
  });
}

function captureVideo(video) {
  var canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  var canvasContext = canvas.getContext('2d');
  canvasContext.drawImage(video, 0, 0);
  return canvas.toDataURL('image/png');
}

function showImg() {
  var src = captureVideo(vdo)
  vdo.setAttribute('hidden', '')
  if (!!img === false) {
    img = document.createElement('img')
  }
  else {
    img.removeAttribute('hidden')
  }
  img.src = src
	document.body.prepend(img)
  
  btn.textContent = 'Video'
  btn.setAttribute('onclick', 'showVdo()')
}

function showVdo() {
  var src = captureVideo(vdo)
  vdo.setAttribute('hidden')
  if (!!img === false) {
    img = document.createElement('img')
  }
  else {
    img.removeAttribute('hidden', '')
  }
  img.src = src
	document.body.prepend(img)

  btn.textContent = 'Capture'
  btn.setAttribute('onclick', 'showImg()')
}