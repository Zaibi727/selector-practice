import React from 'react'
import './selector.css';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from './data';


const animatedComponents = makeAnimated();


const Second = () => {
    return (
        <div>
             <Select className="ss"
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
        </div>
    )
}

export default Second;
