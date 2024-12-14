import { renderOrderSummary } from "../../scripts/checkout/order-summary.js";
import { renderPaymentSummary } from "../../scripts/checkout/payment-summary.js";
import { cart } from "../../data/cart-class.js";
import { Product, loadProducts, loadProductFetch } from "../../data/products.js";

describe('test suite:renderOrderSummary', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productName1 = 'Black and Gray Athletic Cotton Socks - 6 Pairs';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  const productName2 = 'Intermediate Size Basketball';
 
  beforeAll(async () => {
    await loadProductFetch()
  })
  
  beforeEach(() =>{
    
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(() => {
    return JSON.stringify([{
        productId: productId1,
        name: productName1,
        quantity: 2,
        deliveryOptionId: '1'
      }, 
      {
        productId: productId2,
        name : productName2,
        quantity: 1,
        deliveryOptionId: '2'
      }]);
    })
    
    

    document.querySelector('.js-test-container').innerHTML = 
    `
      <div class="js-order-summary"></div>
      <div class="return-to-home-link"></div>
      <div class="js-payment-summary"></div>
    `;

    renderOrderSummary();
    renderPaymentSummary();
  }
    
  );

  it('displays the cart', () => {
    expect((document.querySelectorAll('.js-cart-item-container')).length).toEqual(2);
    expect(document.querySelector(`.js-product-name-${productId1}`).innerText).toContain('Black and Gray Athletic Cotton Socks - 6 Pairs');
    expect(document.querySelector(`.js-product-name-${productId2}`).innerText).toContain('Intermediate Size Basketball')
    expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity:2');
    expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity:1');
    })
    
  
  it('remove a product', () => {
    document.querySelector(`.js-delete-link-${productId2}`).click();
    expect((document.querySelectorAll('.js-cart-item-container')).length).toEqual(1);
    expect(document.querySelector(`.js-cart-item-container-${productId2}`)).toEqual(null);
    expect(document.querySelector(`.js-cart-item-container-${productId1}`)).not.toEqual(null);
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual(productId1);

  })

  it('updating delivery option', () => {
    document.querySelector(`.js-delivery-option-input-${productId1}-3`).click()
    expect(document.querySelector(`.js-delivery-option-input-${productId1}-3`).checked).toEqual(true)
    expect(cart.cartItems.length).toEqual(2);
    expect(cart.cartItems[0].deliveryOptionId).toEqual('3');
    expect(document.querySelector('.js-payment-summary-money').innerText).toEqual('$14.98');
    expect(document.querySelector('.js-total-payment-summary-money').innerText).toEqual('$63.50');
  })
  
    
  
  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML = '';
  })
})



