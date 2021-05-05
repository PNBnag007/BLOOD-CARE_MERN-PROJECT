import React from 'react'
import './Editform.css';

const Editform = (props) => {
    return (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">{props.label}</label>
            <div className="col-sm-10">
                <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} className="form-control"></input>
            </div>
        </div>
    )
}

export default Editform;
