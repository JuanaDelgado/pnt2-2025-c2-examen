'use client';

import {useState, useEffect} from 'react';
import AirbnbList from './AirbnbList';
import './airbnblist.css';

export default function Home() {
    const[airbnb, setAirbnb] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    
    const token = localStorage.getItem("token");
    
    useEffect(() => {
        async function fetchAirbnb(){
            try{
                const response = await fetch(` https://backendairbnb-befph8eegzabfudb.eastus2-01.azurewebsites.net/api/listingsAndReviews`);
                const data = await response.json();
                setAirbnb(data);
                setLoading(false);
            }catch (error){
                console.log('Erro fetching airbnb:', error);
                setLoading(false);
            }
        }

        fetchAirbnb();
    }, [page]);

    return (
        <main className='airbnb-container'>
            {loading ? (
                <p>Cargando airbnbs...</p>
            ) : (
                <>
                <AirbnbList airbnbs={airbnbs} />
                <div className='pagination'>
                    <button
                      onClick={() => setPage(prev => prev > 1 ? prev - 1 : 1)}
                      disabled={page === 1}
                      className="pagination-button"
                    >
                        ← Anterior
                    </button>
                    <span className='pagintation-info'>Pagina {page}</span>
                    <button
                      onClick={() => setPage(prev => prev + 1)}
                      className='pagination-button'
                    >
                        Siguiente →
                    </button>
                </div>
                </>
            )}
        </main>
    );
}