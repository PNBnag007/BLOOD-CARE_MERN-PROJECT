import React from 'react'
import './Wrapper.css'
const Wrapper = (props) => {
    return (
        <div className='wrapperprof'>
            {props.children}
        </div>
    )
}

export default Wrapper
