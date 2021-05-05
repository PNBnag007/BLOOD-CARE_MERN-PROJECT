import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
// import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import Nav from "shared/components/Nav/Nav.js";
import Footer from "shared/components/Footer/Footer.js";
import KommunicateChat from "shared/components/KommunicateChat/KommunicateChat.js";
import About from "./Sections/About.js";
import Services from "./Sections/Services.js";



const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Nav/>
      <Parallax filter image={require("assets/img/bg7.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Blood Care.</h1>
              <h4>
                Never feel yourself weak, you have the ability to save a life. Just donate blood.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Get Started
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        
        <div className={classes.container}>
          <ProductSection />
          
        </div>
        <Services/>
        <div className={classes.container}>
          
          <TeamSection />
        </div>
        {/* <CountSec/> */}
        <About/>
        <WorkSection />
        
      </div>
      {/* <Footer /> */}
      <KommunicateChat/>
      <Footer/>
    </div>
  );
}