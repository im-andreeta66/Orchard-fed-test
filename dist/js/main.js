// Adds the data taken from the ids to the function and puts them in the modal elements
function updateModal(imageSrc, text) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalImage').alt = text;
    document.getElementById('modalText').textContent = text;
  }
  