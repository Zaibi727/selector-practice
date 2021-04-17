import React, { Component } from 'react';
import Selector from './selector';
import Second from './secondSelector';


class Parent extends Component {

    render() { 
        return ( 
            <div>
                <Selector />        
                <Second />
                <colourStyles />
            </div>
         );
    }
}
 
export default Parent;