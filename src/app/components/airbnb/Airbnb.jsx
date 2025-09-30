'use client'

import {useState} from "react";
import "./airbnblist.css";

export default function Airbnb ({ airbnb }){
    const[favorite, setFavorite] = useState(false);
    
    return (
        <div className="airbnb-card">
            <div className="airbnb-image-container">
                <img
                  src={airbnb}
                  alt={`Foto de ${airbnb.id}`}
                  className="airbnb-image"
                />
            </div>
            <div className="airbnb-content">
                <h3 className="airbnb-name">{airbnb.name}</h3>
                <h3 className="airbnb-url">{airbnb.url}</h3>
                <h3 className="airbnb-summary">{airbnb.summary}</h3>
            </div>
            <div clasName="favorite-button">
                <div clasName="favorite-icon">
                    <button onClick={() => setFavorite(!favorite)}>{favorite ? (<FaStar className="favorite-button-favorite"></FaStar>) : (<CiStar className="favorite-button"></CiStar>)}</button>
                </div>
            </div>
        </div>
    )
}