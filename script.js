const binaryInput = document.getElementById("binaryInput");
const decimalInput = document.getElementById("decimalInput");
const decimalResult = document.getElementById("decimalResult");
const binaryResult = document.getElementById("binaryResult");

document.getElementById("binToDec").addEventListener("click", () => {
  const binary = binaryInput.value.trim();

  if (!/^[01]+$/.test(binary)) {
    decimalResult.textContent = "Decimal: Invalid binary number";
    return;
  }

  const decimal = parseInt(binary, 2);
  decimalResult.textContent = `Decimal: ${decimal}`;
});

document.getElementById("decToBin").addEventListener("click", () => {
  const decimal = decimalInput.value.trim();

  if (decimal === "" || isNaN(decimal) || Number(decimal) < 0) {
    binaryResult.textContent = "Binary: Invalid decimal number";
    return;
  }

  const binary = Number(decimal).toString(2);
  binaryResult.textContent = `Binary: ${binary}`;
});


