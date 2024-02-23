import React, { useContext } from 'react';
import imgHeader from "../../assets/img/burro.jpg"
import Mapa from '../../Components/Ruta/MapaInteractivo';
import { TurisContext } from '../../Context';

function Rutas() {
    const {setImageNav} = useContext(TurisContext)
    setImageNav(imgHeader)
    return (
        <section className='w-[90%] '>
            <h1 className='mb-3 text-center font-bold text-3xl text-green-500'>¡Traza tu propia ruta!</h1>
            <Mapa />
        </section>
    )
}

export default Rutas