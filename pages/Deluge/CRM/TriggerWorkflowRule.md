# Zoho-CRM-Trigger-Workflow-Assignment-Rule-Deluge
How to trigger workflow rules & assignment rules when Zoho CRM records are created, updated, or deleted via Deluge.

## Core Idea
When a Zoho CRM record is created / updated / deleted via Deluge, it does not trigger any associated workflow rule / assignment rule that you have set up in CRM if you do not tell it to do so. This is in a way, more of a feature than a limitation as it offers developers more flexibility. This article demonstrates the different trigger parameters needed to perform these actions.

## Tutorial

### Create Records
For record creation, it's rather easy and straightforward. If you're using a [Deluge task](https://www.zoho.com/deluge/help/crm/create-record.html), all you need to do is to insert a `{"trigger":{"workflow"}}` parameter after the create record map.

```javascript
mp = {"Name":"Joe","Phone":"+1 678 XXX XXXX","Email":"joe@theworkflowacademy.com"};
response = zoho.crm.createRecord("Leads",mp,{"trigger":{"workflow"}});
```
*Note: Change "Leads" and "mp" to the respective Module Name and map variable*

To trigger assignment rules on record creation, first, you need to get the assignment rule ID (you can get it from the URL of the assignment rule), and put it in a map with "lar_id" as the key, and the assignment rule ID as the value. Then, insert it as a parameter at the end of your Deluge task.

* If you wish to trigger the assignment rule alone:
```javascript
response = zoho.crm.createRecord("Leads", mp, {"lar_id":"4409363000012741244"});
```
* If you wish to trigger both workflow and assignment rule, add it inside the trigger workflow map, after the trigger workflow parameter:
```javascript
response = zoho.crm.createRecord("Leads", mp, {"trigger":{"workflow"},"lar_id":"4409363000012741244"});
```
*Note: Replace "4409363000012741244" with the respective assignment rule ID.*

### Update Records
Unfortunately, the `{trigger":{"workflow"}}` parameter does not work for updates. To trigger workflows on record updates, you need to use the following API call instead.

If you do not specify the trigger, it will automatically trigger workflows, blueprints and approvals. 
* If you **do not** wish to trigger, you need to enter the trigger value as `[]` (an empty list) in the *trigger* parameter.
  * It's important to switch off the trigger if your script is being triggered on Edit of any field to prevent a self-triggering loop from happening.
* If you wish to only trigger the workflow, add "workflow" into the list for the *trigger* parameter like below.

```javascript
datalist = List();
mp=Map();
mp.put("Lead_Status","Pre-Qualified"); //Insert your update map here
datalist.add(mp);
triglist = List();
triglist.add("workflow");
datamap = Map();
datamap.put("data",datalist);
datamap.put("trigger",triglist);
response = invokeurl
[
  url:"https://www.zohoapis.com/crm/v2/Leads/"+leadid
  type :PUT
  parameters:datamap.toString()
  connection:"crm_oauth_connection" 
];
info response;
```
*Note: Change "Leads" and "leadid" to the respective Module Name and Record ID variable*

### Delete Records

When deleting a record via the [delete record API call](https://www.zoho.com/crm/developer/docs/api/v2/delete-records.html), you need to add the `wf_trigger=true` parameter at the end of the URL.

```javascript
response = invokeurl
[
	url: "https://www.zohoapis.com/crm/v2/Leads?ids=leadid&wf_trigger=true"
	type: DELETE
	connection:"crm_oauth_connection"
];
info response;
```
*Note: Change "Leads" and "leadid" to the respective Module Name and Record ID variable*
