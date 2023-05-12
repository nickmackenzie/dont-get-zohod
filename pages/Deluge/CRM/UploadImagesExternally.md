# Push CRM Record Images/Files to External Server

How to push CRM record images and files to an external server on button click or workflow rule.

## Core Idea

Trigger a Deluge script from a record in CRM containing file or images in order to push them to an external server. Deluge will download the images into memory and then upload them to an external server.

## Tutorial

This example uploads files to BunnyCDN, it's also uploading the files as a blob and not form data.

```javascript
crm_result = invokeurl
[
	url :" https://www.zohoapis.com/crm/v4/Products/" + productId
	type :GET
	connection:"connectionLinkName"
];

/* Isolate file data */
fileupload = crm_result.get("data").get(0).get("FileUploadFieldAPIName");
/* Process each image */
for each rec in fileupload
{
	file = invokeurl
	[
		url :"https://www.zohoapis.com/crm/v4/Products/" + productId + "/actions/download_fields_attachment"
		type :GET
		parameters:{"fields_attachment_id":rec.get("id")}
		connection:"connectionLinkName"
	];

	file.setparamname("image");
	request_body = {"files":file};

	request_headers = Map();
	request_headers.put("AccessKey","********-****-****-************-****-****");
	request_headers.put("Content-Type","image/png");

	url = "https://ny.storage.bunnycdn.com/storageBucket/Path/" + file;
	resp = invokeurl
	[
		url :url
		type :PUT
		parameters:file
		headers:request_headers
		content-type:"application/octet-stream"
	];
	//info resp;
}
return "";
```

_Note: Change `Products` and `productId` to the respective Module Name and Record ID variable_
