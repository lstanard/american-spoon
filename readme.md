Page links:
-----------

 - Home: http://www.spoon.com/designtmp/index.html
 - Shop: http://www.spoon.com/designtmp/shop-classics.html
 - Shop (option 2): http://www.spoon.com/designtmp/shop-savories.html
 - Shop (long scrolling): http://www.spoon.com/designtmp/shop-classics02.html
 - Product page: http://www.spoon.com/designtmp/product-page.html
 - Login: http://www.spoon.com/designtmp/login.html
 - Catalog request: http://www.spoon.com/designtmp/catalog-request.html
 - Shopping cart: http://www.spoon.com/designtmp/cart.html
 - Recipes: http://www.spoon.com/designtmp/recipes.html
 - Recipes category: http://www.spoon.com/designtmp/recipes-category.html
 - Recipes single: http://www.spoon.com/designtmp/recipes-single.html
 - Stores: http://www.spoon.com/designtmp/stores.html
 - About: http://www.spoon.com/designtmp/about.html


Questions/Notes for Jake:
-------------------------

1. Did we get the fonts figured out?
 - Still need to purchase the web license through typography.com

2. How do we style the search results page?
 - Need to talk with Joe about how search results are generated.

3. Do we want to have some kind of rollover for the recipes category page?

4. Need to figure out how to handle search (separation of WordPress and Magento makes this tricky)


To-do:
------

#### High priority: ####

- Bring down the size of the type in the navigation just a little

- Browser testing (need lots of PC testing, IE9, or IE8?, and up only)

- Pages/sections that need responsive layout fixes:
	- Desktop header (fully expanded and condensed)
	- cart.html (minor fixes)
	- login.html (increase point at which items go to 2 column)
	- stores.html (assigned to NS)

- Recipe (single) page:
	- Place icons (get from JW)
	- Click ingredient name, tooltip pop-up with view product and add to cart (confirm before)

- Fix JS functionality breaking because of jRespond breakpoints (product page suggested products)


#### Low priority: ####

- Can we perform a quick font audit and see if there are places where we could reduce the number of fonts being loaded on a page?
	- Example: Recipes category page is loading at least 9 different font sets

- Home page Instagram feed (hold until further feedback)

- Shipping banner text wraps to multiple lines, line-height too high

- Replace instances of width: calc() to SASS formulas, replace margins with padding as needed

- Home page lazy loading:
	- Have CMS dump products into an external HTML file
	- Use AJAX to selectively load in a certain number of products depending on the situation

- Add block class prefix "btn--" to button class modifiers to avoid overrides later

- Remove < and > from markup and move to CSS :before and :after content types

- Auto-fill city, state and country via zip code:
 	- http://www.zippopotam.us/
 	- http://www.getziptastic.com/
 		- http://css-tricks.com/using-ziptastic/

- Style form inputs (select menu, checkbox)
 	- http://css-tricks.com/dropdown-default-styling/
 	- http://webdesign.tutsplus.com/tutorials/quick-tip-easy-css3-checkboxes-and-radio-buttons--webdesign-8953


Dev notes:
----------

1. Do not directly modify .html or .css files, they are being generated via CodeKit (.html and .css files are not committed to the repo)
2. Do not use z-index directly in a SCSS file, see _sass/_global/_variables for z-index value variables
3. Use uiFunctions.site object for UI related JavaScript/jQuery functions
