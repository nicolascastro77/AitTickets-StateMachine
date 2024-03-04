import React, { useState } from 'react'

function Search({ send }) {



    const [flight, setFlight] = useState('')

    const handleSelectChange = (event) => {
        setFlight(event.target.value);
    };

    const goToPassengers = () => {
        send({ type: 'CONTINUE' })
    }

    const options = ['Mexico', 'Venezuela', 'Colombia'];
    console.log('flifht' + flight);
    return (
        <div className='max-w-screen-lg mx-auto p-4 bg-slate-50 rounded-lg text-center'>
            <div className=" flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Encuentra tu evento</h1>
                    <p className="text-gray-600 mb-8">Selecciona tus preferencias y continúa para encontrar eventos emocionantes.</p>

                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-600 mb-2">Categoría:</label>
                        <select
                            id="country"
                            name="country"
                            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={flight}
                            onChange={handleSelectChange}
                        >
                            <option value="" disabled defaultValue>Escoge un país</option>
                            {options.map((option) => <option value={option} key={option}>{option}</option>)}
                        </select>
                    </div>

                    <button
                        onClick={goToPassengers}
                        disabled={flight === ''}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-green"
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Search