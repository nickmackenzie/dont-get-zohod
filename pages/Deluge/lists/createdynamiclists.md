# How-to-Dynamically-Create-Lists-in-Deluge
A simple script that allows you to create a dynamic iterable list based on a number variable.

## Core Idea
Zoho does not have a built-in function that allows you to create an iterable list like you could with "range()" in Python, so here's a quick workaround using some string manipulations.

## How to use
Just replace the variable *'n'* in `rightPad(n)` with the number variable that you need.

```script
val = "";
val = val.rightPad(n);
iterator = val.replaceAll(" ","x,").removeLastOccurence(",");
iterator = iterator.toList();
for each i in iterator
{
	info i;
}
```

## Function Explanation 
* `rightPad` is used to add whitespace characters to the right of a string so that the total size of string matches the specified number.
  * For example, if variable *n* holds the value of 4, your string will have 4 white space characters.
* The `replaceAll` function is used to add a comma at the end of each character so that your string can be read as a list.
  * 'x' is arbitrary and can be replaced with anything (it's just for Zoho to read it as an element later).
* `removeLastOccurence()` is used to remove the comma on the last character indicating the end of the list.
* `toList()` is required to convert your comma separated string into an iterable list.