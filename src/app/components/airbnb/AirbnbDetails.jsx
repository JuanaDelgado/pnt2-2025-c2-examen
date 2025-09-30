'use client'

import "./airbnblist.css";

export default function AirbnbDetails ({airbnb}){
    if(!airbnb){
        return <div>Cargando...</div>
    }
    return (
        <div>
            <img
              src={airbnb.image}
              alt={airbnb.name}
              className="airbnb-image"
            />
            <div className="airbnb-name">{airbnb.name}</div>
            <div className="airbnb-url">{airbnb.url}</div>
            <div className="airbnb-summary">{airbnb.summary}</div>
        </div>
    )
}