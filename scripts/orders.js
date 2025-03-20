import { orders } from "../data/orders.js";
import { products, loadProductFetch, getProduct } from "../data/products.js";
import { cart } from "../data/cart-class.js";
import { updateCartQuantity } from "./amazon.js"
import dayjs from "dayjs";

new Promise(async() => {
  try{
    await loadProductFetch();
  }catch(error){
    console.log('unexpected error. please try again later.')
  }
  renderOrdersPage();
})

function renderOrdersPage(){
  let orderHTML = '';
  
  orders.forEach(orders => {
    orders.products.forEach(products => {
      let matchingProduct = getProduct(products.productId);
      orderHTML+=
      `
      <div class="order-container">
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>${dayjs(orders.orderTime).format('MMMM D')}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>$${orders.totalCostCents/100}</div>
            </div>
          </div>

          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${orders.id}</div>
          </div>
        </div>

        <div class="order-details-grid">
          <div class="product-image-container">
            <img src="${matchingProduct.image}">
          </div>

          <div class="product-details">
            <div class="product-name">
            ${matchingProduct.name}
            </div>
            <div class="product-delivery-date">
              Arriving on: ${dayjs(products.estimatedDeliveryTime).format('MMMM D')}
            </div>
            <div class="product-quantity">
              Quantity: ${products.quantity}
            </div>
            <button class="buy-again-button button-primary js-buy-again-button" 
                    data-product-id="${matchingProduct.id}">
              <img class="buy-again-icon" src="images/icons/buy-again.png">
              <span class="buy-again-message">Buy it again</span>
            </button>
          </div>

          <div class="product-actions">
            <a href="tracking.html?orderId=${orders.id}&productId=${matchingProduct.id}">
              <button class="track-package-button button-secondary js-track-package-button">
                Track package
              </button>
            </a>
          </div>
        </div>
      </div>
      `
    })
  }) 
  document.querySelector('.js-order-grid').innerHTML = orderHTML;

  updateCartQuantity();

  document.querySelectorAll('.js-buy-again-button')
    .forEach(button => {
      button.addEventListener('click',() => {
        const {productId} = button.dataset;
        cart.addToCart(productId);
        updateCartQuantity();
        cart.saveToStorage();
      })
    })
  }