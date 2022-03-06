export function genId() {
  const charBase =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let newId = "";

  for (let i = 0; i < 20; i++) {
    newId += charBase.charAt(Math.floor(Math.random() * charBase.length));
  }

  return newId;
}
