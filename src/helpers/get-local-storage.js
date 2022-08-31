const getFromStorage = () => {
  const arrVal = [];
  const arrKey = Object.keys(localStorage);
  for (let i of arrKey) {
    const value = JSON.parse(window.localStorage.getItem(i));
    arrVal.push(value);
  }
  return arrVal;
};

export default getFromStorage;
