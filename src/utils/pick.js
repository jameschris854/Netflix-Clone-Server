/**
 * @name pick
 * @param {Objet} object
 * @param {array} keys
 * @description This metod is used to get the value of a key from an object
 * @returns Object
 */
 const pick = (object, keys) => {
    return keys.reduce((obj, key) => {
      //using call() to acess the actual hasOwnPropery and not any overridden ones
      if (object && Object.prototype.hasOwnProperty.call(object, key)) {
        obj[key] = object[key];
      }
  
      return obj;
    }, {});
  };
  
  module.exports = pick;