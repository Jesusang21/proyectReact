import { useNavigate } from "react-router";


interface HeroProps {
    titulo: string;
    subtitulo: string;
    textoBoton?: string;   // opcional
}

export function Hero({ titulo, subtitulo, textoBoton = "Saber más" }: HeroProps) {
    const navigate = useNavigate()
    return (
        <section className="bg-body container text-center py-5">
            <h1 className="display-4">{titulo}</h1>
            <p className="lead">{subtitulo}</p>
            <button className="btn btn-primary" onClick={() => navigate("/contacto")}>{textoBoton}</button>
        </section>
    );
}