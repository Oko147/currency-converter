{
  const formElement = document.querySelector(".js-form");

  const calculateResult = (amount, currency) => {
    const eur = 0.21;
    const gbp = 0.18;
    const usd = 0.21;
    const dkk = 1.55;
    const exchangeRate = document.querySelector(".js-exchangeRate");

    switch (currency) {
      case "EUR":
        exchangeRate.innerHTML = eur;
        return amount * eur;

      case "GBP":
        exchangeRate.innerHTML = gbp;
        return amount * gbp;

      case "USD":
        exchangeRate.innerHTML = usd;
        return amount * usd;

      case "DKK":
        exchangeRate.innerHTML = dkk;
        return amount * dkk;
    }
  };

  const init = () => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const resultElement = document.querySelector(".js-result");
      const amountElement = document.querySelector(".js-amount");
      const currencyChoose = document.querySelector(".js-currency");

      const currency = currencyChoose.value;
      const amount = +amountElement.value;

      let result = calculateResult(amount, currency);

      resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;
    });
  };

  init();
}
