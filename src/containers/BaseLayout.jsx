import React from 'react'
import { useMachine } from '@xstate/react'
import bookingMachine from '../Machines/bookingMachine'
import Nav from '../components/Nav';
import StepsLayout from './StepsLayout';

export default function BaseLayout() {

    const [state, send] = useMachine(bookingMachine)
    console.log(state.value);
    console.log(state.context);
    return (
        <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 bg-cover min-h-screen flex flex-col items-center justify-center p-12 box-border'>
            <Nav state={state} send={send}/>
            <StepsLayout  state={state} send={send} />
        </div>
    )
}
