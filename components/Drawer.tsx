import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import SimpleAccordion from './Accordian';
import { useEffect } from 'react';

interface Props{
  acc:boolean;
  changeAcc:any;
  list:any;
}
export default function SwipeableTemporaryDrawer(props:Props) {
  const [state, setState] = React.useState(false);
  useEffect(()=>{
    setState(props.acc)
  },[props.acc])
  const toggleDrawer:any =
    (open: boolean) =>{
    setState(open);
    };
  return (
    <div>
       <SwipeableDrawer
            anchor={'right'}
            open={state}
            onClose={()=>props.changeAcc()}
            onOpen={()=>toggleDrawer(true)}
          >
            <SimpleAccordion data={props.list}/>
          </SwipeableDrawer>
    </div>
  );
}
