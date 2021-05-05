import { ListItemSecondaryAction } from '@material-ui/core';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown';

// import React, { PureComponent } from 'react'

import CustomInput from 'components/CustomInput/CustomInput'
import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import { makeStyles, MuiThemeProvider ,createMuiTheme,createPalette} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Search.css'
import { red } from '@material-ui/core/colors';
import Data_table from 'shared/components/data_table/Data_table'
import DonorsTable from '../data_table/DonorsTable';

const theme = createMuiTheme({
    palette: {
      type: 'ligth',
      main: red,
      background: {
        default: red,
      },
    },
    overrides: {
        // Applied to the <ul> element
        MuiMenu: {
            list: {
                backgroundColor: "#cccccc",
            },
        },
        // Applied to the <li> elements
        MuiMenuItem: {
            root: {
                fontSize: 12,
            },
        },
    },
  });


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(-1.5),
      minWidth: 120,
     // border:"1px solid black",
      //height: "100%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    selectunderline:{
        "&:focus": {
            backgroundColor: "white"
          },
        "&:before": {
            // normal
            borderBottom: "1px solid red"
          },
          "&:after": {
            // focused
            borderBottom: `1px solid red`
          },
          "&:hover:not($disabled):not($focused):not($error):before": {
            // hover
            borderBottom: `2px solid red`
          }
    },

    select: {
        "& ul": {
            backgroundColor: "#ff6363",
        },
        "& li": {
            fontSize: 12,
        },
    },

  }));
  




const Search =(props)=>{
    const {Donors,NBD} = props;
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [City,setcity] =  useState("");
    const [State,setState] =  useState("");
    const handleChange = (event) => {
        setAge(event.target.value);
        console.log("Age "+age);
    };

    const citychangeHandler = (event) =>{
        setcity(event.target.value);
        console.log(City);
    };

    const statechangeHandler = (event) =>{
        setState(event.target.value);
        console.log(State);
    };
    return(
        <React.Fragment>
        <div className="panel-control">
        
            <div className='input-control'>
                <CustomInput
                    id="regular"
                    onChange = {citychangeHandler}
                    value = {City}
                    inputProps={{
                        placeholder: "City",
                        color:'rose',
                        
                        //onChange:{citychangeHandler}
                    }}
                    formControlProps={{
                        fullWidth: false,
                        color:'rose',
                        
                    }}
                    inputRootCustomClasses={{
                        marginTop: '0px'
                    }}
                />
            </div>
            <div className='input-control'>
                <CustomInput
                    id="regular"
                    onChange = {statechangeHandler}
                    value = {State}
                    inputProps={{
                        placeholder: "State",
                        color:'secondary',
                    }}
                    formControlProps={{
                        fullWidth: false,
                    }}
                />
            </div>

            <div className='input-control'>
            
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Blood Type</InputLabel>
                    {/* <MuiThemeProvider muiTheme={theme}> */}
                    <Select className={classes.selectunderline}
                    MenuProps={{ classes: { paper: classes.select } }}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    onChange={handleChange}

                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"A+"}>A+</MenuItem>
                    <MenuItem value={"A-"}>A-</MenuItem>
                    <MenuItem value={"B+"}>B+</MenuItem>
                    <MenuItem value={"B-"}>B-</MenuItem>
                    <MenuItem value={"AB+"}>AB+</MenuItem>
                    <MenuItem value={"AB-"}>AB-</MenuItem>
                    <MenuItem value={"O+"}>O+</MenuItem>
                    <MenuItem value={"O-"}>O-</MenuItem>

                    </Select>
                    {/* </MuiThemeProvider>         */}
            </FormControl>
            
            
            </div>
            
        </div>
        {Donors && <DonorsTable city = {City} state ={State} age={age}/>}
        {!Donors && <Data_table city = {City} state ={State}/>}
        {/* <Data_table city = {City} /> */}
        </React.Fragment>
    );
}

export default Search;