Page links:
-----------

 - Home: http://www.spoon.com/designtmp/index.html
 - Shop: http://www.spoon.com/designtmp/shop.html
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

[X] 1. Lets get rid of ArcherMediumItalic!!!

[X] Super heads (shop, about)
[X] font-size: 1.5rem
[X] letter-spacing: .1rem
[X] margin-top: change from 30 to 20px

NEWLETTER
[X] Change background color to: #fafafa
[X] Change ‘Get news from Up North’ to ArcherItalicLight
[X] Change the ‘Sign up to receive…’ line to ArcherBook, same styles as the About_intro copy

ALL ABOVE 1200 ~ 1300

FOOTER
- More tweaks to come with this
[X] Make background white
[X] Overall should be more like the PDF
[X] Less gaps between the links
[X] Left side with logo can be a lot wider, taking up more like a 33%/66% split
[X] Icons can be smaller

SHOP PAGE
Shop Header:
- ~~Above SHOP super head: 4.5% margin~~
- change header to padding-bottom to 4.5%

Shop Grid:
- Change the top margin above the first row of products and below the rule line to be similar to how the header is. If they can scale fairly even, great.
- Same comment for the bottom of the products and the large buttons. See if we can get equal margins between the last row and before the buttons, and then similar spacing between the buttons and the newsletter sign up.

Will need a page with a second category included. So, ‘Spoon Fruit & Butter’ would have a second category below the first set of products. For a heading, I think we could just repeat the first one with another fruit illustration. Otherwise, we just do the name and then a rule line like the ‘You May Also Like’ heading on the product page. Thought?

ABOUT PAGE
- ~~Reduce space about ‘ABOUT’ to padding top 2%. Trying to make the distance above it and below it the same.~~
- ~~Place %nbsp; between every and jar in the intro section. Widow on laptop. Do the same in the next paragraph with anywhere and else.~~
- ~~Add a little space between ‘The American Spoon Story and the copy. 20px or so.~~
- ~~Add a little space after the green pull quote in the Our Kitchen section.~~
- ~~Capitalize Farmers in Fruits & Farmers~~
- ~~Add &nbsp; at the end of that first paragraph~~


#### High priority: ####

- Add labels to Home mantle carousel

- Browser testing (need lots of PC testing, IE9, or IE8?, and up only)

- Pages/sections that need responsive layout fixes:
	- login.html (increase point at which items go to 2 column)

- Recipe (single) page:
	- Place icons (get from JW)
	- Click ingredient name, tooltip pop-up with view product and add to cart (confirm before)

- Fix JS functionality breaking because of jRespond breakpoints (product page suggested products)


#### Low priority: ####

- Home page progressively loading in products

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

Neal To Do:
-----------

1. Mantle work
	- nav circles with stylezzz
2. Play with instagram API (Pull most recent instagram photo)
3. PC testing (IE)


