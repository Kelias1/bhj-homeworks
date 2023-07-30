const items = document.getElementById('items');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    items.textContent = '';
    let object = JSON.parse(xhr.response).response.Valute;

    for (let key in object) {
      items.innerHTML += `<div class="item">
      <div class = "item__code">
        ${object[key].CharCode}
      </div>
      <div class = "item__value">
        ${object[key].Value}
      </div>
      <div class = "item__currency">
        руб.
      </div>
    </div>`;
    }
    loader.classList.remove('loader_active');
  }
};
