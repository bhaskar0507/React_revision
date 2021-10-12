import React from 'react'

export default function Details({name,batch,organisation}) {
    return (
        <div>
            <h2>Name:{name}</h2>
            <h3>Batch: {batch}</h3>
            <p>Organisation:{organisation}</p>
            
        </div>
    )
}
