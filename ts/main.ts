type Store = {
  operations: string[],
  resetOperations: Function,
  calculate:  Function
}

const store: Store = {
  operations: [],
  resetOperations: function() {
    this.operations = []
  },
  calculate: function() {
    let total = 0
    const re = /^[+\-x\/]+$/
    this.operations.forEach((operation: string) => {
      console.log(re.test(operation))
    })
  }
};

function handleReset(): void {
  const $resetBtn = document.querySelector(".reset-btn");

  $resetBtn.addEventListener("click", function () {
    const $result = document.querySelector(".result");
    store.resetOperations()
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
        store.calculate()
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
