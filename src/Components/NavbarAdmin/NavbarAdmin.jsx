import { useState, useEffect, useRef, useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import imgHeader from '../../assets/imgHeader.svg';
import { TurisContext } from "../../Context";

export const NavbarAdmin = () => {
  const {setAdmin} = useContext(TurisContext)
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('bg-[#eaeaf16e]');
  const [nav, setNav] = useState('h-[80px] ');
  const scrollRef = useRef(false);
/**
 * La función `useScrolling` ajusta el color de fondo y la altura de un elemento según la posición de
 * desplazamiento de la ventana.
 */

  const useScrolling = () => {
    if (window.scrollY > 10) {
      if (!scrollRef.current) {
        setScroll('bg-[#ffff] transition delay-300 duration-300 ease-in h-[60px] ');
        setNav('h-[60px] ');
        scrollRef.current = true;

      }
    } else {
      if (scrollRef.current) {
        setScroll('bg-[#eaeaf16e] transition delay-300 duration-300 ease-in h-[80px]');
        setNav('h-[80px] ');
        scrollRef.current = false;
      }
    }
  }

/* El gancho `useEffect` se utiliza para realizar efectos secundarios en un componente funcional. En
este caso, se trata de agregar un detector de eventos al objeto de ventana para el evento
"desplazamiento" y llamar a la función `useScrolling` cuando se activa el evento. */
  useEffect(() => {
    window.addEventListener("scroll", useScrolling);

    return () => {
      window.removeEventListener("scroll", useScrolling);
    }
  }, []);

/* El código define un componente funcional llamado `Navbar` en JavaScript React. El componente
representa un encabezado y una barra de navegación. */
  return (
    <>
      <header
        className="bg-cover bg-no-repeat bg-fixed bg-center"
      >
        <nav
          className={scroll + "fixed w-full text-gray-500 z-[100] shadow-lg" }
        >
          <div className={"flex items-center font-medium justify-between" + " " + nav}>
            <div className="z-50 p-1 md:w-auto w-full flex justify-between">
              <img src={Logo} alt="logo" className="md:cursor-pointer h-[60px] " />
              <div className="flex items-center text-[36px] md:hidden" onClick={() => setOpen(!open)}
              >
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>
            <ul className="md:flex hidden uppercase items-center text-xs gap-4 mr-4">           
              <li>
                <Link to="/administrador" className="py-7 px-3 inline-block">
                  Administrador
                </Link>
              </li>

              <li>
                <Link to="/" className="py-7 px-3 inline-block ">
                  {setAdmin(false)}
                  Cerrar Sesión
                </Link>
              </li>  
            </ul>
            {/* Mobile nav */}
            <ul
              className={`
                md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                duration-500 ${open ? "left-0" : "left-[-100%]"}
              `}
            >
              <li>
                <Link to="/asistencias" className="py-7 px-3 inline-block">
                  Asistencias
                </Link>
              </li>
              <li>
                <Link to="/administrador" className="py-7 px-3 inline-block">
                  Administrador
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};