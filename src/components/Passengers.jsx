import React, { useState } from 'react'
import { GiConfirmed } from "react-icons/gi";
import { IoPerson } from "react-icons/io5";

function Passengers({ state, send }) {

    const [value, changeValue] = useState('');

    const onChangeInput = (e) => {
        changeValue(e.target.value);
    }

    const goToTicket = () => {
        send({ type: "DONE" })
    }

    const submit = (e) => {
        e.preventDefault();
        send({ type: 'ADD', newPassenger: value });
        changeValue('');
    }

    const { passengers } = state.context;


    return (
        <div className='max-w-screen-lg mx-auto p-4 bg-slate-100 rounded-lg '>
            <h2 className="text-2xl font-bold mb-4">Añadir Pasajeros</h2>

            <form onSubmit={submit} className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Nombre del pasajero"
                    value={value}
                    onChange={onChangeInput}
                    className="border border-gray-300 px-3 py-2 mr-2 w-full"
                    autoFocus
                    pattern='^[a-zA-Z]+(?:\s[a-zA-Z]+)*$'
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled={!value.trim()}
                >
                    Agregar
                </button>
            </form>

            {/* Lista de Pasajeros */}
            <ul className="list-disc ml-6 mb-4">
                {passengers.map((passenger, index) => (
                    <li key={index} className="flex items-center">
                        <IoPerson className="mr-2" />
                        <span>{passenger}</span>
                    </li>
                ))}
            </ul>

            {/* Botones de Pago */}
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={goToTicket}
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                >
                    <GiConfirmed />
                </button>
            </div>
        </div>
    )
}

export default Passengers