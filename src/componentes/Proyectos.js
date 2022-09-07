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
                        Mindy es un proyecto que me toco realizar de manera grupal, fue dedicada a vender articulos para cualquier tipo de mascotas y nos llevo aproximadamnete una semana realizarla por completo.
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
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
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
                    <Card.Text className="tecnologias-proyectos">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
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

// function ContenedorProyectos() {
//   return (
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col>
//           <Card>
//             <Card.Img variant="top" src={foto} />
//             <Card.Body>
//               <Card.Title>Card title</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default ContenedorProyectos;
