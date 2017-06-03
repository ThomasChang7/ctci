var stringCompression = function(string) {
  var compressed = '';
  var currCount = '';
  var currChar = '';
  var checker = 1;
  for (var i = 0; i < string.length; i++) {
    if (currChar !== string[i]) {
      compressed = compressed + currChar + currCount;
      currChar = string[i];
      checker = Math.max(checker, currCount);
      currCount = 1;
    } else {
      currCount++;
    }
  }
  checker = Math.max(checker, currCount)
  compressed = compressed + currChar + currCount;
  return checker === 1 ? string : compressed;
}

console.log(stringCompression("bbb"));