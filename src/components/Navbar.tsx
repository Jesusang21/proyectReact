import { useState, useEffect } from "react";
import { Link } from "react-router";

type NavbarProps = {
    totalLikes: number;
};


export function Navbar({ totalLikes }: NavbarProps) {
    const [isDarkBg, setIsDark] = useState(true)

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-bs-theme",
            isDarkBg ? "light" : "dark"
        );
    }, [isDarkBg]);

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <Link className="navbar-brand" to="/">☕ Mi Cafetería</Link>
            <div className="d-flex gap-3">
                <Link className="nav-link text-white" to="/">Inicio</Link>
                <Link className="nav-link text-white" to="/nosotros">Nosotros</Link>
                <Link className="nav-link text-white" to="/contacto">Contacto</Link>
            </div>
            <span className="text-white">❤️ {totalLikes}</span>
            <button type="button"
                className="btn btn-outline-light btn-sm" onClick={() => setIsDark((isDark) => !isDark)}> {isDarkBg ? "🌙" : "☀️"}</button>
        </nav>
    );
}