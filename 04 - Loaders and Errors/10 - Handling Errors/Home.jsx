import React from "react"
import { useLoaderData } from "react-router-dom"

export function loader() {
  // throw new Error("This is an error")
    return "The data is here"
}

export default function HomePage() {
  const data = useLoaderData()
  console.log(data)



  throw new Error("Undefined is not a function")
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}
