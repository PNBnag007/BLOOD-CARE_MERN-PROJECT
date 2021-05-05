import React,{useState} from 'react'
import Editform from 'views/Components/Editform/Editform';
import { useHistory } from 'react-router';
import "./BBprofile.css";

const BBprofile = () => {


    const [Name, setName] = useState()
    const [Parent_hospital, setParent_hospital] = useState()
    const [Category, setCategory] = useState()
    const [License, setLicense] = useState()
    const [A_p, setA_p] = useState()
    const [A_m, setA_m] = useState()
    const [B_p, setB_p] = useState()
    const [B_m, setB_m] = useState()
    const [AB_p, setAB_p] = useState()
    const [AB_m, setAB_m] = useState()
    const [O_p, setO_p] = useState()
    const [O_m, setO_m] = useState()

    const history = useHistory();

    const submit = async event => {
        event.preventDefault();
        try {
            console.log("test")
          await fetch(
            'http://localhost:5000/api/bloodbanks/6066e78fd33c9f101494f6e3',
            {
                method:'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({
                    name:Name,
                    parental_hospital_name:Parent_hospital,
                    category:Category,
                    License_no:License,
                    A_p,
                    A_m,
                    B_p,
                    B_m,
                    AB_p,
                    AB_m,
                    O_p,
                    O_m,
                }),
            }
            
          );
          history.push('/BBprofile');
        } catch (err) {
            console.log(err)
        }
      };

    return (
        <div className="BBprofile-background">
            <form onSubmit={submit}>
            <div className = 'form-control-bb'>
                    
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">Profile Settings</h4>
                    </div>
                    <Editform value={Name} onChange={(e)=>setName(e.target.value)} label="Name" type="text" name="name" ></Editform>
                    <Editform value={Parent_hospital} onChange={(e)=>setParent_hospital(e.target.value)} label="Prerental Hospital Name" type="text" name="parental_hospital_name" ></Editform>
                    <Editform value={Category} onChange={(e)=>setCategory(e.target.value)} label="Category" type="text" name="category" ></Editform>
                    <Editform value={License} onChange={(e)=>setLicense(e.target.value)} label="License number" type="text" name="License_no" ></Editform>
                    <Editform value={A_p} onChange={(e)=>setA_p(e.target.value)} label="A-Positive blood" type="text" name="A_p" ></Editform>
                    <Editform value={A_m} onChange={(e)=>setA_m(e.target.value)} label="A-negative blood" type="text" name="A_m" ></Editform>
                    <Editform value={B_p} onChange={(e)=>setB_p(e.target.value)} label="B-Positive blood" type="text" name="B_p" ></Editform>
                    <Editform value={B_m} onChange={(e)=>setB_m(e.target.value)} label="B-negative blood" type="text" name="B_m" ></Editform>
                    <Editform value={AB_p} onChange={(e)=>setAB_p(e.target.value)} label="AB-Positive blood" type="text" name="AB_p" ></Editform>
                    <Editform value={AB_m} onChange={(e)=>setAB_m(e.target.value)} label="AB-negative blood" type="text" name="AB_m" ></Editform>
                    <Editform value={O_p} onChange={(e)=>setO_p(e.target.value)} label="O-Positive blood" type="text" name="O_p" ></Editform>
                    <Editform value={O_m} onChange={(e)=>setO_m(e.target.value)} label="O-negative blood" type="text" name="O_m" ></Editform>

                    {/* <div className="row mt-2">
                        <div className="col-md-6"><label className="labels">Name</label><div className ="box1">  bb_form.name   </div></div>
                        <div className="col-md-6"><label className="labels">Prerental Hospital Name</label><div className ="box1">  bb_form.parental_hospital_name   </div></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6"><label className="labels">Category</label><div className ="box1">  bb_form.category   </div></div>
                        <div className="col-md-6"><label className="labels">License number</label><div className ="box1">  bb_form.License_no  </div></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6"><label className="labels">A-Positive blood</label><div className ="box1">  bs_form.A_p   </div></div>
                        <div className="col-md-6"><label className="labels">A-negative blood</label><div className ="box1">  bs_form.A_m  </div></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6"><label className="labels">B-Positive blood</label><div className ="box1">  bs_form.B_p   </div></div>
                        <div className="col-md-6"><label className="labels">B-negative blood</label><div className ="box1">  bs_form.B_m  </div></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6"><label className="labels">AB-Positive blood</label><div className ="box1">  bs_form.AB_p   </div></div>
                        <div className="col-md-6"><label className="labels">AB-negative blood</label><div className ="box1">  bs_form.AB_m  </div></div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6"><label className="labels">O-Positive blood</label><div className ="box1">  bs_form.O_p   </div></div>
                        <div className="col-md-6"><label className="labels">O-negative blood</label><div className ="box1">  bs_form.O_m  </div></div>
                    </div> */}
                    <div className="row mt-2">
                        <button type="submit" className="btn btn-primary profile-button">Save Profile</button>
                    </div>
                 </div>
                 </form>
                </div>
    )
}

export default BBprofile
