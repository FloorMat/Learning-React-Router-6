import React from "react"
import { useParams } from "react-router-dom"
export default function VanDetail() {
    const params = useParams()
    console.log(params)
    /**
     * Challenge part 2:
     * Using the endpoint set up (with mirage js), fetch the data
     * for the van with the current ID from params.id. Log the data
     * that comes back to the console.
     * 
     * Hint: the endpoint is a GET request to `/api/vans/:vanid`
     */
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`).then(res => res.json()).then(data => console.log(data))
    },[params.id])
    return <h1>Van detail page goes here</h1>
}