import { getOrder, orders, getProductDetails } from "../data/orders.js";
import { products, loadProductFetch} from "../data/products.js";
import dayjs from "https://esm.sh/dayjs";

const url = new URL(window.location.href)
const orderIdUrl = url.searchParams.get('orderId');
const productIdUrl = url.searchParams.get('productId');

new Promise(async() => {
  loadTracking();
  try{
    await loadProductFetch();
  }catch(error){
    console.log('unexpected error. please try again later.')
  }
  renderTrackingSummary();
})

function loadTracking(){
  if(!orderIdUrl || !productIdUrl){
    window.location.href = 'orders.html';
  }
}

function renderTrackingSummary(){
  let matchingOrder = getOrder(orderIdUrl);
  let matchingProduct = getProductDetails(productIdUrl);
  let productDetails;

  matchingOrder.products.forEach(details => {
    if(details.productId === productIdUrl){
      productDetails = details;
    }
  })
    
    const today = dayjs();
    const orderTime = dayjs(matchingOrder.orderTime);
    const deliveryTime = dayjs(productDetails.estimatedDeliveryTime);
    const progress = ((today-orderTime)/(deliveryTime-orderTime))*100; 

    const deliveryMessage = today < deliveryTime ? 'Arriving On' : 'Delivered On';

    let trackingHTML=
    `
      <a class="back-to-orders-link link-primary" href="orders.html">
        View all orders
      </a>

      <div class="delivery-date">
        ${deliveryMessage} ${dayjs(productDetails.estimatedDeliveryTime).format('MMMM DD')}
      </div>

      <div class="product-info">
        ${matchingProduct.name}
      </div>

      <div class="product-info">
        Quantity: ${productDetails.quantity}
      </div>

      <img class="product-image" src="${matchingProduct.image}">

      <div class="progress-labels-container">
        <div class="progress-label ${progress < 50 ? 'current-status' : ''}">
          Preparing
        </div>
        <div class="progress-label ${(progress >= 50 && progress < 100) ? 'current-status' : ''}">
          Shipped
        </div>
        <div class="progress-label ${progress >= 100 ? 'current-status' : ''}">
          Delivered
        </div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar" style="width:${progress}%"></div>
      </div>
    `

  document.querySelector('.js-order-tracking').innerHTML = trackingHTML;
}
      