import React from "react";
import cv from '../imagenes/CV-Bautista Leguizamo.pdf';
import secundario from '../imagenes/TITULO-SECUNDARIO.PNG';
import mindhub from '../imagenes/titulo-mindhub.PNG';
import fotoCv from '../imagenes/captura-cv-2.png';
import github from '../imagenes/github.png';
import mongo from '../imagenes/mongo.png';
import css from '../imagenes/css.png';
import html from '../imagenes/html.png';
import js from '../imagenes/js.png';
import node from '../imagenes/node.png';
import react from '../imagenes/react.png';
import redux from '../imagenes/redux.png'

export default function Sobremi() {
    return (
        <div className="div-sobremi">
            <div className="contenedor-img-sobremi">
                <div className="titulo-diplomas">
                    <h2 style={{ color: 'white' }}>Titulo Secundario</h2>
                </div>
                <div className="descripcion-diplomas">
                    <img className="imagen-sobremi" src={secundario} alt="secundario" />
                    <div className="contenedor-parrafo-titulos">
                        <p className="texto-titulos-sobrmi">Este diploma es el que recibi al terminar mis estudios secundarios, orientados al rubro de la economia y administracion  en el colegio San Jose el 15/12/2021</p>
                    </div>
                </div>
            </div>
            <div className="contenedor-img-sobremi">
                <div className="titulo-diplomas">
                    <h2 style={{ color: 'white' }}>Titulo desarrollador Full-Stack MERN</h2>
                </div>
                <div className="descripcion-diplomas">
                    <img className="imagen-sobremi" src={mindhub} alt="secundario" />
                    <div className="contenedor-parrafo-titulos">
                        <p className="texto-titulos-sobrmi">Este diploma me lo entregaron en el bootcamp de MindHub, en el cual me capacitaron para desarrollar paginas web con diferentes tipos de tecnologias. Fueron mas de 700hs de trabajo y lo termine el 12/08/2022</p>
                    </div>
                </div>
            </div>
            <div className="contenedor-img-sobremi">
                <div className="titulo-diplomas">
                    <h2 style={{ color: 'white' }}>Curriculum</h2>
                </div>
                <div className="descripcion-diplomas">
                    <img className="imagen-cv-sobremi" src={fotoCv} alt="cv" />
                    <div className="contenedor-parrafo-titulos">
                        <button className="descargar-cv">
                            <a href={cv} download={' '}>Descargar CV</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="contenedor-img-sobremi-tecnologias">
                <div>
                    <h2>TECNOLOGIAS</h2>
                </div>
                <div className="contenedor-img-tecnologias">
                    <img className="img-tecnologias" src={github} alt="tecnologias" />
                    <img className="img-tecnologias" src={mongo} alt="tecnologias" />
                    <img className="img-tecnologias" src={css} alt="tecnologias" />
                    <img className="img-tecnologias" src={js} alt="tecnologias" />
                    <img className="img-tecnologias" src={node} alt="tecnologias" />
                    <img className="img-tecnologias" src={redux} alt="tecnologias" />
                    <img className="img-tecnologias" src={react} alt="tecnologias" />
                    <img className="img-tecnologias" src={html} alt="tecnologias" />
                </div>
            </div>

        </div>
    )
}