1. When redirecting to menu/:id, the json data can't persist to this page
  - Change `router.get('/menu/:id` to `router.route("/menu/:id").get(function`
    Route parameters are named URL segments that are used to capture the values 
    specified at their position in the URL while "get" exactly matched the path
  - But after this change, express tried to retrive image from root/menu/images
    *In the handlbars files. change the img src from "images" to "/images" to look up

2. Unable to go back or click the header to return to home page after food detail page
  - Add index view and remove the original "ul" element placing in layout.pug
  - Make sure the app rendering the corresponding elements in different routes