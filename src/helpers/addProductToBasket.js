
export default function (basket, product) {
  const existingProduct = productAlreadyExistsInBasket(basket, product);
  if (existingProduct) {
    return basket.map(x => {
      if (x.id === product.id) {
        return { ...x, quantity: x.quantity + 1}
      } else {
        return x;
      }
    })
  } else {
    return basket.concat(product);
  }
}

function productAlreadyExistsInBasket (basket, product) {
  const result = basket.find(basketProduct => basketProduct.id === product.id)
  return result;
}
