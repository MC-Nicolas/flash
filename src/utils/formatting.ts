// remove Special Characters from string and accents
export const removeSpecialCharacters = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
};

// convert object to array
export const convertObjToArr = (obj: any) =>
  Object.keys(obj).map((key) => obj[key]);

// extract keys in object
export const extractKeys = (obj: any) => Object.keys(obj);
