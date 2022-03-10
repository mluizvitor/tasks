export function pixelToRem(value: number) {
  const remSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

  return (remSize / 16) * value;
}
