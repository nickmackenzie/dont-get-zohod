---
title: Update URL Field
description: Updating an URL field in Zoho Creator can be tricky if you dont know how. Here is how to do it
---
# Deluge Script:

```javascript
void update_url_field()
{
	optional =Map();
	datamap = Map();
	URLmap = Map();
    //Value is the name that will appear in your forms
	URLmap.put("value", "Zylker");
	URLmap.put("url","www.zylker.com");
    //Title is needed because of Zoho
	URLmap.put("title", "Zylker - Title");
	datamap.put("URL_Field",URLmap);
	response = zoho.creator.createRecord("owner", "app", "form", datamap, optional, "creator_connection");
}
```

## Notes
1. `"optional"` is a Map created because is mandatory in createRecord call. No problem being empty
2. You can add URL field anywhere in Creator. Zoho Documentation is avaliable here: `https://help.zoho.com/portal/en/kb/creator/developer-guide/forms/add-and-manage-fields/articles/fields-url-understand#Examples`

Contributor: Manu Quiroga
hola@manuelquiroga.com
Last Updated: 11/01/2024