var palindrome = function(string){
  var map = {};
  var seen = [];
  var even = 0;
  var odd = 0;
  var stringArr = string.split('');
  for (var i = 0; i < string.length; i++){
    if (stringArr[i] === ' '){
      continue;
    } else if (map[stringArr[i]] === undefined){
      map[stringArr[i]] = 1;
      seen.push(stringArr[i]);
    } else {
      map[stringArr[i]]++;
    }
  }
  for (var j = 0; j < seen.length; j++){
    if(map[seen[j]] % 2 === 0){
      even++;
    } else {
      odd++;
      console.log(odd)
    }
    if (odd > 1){
      return false
    }
  }
  return true;
}