import React from 'react'

function Welcome({ send }) {
    const startBooking = () => {
        send({ type: 'START' });
    }
    return (
        <div className='max-w-screen-lg mx-auto p-4 bg bg-white rounded-lg text-center'>
            <div className=" flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">¡Bienvenido a tu plataforma de reservas!</h1>
                    <p className="text-gray-600 mb-8">Selecciona tus tickets y experimenta eventos increíbles.</p>
                    <button
                        onClick={startBooking}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
                    >
                        Comenzar a Reservar
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Welcome