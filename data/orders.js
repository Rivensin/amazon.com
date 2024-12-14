import { products, getProduct } from "./products.js";

export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
  orders.unshift(order)

  saveToStorage()
}

function saveToStorage(){
  localStorage.setItem('orders', JSON.stringify(orders))
}

export function getOrder(orderId){
  let matchingOrder;

  orders.forEach(ordersItem => {
    if(ordersItem.id === orderId){
      matchingOrder = ordersItem;
    }
  })

  return matchingOrder;
}

export function getProductDetails(productId){
  let getProductDetails;

  orders.forEach(orders => {
    orders.products.forEach(products => {
      if(products.productId === productId){
        getProductDetails = getProduct(products.productId);
      }
    })
  })

  return getProductDetails;
}
