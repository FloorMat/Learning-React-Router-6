1. What is the primary reason to use a nested route?
It is used so that all the routes wthin the nested route are able to share something whether that is the path to get to the route or if its a layout design that would be shared between those routes

Whenever we have some shared UI between routes in our app.


2. What is a "Layout Route"?
It is a route that has a design that you wish to pass down to other routes that will be nested inside of it

Its the parent route of some nested routes that contains just the portion of the UI that will be shared. It will use an outlet component


3. What does the <Outlet /> component do? When do you use it?
The outlet component makes it so that stuff within nested routes will also end up rendering when you are at that path. You would use it when using a layout route that
is used to share design between pages but doesnt actually give page specific details

We use it anytime we have a parent Route thats weapping children routes. It render the matching child route's "element" prop given in its route definition


4. What is an "Index Route"?
Its basically the base path of the route that something is nested in

Its the "default path" we want to render when the path of the parent route matches. It gives us a chance to render an element inside the parents Outlet at the same path as the parent route