import { validatePush, random } from './utils/mod.js';

/**
 * Creates _db[]_ as an empty array.
 */
export default class TinyJSON {
  constructor() {
    this.db = [];
  }

  /**
   * Validate `payload` and push to _db[]_.
   *
   * @param {Object} payload
   */
  push(payload) {
    try {
      if (validatePush(payload)) {
        payload._id = random();
        this.db.push(payload);
      } else {
        throw new TypeError('Payload must be an object');
      }
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Find object with matching `id`, loop through _db[]_ and reconstruct with `payload`.
   *
   * When `strict`, update only contained keys, otherwise allow new entries.
   *
   * @param {String} id
   * @param {Object} payload
   * @param {Boolean} strict
   */
  update(id, payload, strict = true) {
    const obj = this.db.find((i) => i._id === id);

    for (const key in payload) {
      if (validatePush(obj[key])) {
        update(obj[key], payload[key]);
      } else {
        if (strict) {
          if (obj.hasOwnProperty(key)) {
            obj[key] = payload[key];
          }
        } else {
          obj[key] = payload[key];
        }
      }
    }
  }

  /**
   * Find entry matching `id`
   * @param {String} id
   */
  find(id) {
    return this.db.find((i) => i._id === id);
  }

  /**
   * When `id`, remove matching object; otherwise, remove last entry.
   *
   * @param {String} id
   */
  pop(id) {
    if (id) {
      this.db = this.db.filter((i) => i._id !== id);
      return;
    }

    this.db.pop();
  }

  /**
   * Return **stringified** _db[]_
   */
  get get() {
    return JSON.stringify(this.db);
  }
}
