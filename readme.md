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


Questions for Jake:
-------------------

1. Did we get the fonts figured out? Still need to purchase the web license
2. How should we handle the search functionality? How about a search box at the top of every page for mobile?
3. Ask about secondary navigation changes and placement


Tasks for Neal:
---------------

1. Home/Shop page lazy load in products (mobile most importantly)
	- Load fewer on phones, load more on desktop? 

2. Check for consistency with border colors, move to a variable
	- Do you have a style guide for this task?

3. Header/navigation styling clean-up (responsive updates as needed)

4. Home page Instagram feed (use a plugin?)
	- Do you know of a potential plugin I could test out?

5. Program the footer
	- Do you have the design file available?

Dev notes:
----------

1. Do not use z-index directly in a SCSS file, see _sass/_global/_variables for z-index values
2. Use uiFunctions.site object for UI related JavaScript/jQuery functions
3. Navigation plan:
 - Full size header disappears below 640px
 - Fixed header w/mobile nav toggle appears below 640px
 - Mobile navigation is created from .header--clone and receives class .mobile-menu below 640


 Misc notes:
-----------

1. Update raster fork/knife icon with Icomoon font icon OR inline SVG graphic
2. Remove < and > from markup and move to CSS :before and :after content types
3. Use https://github.com/filamentgroup/AppendAround to move images around on the About page
4. Home page updates (blog feed, Instagram feed)
5. Footer formatting for all layout sizes
6. Fix product column widths (goes from 4 across to 1 across, no in-between)

Recipe page:
 - Click ingredient name, tooltip pop-up with view product and add to cart

Recipes jump page grid -> move to an @extend column type

Auto-fill city, state and country via zip code:
 - http://www.zippopotam.us/
 - http://www.getziptastic.com/
 	- http://css-tricks.com/using-ziptastic/

Style form inputs (select menu, checkbox)
 - http://css-tricks.com/dropdown-default-styling/
 - http://webdesign.tutsplus.com/tutorials/quick-tip-easy-css3-checkboxes-and-radio-buttons--webdesign-8953