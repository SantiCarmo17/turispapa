import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSendData from "../../../hooks/useSendData";
import useEditData from "../../../hooks/useEditData";
import Forms from "../../Layout/Forms";
import Button from "../Elements/Buttons";
import Input from "../Elements/Inputs";
import { TurisContext } from "../../../Context";
import imgHeader from "../../../assets/img/romero.jpg"


export default function FormAsistencia() {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { setImageNav } = useContext(TurisContext)
    let handleSubmit
    setImageNav(imgHeader)
    const Inputs = [
        {
            id: 1,
            type: 'tel',
            name: 'Contacto',
            placeholder: 'Ingrese el Contacto del establecimiento',
            required: true
        },
        {
            id: 2,
            type: 'text',
            name: 'Direccion',
            placeholder: 'Ingrese la dirección del establecimiento',
            required: true
        },
        {
            id: 3,
            type: 'text',
            name: 'Nombre',
            placeholder: 'Ingrese el tipo de establecimiento',
            required: true
        },
        {
            id: 4,
            type: 'file',
            name: 'Imagen',
            placeholder: '',
            required: true
        },
    ]
    const onSubmit = () => {
        //envio de datos
        navigate("/administrador", {
            replace: true,
        });
    }
    if (pathname.includes("/administrador/editar")) {
        handleSubmit = useEditData("asistencia", onSubmit)
    }else{
        handleSubmit = useSendData("asistencia", onSubmit)
    }
    return (
        <Forms>
            <h1 className="text-center my-2 mb-8 text-xl font-semibold">Formulario de ingreso de asistencias</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3" onSubmit={handleSubmit}>
                {Inputs.map(input => (
                    <Input
                        key={input.id}
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        required={input.required}
                    />
                ))}
                <div className={Inputs.length % 2 === 0 ? "md:col-span-2" : "flex items-center justify-center mt-6"}>
                    <Button
                        type={'submit'}
                        name={'Enviar'}
                    />
                </div>
            </form>
        </Forms>
    )
}
