export const numberToLetter = (num: number): string => {
  if (num < 0 || num > 25) {
    return ''
  }
  return String.fromCharCode(65 + num)
}
