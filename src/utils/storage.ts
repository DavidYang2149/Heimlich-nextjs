export const loadItem = ({ key }: { key: string}) => {
  return localStorage.getItem(key);
};

export const saveItem = ({ key, value }: { key: string, value: string }) => {
  localStorage.setItem(key, value);
};

export const removeItem = ({ key }: { key: string }) => {
  localStorage.removeItem(key);
};

export const clearItem = () => {
  localStorage.clear();
};
