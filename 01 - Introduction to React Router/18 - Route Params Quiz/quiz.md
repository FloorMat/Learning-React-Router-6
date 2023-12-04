1. What is a route/url parameter?
Its sort of like a placeholder/input within the route path of our route that will take you to a specific page based on the variables put in

Answer: A protion of our route path that is a placeholder for what will eventually be the actual segment in the URL of the page

------------
2. Add a route parameter called `productId` to the Route path below:


<Route path="/products/:productId" element={<ProductDetail />} />


------------
3. Add whatever you need to add for the component below to display
   the route parameter in the <h1>


function ProductDetail() {
    const param = useParam()
    return <h1>{param.productId}</h1>
}
