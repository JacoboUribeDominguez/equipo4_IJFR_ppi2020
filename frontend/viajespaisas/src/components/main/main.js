import React, {Component} from 'react';
import Image from './image.js';
import Bottoms from './bottoms.js';
import Lugares from './lugares.js';
import { Route } from 'react-router-dom';
import ImageAdministrator from './imageAdministrator.js';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Main extends Component{

    state = {
        administrador: false
    }

    componentDidMount(){
        if(cookies.get('administrador')){
            if(cookies.get('administrador') === "1"){
                this.setState({
                    administrador : true
                })
            }
        }
    }

    render(){
        if(this.state.administrador){
            return(
                <>
                    <Route path="/inicio/lugares">
                        <Lugares />
                    </Route>
                    <div className="mt-5 container mb-2">
                        <ImageAdministrator />
                        <Bottoms />
                    </div>
                </>
            );
        }else{
            return(
                <>  
                    <Route path="/inicio/lugares">
                        <Lugares />
                    </Route>
                    <div className="mt-5 container mb-2">
                        <Image />
                        <Bottoms />
                    </div>
                </>
            );
        }
    }
}
