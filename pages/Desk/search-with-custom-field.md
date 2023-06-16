# Searching Zoho Desk with Custom Field Values

If you're like me, you may have spent a long time trying to find a way to search Zoho Desk records with the search criteria being a custom field value. The trick is simple, but it took some time with Zoho official support to find the answer. 

Here's how you should set up your search criteria. No matter the name of your custom field, you have to use the key "customField1" where the value is a string-formatted version of the customfield name and value, like this:

```
criteriaMap = Map();
criteriaMap.put("customField1","<Custom_Field_Name>:<Custom_Field_Value>");
```

You can also see docs for this function - https://www.zoho.com/deluge/help/desk/search-records.html

## Example
```
// Step 1 - first you must specify your orgId. You can find your orgId in Zoho Desk by going to settings > API > scroll all the way down to the bottom of the page.

orgId = "<Your_Org_ID>";

//Step 2 - create a JSON object/Map with for the custom field search
criteriaMap = Map();

//search across custom field
criteriaMap.put("customField1", "propertyId:140984578458");
criteriaMap.put("customField2", "contactName:Jeff Stone");

//execute the search
deskResponse = zoho.desk.searchRecords(orgId,"Accounts",criteriaMap,1,5,"<Your_Oauth_Connection_Name>");

//now display your data like this
info deskResponse;
```

Contributed by Daniel Whiteside - daniel.w@zohocorp.com - June 2023