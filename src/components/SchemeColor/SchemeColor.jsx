import React from 'react';
import "./SchemeColor.css"


const SchemeColor = ({colors})=> {

    return  <div className="scheme-colors">

    <div className="scheme-color" style={{ backgroundColor: `${colors}` }} >{colors}</div>
    
  </div>
}


export default SchemeColor