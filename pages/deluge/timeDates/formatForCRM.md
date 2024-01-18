---
title: Format time From Deluge Time to CRM Time
description: Format dates into different formats with examples/templates.
---
# Format time From Deluge Time to CRM Time
## Use Cases

You might need to format your date from a api source or CSV, and need to import into a ZOHO app.

## Javascript
``` javascript
dateTime = now;
dateTime_DATE = dateTime.getPrefix(" ").toString("yyyy-MM-dd");
dateTime_TIME = dateTime.getSuffix(" ");
dateTime_FORMATTED = dateTime_DATE + "T" + dateTime_TIME;

```

## Supported Formats

    Please note to select this format in CRM 

| **Format**      | **Result**          |
|-----------------|---------------------|
| dd-MMM-yy       | 15-Aug-47           |
| dd-MMM-yyyy     | 15-Aug-1947         |
| dd-MMMM-yy      | 15-August-47        |
| dd-MMMM-yyyy    | 15-August-1947      |
| MM-dd-yy       | 08-15-47            |
| yy-MM-dd       | 47-08-15            |
| dd-MM-yy       | 15-08-47            |
| dd-MM-yyyy     | 15-08-1947          |
| MM-dd-yyyy     | 08-15-1947          |
| yyyy-MM-dd     | 1947-08-15          |
| yy/MM/dd       | 47/08/15            |
| dd/MM/yy       | 15/08/47            |
| MM/dd/yy       | 08/15/47            |
| yyyy/MM/dd     | 1947/08/15          |
| MM/dd/yyyy     | 08/15/1947          |
| dd/MM/yyyy     | 15/08/1947          |
| dd MMM,yy      | 15 Aug,47           |
| MMM dd,yy      | Aug 15,47           |
| dd MMM,yyyy    | 15 Aug,1947         |
| MMM dd,yyyy    | Aug 15,1947         |
| dd MMMM,yy     | 15 August,47        |
| MMMM dd,yy     | August 15,47        |
| dd MMMM,yyyy   | 15 August,1947      |
| MMMM dd,yyyy   | August 15,1947      |
| E,MMMM dd,yyyy | Fri, August 15,1947 |
| E,MMM dd,yyyy  | Fri, Aug 15,1947    |
| MMM dd yy      | Aug 15 47           |
| dd MMM yy      | 15 Aug 47           |
| MMM dd yyyy    | Aug 15 1947         |
| dd MMM yyyy    | 15 Aug 1947         |
| MMMM dd yy     | August 15 47        |
| dd MMMM yy     | 15 August 47        |
| dd MMMM yyyy   | 15 August 1947      |
| MMMM dd yyyy   | August 15 1947      |
| dd.MM.yy       | 15.08.47            |
| MM.dd.yy       | 08.15.47            |
| yy.MM.dd       | 47.08.15            |
| dd MM yyyy     | 15 08 1947          |
| dd.MM.yyyy     | 15.08.1947          |
| MM.dd.yyyy     | 08.15.1947          |
| yyyy.MM.dd     | 1947.08.15          |

