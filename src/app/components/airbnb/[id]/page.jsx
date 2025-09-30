'use client'

import {useState, useEffect} from 'react';
import AirbnDetails from "../AirbnbDetails";
import { useParams } from 'next/navigation';

export default function AirbnbDetailsPage () {
    const[airbnb, setAirbnb] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const airbnbId = params.id;

    useEffect (() => {
        const fetchAirbnb = async () => {
            try{
                const response = await fetch('https://backendairbnb-befph8eegzabfudb.eastus2-01.azurewebsites.net/api/listingsAndReviews');
                const data = await response.json();
                const foundAirbnb = data.find((airbnb) => airbnb._id === airbnbId);

                if(foundAirbnb){
                    setAirbnb(foundAirbnb);
                }else{
                    console.log('Airbnb no encontrada');
                }
            }catch (error){
                console.log('Error al cargar airbnb', error);
                setLoading(false);
            }
        };
        fetchAirbnb();
    }), [params.id];

    return (
        <div>
            <AirbnDetails airbnb= {airbnb} />
        </div>
    )
}