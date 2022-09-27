import React,{useState} from 'react';
import './App.css';
import DataGridDemo from './components/tablegrid';
import SwipeableTemporaryDrawer from './components/Drawer';

function App() {
  const[acc, showAcc]=useState(false)
  const[displayList, setList]=useState([])
  const changeAcc=(e?:any)=>{
    if(e){
      setList(e)
    }
    showAcc(!acc)
  }
  return (
    <div className="App">
      <DataGridDemo changeAcc={(e:any)=>changeAcc(e)}/>
      <SwipeableTemporaryDrawer list={displayList} changeAcc={()=>changeAcc()} acc={acc}/>
    {/* <DataGridDemo changeAcc={(e:any)=>changeAcc(e)}/>
    <SwipeableTemporaryDrawer list={displayList} changeAcc={()=>changeAcc()} acc={acc}/> */}
    </div>
  );
}

export default App;
