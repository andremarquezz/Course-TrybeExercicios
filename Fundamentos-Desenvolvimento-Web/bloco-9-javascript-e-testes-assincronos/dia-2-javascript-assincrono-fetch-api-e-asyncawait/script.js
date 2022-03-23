const Ol = document.querySelector('ol')
const api_URL = 'https://api.coincap.io/v2/assets'

// Nome da moeda (símbolo da moeda): valor em dólares . Exemplo: Bitcoin (BTC): 46785.06 .
const getCrypto = async () => {
  const response = await fetch(api_URL)
  const api = await response.json()
  // console.log(api)
  const cryptos = api.data.filter((cryptos) => cryptos.rank <= 11)
  return cryptos
}
const dom = (crypto) => {
  const createLi = document.createElement('li')
  createLi.innerText = crypto
  Ol.appendChild(createLi)
}
// getCrypto()
const buildObject = () => {
  getCrypto()
    .then((cryptos) => {
      cryptos.forEach(({
        name,
        symbol,
        priceUsd
      }) => {
        const crypto = `Nome da moeda: ${name} (${symbol})
    Valor em dolar: ${(parseFloat(priceUsd).toFixed(2))}`
        dom(crypto)
      })
    })
}
window.onload = buildObject()