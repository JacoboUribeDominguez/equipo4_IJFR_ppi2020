import React, {Component} from 'react';
import lugaresData from './lugares.json';

export default class LugaresRoute extends Component {
    render(){
        return(
            <>
            {lugaresData.lugares.map(lugares => 
                <Route key={lugares.id} path="/pueblitopaisa">
                    <Lugar descripcionSitio={lugares.descripcionSitio} disponibilidadSitio={lugares.disponibilidadSitio} />
                </Route>
            )}
            </>
        );
    }
}