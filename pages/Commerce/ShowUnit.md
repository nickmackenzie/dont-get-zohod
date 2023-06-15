---
title: Show Unit on Commerce Website
description: Learn how to display the unit based on the selected unit in Zoho Inventory for products on your commerce website.
---

# Show Unit on Commerce Website

The unit displayed will be based on the unit selected in the Zoho Inventory for products.

## How This Works

The function uses ZOHO 'meta' layer on the website and displays it properly.

Please add the code into the store footer by going to Site Settings > Header and Footer Code > Footer Code:

## Code

```javascript
<script type="application/javascript">

function appendUnitWithPrice(product,attribute){
	const price_array = product.querySelectorAll("["+attribute+"]");
	price_array.forEach(function(price){
		if(typeof(window.zs_product.unit) != "undefined" && window.zs_product.unit != ""){
			price.innerText += " /" + window.zs_product.unit + " ";
		}
	});
}

function displayUnitInProductDetailsPage(){
	const product = document.querySelector("[data-zs-product-id]");
    appendUnitWithPrice(product,"data-zs-selling-price");
	appendUnitWithPrice(product,"data-zs-label-price");
}

function productPageOnLoad() {
  	if(window.zs_view == "product") {
  		displayUnitInProductDetailsPage();
  	}
}
window.addEventListener("load", productPageOnLoad);

</script>
```


