import handleCalculation from "./handleCalculation.js";
import { createStore, updateStore } from "./handleStore.js";
import { handleKeyTyping } from "./handleKeyTyping.js";

let store = createStore();

function handleReset(): void {
  const $resetBtn = document.querySelector(".reset-btn");

  $resetBtn.addEventListener("click", function () {
    const $result = document.querySelector(".result");
    store = createStore();
    $result.textContent = "0";
  });
}

function handleKeyNumber(): void {
  const $keysNumber = document.querySelectorAll(".key");

  $keysNumber.forEach(($keyNumber) =>
    $keyNumber.addEventListener("click", function () {
      const $result = document.querySelector(".result");

      let currentResult = $result.textContent;
      const keyNumberContent = $keyNumber.textContent;

      $result.textContent = handleKeyTyping(currentResult, keyNumberContent);
    }),
  );
}

function handleKeyOperator(): void {
  const $operators = document.querySelectorAll(".operator");

  $operators.forEach(($operator) => {
    $operator.addEventListener("click", function () {
      const $result = document.querySelector(".result");
      const operation = $operator.getAttribute("data-value");

      let result: Number;

      store = updateStore(store, $result.textContent);

      if (operation === "=") {
        const calculation = handleCalculation(store.operations);
        store = createStore();
        result = calculation;
      } else {
        store = updateStore(store, operation);
        result = 0;
      }

      $result.textContent = String(result);
    });
  });
}

function main(): void {
  handleReset();
  handleKeyNumber();
  handleKeyOperator();
}

export default main;
