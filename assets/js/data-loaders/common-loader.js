const loadhtml = (containerId, html) => {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = html;
  } else {
    throw new Error(`Element with id "${containerId}" not found`);
  }
};

// Footer Middle Column
const footerMiddleColumnHtml = `
  <div class="ysera-newsletter style1">
  <div class="newsletter-head">
    <h3 class="title">Colombia Artes</h3>
  </div>
  <div class="newsletter-form-wrap">
    <div class="list">
      <address>
        <a href="tel:1234567">310-611-2521</a><br />
        <a href="mailto:colombia.artes.tienda@gmail.com">colombia.artes.tienda@gmail.com</a><br />
        Dirección: Cra 18 # 5-23<br />
        San Agustín (Huila)<br />
        Colombia
      </address>
    </div>
  </div>
  </div>
`;
loadhtml('footer-middle-web', footerMiddleColumnHtml);
loadhtml('footer-middle-mobile', footerMiddleColumnHtml);
