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
        const $result = document.querySelector('.result')
        let currentResult = $result.textContent

        if (currentResult === "0") {
            currentResult = $keyNumber.textContent
        } else {
            currentResult = currentResult + $keyNumber.textContent
        }
    
        $result.textContent = currentResult
    })
  );
}

function main(): void {
  handleReset();
  handleKeyNumber();
}

main();
