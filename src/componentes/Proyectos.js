import React from "react";
import Card from 'react-bootstrap/Card';
import mytinerary from '../imagenes/mytinerary.PNG';
import amazing from '../imagenes/amazing.PNG';
import mindy from '../imagenes/mindy.PNG';
import gea from '../imagenes/gea.PNG';
import '../style/style.css'

function ContenedorProyectos() {
    return (
        <div className="Contenedor-de-proyectos">
            <Card className="carta-proyectos">
                <Card.Body className="cuerpo-carta-proyecto">
                    <Card.Title>Proyecto 1</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">AmazingEvents</Card.Subtitle>
                    <Card.Img className="imagen-proyectos" src={amazing} />
                    <Card.Text className="descripcion-proyectos">
                        Esta es una pagina dedicada a diferentes tipos de eventos en general, realizada completamente por mi.
                    </Card.Text>
                    <Card.Text className="texto-proyectos-tecnologias">
                        Tecnologias usadas:
                        <ol>
                            <li>JavaScript</li>
                            <li>Css</li>
                            <li>HTML5</li>
                        </ol>
                    </Card.Text>
                    <div className="links">
                        <Card.Link className="link-carta-proyecto" href="https://amazingevents-leguizamo.netlify.app/">Pagina</Card.Link>
                        <Card.Link className="link-carta-proyecto" href="https://github.com/bautista111103/AmazingEvents">Repositorio</Card.Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="carta-proyectos">
                <Card.Body className="cuerpo-carta-proyecto">
                    <Card.Title>Proyecto 2</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Mindy</Card.Subtitle>
                    <Card.Img className="imagen-proyectos" src={mindy} />
                    <Card.Text className="descripcion-proyectos">
                        Mindy es un proyecto que me toco realizar de manera grupal, es un ecommerce de articulos para cualquier tipo de mascotas y nos llevo aproximadamnete una semana realizarla por completo.
                    </Card.Text>
                    <Card.Text className="texto-proyectos-tecnologias">
                        Tecnologias usadas:
                        <ol>
                            <li>JavaScript</li>
                            <li>Css</li>
                            <li>HTML5</li>
                        </ol>
                    </Card.Text>
                    <div className="links">
                        <Card.Link className="link-carta-proyecto" href="https://62fbe15f389d0b371555441f--mindy-petshop-leguizamo.netlify.app/pages/shoptoys">Pagina</Card.Link>
                        <Card.Link className="link-carta-proyecto" href="https://github.com/bautista111103/Mindy">Repositorio</Card.Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="carta-proyectos">
                <Card.Body className="cuerpo-carta-proyecto">
                    <Card.Title>Proyecto 3</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Mytinerary</Card.Subtitle>
                    <Card.Img className="imagen-proyectos" src={mytinerary} />
                    <Card.Text className="descripcion-proyectos">
                        Este es un proyecto realizado por mi para una agencia de viaje, me llevo aproximadamnete 2 semanas ternminarla por completo
                    </Card.Text>
                    <Card.Text className="texto-proyectos-tecnologias">
                        Tecnologias usadas:
                        <ol>
                            <li>JavaScript</li>
                            <li>Css</li>
                            <li>HTML5</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Node js</li>
                        </ol>
                    </Card.Text>
                    <div className="links">
                        <Card.Link className="link-carta-proyecto" href="https://mytinerari-leguizamo-frontend.herokuapp.com/">Pagina</Card.Link>
                        <Card.Link className="link-carta-proyecto" href="https://github.com/bautista111103/mytinerary-leguizamo">Repositorio</Card.Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="carta-proyectos">
                <Card.Body className="cuerpo-carta-proyecto">
                    <Card.Title>Proyecto 4</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Gea Store</Card.Subtitle>
                    <Card.Img className="imagen-proyectos" src={gea} />
                    <Card.Text className="descripcion-proyectos">
                        Este ecommerce tambien fue realizado de manera grupal y tenia como limite de tiempo maximo 10 dias para su entrega en completo funcionamiento.
                    </Card.Text>
                    <Card.Text className="texto-proyectos-tecnologias">
                        Tecnologias usadas:
                            <ol>
                                <li>JavaScript</li>
                                <li>Css</li>
                                <li>HTML5</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Node js</li>
                                <li>Testing</li>
                                <li>Upload file</li>
                            </ol>
                    </Card.Text>
                    <div className="links">
                        <Card.Link className="link-carta-proyecto" href="https://gea-store.herokuapp.com/">Pagina</Card.Link>
                        <Card.Link className="link-carta-proyecto" href="#">Repositorio</Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
export default ContenedorProyectos;