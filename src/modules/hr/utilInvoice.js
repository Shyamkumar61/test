export const convertNumberToWords = (amount) => {
  // prettier-ignore
  const singleDigits = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ];
  // prettier-ignore
  const tensDigits = [
      '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
  // prettier-ignore
  const teensDigits = [
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

  const lakh = 100000;
  const crore = 10000000;

  if (isNaN(amount) || amount < 0 || amount > 999999999) {
    return "Invalid input";
  }

  if (amount === 0) {
    return "zero";
  }

  let words = "";

  if (Math.floor(amount / crore) > 0) {
    words += convertNumberToWords(Math.floor(amount / crore)) + " crore ";
    amount %= crore;
  }

  if (Math.floor(amount / lakh) > 0) {
    words += convertNumberToWords(Math.floor(amount / lakh)) + " lakh ";
    amount %= lakh;
  }

  if (Math.floor(amount / 1000) > 0) {
    words += convertNumberToWords(Math.floor(amount / 1000)) + " thousand ";
    amount %= 1000;
  }

  if (Math.floor(amount / 100) > 0) {
    words += convertNumberToWords(Math.floor(amount / 100)) + " hundred ";
    amount %= 100;
  }

  if (amount > 0) {

    if (amount < 10) {
      words += singleDigits[amount];
    } else if (amount < 20) {
      words += teensDigits[amount - 10];
    } else {
      words += tensDigits[Math.floor(amount / 10)];
      if (amount % 10 > 0) {
        words += "-" + singleDigits[amount % 10];
      }
    }
  }

  return words;
};

