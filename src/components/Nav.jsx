import React from 'react'
import { GiAirplaneDeparture } from "react-icons/gi";


function Nav({ state, send }) {

    const goToWelcome = () => {
        send({ type: "CANCEL" })
    }

    return (
        <nav className="bg-gray-800 p-2 flex items-center justify-between w-full">
            <div className="flex items-center">
                <GiAirplaneDeparture className='w-10 h-10 mx-10 text-red-600' />
                <span className="text-white text-lg font-bold">Reserva tu vuelo</span>
            </div>
            {!state.matches("initial") &&
                <button className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={goToWelcome}>Cancelar</button>}

        </nav>
    )
}

export default Nav