import { renderCheckoutHeader } from "@/scripts/checkout/checkoutHeader.js";
import { renderOrderSummary } from "@/scripts/checkout/order-summary.js";
import { renderPaymentSummary } from "@/scripts/checkout/payment-summary.js";
import { loadProductFetch } from "@/data/products.js";

// import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
// import { renderOrderSummary } from "./checkout/order-summary.js";
// import { renderPaymentSummary } from "./checkout/payment-summary.js";
// import { loadProductFetch } from "../data/products.js";

async function loadPage(){
  try{
    await Promise.all([loadProductFetch()])
  }catch(error){
    console.log('unexpected error. please try again later.')
  }
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
}

loadPage();




