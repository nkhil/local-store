
export function returnAttributes(attributes) {
  const { weight: { weight, unit }, quantity } = attributes;
  if (weight === 0 && !!quantity) {
    return `${quantity}`;
  } else if(weight > 0) {
    return `${weight}${unit}`;
  }
  throw new Error(`Error: Weight is ${weight} & quantity is ${quantity}`);
}
