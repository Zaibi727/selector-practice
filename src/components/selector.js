import React, { Component } from 'react';
import Select from 'react-select';
import './selector.css';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  
 const Selector = () => {
      return (
          <div>
              <Select className="sss" options={options} />
          </div>
      )
  };
  
  export default Selector