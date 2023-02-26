module.exports = function check(str, bracketsConfig) {
  let border = str.length;
  bracketsConfig.forEach(a => str = str.split(a[0] + a[1]).join(''));
    if (str.length === 0) {
      return true 
      } else if (str.length === border) {
        return false 
      } else return check(str, bracketsConfig)
      }
