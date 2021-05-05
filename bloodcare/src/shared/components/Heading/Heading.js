import React, { PureComponent } from 'react'
import './Heading.css'
const Heading =(props)=>{
    return(
        <h1 style={props.style} className={props.class} className="title">{props.children}</h1>
    );
}
export default Heading;