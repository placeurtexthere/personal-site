// Load header
fetch('partials/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);

// Load footer
fetch('partials/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);

// Up untill this point everything is working, but after this
// I'm not sure it will, but I'm doing my best :)



function loadPage(fileName) {
  alert("ez most nem tudom hogy mi a fasz akar lenni, de a kibaszott AI kurvára kenyérré bassza a seggemet, úgyhogy most már csak az a kérdés hogy ez a kibaszott kód hogy a faszomba fog működni, mert eddig még semmi sem működött, de most már kurvára elég volt a kibaszott AI-ból, úgyhogy most már csak az a kérdés hogy ez a kibaszott kód hogy a faszomba fog működni, mert eddig még semmi sem működött, de most már kurvára elég volt a kibaszott AI-ból, úgyhogy most már csak az a kérdés hogy ez a kibaszott kód hogy a faszomba fog működni, mert eddig még semmi sem működött, de most már kurvára elég volt a kibaszott AI-ból, úgyhogy most már csak az a kérdés hogy ez a kibaszott kód hogy a faszomba fog működni, mert eddig még semmi sem működött, de most már kurvára elég volt a kibaszott AI-ból, úgyhogy most már csak az a kérdés hogy ez a kibaszott kód hogy a faszomba fog működni, mert eddig még semmi sem működött, de most már kurvára elég volt a kibaszott AI-ból, úgyhogy most már csak az a kérdés hogy ez a kibaszott kód hogy a faszomba fog működni, mert eddig még semmi sem működött, de most már kurvára elég volt a kibaszott AI-ból, úgyhogy most már csak az a kérdés hogy ez a kibaszott kód hogy a faszomba fog működni, mert eddig még semmi sem működött, de most már kurvára elég volt a kibaszott AI-ból, úgyhogy most már csak az a kérdés hogy ez a kibaszott kód hogy a faszomba fog működni, mert eddig még semmi sem működött, de most már kurvára elég volt a kibaszott AI-ból, úgyhogy most már csak az a kérdés hogy ez a kibaszott kód hogy a faszomba fog működni, mert eddig még semmi sem működött, de most már kurvára elég volt a kibaszott AI-ból,");
  fetch(fileName).then(html => document.getElementById('main-content').innerHTML = html)
  .catch(error => console.error('Error loading page:', error));
}

/*
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.dropdown-content a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const file = this.getAttribute('data-file');
      fetch(file)
        .then(response => {
          if(response.ok == true) {
            console.log('Minden fasza fater!');
          }
        })
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
*/
