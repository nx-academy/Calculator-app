function hasOperation(operations: string[]): string {
    const re = /^[+\-x\/]+$/;
    return operations.find((operation) => re.test(operation));
}

export default hasOperation
