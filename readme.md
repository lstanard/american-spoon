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

2. Would like to figure out how to load a limited # of items on the Home page (~3 for mobile, more for desktop).
 - Probably need to coordinate with Joe on this.

3. Can we get started on the checkout process page?
 - Neal can work on this as soon as it's ready.

4. How do we style the search results page?
 - Need to talk with Joe about how search results are generated.

5. Since the shipping banner copy might change, attempting to center the nav text might not be the best idea (See request "Center the primary navigation with the shipping banner")

6. Check out new product overlays
 - The "Add to cart" button still doesn't seem right

7. How should we handle the product page image previews? Zoom? Simple swap?


To-do:
------

#### High priority: ####

- Browser testing (need lots of PC testing, IE9 and up only)
- Responsive updates to the Stores page (some layout issues while scaling down betwee 640px-980px)
	- Assigned to Neal
- Check for consistency with border colors, move to a variable
	- Jake is going to provide a style guide for this
- Login page buttons are too short (min-height disappeared?)
- Footer sign-up button not the same height as the form field
- Shipping banner text wraps to multiple lines, line-height too high
- Secondary nav disappears when you make the browser small, then big again
- Images on the About page
	- Use just 1 image per section (2, 1, 1, 2)
	- Dynamically load in additional images via JS
- Product overlay/hover styling
	- Whole thing is a button, takes you to the "View product page"
	- Move the "Add to cart" to the top of the button
	- Put a cart icon inside of the "Add to cart" button, give it a rollover state. Maybe make a ghost button?
- Recipe page:
	- Needs responsive styling
	- Click ingredient name, tooltip pop-up with view product and add to cart
- Product page image preview functionality
- Home page Instagram feed (hold until further feedback)


#### Lower priority: ####

- Remove < and > from markup and move to CSS :before and :after content types
- Buttons with a lot of text (checkout buttons on the Cart page) wrap to multiple lines, looks strange


Dev notes:
----------

1. Do not directly modify .html or .css files, they are being generated via CodeKit (.html and .css files are not committed to the repo)
2. Do not use z-index directly in a SCSS file, see _sass/_global/_variables for z-index value variables
3. Use uiFunctions.site object for UI related JavaScript/jQuery functions
4. Navigation plan:
 - Full size header disappears below 640px
 - Fixed header w/mobile nav toggle appears below 640px
 - Mobile navigation is created from .header--clone and receives class .mobile-menu below 640
 - Desktop header has full, expanded view and a condensed view upon scroll (640px and up)


Misc notes:
-----------

- Icomoon may not be the best long-term solution for icon fonts, explore another possibility
- Recipes jump page grid -> move to an @extend column type
- Auto-fill city, state and country via zip code:
 	- http://www.zippopotam.us/
 	- http://www.getziptastic.com/
 		- http://css-tricks.com/using-ziptastic/
- Style form inputs (select menu, checkbox)
 	- http://css-tricks.com/dropdown-default-styling/
 	- http://webdesign.tutsplus.com/tutorials/quick-tip-easy-css3-checkboxes-and-radio-buttons--webdesign-8953
