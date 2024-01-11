---
title: Get Records from a Custom View with pagination
description: Learn how to get module records of a CRM custom view with pagination
---
# Deluge Script:

```javascript
moduleName = "MODULE_NAME";
//Custom View ID can be found in the Zoho CRM URL
custVID = "xxxx";
// getRecords has a maxium of 200 items per page, so pagination is mandatory if you have more than that
pages = {1, 2, 3, 4};
for each p in pages {
    listRecords = zoho.crm.getRecords(modulename, p, 200, { "cvid": custVID });
    for each account in listRecords {
        //Do what you want with the records here 
    }
}
//Return is mandatory for a indepent function in Zoho CRM 
return "Done";
```

## Usage Instructions:
1. Replace `"MODULE_NAME"` with your API name module in Zoho CRM. It can be found in the CRM settings
2. Add the custom view ID in `custVID`. ID can be easily found in the CRM URL. Example: `https://crm.zoho.eu/crm/zylker/tab/Leads/custom-view/189477000000030939/list`. 189477000000030939 is the ID

Contributor: Manu Quiroga
hola@manuelquiroga.com
Last Updated: 11/01/2024

