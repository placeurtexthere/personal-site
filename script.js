// Load header
fetch('partials/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);

// Load footer
fetch('partials/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.dropdown-content a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const file = this.getAttribute('data-file');
      fetch(file)
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.text();
        })
        .then(html => {
          document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => {
          document.getElementById('main-content').innerHTML = '<p>Could not load content.</p>';
        });
    });
  });
});
