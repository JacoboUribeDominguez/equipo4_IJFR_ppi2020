import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class DispoSitio extends Component {
    render(){
        return(
            <div className="mt-5 container mb-2 d-flex align-items-center flex-column">
                <div className="p-4 d-flex flex-column align-items-center" style={{background:'#8cc63f',borderRadius:'15px', width:'100%'}}>
                    <h5 style={{color:'white'}}>Disponibilidad</h5>
                    <div style={{width:'100%'}}>
                        <Form className="d-flex justify-content-center">
                            <Form.Group controlId="formBasicRadio" className="d-flex align-items-center mr-4" style={{height:'50px',margin:'0'}}>
                                <Form.Check
                                    type="radio"
                                    label="Sí"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    style={{color:'white'}}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicRadio" className="d-flex align-items-center" style={{height:'50px',margin:'0'}}>
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    style={{color:'white'}}
                                />
                            </Form.Group>
                        </Form>
                    </div>
                    <Link to="/true">
                        <Button type="submit" style={{background:'#6D9933', border:'1px solid #6D9933'}}>Enviar</Button>
                    </Link>
                </div>
            </div>
        );
    }
}