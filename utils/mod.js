export function validatePush(object) {
  return (
    typeof object === 'object' && object !== null && !Array.isArray(object)
  );
}

export function random() {
  return `${Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 3)}-${Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5)}`;
}
