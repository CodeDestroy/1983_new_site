
document.addEventListener('DOMContentLoaded', () => {
  const program = document.getElementById('program');
  const percentage = document.getElementById('percentage');
  const price = document.getElementById('price');
  const priceOutput = document.getElementById('price_output');
  const initialFee = document.getElementById('initial_fee');
  const initialFeeOutput = document.getElementById('initial_fee_output');
  const term = document.getElementById('term');

  const paymentEl = document.getElementById('payment');
  const totalEl = document.getElementById('total');
  const overpayEl = document.getElementById('overpay');

  function updateInitialFeeBounds() {
    const initPercent = parseFloat(program.selectedOptions[0].dataset.init);
    const min = Math.round(price.value * initPercent / 100);
    const max = Math.round(price.value * 0.95);

    initialFee.min = min;
    initialFee.max = max;

    if (initialFee.value < min) initialFee.value = min;
    if (initialFee.value > max) initialFee.value = max;

    initialFeeOutput.value = initialFee.value;
  }

  function calculate() {
    const P = parseFloat(percentage.value) / 1200;
    const N = parseInt(term.value) * 12;
    const loan = price.value - initialFee.value;

    const monthly = loan * (P / (1 - Math.pow(1 + P, -N)));
    const total = monthly * N;
    const overpay = total - loan;

    paymentEl.textContent = `${Math.round(monthly).toLocaleString()} ₽/мес.`;
    totalEl.textContent = `${Math.round(total).toLocaleString()} ₽`;
    overpayEl.textContent = `${Math.round(overpay).toLocaleString()} ₽`;
  }

  // Sync inputs
  price.addEventListener('input', () => {
    priceOutput.value = price.value;
    updateInitialFeeBounds();
    calculate();
  });
  priceOutput.addEventListener('input', () => {
    price.value = priceOutput.value;
    updateInitialFeeBounds();
    calculate();
  });

  initialFee.addEventListener('input', () => {
    initialFeeOutput.value = initialFee.value;
    calculate();
  });
  initialFeeOutput.addEventListener('input', () => {
    initialFee.value = initialFeeOutput.value;
    calculate();
  });

  percentage.addEventListener('input', calculate);
  term.addEventListener('input', calculate);

  program.addEventListener('change', () => {
    percentage.value = program.value;
    updateInitialFeeBounds();
    calculate();
  });

  // Initial calculation
  updateInitialFeeBounds();
  calculate();
});
