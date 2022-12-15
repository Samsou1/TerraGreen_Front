export const validateDataSearch = (search) => {
  return search.match(/\b((?!=|\,|\.).)+(.)\b/);
};
