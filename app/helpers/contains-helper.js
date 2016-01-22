export function contains(a, b) {
  if (typeof b == 'undefined' || b == null) {
    return true;
  }
  return a.toLowerCase().search(b.toLowerCase()) != -1
}
