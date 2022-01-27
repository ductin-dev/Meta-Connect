export const isNumber = (a, min, max) => {
  try {
    if (a < min || a > max) return false;
    return !isNaN(parseFloat(a)) && isFinite(a);
  } catch (exception_var) {
    return false;
  }
};
export const isEmpty = (a) => {
  return a.trim() === "";
};
