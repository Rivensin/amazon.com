import { cart } from "@/data/cart-class.js";
import { getProduct } from "@/data/products.js";
import { deliveryOptions, getDeliveryOptionId } from "@/data/delivery-option.js";
import formatCurrency from "@/scripts/utils/money.js";
import { addOrder } from "@/data/orders.js";

// import { cart } from "../../data/cart-class.js";
// import { getProduct } from "../../data/products.js";
// import { deliveryOptions, getDeliveryOptionId } from "../../data/delivery-option.js";
// import formatCurrency from "../utils/money.js";
// import { addOrder } from "../../data/orders.js";

export function renderPaymentSummary(){
  let productPriceCents = 0; 
  let shippingPriceCents = 0;

  cart.cartItems.forEach(cartItem => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const DeliveryOption = getDeliveryOptionId(cartItem.deliveryOptionId);
    shippingPriceCents += DeliveryOption.priceCents;

  })  

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = 
  `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${cart.calculateCartQuantity()}):</div>
      <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money js-payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money js-total-payment-summary-money">$${formatCurrency(totalCents)}</div>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
  `
  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

  document.querySelector('.js-place-order')
  .addEventListener('click', async () => {
    try{
      const response = await fetch('https://supersimplebackend.dev/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cart: cart
        })
      })

      const order = await response.json();
      addOrder(order);

     }catch(error){
      console.log('Unexpected Error.Try Again Later')
     }

     cart.resetCart();
     window.location.href = 'orders.html';
  })
}
