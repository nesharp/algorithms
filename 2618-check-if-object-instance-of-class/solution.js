/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
const checkIfInstanceOf = function (obj, classFunction) {
   if(obj == null){
    return false
   }
   if(typeof classFunction === "function"){
    return Object(obj) instanceof classFunction
   }
   return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
module.exports = { checkIfInstanceOf };