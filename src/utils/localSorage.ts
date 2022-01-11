export const setItemToLocalStorage = (key: string, data: string | number | boolean | number[] | string[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getItemFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key)!);
};
