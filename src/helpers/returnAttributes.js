
export function returnAttributes(attributes) {
  console.log("returnAttributes -> attributes", attributes)
  const { weight: { weight, unit }, quantity } = attributes;
  if (weight === 0 && !!quantity) {
    console.log('weight is 0 and quantity exists');
    return `${quantity}`;
  } else if(weight > 0) {
    console.log('weight is greater than 0');
    return `${weight}${unit}`;
  }
  // throw new Error(`Error: Weight is ${weight} & quantity is ${quantity}`);
}
