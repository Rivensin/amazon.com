import { cart } from "../../data/cart-class.js";

export function renderCheckoutHeader(){
  const cartQuantity = cart.calculateCartQuantity();
  document.querySelector('.return-to-home-link').innerHTML = `${cartQuantity} items`;
  return cartQuantity;
}