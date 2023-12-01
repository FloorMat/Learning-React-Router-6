import React from "react"
import { Link, useSearchParams, useLoaderData } from "react-router-dom"
import { getVans } from "../../api"

export function loader() {
    return getVans()
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = React.useState(null)
    
    /**
     * Challenge: Use the vans data that came in from useLoaderData
     * instead of the state and useEffect
     * 1. Comment out the entire useEffect block
     * 2. Make whatever other changes you need so it all works
     *    again
     */
    const data = useLoaderData()

    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter
        ? data.filter(van => van.type === typeFilter)
        : data

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link
                to={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
            >
                <img alt={van.name} src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}