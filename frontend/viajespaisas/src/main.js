import React, {Component} from 'react';
import Image from './image.js';
import Bottoms from './bottoms.js';
import Lugares from './lugares.js';
import { Route } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <>  
                <Route path="/lugares">
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

export default Main;