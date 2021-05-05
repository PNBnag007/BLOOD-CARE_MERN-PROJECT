import React, { PureComponent } from 'react'
import Components from 'views/Components/Components';
import HeaderLinks from "components/Header/HeaderLinks.js";
import Header from "components/Header/Header.js";
//import './App.css';
//import Data_table from 'shared/components/data_table/Data_table'
import Nav from 'shared/components/Nav/Nav';
import Search from 'shared/components/search/Search';
import Heading from 'shared/components/Heading/Heading';
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import Title from 'shared/components/Title/Title';
import Footer from 'shared/components/Footer/Footer';
import DonorsTable from 'shared/components/data_table/DonorsTable';


const Donors_page = (props) =>{
  const { ...rest } = props;
    return (
      <React.Fragment>
      <Nav/>
      <Title title="Blood Banks"></Title>
      {/* <Header
        color="rose" 
        routes={[]}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "warning"
        }}
        {...rest}
      /> */}
      
      <div className="wrapper">
        <Heading>Donors Page</Heading>
        <Search Donors={true} NBD={false}/>
        
      </div>
      {/* <Components/> */}
      <Footer/>
      </React.Fragment>
    );
}

export default Donors_page;