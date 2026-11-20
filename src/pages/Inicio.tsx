import { Hero } from "../components/Hero";
import { ListaProductos } from "../components/ListaProductos";
import { useOutletContext } from "react-router";


export function Inicio() {

    const { sumarLike } = useOutletContext<{ sumarLike: () => void }>();

    return (
        <>
            <div className="bg-light">
                <Hero titulo="El mejor café de la ciudad" subtitulo="Tostado aquí, cada mañana" textoBoton="Mas informacion" />
                <ListaProductos onLike={sumarLike} />
            </div>
        </>
    );
}