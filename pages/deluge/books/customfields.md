# Zoho-Books-Custom-Fields
This script will get custom field records from an Invoice, then update the custom fields on the Invoice.

## Configuration
This function is intented to run in Zoho Books. You must have custom fields on the record you are working on. Learn to create custom fields in Zoho Books [here](https://www.zoho.com/us/books/help/settings/preferences.html#:~:text=To%20create%20a%20new%20custom,the%20top%20of%20the%20page.).

Note: Only custom fields with values will appear in the custom_fields key in the Invoice record.

```javascript
// Get Record and Organization Variables
invoiceId = invoice.get('invoice_id');
organizationId = organization.get('organization_id');

/*
 Get Custom Fields from Record
 */
// Get Custom Fields and Iterate over each Custom Field
customFields = invoice.get('custom_fields').toList();
for each  customField in customFields
{
	label = customField.get('label');
	value = customField.get('value');
}

/*
 Update Custom Fields on Record
 */
// Create List of Custom Fields
customFieldList = List();
customFieldMap1 = Map();
customFieldMap1.put('label', 'YOUR CUSTOM FIELD LABEL');
customFieldMap1.put('value', 'YOUR CUSTOM FIELD VALUE');
customFieldList.add(customFieldMap1);

// Create Map for Updating the Invoice
updateInvoiceMap = Map();
updateInvoiceMap.put('custom_fields', customFieldList);

// Update Invoice
updateInvoice = zoho.books.updateRecord('Invoices', organizationId, invoiceId, updateInvoiceMap);
info updateInvoice;
```