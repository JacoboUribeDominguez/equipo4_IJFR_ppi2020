import React, { useState } from 'react';
import logoviajes from '../../img/logo_sobre_blanco.png';
import logoLogin from '../../img/logoIngreso.png';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Register() {

    const [user, setUser] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRpassword] = useState("");
    const history = useHistory();

    const onCreate = () => {
        let codigo;
        fetch('http://localhost:4000/users/listar')
        .then(res => res.json())
        .then(result => {
            codigo = result.length
            codigo++;
            if(password === rpassword){
                fetch('http://localhost:4000/users/agregar', {
                    method: 'POST',
                    body: JSON.stringify({
                        codigoUsuario: codigo,
                        usuario: user,
                        nombre: name,
                        correo: email,
                        contrasena: password,
                        administrador: 0
                    }), // data can be `string` or {object}!
                    headers:{
                      'Content-Type': 'application/json'
                    }
                })
                window.alert('Usuario Creado')
                history.push('/login')
            } else {
                window.alert("Las contraseñas no coinciden")
            }
        })
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
        borderRadius: '15px'
    }
    return (
        <div style={containerLogin}>
            <Row className="mb-5">
                <Col xs={2} sm={3} md={3} style={colLogo} />
                <Col xs={8} sm={6} md={6} style={colLogo} className="d-flex justify-content-center">
                    <img src={logoviajes} style={logoViajes} alt="logo-Viajes" />
                </Col>
                <Col xs={2} sm={3} md={3} style={colLogo} />
            </Row>
            <div style={containerForm} className="d-flex flex-column align-items-center justify-content-center">
                <img src={logoLogin} className="logoLogin" alt="logoLogin" />
                <Form className="d-flex flex-column justify-content-center">
                    <Form.Group controlId="formBasicText" className="d-flex flex-column align-items-center">
                        <Form.Control type="text" placeholder="Usuario" name="user" onChange={e => setUser(e.target.value)} value={user} />
                    </Form.Group>
                    <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="Nombre" name="name" onChange={e => setName(e.target.value)} value={name} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Correo" name="email" onChange={e => setEmail(e.target.value)} value={email} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Contraseña" name="password" onChange={e => setPassword(e.target.value)} value={password} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword2">
                        <Form.Control type="password" placeholder="Confirme Contraseña" name="rpassword" onChange={e => setRpassword(e.target.value)} value={rpassword} />
                    </Form.Group>
                    <Button variant="primary" onClick={onCreate} className="mb-2 botones">
                        Confirmar Registro
                    </Button>
                </Form>
            </div>
        </div>
    );

}