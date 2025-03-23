var T=Object.defineProperty;var S=a=>{throw TypeError(a)};var D=(a,e,t)=>e in a?T(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var g=(a,e,t)=>D(a,typeof e!="symbol"?e+"":e,t),m=(a,e,t)=>e.has(a)||S("Cannot "+t);var p=(a,e,t)=>(m(a,e,"read from private field"),t?t.call(a):e.get(a)),v=(a,e,t)=>e.has(a)?S("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t),j=(a,e,t,i)=>(m(a,e,"write to private field"),i?i.call(a,t):e.set(a,t),t),E=(a,e,t)=>(m(a,e,"access private method"),t);import{d as L,g as C,f as c,a as w}from"./orders-CBA0M2t7.js";const q=[{id:"1",deliveryDays:7,priceCents:0},{id:"2",deliveryDays:3,priceCents:499},{id:"3",deliveryDays:1,priceCents:999}];function k(a){let e;return q.forEach(t=>{t.id===a&&(e=t)}),e||e[0]}function M(a){const e=a.format("dddd");return e==="Saturday"||e==="Sunday"}function I(a){let{deliveryDays:e}=a,t=L();for(;e>0;)t=t.add(1,"day"),M(t)||e--;return t.format("dddd, MMMM D")}function h(){let a=0,e=0;d.cartItems.forEach(n=>{const o=C(n.productId);a+=o.priceCents*n.quantity;const y=k(n.deliveryOptionId);e+=y.priceCents});const t=a+e,i=t*.1,r=t+i,s=`
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${d.calculateCartQuantity()}):</div>
      <div class="payment-summary-money">$${c(a)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money js-payment-summary-money">$${c(e)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${c(t)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${c(i)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money js-total-payment-summary-money">$${c(r)}</div>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
  `;document.querySelector(".js-payment-summary").innerHTML=s,document.querySelector(".js-place-order").addEventListener("click",async()=>{try{const o=await(await fetch("https://supersimplebackend.dev/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:d})})).json();w(o)}catch{console.log("Unexpected Error.Try Again Later")}d.resetCart(),window.location.href="orders.html"})}function $(){let a="";d.cartItems.forEach(t=>{const{productId:i}=t,r=C(i),{deliveryOptionId:s}=t,n=k(s),o=I(n);a+=`
    <div class="cart-item-container js-cart-item-container-${r.id} js-cart-item-container">
      <div class="delivery-date">
        Delivery date: ${o}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${r.image}">

        <div class="cart-item-details">
          <div class="product-name js-product-name-${r.id}">
            ${r.name}
          </div>
          <div class="product-price">
            ${r.getPrice()}
          </div>
          <div class="product-quantity js-product-quantity-${r.id}">
            <span>
              Quantity:<span class="quantity-label js-quantity-label-${r.id}">${t.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id="${r.id}">
              Update
            </span>
            <input class="quantity-input js-quantity-input js-quantity-input-${r.id}" data-product-id="${r.id}">
            <span class="link-primary save-quantity-link js-save-link" data-product-id="${r.id}">Save</span>
            <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${r.id}" data-product-id="${r.id}">
              Delete
            </span>
          </div>
        </div>
        
        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${e(r,t)}
        
          
        </div>
      </div>
    </div>
    `}),document.querySelector(".js-order-summary").innerHTML=a,document.querySelectorAll(".js-delete-link").forEach(t=>{t.addEventListener("click",()=>{const{productId:i}=t.dataset;d.removeFromCart(i),f(),$(),h()})}),document.querySelectorAll(".js-update-link").forEach(t=>{t.addEventListener("click",()=>{const{productId:i}=t.dataset;document.querySelector(`.js-cart-item-container-${i}`).classList.add("is-editing-quantity")})}),document.querySelectorAll(".js-save-link").forEach(t=>{t.addEventListener("click",()=>{const{productId:i}=t.dataset,r=document.querySelector(`.js-quantity-input-${i}`),s=Number(r.value);d.updateQuantity(i,s),h(),f()})}),document.querySelectorAll(".js-quantity-input").forEach(t=>{t.addEventListener("keydown",i=>{if(i.key==="Enter"){const{productId:r}=t.dataset,s=document.querySelector(`.js-quantity-input-${r}`),n=Number(s.value);d.updateQuantity(r,n),f()}})});function e(t,i){let r="";return q.forEach(s=>{const{id:n}=s,o=I(s),y=s.priceCents===0?"FREE Shipping":`$${c(s.priceCents)}-`,O=s.id===i.deliveryOptionId;r+=`
        <div class="delivery-option js-delivery-option 
                    js-delivery-option-${t.id}-${n}" 
            data-product-id="${t.id}"
            data-delivery-option-id="${s.id}">
          <input type="radio"
            ${O?"checked":""}
            class="delivery-option-input js-delivery-option-input-${t.id}-${n}"
            name="delivery-option-${t.id}">
          <div>
            <div class="delivery-option-date">
              ${o}
            </div>
            <div class="delivery-option-price">
              ${y}
            </div>
          </div>
        </div>
      `}),r}document.querySelectorAll(".js-delivery-option").forEach(t=>{t.addEventListener("click",()=>{const{productId:i,deliveryOptionId:r}=t.dataset;d.updateDeliveryOption(i,r),$(),h()})})}var l,u,b;class H{constructor(e){v(this,u);g(this,"cartItems");v(this,l);j(this,l,e),E(this,u,b).call(this)}saveToStorage(){localStorage.setItem(p(this,l),JSON.stringify(this.cartItems))}addToCart(e){const t=document.querySelector(`.js-quantity-selector-${e}`)||"",i=Number(t.value)||1;let r;this.cartItems.forEach(s=>{e===s.productId&&(r=s)}),r?r.quantity+=i:this.cartItems.push({productId:e,quantity:i,deliveryOptionId:"1"}),this.saveToStorage()}removeFromCart(e){const t=[];this.cartItems.forEach(i=>{i.productId!==e&&t.push(i)}),this.cartItems=t,this.saveToStorage()}updateDeliveryOption(e,t){let i;this.cartItems.forEach(s=>{e===s.productId&&(i=s)});let r;q.forEach(s=>{s.id===t&&(r=s)}),r&&i&&(i.deliveryOptionId=t,this.saveToStorage())}calculateCartQuantity(){let e=0;return this.cartItems.forEach(t=>{e+=t.quantity}),e}updateQuantity(e,t){this.cartItems.forEach(i=>{i.productId===e&&t>=0&&t<1e3&&(i.quantity=t,$(),this.saveToStorage())}),document.querySelector(`.js-cart-item-container-${e}`).classList.remove("is-editing-quantity")}resetCart(){this.cartItems=[],this.saveToStorage()}}l=new WeakMap,u=new WeakSet,b=function(){this.cartItems=JSON.parse(localStorage.getItem(p(this,l))),this.cartItems||(this.cartItems=[{productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",quantity:2,deliveryOptionId:"1"},{productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",quantity:1,deliveryOptionId:"2"}])};const d=new H("cart-oop");function f(){const a=d.calculateCartQuantity();return document.querySelector(".return-to-home-link").innerHTML=`${a} items`,a}export{h as a,f as b,d as c,$ as r};
