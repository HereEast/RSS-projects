// Array of tags line by line
export function getTagsArray(code: string): string[] {
  const arr = code
    .split("\n")
    .map((str) => str.trim())
    .filter((str) => str.length);

  return arr;
}
