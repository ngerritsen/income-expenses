export function toCurrency(num) {
  const isWholeNum = num % 1 === 0;

  if (isWholeNum) {
    return num.toFixed(0) + ',-';
  }

  return num
    .toFixed(2)
    .replace('.', ',');
}

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
