const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
const processPayment = (resolvedValueArray) => {
  return processPayment(resolvedValueArray);
};
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  const shipOrder = (resolvedValueArray) => {
    return shipOrder(resolvedValueArray);
  };
  
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});
