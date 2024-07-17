---
title: Search By Criteria
description: Search for records with a specific criteria using a client script.
---

# Search By Criteria

Search for records with a specific criteria using a client script and loop through the results.

## Client Script:

```javascript
var leadsResult = ZDK.Apps.CRM.Leads.searchByCriteria(
  "((First_Name:starts_with:M)or(First_Name:starts_with:T))" //Replace with your criteria
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
