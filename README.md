  # Hello🚀  

  I have added a product called "Special Item" and added 2 images to it.
  Added category with name "Special Items".

  Added custom template for "Special Items" category page.
  To show only one product, used Front Matter.

  Showed the "Special Item" product with name and 2 images.
  default image is showing and when hover then it replaces to second image.
  implemented it using css.

  Added "Add All To Cart" button with product_id list.
  Added "Remove All Items" button.

  For javascript, mapped created custom template to Javascript modules

  First checked cart using "/api/storefront/carts/" if there are products in the cart, and showed the remove button if exist.
  
  when adding to cart, if the cart is already exist, then used the cartId for adding
  if no cart, then created cart for adding products.
  
  showed the customer information for name, email, phone using Handlebars on custom category page for "Special Items"

  only when the customer is logged in, then it shows customer information

  I didn't focus on the styling, just for the function.
