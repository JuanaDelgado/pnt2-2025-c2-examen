import React from 'react';
import Airbnb from './Airbnb';
import './airbnblist.css';
import Link from 'next/link';

export default function AirbnbList ({ airbnbs }){
    return (
        <div className="airbnb-container">
            {airbnbs.map((airbnb) => (
            <Airbnb key={airbnb.id} movie={airbnb} />
        ))}
            </div>
    );
}