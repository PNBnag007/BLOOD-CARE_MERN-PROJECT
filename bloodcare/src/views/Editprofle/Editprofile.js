import React, { useState,useEffect,useRef } from 'react'
import Heading from 'shared/components/Heading/Heading';
import Nav from 'shared/components/Nav/Nav'
import Title from 'shared/components/Title/Title';
import Wrapper from 'shared/components/Wrapper/Wrapper';
import Editform from 'views/Components/Editform/Editform'
// import Button from "components/CustomButtons/Button.js";
import Button from "@material-ui/core/Button";
import './Editprofile.css';
import { useHistory } from 'react-router';



const Editprofile = () => {
    const [Phone, setPhone] = useState()
    const [Age, setAge] = useState()
    const [City, setCity] = useState()
    const [State, setState] = useState()
    const [Address, setAddress] = useState()
    const [Blood_Group, setBlood_Group] = useState()
    const [user, setuser] = useState("")

    const history = useHistory();

    const submit = async event => {
        event.preventDefault();
        try {
            console.log("test")
          await fetch(
            'http://localhost:5000/api/users/6082c466ccece1a05213c83c',
            {
                method:'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({
                    age:Age,
                    phone_number: Phone,
                    address: Address,
                    blood_group:Blood_Group,
                    state:State,
                    city:City,
                }),
            }
            
          );
          history.push('/');
        } catch (err) {
            console.log(err)
        }
      };



    return (

        <div>
            <Nav/>
            <Title title={"Edit Page"}></Title>
            {/* <div className="wrapper">
                <Heading class={"edititle"}>Edit profile</Heading>    
            </div> */}
            <form id="myform" onSubmit={submit} >
            <div className="editwrapper">
                <Editform value={Phone} onChange={(e)=>setPhone(e.target.value)} label="Phone no" type="text" name="p_no" ></Editform>
                <Editform value={Age} onChange={(e)=>setAge(e.target.value)} label="Age" type="text" name="age"></Editform>
                <Editform value={City} onChange={(e)=>setCity(e.target.value)} label="City" type="text" name="City"></Editform>
                <Editform value={State} onChange={(e)=>setState(e.target.value)} label="State" type="text" name="State"></Editform>
                <Editform value={Address} onChange={(e)=>setAddress(e.target.value)} label="Address" type="text" name="Address"></Editform>
                <Editform value={Blood_Group} onChange={(e)=>setBlood_Group(e.target.value)} label="Blood Group" type="text" name="Blood Group"></Editform>
                {/* <Editform value={} onChange={(e)=>set(e.target.value)} label="Blood Group" type="text" name="Blood Group"></Editform> */}
                <div className="but-control">
                    <Button form="myform" type="submit">Edit</Button>
                </div>
                
            </div>
            </form>
        </div>
    )
}

export default Editprofile
