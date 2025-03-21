import dayjs from 'dayjs';

export const deliveryOptions = [
  {
    id : '1',
    deliveryDays : 7,
    priceCents : 0
  },
  {
    id : '2',
    deliveryDays : 3,
    priceCents : 499
  },
  {
    id : '3',
    deliveryDays : 1,
    priceCents : 999
  }
];

export function getDeliveryOptionId(deliveryOptionId){
  let deliveryOption;
    
    deliveryOptions.forEach(option => {
      if(option.id === deliveryOptionId){
        deliveryOption = option;
      }
        
    })

  return deliveryOption || deliveryOption[0];
}

function isWeekend(deliveryDate){
  const dayOfWeek = deliveryDate.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'
}

export function calculateDeliveryDate(deliveryOption){
  
  let {deliveryDays} = deliveryOption;
  let deliveryDate = dayjs();
  
  while(deliveryDays > 0){
    deliveryDate = deliveryDate.add(1,'day');
    
    if(!isWeekend(deliveryDate)){
      deliveryDays--;
    }
  }

  const dateString = deliveryDate.format('dddd, MMMM D');
  return dateString;
  }  
