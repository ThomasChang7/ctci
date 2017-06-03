var checkPerm = function(str1, str2) {
  if (str1.length !== str2.length){
    return false;
  } else {
    var sorted1 = str1.split('').sort().join;
    var sorted2 = str2.split('').sort().join;
    if (sorted1 === sorted2){
      return true
    } else {
      return false;
    }
  }
}