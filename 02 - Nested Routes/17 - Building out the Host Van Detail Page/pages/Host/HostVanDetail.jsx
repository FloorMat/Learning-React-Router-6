import React from "react"

import { useParams } from "react-router-dom"

export default function HostVanDetail() {
    /**
     * Challenge (not optional!): build the shared UI portion of the
     * Host Van Detail page. This is
     * 
     * Optional portion: also style it to look like the design.
     * 
     * For now, get the data from a request to `/api/host/vans/:id`
     * and display the van image, name, price, type
     */
    const params = useParams();

    const [van, setVan] =  React.useState([])

    React.useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`).then(res => res.json()).then(data => setVan(data.vans[0]))
    },[params.id])

    return (
        <div>
            <h1>{van.name}</h1>
            <img src={van.imageUrl}/>
            <h2>${van.price}</h2>
            <h3>{van.type}</h3>
        </div>
    )
}
