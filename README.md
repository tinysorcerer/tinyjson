# TINYJSON

State database

## Instructions

Import module.

```javascript
import TinyJson from "./tinyjson/";
```

You can `push` an object, `pop` the last entry, and `update` values positionally.

```javascript
const db = new TinyJson();

db.push({ id: "98c5a8b9-f2f2-43cc-b56e-91165cfbe62e", value: true });

db.pop();

db.update(0, { id: "null" });

console.log(db.get); //  OUTPUT<[{id:"null"}]>
```

with ❤️  and vanilla, no dependencies.
