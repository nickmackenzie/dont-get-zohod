---
title: List Blog Posts on Any Page
description: List your latest blog posts on any ZOHO sites page.
---

# List Blog Posts on Any Page

Create a code snippet in the area you want to display the blog posts

``` html

<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.1.0/mustache.js"></script>
<div id="template" style="display:none">
    <div data-element-type="row" class="zprow zpalign-items-flex-start zpjustify-content-flex-start ">
        {{#blog_list}}
        <div data-element-type="column" class="zpelem-col zpcol-md-4 zpcol-sm-12 zpalign-self- zpdefault-section zpdefault-section-bg ">
            <style type="text/css"></style>
            <div data-element-type="heading" class="zpelement zpelem-heading ">
                <style></style>
                <h3 class="zpheading zpheading-style-none zpheading-align-left " data-editor="true"><a href="{{link}}">{{title}}</a></h3>
            </div>
            <div data-element-type="text" class="zpelement zpelem-text ">
                <style></style>
                <div class="zptext zptext-align-left " data-editor="true">
                    <p>{{{description}}}</p>
                </div>
            </div>
            <div data-element-type="button" class="zpelement zpelem-button ">
                <style></style>
                <div class="zpbutton-container zpbutton-align-left">
                    <style type="text/css"></style><a class="zpbutton-wrapper zpbutton zpbutton-type-primary zpbutton-size-md zpbutton-style-none " href="{{link}}" target="_blank"><span class="zpbutton-content">Read More</span></a>
                </div>
            </div>
        </div>
        {{/blog_list}}
    </div>
</div>
<script>
function renderList(list) {

    let template = document.getElementById('template').innerHTML;
    let rendered = Mustache.render(template, list);
    document.getElementById('list').innerHTML = rendered;
}

function getFeeds() {
    $X.get({
        url: '/blogs/feed',
        handler: function() {
            let result = this.responseText;
            if (window.DOMParser) {
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(result, "text/xml");
            } else // Internet Explorer 
            {
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = false;
                xmlDoc.loadXML(result);
            }
            let items = xmlDoc.getElementsByTagName('item');
            renderList({ blog_list: itemsToJSON(items) })
        }
    });
}

function itemsToJSON(items) {
    let blog_list = [];
    for (let i = 0; i < items.length; i++) {
        let blog_post_json = {};
        let blog_post = items[i];
        let children = blog_post.children;
        for (let j = 0; j < children.length; j++) {
            let tagName = children[j].tagName;
            blog_post_json[tagName] = children[j].textContent;
        }
        blog_list.push(blog_post_json);
    }
    return blog_list;
}
document.addEventListener('DOMContentLoaded', getFeeds);
</script>
<div id="list">Loading...</div>
```
