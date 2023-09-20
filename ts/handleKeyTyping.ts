export function handleKeyTyping(
  currentString: string,
  keyTyped: string,
): string {
  let result = "";

  if (currentString === "0") {
    result = keyTyped;
  } else {
    result = currentString + keyTyped;
  }

  return result;
}
