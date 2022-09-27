import React,{ useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NestedList from './ListItem';
interface Props{
    data:any;
}
export default function SimpleAccordion(props:Props) {
  const [list, setList] = useState([]);
  useEffect(()=>{
    let l1=props.data
    for(let i=0; i<l1.length; i++){
        let show:any=false
        for(let j in l1[i] ){
            if(typeof l1[i][j] !== 'number' && l1[i][j].length > 0){
                show=true
            }
        }
        if(!show){
            l1.splice(i, 1)
        }
    }
    setList(l1)
  },[])
  useEffect(()=>{
    let l1=props.data
    for(let i=0; i<l1.length; i++){
        let show:any=false
        for(let j in l1[i] ){
            if(typeof l1[i][j] !== 'number' && l1[i][j].length > 0){
                show=true
            }
        }
        if(!show){
            l1.splice(i, 1)
        }
    }
    setList(l1)
  },[props.data])
return (
    <div>
        {list.map((item:any, index:number)=>{
            return(
                <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.id}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {Object.entries(item).map((keyName:any, i) => {if(keyName[0] !=='id' && keyName[1].length>0) {  return (
                    <NestedList key={i}  data={keyName}/>
                )}})}
                </AccordionDetails>
              </Accordion>
            )
        })}
    </div>
  );
}
