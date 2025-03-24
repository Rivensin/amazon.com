import{c as r}from"./checkoutHeader-HEDuh_7p.js";import{l as u,p as s}from"./orders-CBA0M2t7.js";new Promise(async()=>{await u(),console.log("amazon.js is running!"),m()});function m(){let a="";const o=new URL(window.location.href).searchParams.get("search");let c=s;o&&(c=s.filter(t=>{let e=!1;return t.keywords.forEach(l=>{l.toLowerCase().includes(o.toLowerCase())&&(e=!0)}),e||t.name.toLowerCase().includes(o.toLowerCase())})),c.forEach(t=>{const e=`/amazon.com/${t.image}`;a+=` 
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${e}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${t.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="${t.getStarUrl()}">
          <div class="product-rating-count link-primary">
            ${t.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${t.getPrice()}
        </div>

        <div class="product-quantity-container" >
          <select class="js-quantity-selector-${t.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
    
        ${t.extraInfoHTML()}

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${t.id}">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${t.id}">
          Add to Cart
        </button>
      </div>`}),document.querySelector(".js-product-grid").innerHTML=a,document.querySelectorAll(".js-add-to-cart").forEach(t=>{t.addEventListener("click",()=>{const{productId:e}=t.dataset;r.addToCart(e),i(),d(e)})}),document.querySelector(".js-search-button").addEventListener("click",()=>{const t=document.querySelector(".js-search-bar").value;window.location.href=`index.html?search=${t}`}),document.querySelector(".js-search-bar").addEventListener("keydown",t=>{if(t.key==="Enter"){const e=document.querySelector(".js-search-bar").value;window.location.href=`index.html?search=${e}`}});function i(){const t=r.calculateCartQuantity();document.querySelector(".js-cart-quantity").innerHTML=t}i();let n;function d(t){document.querySelector(`.js-added-to-cart-${t}`).classList.add("added-to-cart-visible"),clearTimeout(n),n=setTimeout(()=>{document.querySelector(`.js-added-to-cart-${t}`).classList.remove("added-to-cart-visible")},2e3)}}function g(){const a=r.calculateCartQuantity();document.querySelector(".js-cart-quantity").innerHTML=a}export{g as u};
