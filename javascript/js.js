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
}
