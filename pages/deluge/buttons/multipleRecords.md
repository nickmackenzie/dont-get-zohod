---
title: Create a Button That Will Handle Multiple Records
description: Learn how to create a button that can handle multiple records by looping through a list of record IDs and performing logic on each record.
---

# Create a button that will handle multiple records

Loop through the record id list that is passed in and then grab the full record based on the ID.

Replace `idsVariable` with the named variable passed into the function.

```javascript
IdsList = idsVariable.toList("|||"); /* This will be the parameter you give the function */
for each recId in IdsList
{
/* Put Logic In here */
}
return "Success";
```
