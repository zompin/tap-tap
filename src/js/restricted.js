const params = new URLSearchParams(location.search);
const p = document.querySelector('p');

p.innerText = params.get('url');
