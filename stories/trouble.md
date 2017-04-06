1. When redirecting to menu/:id, the json data can't persist to this page
  - Change `router.get('/menu/:id` to `router.route("/menu/:id").get(function`
    Route parameters are named URL segments that are used to capture the values 
    specified at their position in the URL while "get" exactly matched the path
  - But after this change, express tried to retrive image from root/menu/images
    *In the handlbars files. change the img src from "images" to "/images" to look up