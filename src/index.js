module.exports = function reverse (n) {
  var n_string = n.toString();
  var res = n_string.split('').reverse().join('');
  return Number.parseInt(res);
}
