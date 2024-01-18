---
title: Copy Billing Address to Shipping
description: Learn how to create a function that copies billing information to shipping and vice versa
---
# Deluge Script:

```javascript
mapVal = Map();
mapVal.put("Shipping_Street", billingStreet);
mapVal.put("Shipping_City", billingCity);
mapVal.put("Shipping_State", billingState);
mapVal.put("Shipping_Zip", billingZip);
response = zoho.crm.updateRecord("Accounts", accountId, mapVal);
if (response.get("Modified_Time") != null)
{
    return "Billing Address Copied to Shipping Address";
}
else
{
    return "Error in Copying Address";
```
Note: Replace `"Field_Name"` with the actual API name of the CRM field you want to update (like `"Shipping_Street"`), and `variable` with the corresponding variable (like `billingStreet`) that holds the data you want to use for updating. Ensure these variables are correctly assigned with values from the relevant CRM fields or user inputs before running the script.

