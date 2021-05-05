// open TS Example or JS Example to see how to override styles
import './Demo.scss';

import React, { useEffect,useState } from 'react';

import { ITableProps, kaReducer, Table } from 'ka-table';
import { DataType, EditingMode, FilteringMode, SortingMode } from 'ka-table/enums';
import { DispatchFunc } from 'ka-table/types';
import Button from "components/CustomButtons/Button.js";
import { closeEditor, updateCellValue } from 'ka-table/actionCreators';

const CustomCell = ({
  column,
  dispatch,
  rowKeyValue,
  value,
}) => {
  return (
    <div >
      <Button href = {`/order/${value}`}> Buy </Button>
    </div>
  );
};


const dataArray = Array(119).fill(undefined).map(
  (_, index) => ({
    column1: `${index}`,
    column2: `column:2 row:${index}`,
    column3: index % 5,
    column4: `column:4 row:${index}`,
    id: index,
  }),
);

//const dataArray = loadedBloodbanks;

const tablePropsInit = {
  columns: [
    { key: '_id', title: 'Order', dataType: DataType.Object, style: {width: 130}   },
    { key: 'name', title: 'Name', dataType: DataType.String, style: {width: 100} },
    { key: 'address', title: 'Address', dataType: DataType.String, style: {width:200}  },
    { key: 'parental_hospital_name', title: 'parent hospital', dataType: DataType.String, style: {width:200}  },
    { key: 'A_p', title: 'A+', dataType: DataType.String, style: {width: 20} },
    { key: 'A_m', title: 'A-', dataType: DataType.String, style: {width: 20} },
    { key: 'B_p', title: 'B+', dataType: DataType.String, style: {width: 20} },
    { key: 'B_m', title: 'B-', dataType: DataType.String, style: {width: 20} },
    { key: 'AB_p', title: 'AB+', dataType: DataType.String, style: {width: 20} },
    { key: 'AB_m', title: 'AB-', dataType: DataType.String, style: {width: 20} },
    { key: 'O_p', title: 'O+', dataType: DataType.String, style: {width: 20} },
    { key: 'O_m', title: 'O-', dataType: DataType.String, style: {width: 20} },
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




const CustomThemeDemo = (props) => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const {city,state} = props;
  const [originaldata,setoriginaldata]  = useState([]);
  const dispatch = action => {
    changeTableProps(prevState => kaReducer(prevState, action));
  };
  
  const [loadedBloodbanks,setloadedBloodbanks] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try{
        const responseData = await fetch(
          `http://localhost:5000/api/bloodbanks/`,
        );

        const data = await responseData.json();
        setloadedBloodbanks(data.bloodbanks);
        setoriginaldata(data.bloodbanks);
      } catch (err){
        console.log(err);
      }
    };
    fetchdata();
    }, [])

    useEffect(() => {
      console.log("data "+loadedBloodbanks);
      dispatch({
        type:"UpdateData", 
        data: loadedBloodbanks,
        })
    }, [loadedBloodbanks])

    useEffect(() => {
      const arr = loadedBloodbanks.filter(d =>d.city == city);
      console.log("arr "+arr);
      if(city === ""){
        setloadedBloodbanks(originaldata);
      }
      else if(arr.length != 0){
        console.log("inside");
        setloadedBloodbanks(arr);
      }
      console.log("Outside")
      console.log(loadedBloodbanks);     
    }, [city])

    useEffect(() => {
      const arr = loadedBloodbanks.filter(d =>d.state == city);
      console.log("arr "+arr);
      if(state === ""){
        setloadedBloodbanks(originaldata);
      }
      else if(arr.length != 0){
        console.log("inside");
        setloadedBloodbanks(arr);
      }
      console.log("Outside")
      console.log(loadedBloodbanks);     
    }, [state])


  return (
    <div className='custom-theme-demo'>
    <Table
      {...tableProps}
      childComponents={{
        cellText: {
          content: (props) => {
            switch (props.column.key){
              case '_id': return <CustomCell {...props}/>;
            }
          }
        }
      }}
      dispatch={dispatch}
    />
    </div>
  );
};


export default CustomThemeDemo;