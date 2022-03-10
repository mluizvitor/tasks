export function pixelToRem(value: number) {
  const desktopReference: number = Number(
    process.env.REACT_APP_DESKTOP_REFERENCE_VALUE
  );
  const remSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

  return (remSize / desktopReference) * value;
}
