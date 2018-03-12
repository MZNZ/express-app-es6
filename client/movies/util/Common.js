export const getDeepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};