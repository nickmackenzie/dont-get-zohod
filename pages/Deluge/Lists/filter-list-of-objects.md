# Filter List of Objects

Filters a list list of objects against another list of objects grouping similar objects and non similar objects.

## How This Works

The function loops through the list of target objects while looping through the root list. If a match is found, that object is added to a list of found objects. The `isMatch` variable is then updated indicating a match was found. If no match is found, that object gets added to a list of non matching objects.

This results in 2 new lists being created. One containing all matching objects, and one containing all unmatched objects.

## Code

```javascript
objectsList = list();
objectsList.addAll({{"name":"John","age":25},{"name":"Jane","age":30},{"name":"Bob","age":35}});
// Define the desired object value
desiredValues = list();
desiredValues.addAll({{"name":"Jane","age":30},{"name":"Bob","age":35}});
// Lists to store matching and non-matching objects
matchingObjects = list();
nonMatchingObjects = list();
// Iterate through the list and check if the desired values are present
for each  obj in objectsList
{
	// Flag to track if the object matches any desired value
	isMatch = false;
	// Iterate through the desired values
	for each  desiredValue in desiredValues
	{
		// Compare each property of the object with the desired value
		if(obj.get("name") == desiredValue.get("name"))
		{
			// Object value found, add it to the matching objects list
			matchingObjects.add(obj);
			isMatch = true;
			break;
		}
	}
	// If the object doesn't match any desired value, add it to the non-matching objects list
	if(!isMatch)
	{
		nonMatchingObjects.add(obj);
	}
}
info "Matching objects: " + matchingObjects;
info "Non-matching objects: " + nonMatchingObjects;
```

_Note: Change the comparing if statement to match your specific needs._
