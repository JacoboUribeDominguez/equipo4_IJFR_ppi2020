import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoviajes from '../../img/logo_sobre_blanco.png';
import logoLogin from '../../img/logoIngreso.png';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './login.css';
//import useUser from '../../hook/useUser'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Login() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    //const {login, isLogged} = useUser()

    const onLogin = e => {
        fetch(`http://localhost:4000/users/encontrar/${user}`)
            .then(res => res.json())
            .then(result => {
                if (result[0].usuario === user) {
                    if(result[0].contrasena === password){
                        /*if(result[0].administrador === 0){
                            login()
                            if(isLogged) history.push("/inicio");
                        }else{
                            login()
                            if(isLogged) history.push("/inicio/true");
                        }*/
                        cookies.set('codigoUsuario', result[0].codigoUsuario, {path:"/"})
                        cookies.set('usuario', result[0].usuario, {path:"/"})
                        cookies.set('administrador', result[0].administrador, {path:"/"})
                        history.push("/inicio")
                    }else{
                        window.alert('Contraseña invalida')
                    }
                }else{
                    window.alert('Usuario inexistente')
                }
            },(error) => {
                console.log(error)
            }
            )
            .catch(error => console.error('Error:', error));
        e.preventDefault();
    }

    const containerLogin = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '60px',
        height: 'auto'
    }

    const colLogo = {
        padding: '0px',
        margin: '0px'
    }

    const logoViajes = {
        width: '100%'
    }

    const containerForm = {
        background: '#f9fafc',
        padding: '10% 10%',
        borderRadius: '15px'
    }


    return (
        <div style={containerLogin}>
            <Row className="mb-5">
                <Col xs={2} sm={3} md={3} style={colLogo} />
                <Col xs={8} sm={6} md={6} style={colLogo} className="d-flex justify-content-center">
                    <img src={logoviajes} style={logoViajes} alt="logoViajes" />
                </Col>
                <Col xs={2} sm={3} md={3} style={colLogo} />
            </Row>
            <div stye={containerForm} className="d-flex flex-column align-items-center justify-content-center">
                <img src={logoLogin} className="logoLogin" alt="logoLogin" />
                <Form className="d-flex flex-column justify-content-center ">
                    <Form.Group controlId="formBasicText" className="d-flex flex-column align-items-center">
                        <Form.Control
                            type="text"
                            name="user"
                            placeholder="Usuario"
                            onChange={e => setUser(e.target.value)}
                            value={user}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </Form.Group>
                    <Button variant="primary" type="" onClick={onLogin} className="mb-2 botones">
                            Ingresar
                    </Button>
                    <Link to="/register">
                        <Button variant="secondary" className="mb-2 botones">
                            Registrarse
                            </Button>
                    </Link>

                    <Link to="/inicio">
                        <Button variant="primary" className="botones">
                            Entrar como incógnito
                        </Button>
                    </Link>
                </Form>
            </div>
        </div>
    );
}