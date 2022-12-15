export const validateInput = (input) => {
  console.log(input)
  return input.match(/^[^<>/\\{}*]*$/g)
}