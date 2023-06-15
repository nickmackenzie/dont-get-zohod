---
title: Generate a UUID-esque in Deluge
description: Learn how to generate a UUID-esque string in Deluge.
---
# Generate a UUID\* in Deluge

This script lets you generate a UUID-_esque_ string. It is not truly unique as all numbers are random from a static range.

```javascript
m1 = randomNumber(10000, 66535);
m2 = randomNumber(10000, 66535);
m3 = randomNumber(10000, 66535);
m4 = randomNumber(10000, 66535);
m5 = randomNumber(10000, 66535);
m6 = randomNumber(10000, 66535);
m7 = randomNumber(10000, 66535);
m8 = randomNumber(10000, 66535);

m1h = m1.toHex();
m2h = m2.toHex();
m3h = m3.toHex();
m4h = m4.toHex();
m5h = m5.toHex();
m6h = m6.toHex();
m7h = m7.toHex();
m8h = m8.toHex();

m4h = "4" + m4h.subString(1, 4);
m5h = "8" + m5h.subString(1, 4);

uuid = m1h + m2h + "-" + m3h + "-" + m4h + "-" + m5h + "-" + m6h + m7h + m8h;
return uuid;
```
