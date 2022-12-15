export const validateInput = (input) => {
  return input.match(/^[^<>/\\{}*]*$/g)
}