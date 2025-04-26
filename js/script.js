  const buttons = document.querySelectorAll('.btn');
  const items = document.querySelectorAll('.img-container');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      items.forEach(item => {
        if (filter === 'All') {
          item.classList.remove('hidden');
        } else {
          if (item.classList.contains(filter)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        }
      });
    });
  });



  const progressBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const percentage = progressBar.getAttribute("data-progress");
        const innerBar = progressBar.querySelector(".progress-bar");
        innerBar.style.width = percentage + "%";
        observer.unobserve(progressBar); 
      }
    });
  }, {
    threshold: 0.5
  });

  progressBars.forEach(bar => {
    observer.observe(bar);
  });




  const fallElements = document.querySelectorAll('.fall');

  const Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        Observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1
  });

  fallElements.forEach(el => Observer.observe(el));


  AOS.init();



  // Function to open the image in a modal
function openImage() {
  const image = document.querySelector('.img');
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  
  // Set the image source to the clicked image's source
  modalImage.src = image.src;
  
  // Show the modal
  modal.style.display = "flex";
}

// Function to close the image modal
function closeImage() {
  const modal = document.getElementById('image-modal');
  
  // Hide the modal
  modal.style.display = "none";
}
