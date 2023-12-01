1. When does the code in a loader function run?

It runs the code before the component is rendered.

Answer: Before the route change happens and the component for that route loads


2. What are some benefits of using a data loader function
   instead of fetching our data in a useEffect in a component?

   It will gather all the data tha we need for our component before rendering it as opposed to while its being rendered which results in a better and simpler way to get the data
   as well as better user experience as the data will be on the page once its rendered as opposed to waiting for it to render in while already on the page.

   Answer: Dont need to worry about handling loading state in the component. Dont need to have lengthy/confusing useEffect code in our component. Dont need to handle error state in the component
   
   
3. What change do we need to make to our BrowserRouter before
   we can use loaders (or any of the new data-layer API features)
   in our app?

   We need to change our BrowserRouter component into a router provider component and then provide that component with a router prop that will contain and manage all of our routes
 
   Answer: Get rid of the BrowserRouter and use the createBrowserRouter() instead. Can use createRoutesFromElements() to make the transition a bit easier.
   
   
4. What are the steps we need to take in order to use
   a loader on any given route?

   First we need to make the loader function on the page we want it for and then export that function.
   We then need to pass that loader into the route using the loader prop.
   We then need to retrieve and use the data in our component by using the getLoaderData function

   Answer: 1. Define and export a loader function
           2. Import the loader and pass it to the router we're wanting to fetch data for
           3. Use the useLoaderData() hook to get the data from the loader function