import { useContext } from "react";
import { TurisContext } from "../../../Context";
import { TETabsPane } from "tw-elements-react";
import Card from "./Card";

// tabla del contenido experiencias
export default function TablaContenido(data) {
    const { justifyActive } = useContext(TurisContext);
    return (
        <TETabsPane show={justifyActive === data.data.categoria} >
            <figure className="relative w-[100%] max-h-[568px] overflow-hidden mb-[-100px]">
                <img src={data.data.imagen} alt=""
                    className="object-cover h-full w-full min-h-[568px]"
                />
                <div className="flex flex-col justify-center p-10 md:w-[50%] w-full absolute bg-black/80 left-0 top-0 h-full text-white">
                    <h2 className="mb-4 text-2xl">
                        {data.data.titulo}
                    </h2>
                    <p className=" text-base font-light">
                        {data.data.descripcion}
                    </p>
                </div>
            </figure>
            <section className="flex flex-row justify-center flex-wrap gap-10 mx-10">
                {data.data.cards?.map((data)=>(
                    <Card
                    key= {data.id}
                    data={data}
                    />
                ))}
            </section>
        </TETabsPane>
    )
}
