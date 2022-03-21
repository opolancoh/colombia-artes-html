(function () {
  const containerName = 'banner01-container';

  const data = [
    {
      id: 'arb-0001',
      title: 'Happy Ever <br />After',
      subtitle: 'Adipiscing elit curabitur senectus sem',
    },
    {
      id: 'arb-0002',
      title: 'Nueva Ever<br>2022',
      subtitle: 'Adipiscing elit curabitur senectus sem',
    },
  ];

  const container = document.getElementById(containerName);
  if (container) {
    let html = '';
    data.forEach(function (item) {
      html += `<div class="banner">
                <div class="item-banner style-card">
                  <div class="inner"
                       style="background-image: url(images/${item.id}-banner01.jpg)">
                    <div class="banner-content">
                      <h3 class="title">${item.title}</h3>
                      <div class="description">${item.subtitle}</div>
                      <a href="#" class="button btn-lets-do-it">Comprar</a>
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
