```javascript
var leadsResult = ZDK.Apps.CRM.Leads.searchByCriteria(
  "((First_Name:starts_with:M)or(First_Name:starts_with:T))"
);
if (leadsResult && leadsResult.length > 0) {
  for (var index in leadsResult) {
    var leadRecord = leadsResult[index];
    log(index + ") " + leadRecord.Full_Name);
  }
} else {
  log("No matching records");
}
```
