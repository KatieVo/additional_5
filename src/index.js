module.exports = function check(str, bracketsConfig) {
  if (str.length%2) {
    return false;
  }

  var map = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    map[bracketsConfig[i][0]] = bracketsConfig[i][1]; 
  }
  
  str = str.split(''); 
  
  var brackets = [];
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      brackets.push(str[i]); 
        
    } else {
      var lastPushed = brackets.pop();
      if (map[lastPushed] !== str[i]) {
        return false;
      }
    } 

    if (map[str[i]] === str[i] && brackets[brackets.length-2] === str[i]) {
      brackets.pop();
      brackets.pop();
    }
  }
  
  return brackets.length ? false : true;
};
