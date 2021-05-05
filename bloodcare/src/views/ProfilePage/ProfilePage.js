import React,{useEffect,useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import Footer from "shared/components/Footer/Footer";
import Nav from "shared/components/Nav/Nav";
import Heading6 from "shared/components/Heading/Heading6";
import Wrapper from "shared/components/Wrapper/Wrapper";
import Editform from "views/Components/Editform/Editform";
import { isAuth } from "helpers/auth";



const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const [loadedUser, setloadedUser] = useState('');


  useEffect(() => {
    const fetchdata = async () => {
      try{
        const responseData = await fetch(
          `http://localhost:5000/api/user/update`,
        );

        const data = await responseData.json();
        setloadedUser(data.user);
        //setoriginaldata(data.bloodbanks);
      } catch (err){
        console.log(err);
      }
    };
    fetchdata();
    }, [])

  return (
    <div>
    <Nav/>
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div>
            <Wrapper>
              {/* <Heading6>Username  <span style={{marginLeft:'35%'}} >--  hello  babe  </span></Heading6>
              <Heading6>email     <span style={{marginLeft:'35%'}} >--  hello  babe  </span></Heading6>
              <Heading6>phone no  <span style={{marginLeft:'35%'}} >--  hello  babe  </span></Heading6>
              <Heading6>Blood type<span style={{marginLeft:'35%'}} >--  hello  babe  </span></Heading6>
              <Heading6>age       <span style={{marginLeft:'35%'}} >--  hello  babe  </span></Heading6>
              <Heading6>address   <span style={{marginLeft:'35%'}} >--  hello  babe  </span></Heading6>
              <Heading6>state     <span style={{marginLeft:'35%'}} >--  hello  babe  </span></Heading6> */}
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                  <Heading6>Username</Heading6>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile} style={{padding:'16px'}}>
                      {isAuth().name}
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6} >
                  <div className={classes.profile}>
                  <Heading6>Email</Heading6>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile} style={{padding:'16px'}}>
                      {isAuth().email}
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                  <Heading6>Blood type</Heading6>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile} style={{padding:'16px'}}>
                      {isAuth().blood_group}
                  </div>
                </GridItem>                
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                  <Heading6>Phone no</Heading6>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile} style={{padding:'16px'}}>
                      {isAuth().phone_number}
                  </div>
                </GridItem>                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                  <Heading6>Address</Heading6>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile} style={{padding:'16px'}}>
                      {isAuth().address}
                  </div>
                </GridItem>
                <Button style href={"/EditProfile"}>Edit Profile</Button>
            </GridContainer>

            <Editform label="Phone no" type="text" name="p_no"></Editform>
            </Wrapper>

            
{/*             
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer> */}

          </div>
        </div>
      </div>
     <Footer/> 
    </div>
  );
}
