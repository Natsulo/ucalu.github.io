function fatorial(numero) {
  if (n < 0) return
  if (n === 0 || n === 1) return 1;
  for (let i = 1;i <= numero; i++) {
    i *= i
  }
  return i
}
console.log(fatorial(5))