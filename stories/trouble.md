1. When redirecting to menu/:id, the json data can't persist to this page
  - Change `router.get('/menu/:id` to `router.route("/menu/:id").get(function`
    Route parameters are named URL segments that are used to capture the values 
    specified at their position in the URL while "get" exactly matched the path
  - But after this change, express tried to retrive image from root/menu/images
    *In the handlbars files. change the img src from "images" to "/images" to look up

2. Unable to go back or click the header to return to home page after food detail page
  - Add index view and remove the original "ul" element placing in layout.pug
  - Make sure the app rendering the corresponding elements in different routes

3. Cart view can't persist if you are in individual food view and then refresh the page
  - Problem: empty cart section appears if you refresh that page, also the cart won't
    update after you go back to the home page
  - Solution: set the cart in layout just like what we do for menu 

4. The quantity of food will increament more when "add to cart" tiggered after going
   back to the home page(smiliar to ghost view)