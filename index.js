import { validatePush, validateUpdate } from "./utils/validations.js";

export default class TinyJSON {
  constructor() {
    this.data = [];
    this.push = (obj) => this.data.push(obj);
    this.pop = () => this.data.pop();
    this.update = (i, obj) => (this.data[i] = obj);
  }

  push(payload) {
    try {
      if (validatePush(payload)) {
        this.push(payload);
      } else {
        throw new TypeError("Payload must be an object");
      }
    } catch (e) {
      console.log(e);
    }
  }

  update(index, payload) {
    try {
      if (validateUpdate(this.data[index], payload)) {
        this.update(index, payload);
      } else {
        throw new TypeError("Payload corrupted");
      }
    } catch (e) {
      console.log(e);
    }
  }

  pop() {
    this.pop();
  }

  get get() {
    return this.data;
  }
}
