const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const findSmallestNumber = numbers => Math.min(...numbers);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
kiwi

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
53,64,91,96,81,85,18,86,77,82,49,48,14,31,33,65,72,99,50,26,52,8,4,47,0,78,87,23,73,19,79,57,86,76,89,24,25,27,87,35,28,77,15,56,51,16,64,52,18,79,78,28,30,98,76,90,83,8,19,18,79,24,92,62,56,58,87,78,87,1,88,42,91,15,79,1,15,29,8,61,26,93,53,32 - 48,83,30,33,71,86,34,97,43,47,96,15,90,90,0,92,76,88,84,31,97,52,32,27,85,63,64,59,48,41,65,87,86,64,58,5,89,3,3,63,68,39,26,49,54,39,36,36,13,94,3,6,77,57,93,53,45,41,39,12,39,36,5,71,78,89,80,7,94,58,46,50
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
