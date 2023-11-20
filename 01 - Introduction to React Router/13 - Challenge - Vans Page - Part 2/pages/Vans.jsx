import React from "react"

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch(/api/vans)` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 * 3. You may get an error saying "console.groupCollapsed is not
 *    a function". You can ignore it for now.
 */


export default function Vans() {

    const [vans, setVans] = React.useState([])

    React.useEffect(()=> {
        fetch("/api/vans").then(res => res.json()).then(data => setVans(data.vans))
    },[])

    let vansElement = vans.map(van => {
        return (
            <div>
                <h1>{van.name}</h1>
                <h2>{van.price}</h2>
                <h4>{van.description}</h4>
                <br/>
            </div>
        )
    })

    return (
        <div>
            {vansElement}
        </div>
    )
}