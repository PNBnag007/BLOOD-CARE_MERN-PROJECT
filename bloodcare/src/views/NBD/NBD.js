import React from 'react'

import Nav from 'shared/components/Nav/Nav';
import Search from 'shared/components/search/Search';
import Heading from 'shared/components/Heading/Heading';

import Title from 'shared/components/Title/Title';
import Footer from 'shared/components/Footer/Footer';


const NBD = (props) =>{
  const { ...rest } = props;
    return (
      <React.Fragment>
      <Nav/>
      <Title title="Blood Banks"></Title>
      
      
      <div className="wrapper">
        <Heading>Blood Banks</Heading>
        <Search Donors={false}/>
        {/* <Data_table /> */}
      </div>
      {/* <Components/> */}
      <Footer/>
      </React.Fragment>
    );
}

export default NBD;