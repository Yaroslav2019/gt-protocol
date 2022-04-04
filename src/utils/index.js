export const getRandom = () => Math.floor(Math.random()*Date.now());

export const getRandomArrElement = (arr) => {
  return arr[Math.floor((Math.random()*arr.length))];
}

export const getProgressValue = (min, max) => {
  if (!min || !max) {
    return 0
  }
  return `${Math.trunc((min / max) * 100)}`
}

export const moneyFormat = (money) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(money)