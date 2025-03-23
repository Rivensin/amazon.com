import{l as m,b as u,c as p,d as s}from"./orders-CBA0M2t7.js";/* empty css                      */const n=new URL(window.location.href),v=n.searchParams.get("orderId"),a=n.searchParams.get("productId");new Promise(async()=>{y();try{await m()}catch{console.log("unexpected error. please try again later.")}h()});function y(){(!v||!a)&&(window.location.href="orders.html")}function h(){let t=u(v),i=p(a),e;t.products.forEach(l=>{l.productId===a&&(e=l)});const d=s(),o=s(t.orderTime),c=s(e.estimatedDeliveryTime),r=(d-o)/(c-o)*100;let g=`
      <a class="back-to-orders-link link-primary" href="orders.html">
        View all orders
      </a>

      <div class="delivery-date">
        ${d<c?"Arriving On":"Delivered On"} ${s(e.estimatedDeliveryTime).format("MMMM DD")}
      </div>

      <div class="product-info">
        ${i.name}
      </div>

      <div class="product-info">
        Quantity: ${e.quantity}
      </div>

      <img class="product-image" src="${i.image}">

      <div class="progress-labels-container">
        <div class="progress-label ${r<50?"current-status":""}">
          Preparing
        </div>
        <div class="progress-label ${r>=50&&r<100?"current-status":""}">
          Shipped
        </div>
        <div class="progress-label ${r>=100?"current-status":""}">
          Delivered
        </div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar" style="width:${r}%"></div>
      </div>
    `;document.querySelector(".js-order-tracking").innerHTML=g}
