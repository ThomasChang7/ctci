var uniqString = function(str) {
  var map = {};
  for (let i = 0; i < str.length; i++){
    if (map[str[i]] === undefined){
      map[str[i]] = i;
      console.log(i);
    } else {
      return false;
    }
  }
  return true;
};