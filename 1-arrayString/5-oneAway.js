var oneAway = function(str1, str2){
  var map = {};
  var strike = 0;
  var diff = Math.abs(str1.length - str2.length);
  if (diff > 1) {
    return false;
  }
  for (var i = 0; i < str1.length; i++){
    if (map[str1[i]] === undefined) {
      map[str1[i]] = 0;
    } else {
      map[str1[i]]++;
    }
  }
  for (var j = 0; j < str2.length; j++){
    if (map[str2[j]] === undefined) {
      strike++;
    } else {
      map[str2[j]]--
    }
    if (strike > 1 ){
      return false;
    }
  }
  return true;
}
