const storeData =(key,value) => {
  localStorage.setItem(key,JSON.stringify(value));
}

const getData =(key) => {
 return JSON.parse(localStorage.getItem(key));
}
const removeData =(key) => {
  return localStorage.clear();
 }
export {storeData,getData,removeData}