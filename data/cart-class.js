import { renderOrderSummary } from "../scripts/checkout/order-summary.js";
import { deliveryOptions } from "./delivery-option.js";

class Cart {
  cartItems;
  #localStorageKey;

  constructor(localStorageKey){
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
    
    if (!this.cartItems) {
      this.cartItems = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }];
  }
  }

  saveToStorage(){
    localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems));
  }

  addToCart(productId){
    const quantityElemen = document.querySelector(`.js-quantity-selector-${productId}`) || '';
    const quantity = Number(quantityElemen.value) || 1 ;
    //const quantity = 1;

    let matchingItem; 
  
    this.cartItems.forEach(cartItem => { 
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
    
    if(matchingItem){
      matchingItem.quantity+=quantity;
    } else {
      this.cartItems.push({
        productId,
        quantity,
        deliveryOptionId : '1'
      });
    }
    
    this.saveToStorage();
  }

  removeFromCart(productId){
    const newCart = [];
  
    this.cartItems.forEach(cartItem => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem)
      } 
    })
    this.cartItems = newCart;
    this.saveToStorage();
  }

  updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem; 
  
    this.cartItems.forEach(cartItem => { 
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
    
    let matchingDelivery;
  
    deliveryOptions.forEach(deliveryOptions => {
      if(deliveryOptions.id === deliveryOptionId){
        matchingDelivery = deliveryOptions;
      }
    })
  
    if(!matchingDelivery){
      return;
    }
    
    if(!matchingItem){
      return;
    }
  
    matchingItem.deliveryOptionId = deliveryOptionId;
    
    this.saveToStorage();
  }

  calculateCartQuantity(){
    let cartQuantity = 0;
    this.cartItems.forEach(cartItem => {
      cartQuantity+=cartItem.quantity;
    });
    return cartQuantity;
  }

  updateQuantity(productId,newQuantity){
      this.cartItems.forEach(cartItem => {
        if(cartItem.productId === productId && newQuantity >=0 && newQuantity <1000){
        cartItem.quantity = newQuantity;
        renderOrderSummary();
        this.saveToStorage();
      }})
      
      document.querySelector(`.js-cart-item-container-${productId}`)
        .classList.remove('is-editing-quantity');
    }
  
  resetCart(){
    this.cartItems = []
    this.saveToStorage()
  }
}

export const cart = new Cart('cart-oop');
