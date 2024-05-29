const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');
const closeBtn = document.querySelector('#close-modal');
const gallery = document.querySelector('.gallery');

// Add click event listener to each image in gallery
gallery.querySelectorAll('a').forEach(function (imgLink) {
  imgLink.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = 'block';
    modalImg.src = this.href;
  });
});

// Add click event listener to close button
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Add click event listener to modal to close when clicked outside of image
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
