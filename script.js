window.addEventListener('load', function() {
  if (window.location.hash) {
    window.history.replaceState(null, null, ' ');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const selectElement = document.getElementById('topic-select');
  const contentElements = document.querySelectorAll('.content');

  selectElement.addEventListener('change', function() {
    const selectedValue = this.value;

    contentElements.forEach(function(content) {
      if (content.id === selectedValue) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });

  // Initially hide all content
  contentElements.forEach(function(content) {
    content.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
});

