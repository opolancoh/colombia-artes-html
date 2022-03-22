(function () {
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

  const containerName = 'slider03-container';
  const container = document.getElementById(containerName);
  if (container) {
    let html = '';
    data.forEach(function (item) {
      html += `<div class="ysera-blog-item equal-element layout1">
                <div class="post-thumb">
                  <a href="#">
                    <img src="assets/images/slider-blog-thumb-1.jpg" alt="img" />
                  </a>
                  <div class="category-blog">
                    <ul class="list-category">
                      <li class="category-item">
                        <a href="#">Skincare</a>
                      </li>
                    </ul>
                  </div>
                  <div class="post-item-share">
                    <a href="#" class="icon">
                      <i class="fa fa-share-alt" aria-hidden="true"></i>
                    </a>
                    <div class="box-content">
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-google-plus"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="blog-info">
                  <div class="blog-meta">
                    <div class="post-date">Agust 17, 09:14 am</div>
                    <span class="view">
                      <i class="icon fa fa-eye" aria-hidden="true"></i>
                      631
                    </span>
                    <span class="comment">
                      <i class="icon fa fa-commenting" aria-hidden="true"></i>
                      84
                    </span>
                  </div>
                  <h2 class="blog-title">
                    <a href="#">We bring you the best ${item.id}</a>
                  </h2>
                  <div class="main-info-post">
                    <p class="des">Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue. Mauris nec ante magna.</p>
                    <a class="readmore" href="#">Read more</a>
                  </div>
                </div>
              </div>`;
    });
    container.innerHTML = html;
  } else {
    throw new Error(`Element with id "${containerName}" not found`);
  }
})();
