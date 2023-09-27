import Card from "../../Components/CardShort"
import hospi from "../../assets/img/hospi.jpg"
import gaso from "../../assets/img/gaso.jpg"
import farma from "../../assets/img/farma.jpg"
import caej from "../../assets/img/caej.jpg"
import ferre from "../../assets/img/ferre.jpg"
import travel from "../../assets/img/travel.jpg"
import { TbBrandWhatsapp } from "react-icons/tb"

function Asistenciass() {
    const establecEntretenimiento = [
        {
          id: 1,
          title: 'Hospital San Roque',
          img: hospi,
          description: "Un espacio para la salud",
          direction: "Boulevard Kukulcan km 1 Zona Turistica",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 2,
          title: 'Gasolinera FroetGas',
          img: gaso,
          description: "El mejor lugar para la gasolina",
          direction: "Centro Kukulcan km 1 Zona Turistica",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 3,
          title: 'Farmacia',
          img: farma,
          description: "Un espacio para los medicamentos",
          direction: "Boulevard Kukulcan km 1 Zona Turistica",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 4,
          title: 'Cajero BanColombia',
          img: caej,
          description: "Un espacio para retirar dinero",
          direction: "Boulevard Zona Rosa",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 5,
          title: 'Ferretería ArreglaTodo',
          img: ferre,
          description: "El mejor lugar para las herramientas",
          direction: "Boulevard Zona Rosa",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 6,
          title: 'Traveling Agencia',
          img: travel,
          description:"Espacio para los viajes",
          direction: "Boulevard Zona Rosa",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
    ]
    return (
      <section className="w-[90%]">
        <h1 className="font-bold text-xl text-center text-[#14A44D] my-4">
          Asistencias
        </h1>
        <article className="w-full flex items-center justify-center flex-row gap-5 flex-wrap">
          {establecEntretenimiento.map((data) => (
            <Card key={data.id} data={data}>
              <div className="leading-relaxed">
                <h3 className="text-lg font-semibold">{data.title}</h3>
                <p>-{data.description}</p>
                <p>-{data.direction}</p>
              </div>

              <div className="flex justify-center text-2xl font text-gray-500 md:mb-2 mt-1">
                <a href={data.linkWhatsApp}>
                  <TbBrandWhatsapp />
                </a>
              </div>
            </Card>
          ))}
        </article>
      </section>
    );
}

export default Asistenciass