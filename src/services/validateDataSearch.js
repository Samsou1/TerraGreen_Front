export const validateDataSearch = (search) => {
  return search.match(/^[A-z\s'-]+$/);
};
