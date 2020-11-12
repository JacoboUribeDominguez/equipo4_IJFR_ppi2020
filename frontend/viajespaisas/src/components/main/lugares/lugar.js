import React,{Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap'
import cerroNutibara from '../../../img/cerronutibara.jpg';
import {Link} from 'react-router-dom';

export default class Pueblito extends Component {

    state = {
        descripcion: '',
        disponibilidad: ''
    }
    
    componentDidMount(){
        const sitio = this.props.match.params.lugar;
        fetch(`http://localhost:4000/sites/encontrar/${sitio}`)
        .then(res => res.json())
        .then( response => {
                this.setState({
                    descripcion : response[0].descSitio
                })
                this.setState({
                    disponibilidad : response[0].disponibilidadSitio
                })
            }
        )
    }

    render(){
        
        const marginTop = {
            marginTop:'24px'
        }
        const contenedorImagen = {
            width:'100%',
            height:'355px',
            backgroundImage:`url(${cerroNutibara})`,
            overflow:'auto'
        }

        const colImagen = {
            padding:'0'
        }

        const descripcion = {
            color:'white',
            fontSize:'15px'
        }

        const disponibilidad = {
            background:'white',
            borderRadius:'5px',
            padding:'7px 10px',
            color:'#8cc63f'
        }

        return(
            <div className="container" style={marginTop}>
                <Row className="d-flex flex-column">
                    <Col>
                        <div>
                            <Row className="d-flex flex-column">
                                <Row>
                                    <Col xs={12} lg={3}/>
                                    <Col style={colImagen} xs={12} lg={6}>
                                        <div style={contenedorImagen} className="d-flex flex-column align-items-center p-4">    
                                            <p className="text-center" style={descripcion}>
                                                {this.state.descripcion}
                                            </p>
                                            <div style={disponibilidad}>
                                                {this.state.disponibilidad}
                                            </div>
                                        </div>
                                        
                                    </Col>
                                    <Col xs={12} lg={3}/>
                                </Row>
                                <Row>
                                    <Col xs={12} lg={3}/>
                                    <Col style={colImagen} className="mt-4" xs={12} lg={6}>
                                        <Link to={`/map/${this.props.match.params.lugar}`}>
                                            <Button variant="primary" className="mb-2 botones">
                                                Ver Mapa
                                            </Button>
                                        </Link>
                                        
                                        <Link to={`/crearReseña/${this.props.match.params.lugar}`}>
                                            <Button variant="primary" className="mb-2 botones">
                                                Puntuar
                                            </Button>
                                        </Link>

                                        <Link to="/reseñas">
                                            <Button variant="primary" className="mb-2 botones">
                                                Ver Más Reseñas
                                            </Button>
                                        </Link>
                                    </Col>
                                    <Col xs={12} lg={3}/>
                                </Row>
                            </Row>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        );
        
    }
}