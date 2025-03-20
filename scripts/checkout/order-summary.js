import {cart} from '../../data/cart-class.js';
import {products, getProduct, loadProductFetch} from '../../data/products.js';
import formatCurrency from '../utils/money.js';
import {deliveryOptions,  getDeliveryOptionId, calculateDeliveryDate} from '../../data/delivery-option.js';
import { renderPaymentSummary } from './payment-summary.js';
import { renderCheckoutHeader } from './checkoutHeader.js';
import dayjs from "https://esm.sh/dayjs";

export function renderOrderSummary(){

  let cartSummaryHTML = '';

  cart.cartItems.forEach(cartItem => {
    const {productId} = cartItem;
    
    const matchingProduct = getProduct(productId);
    const {deliveryOptionId} = cartItem;
    const deliveryOption = getDeliveryOptionId(deliveryOptionId);
    
    const dateString = calculateDeliveryDate(deliveryOption);
    cartSummaryHTML+=
    `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id} js-cart-item-container">
      <div class="delivery-date">
        Delivery date: ${dateString}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name js-product-name-${matchingProduct.id}">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            ${matchingProduct.getPrice()}
          </div>
          <div class="product-quantity js-product-quantity-${matchingProduct.id}">
            <span>
              Quantity:<span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
              Update
            </span>
            <input class="quantity-input js-quantity-input js-quantity-input-${matchingProduct.id}" data-product-id="${matchingProduct.id}">
            <span class="link-primary save-quantity-link js-save-link" data-product-id="${matchingProduct.id}">Save</span>
            <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${matchingProduct.id}" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>
        
        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionHTML(matchingProduct,cartItem)}
        
          
        </div>
      </div>
    </div>
    `
  });

  document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-link')
    .forEach(link => {
      link.addEventListener('click', () => {
        const {productId} = link.dataset;
        cart.removeFromCart(productId);
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary(); 
  })})

  document.querySelectorAll('.js-update-link')
    .forEach(link => {
      link.addEventListener('click', () => {
        const {productId} = link.dataset;

        document.querySelector(`.js-cart-item-container-${productId}`)
        .classList.add('is-editing-quantity');
  })})

  document.querySelectorAll('.js-save-link')
    .forEach(link => {
      link.addEventListener('click', () => {
        const {productId} = link.dataset;

        const quantityElemen = document.querySelector(`.js-quantity-input-${productId}`);
        const quantity = Number(quantityElemen.value);      
        cart.updateQuantity(productId,quantity);
        renderPaymentSummary();
        renderCheckoutHeader();
  })})

  document.querySelectorAll('.js-quantity-input')
    .forEach(link => {
      link.addEventListener('keydown',event => {
        if(event.key === 'Enter'){
          const {productId} = link.dataset;
          const quantityElemen = document.querySelector(`.js-quantity-input-${productId}`);
          const quantity = Number(quantityElemen.value);      
          cart.updateQuantity(productId,quantity);
          renderCheckoutHeader();
        }
    })
    })
  
  function deliveryOptionHTML(matchingProduct,cartItem){
    let html = ``;
    deliveryOptions.forEach(deliveryOption => {
      const { id } = deliveryOption;
      //const today = dayjs();
      //const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
      //const dateString = deliveryDate.format('dddd, MMMM D');
      const dateString = calculateDeliveryDate(deliveryOption);
      const priceString = deliveryOption.priceCents === 0 ? 'FREE Shipping' : `$${formatCurrency(deliveryOption.priceCents)}-`;
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId; 
      html+=
      `
        <div class="delivery-option js-delivery-option 
                    js-delivery-option-${matchingProduct.id}-${id}" 
            data-product-id="${matchingProduct.id}"
            data-delivery-option-id="${deliveryOption.id}">
          <input type="radio"
            ${isChecked ? 'checked': ''}
            class="delivery-option-input js-delivery-option-input-${matchingProduct.id}-${id}"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString}
            </div>
          </div>
        </div>
      `
    })
    return html;
  }
  
  document.querySelectorAll('.js-delivery-option')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const {productId,deliveryOptionId} = element.dataset;  
        cart.updateDeliveryOption(productId,deliveryOptionId); 
        renderOrderSummary();
        renderPaymentSummary();
      })
    })
}

