const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const takePhotoButton = document.getElementById('take-photo');

navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(function(stream) {
    video.srcObject = stream;
    video.play();
  })
  .catch(function(error) {
    console.log('Error: ', error);
  });

takePhotoButton.addEventListener('click', function() {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageData = canvas.toDataURL('image/png');
  chrome.storage.local.set({'imageData': imageData}, function() {
    chrome.tabs.update({ url: 'new-page.html' });
  });
});
