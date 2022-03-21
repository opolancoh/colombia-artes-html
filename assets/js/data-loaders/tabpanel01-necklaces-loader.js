// Data
const dataNecklaces = [
  {
    id: 'coa-0001',
    title: 'Hasta el 15% de descuento',
    price: 78000,
  },
  {
    id: 'coa-0002',
    title: 'Nueva colección<br>2022',
    price: 78000,
  },
  {
    id: 'coa-0003',
    title: 'Hasta el 15% de descuento',
    price: 78000,
  },
  {
    id: 'coa-0004',
    title: 'Nueva colección<br>2022',
    price: 78000,
  },
  {
    id: 'coa-0005',
    title: 'Hasta el 15% de descuento',
    price: 78000,
  },
  {
    id: 'coa-0006',
    title: 'Nueva colección<br>2022',
    price: 78000,
  },
];

const dataEarrings = [
  {
    id: 'coa-0001',
    title: 'Hasta el 15% de descuento',
    price: 78000,
  },
  {
    id: 'coa-0002',
    title: 'Nueva colección<br>2022',
    price: 78000,
  },
  {
    id: 'coa-0003',
    title: 'Hasta el 15% de descuento',
    price: 78000,
  },
  {
    id: 'coa-0004',
    title: 'Nueva colección<br>2022',
    price: 78000,
  },
  {
    id: 'coa-0005',
    title: 'Hasta el 15% de descuento',
    price: 78000,
  },
  {
    id: 'coa-0006',
    title: 'Nueva colección<br>2022',
    price: 78000,
  },
  {
    id: 'coa-0007',
    title: 'Nueva colección<br>2022',
    price: 78000,
  },
];

const dataBracelets = [
  {
    id: 'coa-0001',
    title: 'Hasta el 15% de descuento',
    price: 78000,
  },
  {
    id: 'coa-0002',
    title: 'Nueva colección<br>2022',
    price: 78000,
  },
  {
    id: 'coa-0003',
    title: 'Hasta el 15% de descuento',
    price: 78000,
  },
  {
    id: 'coa-0004',
    title: 'Nueva colección<br>2022',
    price: 78000,
  },
  {
    id: 'coa-0005',
    title: 'Hasta el 15% de descuento',
    price: 78000,
  },
  {
    id: 'coa-0006',
    title: 'Nueva colección<br>2022',
    price: 78000,
  },
  {
    id: 'coa-0007',
    title: 'Nueva colección<br>2022',
    price: 78000,
  },
  {
    id: 'coa-0008',
    title: 'Nueva colección<br>2022',
    price: 78000,
  },
];

const getHtmlTemplate = (data) => {
  return `<li class="product-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
            <div class="product-inner equal-element">
              <div class="product-top">
                <div class="flash">
                  <span class="onnew">
                      <span class="text">Popular</span>
                  </span>
                </div>
              </div>
              <div class="product-thumb">
                  <div class="thumb-inner">
                    <a href="#">
                        <img src="assets/images/product-item-1.jpg" alt="img" />
                    </a>
                  <div class="thumb-group">
                      <a href="#" class="button quick-wiew-button">Quick View</a>
                  </div>
                </div>
              </div>
              <div class="product-info">
                  <h5 class="product-name product_title">
                    <a href="#">${data.id.toUpperCase()}</a>
                  </h5>
                  <div class="group-info">
                    <div class="price">
                        <ins> $ ${data.price} </ins>
                    </div>
                  </div>
              </div>
            </div>
          </li>`;
};

const renderSection = (containerName, data) => {
  const container = document.getElementById(containerName);
  if (container) {
    let html = '';
    data.forEach(function (item) {
      html += getHtmlTemplate(item);
    });
    container.innerHTML = html;
  } else {
    throw new Error(`Element with id "${containerName}" not found`);
  }
};

renderSection('tabpanel01-necklaces', dataNecklaces);
renderSection('tabpanel01-earrings', dataEarrings);
renderSection('tabpanel01-bracelets', dataBracelets);
