import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid,MuiEvent,MuiBaseEvent,GridCallbackDetails, GridCellEditCommitParams, GridCellParams, GridColDef, GridValueGetterParams, GridEditCellPropsParams, GridRowId, GridRowParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'NAME',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'DOB',
    headerName: 'DOB',
    type: 'date',
    width: 100,
    editable: true,
  },
  {
    field: 'CITY',
    headerName: 'CITY',
    width: 300,
    editable: true,
  },
  {
    field: 'ADDRESS',
    headerName: 'ADDRESS',
    width: 610,
    editable: true,
  },
];

const rows = [
  { id: 1, NAME: 'Snow',DOB:'12-2-1989', CITY:'chennai', ADDRESS:'tamilnadu' },
  { id: 2, NAME: 'Lannister', DOB:'07-12-2020', CITY:'banglore', ADDRESS:'tamilnadu'},
  { id: 3, NAME: 'Lannister',DOB:'24-10-2012', CITY:'hyderbad', ADDRESS:'tamilnadu' },
  { id: 4, NAME: 'Stark', DOB:'03-06-1999', CITY:'Delhi', ADDRESS:'tamilnadu'},
  { id: 5, NAME: 'Targaryen', DOB:'17-03-2001', CITY:'Kolkatha', ADDRESS:'tamilnadu'},
  { id: 6, NAME: 'Melisandre', DOB:'13-02-2007', CITY:'Vijayawada', ADDRESS:'tamilnadu'},
  { id: 7, NAME: 'Clifford',DOB:'28-08-2017', CITY:'Visakhapatnam', ADDRESS:'tamilnadu' },
  { id: 8, NAME: 'Frances', DOB:'30-04-2010', CITY:'chennai', ADDRESS:'tamilnadu'},
  { id: 9, NAME: 'Roxie', DOB:'01-07-2018', CITY:'banglore', ADDRESS:'tamilnadu'},
  { id: 10, NAME: 'Snow',DOB:'05-11-1992', CITY:'hyderbad', ADDRESS:'tamilnadu' },
  { id: 11, NAME: 'Lannister', DOB:'19-08-1996', CITY:'Delhi', ADDRESS:'tamilnadu'},
  { id: 12, NAME: 'Lannister',DOB:'07-12-2020', CITY:'Kolkatha', ADDRESS:'tamilnadu' },
  { id: 13, NAME: 'Stark', DOB:'24-10-2012', CITY:'Vijayawada', ADDRESS:'tamilnadu'},
  { id: 14, NAME: 'Targaryen', DOB:'03-06-1999', CITY:'Visakhapatnam', ADDRESS:'tamilnadu'},
  { id: 15, NAME: 'Melisandre', DOB:'17-03-2001', CITY:'chennai', ADDRESS:'tamilnadu'},
  { id: 16, NAME: 'Clifford',DOB:'13-02-2007', CITY:'chennai', ADDRESS:'tamilnadu' },
  { id: 17, NAME: 'Frances', DOB:'28-08-2017', CITY:'chennai', ADDRESS:'tamilnadu'},
  { id: 18, NAME: 'Roxie', DOB:'30-04-2010', CITY:'chennai', ADDRESS:'tamilnadu'},
  { id: 19, NAME: 'Lannister', DOB:'01-07-2018', CITY:'chennai', ADDRESS:'tamilnadu'},
  { id: 20, NAME: 'Lannister',DOB:'05-11-1992', CITY:'chennai', ADDRESS:'tamilnadu' },
  { id: 21, NAME: 'Stark', DOB:'19-08-1996', CITY:'chennai', ADDRESS:'tamilnadu'},
  { id: 22, NAME: 'Targaryen', DOB:'12-2-1989', CITY:'chennai', ADDRESS:'tamilnadu'},
  { id: 23, NAME: 'Melisandre', DOB:'12-2-1989', CITY:'chennai', ADDRESS:'tamilnadu'},
  { id: 24, NAME: 'Clifford',DOB:'12-2-1989', CITY:'chennai', ADDRESS:'tamilnadu' },
  { id: 25, NAME: 'Frances', DOB:'12-2-1989', CITY:'chennai', ADDRESS:'tamilnadu'},
  { id: 26, NAME: 'Roxie', DOB:'12-2-1989', CITY:'chennai', ADDRESS:'tamilnadu'},
  { id: 27, NAME: 'Snow',DOB:'12-2-1989', CITY:'chennai', ADDRESS:'tamilnadu' },
];
export default function DataGridDemo(props:any) {
  const[value, setValue]=React.useState([])
  const[edit, setEdit]=React.useState({id:'', field:'',value:''})

  const change =(params: GridCellParams, event: MuiEvent<React.KeyboardEvent> | React.ChangeEvent<HTMLInputElement>, details: GridCallbackDetails) => {
    let inputValue: Element| any = document.querySelector('.MuiInputBase-input');       

    inputValue.addEventListener('change',  (e:any) => {    
      let edit1=edit
      edit1.value=e.target.value
      setEdit(edit1)
    });  
  
  }
  const onEdit=(e:any) => {
    let selectedID:any=value
    let field=e.field
    let selectedName:any={}
    selectedName[field]=[]
    setEdit({id:`${e.id}`, field:field, value:''})
    let selectedID2:any={}
    selectedID2=selectedID.filter((item:any) => item.id === e.id )
    if(selectedID2.length>0){
      if(!selectedID2[0][e.field]){
        let newobj:any={}
        newobj[`${e.field}`]=[]
        selectedID2[0]={...selectedID2[0],...newobj}
      }
      for(let i=0;i<selectedID.length; i++){
        if(selectedID[i].id === e.id){
        selectedID[i] = selectedID2[0]
      }
      }
    }else{
      selectedID2={id:e.id}
      selectedID2[`${e.field}`]=[]
      selectedID=[...selectedID, selectedID2]
    }
    setValue(selectedID)

  }
  const commit=(params: GridCellParams, event: MuiEvent<MuiBaseEvent>)=>{
    let filteredByKey:any = value.filter((item:any) => item['id'] == edit.id)
    let val2:any=Object.values(filteredByKey)[0]
    if(edit.value && val2[edit.field]){
      val2[edit.field]=[...val2[edit.field], edit.value]
    }
    filteredByKey[0]=val2
  }
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <div onClick={()=>props.changeAcc(value)}>logs</div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        onCellKeyDown={change}
        onCellEditStart={(e)=>onEdit(e)}
        onCellEditStop={commit}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
