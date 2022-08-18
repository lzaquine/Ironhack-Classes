import React, { useState, useEffect } from 'react'
// we're going to need useState and useEffect to get info from an API
import axios from 'axios'

const apiURL = 'https://ironbnb-m3.herokuapp.com/apartments'

function ApartmentList() {
    const [loading, setLoading] = useState(true)
    const [apartments, setApartments] = useState([])

    useEffect(() => {

        axios.get(apiURL)
        .then((response) => {
            setApartments(response.data)
            setLoading(false)

        })
        .catch((err) => console.log(err));
    }, []);

  return (
    <div className="Apto">
        <h1>Apartment List</h1>
        { loading && <p>Loading...</p>}

        { apartments.map((apartment) => {
            return (
                <div key={apartment.id}>
                    <img src={apartment.img} alt={apartment.title} />
                    <h2>{apartment.title}</h2>
                    <p>Price per day: {apartment.pricePerDay}</p>

    </div>
            )
        }
        )}
    </div>
    );
}

export default ApartmentList