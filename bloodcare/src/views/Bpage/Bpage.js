import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Bpage.css'
import Button from "components/CustomButtons/Button.js";
const Bpage = () => {

    const [loadedBloodbank, setloadBloodbank] = useState('')
    const [data, setdata] = useState()
    useEffect(() => {
        const fetchdata = async () => {
          try{
            const responseData = await fetch(
              `http://localhost:5000/api/bloodbanks/6066e78fd33c9f101494f6e3`,
            );
    
            const data = await responseData.json();
            setloadBloodbank(data.bloodbanks);
            //setoriginaldata(data.bloodbanks);
            
          } catch (err){
            console.log(err);
          }
        };
        fetchdata();
        }, [])


    useEffect(() => {
        console.log(loadedBloodbank.name);
    }, [loadedBloodbank])

    return (
        <div className="BBprofile-background">
            <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="data:image/jpeg;base64,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" alt=""/>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                          {loadedBloodbank.name}
                                    </h5>
                                    
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Storage</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <Button href={"/BBEdit"}>
                            Edit profile
                        </Button>
                        
                    </div>
                    
                </div>
                
                <div class="row">
                    <div class="col-md-4">

                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>parental_hospital_name</label>
                                            </div>
                                            <div class="col-md-6">
                                        <p>  {loadedBloodbank.parental_hospital_name} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Category</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>  {loadedBloodbank.category} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>License no</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>  {loadedBloodbank.License_no} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>  {loadedBloodbank.phone_number} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Member in blood_bank</p>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>A-Positive blood</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>  {loadedBloodbank.A_p} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>A-negative blood</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>  {loadedBloodbank.A_m} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>B-Positive blood</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>  {loadedBloodbank.B_p} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>B-negative blood</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>  {loadedBloodbank.B_m} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>AB-Positive blood</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>  {loadedBloodbank.AB_p} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>AB-Negative blood</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>  {loadedBloodbank.AB_m} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>O-Positive blood</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>  {loadedBloodbank.O_p} </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>O-Negative blood</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>  {loadedBloodbank.O_p} </p>
                                            </div>
                                        </div>
    
                                
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
                
    </div>
    );
}

export default Bpage;
