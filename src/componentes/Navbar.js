import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Foto from '../imagenes/foto-cv.PNG'
import { Link as LinkRouter } from "react-router-dom"
import '../style/style.css'

const pages = [{to:"/Proyectos", name:"Proyectos"},{to:"/Contacto", name:"Contacto"}, {to:"/SobreMi", name:"Sobre mi"}];

const ResponsiveAppBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={Foto} alt="imagen" className="foto-cv" />
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BAUTISTA LEGUIZAMO
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BAUTISTA LEGUIZAMO
                    </Typography>
                    <Box>
                        {pages.map((page) => (
                            <LinkRouter style={{ textDecoration: "none" }} key={page.name} to={page.to}>
                                <Button
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'flex' },
                                        flexGrow: 1,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'black',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {page.name}
                                </Button>
                            </LinkRouter>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
