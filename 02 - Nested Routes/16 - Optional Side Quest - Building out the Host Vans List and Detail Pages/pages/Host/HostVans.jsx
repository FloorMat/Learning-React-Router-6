import React from "react"
import {Link} from "react-router-dom"

export default function HostVans() {

    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans").then(res => res.json()).then(data => setVans(data.vans))
    },[])

    const vanElements = vans.map(van => {
        return (
            <Link to={`/host/vans/${van.id}`}>
                <div>
                    <h1>{van.name}</h1>
                    <img src={van.imageUrl} />
                    <h2>{van.price}</h2>
                </div>
            </Link>
        )
    })

    return (
        <div>
            {vanElements}
        </div>
    )
}