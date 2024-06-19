---
title: Get a value type in Deluge
description: Learn how to get a value type in Deluge.
---

# Get a value type in Deluge

This Deluge function allow to get the type of a value in Deluge. Types does not exist in Deluge, basically all values are strings but using some vary weird operations to determine which ones works we can figure out the type of the variable.

Create a function named `typeOf` in with the xVariable String parameter and code below.

```javascript

//xVariable = "";
//
// Unknown
if(xVariable == null)
{
	return "null";
}
// Date/Time
try
{
	// Check for date/time before boolean, because it is not working with them!
	this_is_not_workig_with_date_time = xVariable in {true};
}
catch (e)
{
	return if(xVariable.contains(":"),"time","date");
}
// String
if(xVariable == "" && xVariable.toString() == "")
{
	// Check for strings before others, because some functions also works with strings if null was sent as parameter when they should not!
	// For lists such [null, 1, 2,3] (xVariable == "") return true so also have to check stringified variable
	return "string";
}
// Number
if(xVariable.matches('^(-?\d+(\.\d+)?)$'))
{
	return "number";
}
// Boolean
if(xVariable in {true,false})
{
	return "boolean";
}
// XPathResponse
if(xVariable.matches('^((<.+?>.*?<\/.+?>(-\|-)?))+$'))
{
	return "xpathresponse";
}
// Map
try
{
	// {} {'a': 1} {'l': [1, 2, 3]}
	xVariable.put("it works only with maps (AND strings, for some reason!)","");
	return "map";
}
catch (e)
{
}
// List
try
{
	if(xVariable.toString("it works only with lists (AND maps, but return null)") != null)
	{
		return "list";
	}
}
catch (e)
{
}
// String - everything else, if does not fit any other type
return "string";
```
