import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Contáctenos</h3>
                    <div className="footer-item"><a href="/help">Ayuda & Contacto</a></div>
                    <div className="footer-item"><a href="/retorno-devoluciones">Retornos & Devoluciones</a></div>
                    <div className="footer-item"><a href="/shipping">Información de Envio</a></div>
                </div>
                <div className="footer-column">
                    <h3>Acerca de Nosotros</h3>
                    <div className="footer-item"><a href="/acerca-de">Nuestra Historia</a></div>
                    <div className="footer-item"><a href="/nuestros-artesanos">Nuestros Artesanos</a></div>
                    <div className="footer-item"><a href="/aviso-legal">Términos y Condiciones para Venta</a></div>
                </div>
                <div className="footer-column">
                    <h3>Síguenos</h3>
                    <div className="footer-item"><a href="/facebook">Facebook</a></div>
                    <div className="footer-item"><a href="/twitter">Twitter</a></div>
                    <div className="footer-item"><a href="/instagram">Instagram</a></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;