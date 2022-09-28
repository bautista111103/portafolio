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
                    <Card.Title className="titulo-carta">Proyecto 1</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">AmazingEvents</Card.Subtitle>
                    <Card.Img className="imagen-proyectos" src={amazing} />
                    <Card.Text className="descripcion-proyectos">
                        Esta es una pagina dedicada a diferentes tipos de eventos de comida, recitales, excursiones, actividades recreactivas entre muchas otras y fue realizada completamente por mi.
                    </Card.Text>
                    <Card.Text className="texto-proyectos-tecnologias">
                        Tecnologias usadas:
                    </Card.Text>
                    <div className="div-tegnologias-1y2">
                        <ol>
                            <li>JavaScript</li>
                            <li>Css</li>
                            <li>HTML5</li>
                        </ol>
                    </div>
                    <div className="links">
                        <Card.Link className="link-carta-proyecto" href="https://amazingevents-leguizamo.netlify.app/">Pagina</Card.Link>
                        <Card.Link className="link-carta-proyecto" href="https://github.com/bautista111103/AmazingEvents">Repositorio</Card.Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="carta-proyectos">
                <Card.Body className="cuerpo-carta-proyecto">
                    <Card.Title className="titulo-carta">Proyecto 2</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Mindy</Card.Subtitle>
                    <Card.Img className="imagen-proyectos" src={mindy} />
                    <Card.Text className="descripcion-proyectos">
                        Mindy es un proyecto que me toco realizar de manera grupal, es un ecommerce de articulos para cualquier tipo de mascotas y nos llevo aproximadamnete una semana realizarla por completo.
                    </Card.Text>
                    <Card.Text className="texto-proyectos-tecnologias">
                        Tecnologias usadas:
                    </Card.Text>
                    <div className="div-tegnologias-1y2">
                        <ol>
                            <li>JavaScript</li>
                            <li>Css</li>
                            <li>HTML5</li>
                            <li>Github</li>
                        </ol>
                    </div>
                    <div className="links">
                        <Card.Link className="link-carta-proyecto" href="https://62fbe15f389d0b371555441f--mindy-petshop-leguizamo.netlify.app/pages/shoptoys">Pagina</Card.Link>
                        <Card.Link className="link-carta-proyecto" href="https://github.com/bautista111103/Mindy">Repositorio</Card.Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="carta-proyectos">
                <Card.Body className="cuerpo-carta-proyecto">
                    <Card.Title className="titulo-carta">Proyecto 3</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Mytinerary</Card.Subtitle>
                    <Card.Img className="imagen-proyectos" src={mytinerary} />
                    <Card.Text className="descripcion-proyectos">
                        Esta es una app realizada por mi para una agencia de viaje la cual queria mostrar los diferentes destinos que ofrecia junto con sus principales atracciones y actividades, me llevo aproximadamnete 2 semanas ternminarla por completo
                    </Card.Text>
                    <Card.Text className="texto-proyectos-tecnologias">
                        Tecnologias usadas:
                    </Card.Text>
                    <div className="div-tegnologias">
                        <ol >
                            <li>JavaScript</li>
                            <li>Css</li>
                            <li>HTML5</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Node js</li>
                            <li>Mongodb</li>
                            <li>Postman</li>
                        </ol>
                    </div>
                    <div className="links">
                        <Card.Link className="link-carta-proyecto" href="https://mytinerari-leguizamo-frontend.herokuapp.com/">Pagina</Card.Link>
                        <Card.Link className="link-carta-proyecto" href="https://github.com/bautista111103/mytinerary-leguizamo">Repositorio</Card.Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className="carta-proyectos">
                <Card.Body className="cuerpo-carta-proyecto">
                    <Card.Title className="titulo-carta">Proyecto 4</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Gea Store</Card.Subtitle>
                    <Card.Img className="imagen-proyectos" src={gea} />
                    <Card.Text className="descripcion-proyectos">
                        Este ecommerce fue realizado de manera grupal, en este caso estaba orientado a ofrecer comidas para personas con problemas de salud o que cuidan su alimentacion y tenia como limite de tiempo 10 dias para su entrega en completo funcionamiento.
                    </Card.Text>
                    <Card.Text className="texto-proyectos-tecnologias">
                        Tecnologias usadas:
                    </Card.Text>
                    <div className="div-tegnologias">
                        <ol>
                            <li>JavaScript</li>
                            <li>Css</li>
                            <li>HTML5</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Node js</li>
                            <li>Mongodb</li>
                            <li>Github</li>
                            <li>Postman</li>
                            <li>Upload file</li>
                        </ol>
                    </div>
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