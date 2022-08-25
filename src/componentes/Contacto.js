import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../style/style.css'

export default function ComponenteContacto() {
    return (
        <div className="Contenedor-de-contacto">
            <div className="p-de-iconos">
                <GitHubIcon className="icono-git"/>
                <a className="ahref-contacto" href="https://github.com/bautista111103">bautista111103</a>
            </div>
            <div className="p-de-iconos">
                <LinkedInIcon className="icono-linkedin" />
                <a className="ahref-contacto" href="https://www.linkedin.com/in/bautista-leguizamo-075070168/">Bautista Leguizamo</a>
            </div>
            <div className="p-de-iconos">
                <MailIcon className="icono-email" />
                <a className="ahref-contacto" href="mailto:leguizamobautista@gmail.com">Leguizamobautista@gmail.com</a>
            </div>
            <div className="p-de-iconos">
                <WhatsAppIcon className="icono-whatsapp"/>
                <h4 className="h4-contacto">2227593524</h4>
            </div>
            <div className="p-de-iconos">
                <InstagramIcon className="icono-instagram"/>
                <a className="ahref-contacto" href="https://www.instagram.com/bauti_leguizamo/">Bauti_leguizamo</a>
            </div>
        </div>
    )
}