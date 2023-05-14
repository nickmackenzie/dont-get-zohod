# Lookup to CRM From SalesIQ

Here, I used Zoho SalesIQ to build a simple codeless chatbot. I wanted to extend it features slightly with some custom code. 

The chatbot will ask for a zip code that a user will type in. We will store this zip code in a context variable, and send a request to Zoho CRM for any Account Records associated with that zip code. 

Then we will return an "Options List" data type containing the Account_Name for each active account in that zip code to the chatbot.

## Configure the Codeless Bot Plug Card
Plug Inputs: zipCode (Context Variable, number)

A context variable is a variable that has been defined since the chat started and is unique for each chat. This means you need to ask the user for their zip code and store it in a context variable. Before You need a separate User Input chat card to input a number value, and save that value as a context variable called zipCode.

Basically - make sure you ask the user for their zip code in the codeless bot before you add this Plug - otherwise it won't work.

## Example

```javascript
//session.get helps you get session variables
//Session variables are reset everytime a new chat starts
zip = session.get("zipCode").get("value");

//info session;

//set criteria string in the format (Column_Name:operator:Field_Name)
criteriaString = "(Shipping_Code:equals:" + zip + ")";

//Search accounts with this criteria, zoho.crm.searchRecords returns a List() object
crmResponse = zoho.crm.searchRecords("Accounts",criteriaString);

//setup before loop
optionList = List();
i = 1;

//for each property in the criteria zip code that is a current client,
//add the property to the options list
for each  property in crmResponse
{
	if(property.get("STATUS") == "Current Client")
	{
		propertyName = property.get("Account_Name") + " - " + property.get("Full_Shipping_Address");
		optionList.add({"id":i.toString(),"text":propertyName});
		i = i + 1;
	}
}

//format the response correctly, chatbot is expecting an object like this:
//      {"properties": [List of Properties] }
//you can configure what your chatbot expects to be returned when you select Add Plug
//in the codeless bot builder
response = Map();
response.put("properties",optionList);

//return list of properties which are in the zip code that the user typed in the chatbot
return response;
```

Contributor: Daniel Whiteside
daniel.w@zohocorp.com
Last Updated: 5/14/2023