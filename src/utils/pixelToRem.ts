import AppPackage from '../../package.json';

export function pixelToRem(value: number) {
  const remSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

  return (remSize / AppPackage.desktopReference) * value;
}
