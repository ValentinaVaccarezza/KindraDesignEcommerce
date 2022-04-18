import React from "react";
import './Footer.css';
import fb from '../imagenes/fb.png';
import ig from '../imagenes/ig.png';
import logoKindra from '../imagenes/logoKindra.jpeg';
import mail from '../imagenes/mail.png';
import ubicacion from '../imagenes/ubicacion.png';
import wpp from '../imagenes/wpp.png';
import whatsapp from '../imagenes/whatsapp.png';

const Footer = () => {
    return (
        <div className="CajaFooter">
            <div className="contacto">
                <div className="ubicacion">
                   <div>
                   <img src={ ubicacion } className="logosContacto" alt="contacto"/>
                   </div>
                   <div>
                       <p>Mercedes, Buenos Aires</p>
                   </div>
                </div>
                <div className="wpp">
                    <div>
                    <img src={ wpp } className="logosContacto"  alt="logo whatsapp" />
                    </div>
                    <div>
                        <p>(02324)15565226</p>
                    </div>
                </div>
                <div className="mail">
                    <div>
                    <img src={ mail } className="logosContacto" alt="mail" />
                    </div>
                    <div>
                        <a href="mailto:kindradesign@hotmail.com"  className="linkMail"><p>kindradesign@hotmail.com</p></a>
                    </div>
                </div>
            </div>
            <div className="info">
                <img src={ logoKindra } className='logoFooter' alt="logo kindra" />
                <h3>Kindra Design</h3>
                <p>Artículos de diseño</p>
                <p>Envíos a todo el país</p>
            </div>
            <div className="redes">
                <div><h4 className="seguinos">¡Seguínos!</h4></div>
                <div>
                    <a href="https://www.facebook.com/kindradesign" target="_blank"><img src={ fb } className="logosRedes" alt="facebook" /></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/kindradesign/" target="_blank"><img src={ ig } className="logosRedes" alt="instagram" /></a>
                </div>
            </div>
        </div>
    )
}

const CopyRight = () => {
    return (
        <div className="copyright">
            <span><p>Copyright &copy; Valentina Vaccarezza 2022</p></span>

            <div className="cajaWpp">
                <a href="https://api.whatsapp.com/send?phone=02324565226" target="_blank">
                <img src={ whatsapp } alt="whatsapp" />
                </a>
            </div>
        </div>
        
    )
}

export { Footer }

export { CopyRight }