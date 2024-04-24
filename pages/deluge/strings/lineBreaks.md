---
title: Line Breaks in Deluge Strings
description: Create a new line in Deluge strings.
---

# Line Breaks in Deluge Strings

This script lets you add line breaks to strings in Deluge. This is done using hex codes as `\n` and `<br>` aren't supported.

```javascript
newLine = hexToText("0A");
string = "Hello" + newLine + "World";
```
