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


Misc notes:
-----------

Recipe page:
 - Click ingredient name, tooltip pop-up with view product and add to cart

Home page/shop pages
 - Lazy load in products, maybe start with 3-5 then a "see more" button?

Check for consistency in border colors (kind of all over the place)

Search field functionality (on click, expand to include input field)

Remove < and > from markup and move to CSS :before and :after content types#

Recipes jump page grid -> move to an @extend column type

Update raster fork/knife icon with Icomoon font icon

Build a 404 error page

Auto-fill city, state and country via zip code:
 - http://www.zippopotam.us/
 - http://www.getziptastic.com/
 	- http://css-tricks.com/using-ziptastic/

Style form inputs (select menu, checkbox)
 - http://css-tricks.com/dropdown-default-styling/
 - http://webdesign.tutsplus.com/tutorials/quick-tip-easy-css3-checkboxes-and-radio-buttons--webdesign-8953



Dev notes:
----------

1. Do not use z-index directly in a SCSS file, see _sass/_global/_variables for z-index values
2. Use uiFunctions.site object for UI related JavaScript/jQuery functions
3. Navigation plan:
 - Full size header disappears below 640px
 - Fixed header w/mobile nav toggle appears below 640px
 - Mobile navigation is created from .header--clone and receives class .mobile-menu below 640