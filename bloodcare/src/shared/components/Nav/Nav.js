import { List, ListItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Header from 'components/Header/Header';
import React from 'react'
import image from "../../../assets/img/bg.jpg";
import Button from "components/CustomButtons/Button.js";
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import { isAuth } from 'helpers/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>


const useStyles = makeStyles(styles);

const Nav = () => {
  const classes = useStyles();
    return (
      <div id="navbar" className={classes.navbar}>
      {/* <div
        className={classes.navigation}
        style={{ backgroundImage: "url(" + image + ")" }}
      > */}
          <Header
            brand="Blood Care"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/NBD"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    NBD
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/Donors"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Donors Details
                  </Button>
                </ListItem>
                {/*<ListItem className={classes.listItem}>
                  <Button
                    href="/UserProfile"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    UserProfile
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/BBprofile"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    BloodBankProfile
                  </Button>
            </ListItem>*/}
                {!isAuth() ?
                <ListItem className={classes.listItem}>
                  <Button
                    href="/regis"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="black"
                  >
                    User?
                  </Button>
                </ListItem>:null}
                
                {!isAuth() ?
                <ListItem className={classes.listItem}>
                  <Button
                    href="/regib"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="black"
                  >
                   BloodBank?
                  </Button>
                </ListItem>:null}
                {(isAuth() && isAuth().role=="user") ?
                <ListItem className={classes.listItem}>
                  <Button
                    href="/regis"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="black"
                  >
                   {"Hi,"+ isAuth().name}
                  </Button>
                </ListItem>:null}
                {(isAuth() && isAuth().role=="bloodbank")?
                <ListItem className={classes.listItem}>
                  <Button
                    href="/regib"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="black"
                  >
                    {"Hi,"+isAuth().name}
                  </Button>
                </ListItem>:null}
                {/*<ListItem className={classes.listItem}>
                <div className="dropdown" >
                  <Dropdown style={{zindex:100000}}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{zindex:100000}}>
                  {isAuth() ? "Hi,"+isAuth().name:"login/signup"}
                  </Dropdown.Toggle>
                
                  <Dropdown.Menu style={{backgroundColor:'#73a47'}}style={{zindex:100000}}>
                    <Button style={{color: "white"}} href="/regis"style={{zindex:100000}}> <Dropdown.Item style={{zindex:100000}} className={classes.registerNavLink}
                    onClick={e => e.preventDefault()}
                    color="black"
                    round>User </Dropdown.Item></Button>
                    <Dropdown.Item style={{zindex:100000}} href="/regib" className={classes.registerNavLink}
                    onClick={e => e.preventDefault()}
                    color="black"
                    round>Blood Bank</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
            </ListItem>*/}
              </List>
            }
          />
        {/* </div> */}
      </div>
       
    );
};


export default Nav ;