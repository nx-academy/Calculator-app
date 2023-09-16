type Store = {
  operations: string[]
}

const store: Store = {
  operations: []
}

function handleCalculation(operations: string[]) {
  const re = /^[+\-x\/]+$/;
  const operation = operations.find(operation => re.test(operation))

  switch(operation) {
    case '+':
      console.log("Make sum")
      break
    case '-':
      console.log("Make sub")
      break
    case '/':
      console.log("Make division")
      break
    case 'x':
      console.log("Make multiplication")
      break
    default:
      throw new Error("Unknown operation")
  }
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

      store.operations.push($result.textContent)

      if (operation === "=") {
        console.log(store.operations)
        handleCalculation(store.operations)
      } else {
        store.operations.push(operation)
      }


      $result.textContent = "0";
    });
  });
}

function main(): void {
  handleReset();
  handleKeyNumber();
  handleKeyOperator();
}

main();
