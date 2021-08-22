export function validateUpdate(source, payload) {
  try {
    Object.keys(payload).forEach((e) => {
      if (!source[e]) {
        throw new TypeError("Payload corrupted");
      }
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export function validatePush(object) {
  return (
    typeof object === "object" && object !== null && !Array.isArray(object)
  );
}
