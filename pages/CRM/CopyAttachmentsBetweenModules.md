# Copy Attachments Between CRM Modules

How to copy record attachments between two CRM modules. In this example, we will copy from the Accounts module and move attachments to the Contacts module. 

We need to start with an Account_ID.

Most likely - you'll pass this account_ID in through the workflow automation, when the function is triggered according to some rule. In this case, we'd need to setup a workflow associated with the Accounts module to trigger this funciton, and we'd need to pass in an account ID each time.

See the code comments for more details about this funciton.

```javascript
//get the account JSON object for the given Account_ID
accountResponse = zoho.crm.getRecordById("Accounts",Account_ID);
customList = list();
customList.add(accountResponse);
//you can add multiple accounts to this list by doing another customList.add(<Account_Object>) statement.


//for each Account, iterate this loop. If there is only one account, still add it to
//customList with the .add function and this loop will only run one time
for each  record in customList
{
    //get the Account ID
	id = record.get("id");
	
    //find related attachments with this Account
	relatedAttachments = zoho.crm.getRelatedRecords("Attachments","Accounts",id.toLong());
	
    //get the first Contact assocaited with this Account
	relatedContact = zoho.crm.getRelatedRecords("Contacts","Accounts",id.toLong(),1,1);
	
    //get the record ID and name of this Contact
	contactId = relatedContact.get(0).getJson("id");
	contactName = relatedContact.get(0).getJson("Stud_Name");
	
    //for each attachment associated with the current Account, iterate this loop
	for each  rec in relatedAttachments
	{
        //get the file name and record ID of the attachment
		fileName = rec.get("File_Name");
		fileRecordId = rec.get("id");
		
        //generate a formatted URL for the api call
		formattedUrl = "https://zohoapis.com/crm/v3/accounts/" + id + "/attachments/" + fileRecordId;
		invokeParams = Map();
		invokeParams.put("fields_attachment_id",fileRecordId);
		
        //execute API call to download the attachment
		downloadResponse = invokeurl
		[
			url : formattedUrl
			type : GET
			parameters : invokeParams
			connection : "<Oauth_Connection_Name>"
		];
		
        	//upload this attachment back to the target module, in this case "Contacts"
		uploadResponse = zoho.crm.attachFile("Contacts",contactId,downloadResponse, "allmodules");
	}
}
//if you get a return error, you may need to uncomment this return statement
// return "";
```

Contributor: Daniel Whiteside
daniel.w@zohocorp.com
Last Updated: 5/14/2023