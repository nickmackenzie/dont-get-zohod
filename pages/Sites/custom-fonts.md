---
title: Custom fonts in ZOHO Sites
description: Add a custom font in Zoho Sites/Commerce
---
# How to add a custom font in Zoho Sites/Commerce

If You have font files start from step 1, In case you have font url then skip step 1.

## Step 1

- To upload your own font to the website, kindly follow the steps below:
- Go to Settings-->Files and upload the font files(You can upload inside a separate
  directory also).
- Once you've uploaded the font

## Step 2

- Go to Settings and click Custom CSS Editor.
- Paste the code given below and replace the name of the font and url. Code is
  only a sample. Change font face code according to your needs.
- Save and close the editor.

```css
@font-face {
  font-family: "fontname";
  src: url("/Font.otf");
  font-weight: normal;
  font-style: normal;
}
```

_Note:Font name can be only alplabets with space(Special characters like \_,- not
allowed). URL should be /{dir}/{file} if font files are uploaded inside a directory_

## Step 3

- To bring added custom font in the font dropdown. Right click and inspect
  element and go to console.
- Then paste the below code and change the font name to one specificed in css
  and click enter.

```
top.require('fontlibrary').updateFonts('fontname')
```

Finally refresh the page and the Custom Font will displayed in dropdown.
