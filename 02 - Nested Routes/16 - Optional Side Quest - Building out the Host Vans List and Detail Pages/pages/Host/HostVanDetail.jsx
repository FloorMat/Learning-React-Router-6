import React from "react"
import {useParams} from "react-router-dom"

export default function HostVanDetail() {
    const params = useParams()

    const [van, setVan] = React.useState([])

    React.useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`).then(res => res.json()).then(data => setVan(data.vans[0]))
    },[params.id])

    return (
        <div>
            <h1>{van.name}</h1>
            <img src={van.imageUrl}/>
            <h2>{van.price}</h2>
            <h3>{van.type}</h3>
            <h4>{van.description}</h4>
        </div>
    )
}