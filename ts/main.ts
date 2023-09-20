import handleCalculation from './handleCalculation.js'

type Store = {
  operations: string[]
}

const store: Store = {
  operations: []
}


function handleReset(): void {
  const $resetBtn = document.querySelector(".reset-btn");

  $resetBtn.addEventListener("click", function () {
    const $result = document.querySelector(".result");
    $result.textContent = "0";
  });
}

function handleKeyNumber(): void {
  const $keysNumber = document.querySelectorAll(".key");

  $keysNumber.forEach(($keyNumber) =>
    $keyNumber.addEventListener("click", function () {
      const $result = document.querySelector(".result");
      let currentResult = $result.textContent;

      if (currentResult === "0") {
        currentResult = $keyNumber.textContent;
      } else {
        currentResult = currentResult + $keyNumber.textContent;
      }

      $result.textContent = currentResult;
    })
  );
}

function handleKeyOperator(): void {
  const $operators = document.querySelectorAll(".operator");

  $operators.forEach(($operator) => {
    $operator.addEventListener("click", function () {
      const $result = document.querySelector(".result");
      const operation = $operator.getAttribute("data-value");

      let result = 0

      store.operations.push($result.textContent)

      if (operation === "=") {
        const calculation = handleCalculation(store.operations)
        store.operations = []
        result = calculation
      } else {
        store.operations.push(operation)
        result = 0
      }

      console.log("=====")
      console.log(store.operations)
      console.log("=====")

      $result.textContent = String(result)
    });
  });
}

function main(): void {
  handleReset();
  handleKeyNumber();
  handleKeyOperator();
}

export default main
