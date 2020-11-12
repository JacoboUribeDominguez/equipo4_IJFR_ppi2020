import React, {Component} from 'react';
import background from '../../img/3.jpg';
import {Row, Col} from 'react-bootstrap';

class Image extends Component{

    render(){
        const image ={
            width:'100%',
            height:'auto',
            pading:'0',
            margin:'0'
        }
        const colPading ={
            pading:'0',
            margin: '0'
        }
        return(
            <Row className="imageContainer" >
                <Col xs={12} lg={3} md={3} style={colPading}></Col>
                <Col xs={12} lg={6} md={6} style={colPading}> 
                    <img src={background} alt="mapa-medellin" style={image}/>
                    
                </Col>
                <Col xs={12} lg={3} md={3} ></Col>
            </Row>
        );
    }
}

export default Image;