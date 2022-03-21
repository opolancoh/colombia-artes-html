(function () {
  const containerName = 'slider01-container';

  const data = [
    {
      id: 'coa-0001',
      titleBig: 'Hasta el 15% de descuento',
      price: 78000,
    },
    {
      id: 'coa-0002',
      titleBig: 'Nueva colección<br>2022',
      price: 78000,
    },
    {
      id: 'coa-0003',
      titleBig: 'Hasta el 15% de descuento',
      price: 78000,
    },
    {
      id: 'coa-0004',
      titleBig: 'Nueva colección<br>2022',
      price: 78000,
    },
  ];

  const container = document.getElementById(containerName);
  if (container) {
    let html = '';
    data.forEach(function (item) {
      html += `<div class="slider-item style-card">
                    <div class="slider-inner equal-element"
                         style="background-image: url(images/${item.id}-slider01.jpg)">
                        <div class="slider-infor">
                            <h5 class="title-small">${item.id.toUpperCase()}</h5>
                            <h3 class="title-big">${item.titleBig}</h3>
                            <div class="price">
                                Nuevo Precio:
                                <span class="number-price">$${item.price}</span>
                            </div>
                            <a href="#" class="button btn-shop-the-look bgroud-style">Comprar</a>
                        </div>
                    </div>
                </div>`;
    });
    container.innerHTML = html;
  } else {
    throw new Error(`Element with id "${containerName}" not found`);
  }
})();
