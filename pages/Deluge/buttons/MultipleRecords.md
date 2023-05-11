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
