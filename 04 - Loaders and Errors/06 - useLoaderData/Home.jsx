import React from "react"
import {useLoaderData} from "react-router-dom"

export function loader() {
    return "The data is here"
}

export default function HomePage() {
  const data = useLoaderData()
  return (
    <main>
      <h1>Home page</h1>
      <h2>{data}</h2>
    </main>
  );
}
