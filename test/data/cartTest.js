import { addToCart, cart, loadFromStorage, removeFromCart, updateDeliveryOption } from '../../data/cart.js';
import { deliveryOptions } from '../../data/delivery-option.js';

describe('test suite: add to cart', () => {
  
  it('adds an existing to the cart', () => {
    spyOn(localStorage.__proto__, 'setItem');
    spyOn(localStorage.__proto__, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 1,
        deliveryOptionsId : '1'
        }]);
    });
    loadFromStorage();
    
    
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity : 2,
      deliveryOptionsId : '1'
      }]));
  });

  it('adds a new product to the cart', () => {
    spyOn(localStorage.__proto__, 'setItem');
    spyOn(localStorage.__proto__, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();
    
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
  });
})

describe('test suite: remove from cart', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productName1 = 'Black and Gray Athletic Cotton Socks - 6 Pairs';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  const productName2 = 'Intermediate Size Basketball';

  beforeEach(() => {
    spyOn(localStorage.__proto__, 'setItem')
    spyOn(localStorage.__proto__, 'getItem').and.callFake(() => {
      return JSON.stringify([
        {
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
    });

    loadFromStorage();
  })

  it('remove productId in this cart', () => {
    removeFromCart(productId1);
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: productId2,
      name : productName2,
      quantity: 1,
      deliveryOptionId: '2'
    }]));
  })

  it('remove productId NOT in this cart', () => {
    removeFromCart('blank');
    expect(cart.length).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([
      {
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
      }]));
  })
})

describe('test suite: updatedeliveryoption', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productName1 = 'Black and Gray Athletic Cotton Socks - 6 Pairs';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  const productName2 = 'Intermediate Size Basketball';

  beforeEach(() => {
    spyOn(localStorage.__proto__, 'setItem')
    spyOn(localStorage.__proto__, 'getItem').and.callFake(() => {
      return JSON.stringify([
        {
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
    });

    loadFromStorage();
  })

  it('update deliveryoptionid in this cart', () => {
    updateDeliveryOption(productId1,'2')
    expect(cart[0].deliveryOptionId).toEqual('2');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
      productId: productId1,
      name: productName1,
      quantity: 2,
      deliveryOptionId: '2'
    }, 
    {
      productId: productId2,
      name : productName2,
      quantity: 1,
      deliveryOptionId: '2'
    }
    ]))
  })

  it('update deliveryoptionid NOT in this cart', () => {
    updateDeliveryOption('blank','2');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    
  })

  it('update deliveryoptionid that DIDNT EXIST in this cart', () => {
    updateDeliveryOption(productId1,'4');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  })
  
})
  
