import handleCalculation from "./handleCalculation.js";
import { createStore, updateStore } from "./handleStore.js";
import { handleKeyTyping } from "./handleKeyTyping.js";

let store = createStore();

function handleTheme(): void {
  const $themeCheckboxes = document.querySelectorAll('.tw-toggle-input')

  $themeCheckboxes.forEach($checkbox => {
    $checkbox.addEventListener('change', function(e) {
      const value = (e.target as HTMLInputElement).value
      const $html = document.querySelector('html')
      
      $html.classList.remove('theme-1')
      $html.classList.remove('theme-2')
      $html.classList.remove('theme-3')
      $html.classList.add(value)
    })
  })
}

function handleReset(): void {
  const $resetBtn = document.querySelector(".reset-btn");

  $resetBtn.addEventListener("click", function () {
    const $result = document.querySelector(".result");
    store = createStore();
    $result.textContent = "0";
  });
}

function handleDeleteButton(): void {
  const $delBtn = document.querySelector(".del-btn");

  $delBtn.addEventListener("click", function () {
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
  handleTheme()
  handleReset();
  handleDeleteButton();
  handleKeyNumber();
  handleKeyOperator();
}

export default main;
