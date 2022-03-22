(function () {
  const containerName = 'slider02-container';

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
    {
      id: 'coa-0005',
      titleBig: 'Hasta el 15% de descuento',
      price: 78000,
    },
    {
      id: 'coa-0006',
      titleBig: 'Nueva colección<br>2022',
      price: 78000,
    },
  ];

  const container = document.getElementById(containerName);
  if (container) {
    let html = '';
    data.forEach(function (item) {
      html += `<div class="product-item style-5">
                <div class="product-inner equal-element">
                  <div class="product-top">
                    <div class="flash">
                      <span class="onnew">
                        <span class="text"> Oferta </span>
                      </span>
                    </div>
                  </div>
                  <div class="product-thumb">
                    <div class="thumb-inner">
                      <a href="#">
                        <img src="assets/images/product-item-17.jpg" alt="img" />
                      </a>
                      <div class="thumb-group">
                        <a href="#" class="button quick-wiew-button">Ver</a>
                      </div>
                    </div>
                  </div>
                  <div class="product-info">
                    <h5 class="product-name product_title">
                      <a href="#">${item.id.toUpperCase()}</a>
                    </h5>
                    <div class="group-info">
                      <div class="price">
                        <ins> $45 </ins>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
    });
    container.innerHTML = html;
  } else {
    throw new Error(`Element with id "${containerName}" not found`);
  }
})();
