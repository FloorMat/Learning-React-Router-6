1. How did we change our route definitions in order to 
   "protect" certain routes from an un-logged-in user?

   We added a Authentification layout as the parent route to routes that require you to be logged in so that if you werent logged in it would redirect you to the login page and not show the sensitive info

   Answer: Wrapped the routes we wanted to protect in a layout route that contains logic to redirect someone if they're not logged in
   
   
   
2. What component can we use to automatically send someone
   to a different route in our app?

   The Navigate Component

   answer: <Navigate to="/login" />



3. What component can we render if the user IS logged in?

   The Outlet component so that it will show the children routes if we are logged in

   Answer: <Outlet />