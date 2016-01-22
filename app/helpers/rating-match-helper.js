export function match(rating, query) {
  if (typeof query === 'undefined' || query === null || !!!query.match(/(<|>)*.*\d{1}(.\d)?/)) {
    return true;
  }

  var sign = /<|>/.exec(query);
  var value = parseFloat(/\d{1}(.\d)?/.exec(query)[0]);

  if (sign === null) {
    return rating === value;
  } else if (sign[0] === '<') {
    return rating < value;
  } else if (sign[0] === '>') {
    return rating > value;
  }
}
