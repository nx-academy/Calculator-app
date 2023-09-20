function handleCalculation(operations: string[]): number {
  const re = /^[+\-x\/]+$/;
  const operation = operations.find((operation) => re.test(operation));

  let total = 0;

  switch (operation) {
    case "+":
      console.log("Make sum");
      total = Number(operations[0]) + Number(operations[2]);
      break;
    case "-":
      console.log("Make sub");
      total = Number(operations[0]) - Number(operations[2]);
      break;
    case "/":
      console.log("Make division");
      total = Number(operations[0]) / Number(operations[2]);
      break;
    case "x":
      console.log("Make multiplication");
      total = Number(operations[0]) * Number(operations[2]);
      break;
    default:
      throw new Error("Unknown operation");
  }

  return total;
}

export default handleCalculation;
