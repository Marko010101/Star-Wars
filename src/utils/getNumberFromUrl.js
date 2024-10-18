export const getNumberFromUrl = (url) => {
  return url
    .split("/")
    .filter((el) => Boolean(el))
    .pop();
};
