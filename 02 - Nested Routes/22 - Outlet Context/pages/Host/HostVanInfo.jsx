import React from "react"

import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {

    const [currentVan, setCurrentVan] = useOutletContext();

    return (
        <div>
            <h2>Name: {currentVan.name}</h2>
            <h4>Category: {currentVan.type}</h4>
            <p>Description: {currentVan.description}</p>
        </div>
    )
}