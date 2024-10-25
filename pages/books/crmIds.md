---
title: Fetch Records Using CRM IDs
description: Fetch a Books record using the CRM equivalents id. eg. Account == Customer, Contacts == Contact Person
---

# Fetch Records Using CRM IDs

You can fetch Books records using the records CRM ID when using the Books to CRM integration. This allows you to fetch a Books contact record using the CRM account id, as well as other records. The Books API documentation only lists accounts, contacts, and vendors as module options but any integration module should work.

## Prerequisites

- Enable the Books to CRM integration.
- Create a Deluge script to access the data, or utilize it through the Books API.

## Deluge Script

```javascript
booksOrgId = "**************";
contactId = "**************";
connectionName = "**************";

customer = zoho.books.getRecords("Customers", booksOrgId, "zcrm_contact_id=" + contactId, connectionName);
```

## Known Id Options

| Crm Module | Books Module    | Field           |
| ---------- | --------------- | --------------- |
| Accounts   | Contacts        | zcrm_account_id |
| Contacts   | Contact Persons | zcrm_contact_id |
| Vendors    | Contacts        | zcrm_vendor_id  |
| Products   | Items           | zcrm_product_id |
