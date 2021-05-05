import "./Demo.scss";
import React, { useState ,useEffect} from "react";

import { kaReducer, Table } from "ka-table";
import {
  DataType,
  EditingMode,
  FilteringMode,
  SortingMode
} from "ka-table/enums";

const dataArray = Array(119).fill(undefined).map(
    (_, index) => ({
      column1: `${index}`,
      column2: `column:2 row:${index}`,
      column3: index % 5,
      column4: `column:4 row:${index}`,
      id: index,
    }),
  );
  
  const tablePropsInit = {
    columns: [
      { key: 'name', title: 'Name' ,dataType: DataType.String, style: {minWidth: 60}   },
      { key: 'address', title: 'Address', dataType: DataType.String, style: {width: 240} },
      { key: 'phone_number', title: 'Contact no', dataType: DataType.Number, style: {width: 230}  },
      { key: 'blood_group', title: 'Blood group', dataType: DataType.String, style: {minWidth: 100} },
    ],
    format: ({ column, value }) => {
      if (column.dataType === DataType.Date){
        return value && value.toLocaleDateString('en', {month: '2-digit', day: '2-digit', year: 'numeric' });
      }
    },
    paging: {
      enabled: true,
      pageSize: 10,
      pageIndex: 0
    },
    data: dataArray,
    //editingMode: EditingMode.Cell,
    rowKeyField: 'id',
    sortingMode: SortingMode.Single,
    //filteringMode: FilteringMode.FilterRow
  };
  
const DonorsTable = (props) => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const [loadedDonors,setloadedDonors] =  useState([])
  const [originaldata,setoriginaldata]  = useState([]);
  const {city,state,age} = props;
  const dispatch = action => {
    changeTableProps(prevState => kaReducer(prevState, action));
  };

  useEffect(() => {
    const fetchdata = async () => {
      try{
        const responseData = await fetch(
          `http://localhost:5000/api/users/`,
        );

        const data = await responseData.json();
        setloadedDonors(data.users);
        setoriginaldata(data.users);
      } catch (err){
        console.log(err);
      }
    };
    fetchdata();
    }, [])

    useEffect(() => {
      dispatch({
        type:"UpdateData", 
        data: loadedDonors,
        })
    }, [loadedDonors])

    useEffect(() => {
      const arr = loadedDonors.filter(d =>d.city == city);
      console.log("arr "+arr);
      if(city === ""){
        setloadedDonors(originaldata);
      }
      else if(arr.length != 0){
        console.log("inside");
        setloadedDonors(arr);
      }
      console.log("Outside")
      console.log(loadedDonors);     
    }, [city])

    useEffect(() => {
      const arr = loadedDonors.filter((d)=>{
        return d.state == state;
      });
      console.log("arr "+arr);
      if(state ===""){
        setloadedDonors(originaldata);
      }
      else if(arr.length != 0){
        console.log("inside");
        setloadedDonors(arr);
      }
      console.log("Outside")
      console.log(loadedDonors);     
    }, [state])

    useEffect(() => {
      const arr = loadedDonors.filter((d)=>{
        return d.blood_group == age;
      });
      console.log("arr "+arr);
      if(age ===""){
        setloadedDonors(originaldata);
      }
      else if(arr.length != 0){
        console.log("inside");
        setloadedDonors(arr);
      }
      console.log("Outside")
      console.log(loadedDonors);     
    }, [age])


  return (
    <div className="custom-theme-demo">
      <Table {...tableProps} dispatch={dispatch} />
    </div>
  );
};

export default DonorsTable;