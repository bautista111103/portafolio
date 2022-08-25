import React from "react";
import cv from '../imagenes/CV-Bautista Leguizamo.pdf';
import secundario from '../imagenes/TITULO-SECUNDARIO.PNG';
import mindhub from '../imagenes/titulo-mindhub.PNG'
import fotoCv from '../imagenes/captura-cv-2.png'

export default function Sobremi() {
    return (
        <div className="div-sobremi">
            <div className="contenedor-img-sobremi">
                <img className="imagen-sobremi" src={secundario} alt="secundario" />
                <div className="contenedor-parrafo-titulos">
                    <h2 style={{ color: 'white' }}>Titulo Secundario</h2>
                    <p className="texto-titulos-sobrmi">Este diploma es el que recibi al terminar mis estudios secundarios, orientados al rubro de la economia y administracion  en el colegio San Jose el 15/12/2021</p>
                </div>
            </div>
            <div className="contenedor-img-sobremi">
                <img className="imagen-sobremi" src={mindhub} alt="secundario" />
                <div className="contenedor-parrafo-titulos">
                    <h2 style={{ color: 'white' }}>Titulo desarrollador Full-Stack MERN</h2>
                    <p className="texto-titulos-sobrmi">Este diploma me lo entregaron en el bootcamp de MindHub, en el cual me capacitaron para desarrollar paginas web con diferentes tipos de tecnologias como JavaScript, HTML5, Css, Nodejs, Mongodb, ect. Fueron mas de 700hs de trabajo y lo termine el 12/08/2022</p>
                </div>
            </div>
            <div className="contenedor-img-sobremi">
                <img className="imagen-cv-sobremi" src={fotoCv} alt="cv" />
                <div className="contenedor-parrafo-titulos">
                    <button className="holita"> 
                       <a href={cv} download={' '}>Descargar CV</a>
                    </button>
                </div>
            </div>
        </div>
    )
}