{
  const formElement = document.querySelector(".js-form");

  const calculateResult = (amount, currency) => {
    const eur = 0.21;
    const gbp = 0.18;
    const usd = 0.21;
    const dkk = 1.55;

    switch (currency) {
      case "EUR":
        return amount * eur;

      case "GBP":
        return amount * gbp;

      case "USD":
        return amount * usd;

      case "DKK":
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
