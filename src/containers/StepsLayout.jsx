import React from 'react'
import Welcome from '../components/Welcome'
import Search from '../components/Search';
import Passengers from '../components/Passengers';
import Tickets from '../components/Tickets';



export default function StepsLayout({ state, send }) {
  const renderContent = () => {
    if (state.matches('initial')) return <Welcome send={send} />;
    if (state.matches('search')) return <Search state={state} send={send} />;
    if (state.matches('tickets')) return <Tickets state={state} send={send} />;
    if (state.matches('passengers')) return <Passengers state={state} send={send} />;
    return null;
  };
  return (
    <div className='bg-white bg-opacity-50 w-full max-w-400 p-4 rounded-bl-8 rounded-br-8'>
      {renderContent()}
    </div>
  )
}
