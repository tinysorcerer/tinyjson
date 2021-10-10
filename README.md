# TINYJSON

State database without dependencies.

## How to

### Setup

Import class

```javascript
import TinyJson from './path/to';
```

Or

```javascript
import TinyJson from '@tinysorcerer/tinyjson';
```

### Use

The class makes `push`, `pop`, and `update` available to interact with the object.

```javascript
const t = new TinyJson();

t.push({ value: true });
t.push({ value: false });
t.push({ value: 'lorem' });
/**
 * Initial Value:
 * [
 *   { value: true, _id: "dyt-ezpzg" },
 *   { value: false, _id: "gek-xyyxp" },
 *   { value: "lorem", _id: "eei-vfsmi" }
 * ]
 */

t.pop('gek-xyyxp');
/**
 * Remove 2nd Entry:
 * [
 *   { value: true, _id: "dyt-ezpzg" },
 *   { value: "lorem", _id: "eei-vfsmi" }
 * ]
 */

t.update('eei-vfsmi', { value: false });
/**
 * Update Last Entry:
 * [
 *   { value: true, _id: "dyt-ezpzg" },
 *   { value: false, _id: "eei-vfsmi" }
 * ]
 */

console.log(t.get);
/**
 * Final Value: [{"value":true,"_id":"dyt-ezpzg"},{"value":false,"_id":"eei-vfsmi"}]
 */
```

> `yarn test` to see this in action.
