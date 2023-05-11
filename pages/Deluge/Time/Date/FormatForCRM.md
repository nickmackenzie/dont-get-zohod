# Format time From Deluge Time to CRM Time

```
dateTime = now;
dateTime_DATE = dateTime.getPrefix(" ").toString("yyyy-MM-dd");
dateTime_TIME = dateTime.getSuffix(" ");
dateTime_FORMATTED = dateTime_DATE + "T" + dateTime_TIME;

```