module.exports = function check(str, bracketsConfig) {
  let arrayFromStr = str.split('');
  for (let i = 0; i < arrayFromStr.length; i++) {
    for (let k = 0; k < bracketsConfig.length; k++) {
      if (arrayFromStr[i] === bracketsConfig[k][0] && arrayFromStr[i + 1] === bracketsConfig[k][1]) {
        arrayFromStr.splice(i, 2);
        i -= 2;
      }
    }
  }
    return arrayFromStr.length === 0 ? true : false;  
  }

 
  // console.log(check('()', [['(', ')']]))
  // console.log(check('((()))()', [['(', ')']]))
  // console.log(check('())(', [['(', ')']]))