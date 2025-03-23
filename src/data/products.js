import formatCurrency from "@/scripts/utils/money.js";

// import formatCurrency from "../scripts/utils/money.js";

export class Product{
  id;
  image;
  name;
  rating;
  priceCents;
  keywords;

  constructor(productDetails){
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
    this.keywords = productDetails.keywords;

  }

  getStarUrl(){
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice(){
    return `$${formatCurrency(this.priceCents)}`
  }

  extraInfoHTML(){
    return '';
  }
}

export class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails){
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML(){
    return `<a href="${this.sizeChartLink}" target="_blank">Size Chart</a>`;
  }
}

export class Appliance extends Product{
  instructionLink;
  warrantyLink;

  constructor(productDetails){
  super(productDetails)
  this.instructionLink = productDetails.instructionLink;
  this.warrantyLink = productDetails.warrantyLink;
  }

  extraInfoHTML(){
    return `
      <a href="${this.instructionLink}" target="_blank">Instruction</a>
      <a href="${this.warrantyLink}" target="_blank">Warranty</a>
    `;
  }
}

export let products = [];

export async function loadProductFetch(){
  const promise = await fetch('https://supersimplebackend.dev/products')
  const response = await promise.json()
  
  products = response.map(productDetails => {
    if(productDetails.type === 'clothing'){
      return new Clothing(productDetails);
    }
    if(productDetails.type === 'appliance'){
      return new Appliance(productDetails);
    }
    return new Product(productDetails);
  })
  
  return products;
}

export function getProduct(productId){
  let matchingProduct;

  products.forEach(products => {
    if(products.id === productId){
      matchingProduct = products;
    }
  })

  return matchingProduct;
}

/*
export function loadProductFetch(){
  const promise = 
    fetch('https://supersimplebackend.dev/products')
      .then(response => {
        return response.json()
      }).then(productsData => {
        products = productsData.map(productDetails => {
          if(productDetails.type === 'clothing'){
            return new Clothing(productDetails);
          }
          if(productDetails.type === 'appliance'){
            return new Appliance(productDetails);
          }
          return new Product(productDetails);
        });
    }).catch(error => {
        console.log('unexpected error. please try again later.')
    })
  
  return promise;
}
*/