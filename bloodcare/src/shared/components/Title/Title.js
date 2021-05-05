import React from 'react'
import './Title.css'

const Title = (props) =>{
    return (
        <section class="breadcrumbs">
        <div class="container">
  
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>{props.title}</li>
          </ol>
          <h2>{props.title}</h2>
  
        </div>
      </section>
    );
}

export default Title;
