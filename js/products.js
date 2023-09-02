
const Cars_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const icontainer = document.getElementById('icontainerCars')

let sortOrder = 'ascentente'; // Variable para el orden de clasificación ascendente

const productContainer = document.getElementById('productContainer');

function showData(dataArray){
  productContainer.innerHTML = '';

  for (const item of dataArray) {

    icontainer.innerHTML += `<div onclick="setCatID(${item.id})" class="list-group-item list-group-item-action cursor-active">
    <div class="row">
                    <div class="col-3">
                        <img src="${item.image}" alt="${item.name}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${item.name} - ${item.currency} ${item.cost}</h4>
                            <small class="text-muted">${item.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${item.description}</p>
                    </div>
                </div>`
  }
};

document.addEventListener('DOMContentLoaded', function () {
  fetch(Categorias_URL)
    .then((response) => response.json())
    .then((data) => {
      showData(data.products);
    })
    .catch(error => console.error("Error loading data:", error));
});


fetch(Cars_URL)
  .then((response) => response.json())
  .then((data) => {
    carsData = data.products;
    showData(carsData);
  })
  .catch(error => console.error("Error al cargar los datos:", error));



function ordenar(cost) { //ordena la lista de precio
  sortOrder = cost; //ascendente
  data.products.sort(function(a, b) {
    if (sortOrder === 'ascendente') {
      return a.cost - b.cost;
    } else {
      return b.cost - a.cost;
    }
  });
  showData(data.products); // Muestra los datos ordenados
}

function ordenarPorRelevancia() { // Ordena descendente la relevancia
  data.products.sort(function(a, b) {
    return b.soldCount - a.soldCount;
  });
  showData(data.products); // Muestra los datos ordenados
}
