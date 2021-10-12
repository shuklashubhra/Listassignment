export function arrayDiff(array1 = [],array2 = []) {
  const arr2 = new Set(array2);
  return array1.filter(item => !arr2.has(item));
}

export function arrayIntersection(array1 = [], array2 = []) {
  const arr2 = new Set(array2);
  return array1.filter(item => arr2.has(item));
}

export function arrayUnion(array1 = [], array2 = []) {
  return [...new Set([...array1, ...array2])];
}
