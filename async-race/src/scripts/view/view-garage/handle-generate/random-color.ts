// Color value
export function getColorValue(): string {
  return Math.ceil(Math.random() * 255)
    .toString(16)
    .padStart(2, "0");
}

// Random color
export function getRandomColor(): string {
  const red = getColorValue();
  const green = getColorValue();
  const blue = getColorValue();

  const hexColor = `#${red}${green}${blue}`;

  return hexColor;
}
