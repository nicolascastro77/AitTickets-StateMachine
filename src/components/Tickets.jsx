import React from 'react'
import { MdAirplaneTicket } from "react-icons/md";
import { IoIosExit } from "react-icons/io";


function Tickets({send,state}) {
    const finish = () => {
        send({type: "FINISH"})
      };

    return (
        <div className="max-w-md mx-auto p-4 bg-green-100 rounded-lg text-center">
            <div className="text-3xl mb-4">
                <MdAirplaneTicket className="text-green-500 inline-block mr-2" />
                ¡Gracias por estar con nosotros!
            </div>
            <p className="text-gray-700">
                Tu reserva ha sido confirmada. Estamos ansiosos de tenerte a bordo.
            </p>
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={finish}
                    className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                >
                    <IoIosExit />
                </button>
            </div>
        </div>
    );
}

export default Tickets