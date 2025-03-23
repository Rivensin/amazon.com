import{l as s,o as c,g as n,d as e}from"./orders-CBA0M2t7.js";/* empty css                      */import{c as i}from"./checkoutHeader-HEDuh_7p.js";import{u as o}from"./amazon-BrRjVG9z.js";new Promise(async()=>{try{await s()}catch{console.log("unexpected error. please try again later.")}l()});function l(){let t="";c.forEach(a=>{a.products.forEach(d=>{let r=n(d.productId);t+=`
      <div class="order-container">
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>${e(a.orderTime).format("MMMM D")}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>$${a.totalCostCents/100}</div>
            </div>
          </div>

          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${a.id}</div>
          </div>
        </div>

        <div class="order-details-grid">
          <div class="product-image-container">
            <img src="${r.image}">
          </div>

          <div class="product-details">
            <div class="product-name">
            ${r.name}
            </div>
            <div class="product-delivery-date">
              Arriving on: ${e(d.estimatedDeliveryTime).format("MMMM D")}
            </div>
            <div class="product-quantity">
              Quantity: ${d.quantity}
            </div>
            <button class="buy-again-button button-primary js-buy-again-button" 
                    data-product-id="${r.id}">
              <img class="buy-again-icon" src="images/icons/buy-again.png">
              <span class="buy-again-message">Buy it again</span>
            </button>
          </div>

          <div class="product-actions">
            <a href="tracking.html?orderId=${a.id}&productId=${r.id}">
              <button class="track-package-button button-secondary js-track-package-button">
                Track package
              </button>
            </a>
          </div>
        </div>
      </div>
      `})}),document.querySelector(".js-order-grid").innerHTML=t,o(),document.querySelectorAll(".js-buy-again-button").forEach(a=>{a.addEventListener("click",()=>{const{productId:d}=a.dataset;i.addToCart(d),o(),i.saveToStorage()})})}
