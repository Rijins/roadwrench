import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import RegEdit from './RegEdit';

const Regview = () => {
        var[reg,setReg] = useState([]);
        var[selected,setSelected] = useState();
        var[update,setUpdate] = useState(false);
      
    
    
        useEffect(()=>{
            axios.get("http://localhost:8080/admin/view")
            .then(response =>{
                console.log(response.data)
                setReg(response.data)

            })
            .catch(err=>console.log(err))
        },[])

        const deleteValues =(id)=>{
          console.log("deleted",id)
          axios.delete("http://localhost:8080/admin/updatestatus/"+id)
          .then((response)=>{
              alert("DELETED")
          window.location.reload(false);
          })
      }
      
      const updateValues =(row)=>{
      console.log("updated",row);
      setSelected(row);
      setUpdate(true);
      }
      
      var result=
  <div>
   <Typography >REG VIEW</Typography><br/><br/>
<TableContainer>
<Table >
  <TableHead>
    <TableRow>
      <TableCell >Workshop id</TableCell>
      <TableCell >Workshop Name</TableCell>
      <TableCell>Pin Code</TableCell>
      <TableCell >Phone Number</TableCell>
      <TableCell >Watsapp</TableCell>
      <TableCell>Address</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>Ownername</TableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
      {reg.map((row,index)=>{
          return(
              <TableRow key={index}>



                  <TableCell>{row.Workshopid}</TableCell>
                  <TableCell>{row.Workshopname}</TableCell>
                  <TableCell>{row.Pin}</TableCell>
                  <TableCell>{row.Phonenumber}</TableCell>
                  <TableCell>{row.Watsappnumber}</TableCell>
                  <TableCell>{row.Address}</TableCell>
                  <TableCell>{row.Email}</TableCell>
                  <TableCell>{row.Ownername}</TableCell>
                  <TableCell><ModeEditOutlineIcon color='success' onClick={()=>updateValues(row)}/></TableCell>
                  {/* <TableCell><DeleteForeverIcon color='error' onClick={()=>deleteValues(row._id)}/></TableCell> */}
                   </TableRow>
          )
      })}
  </TableBody>
</Table>
</TableContainer>
</div>

  
  if(update)
      {
        result=<RegEdit data={selected} method='put'/>
      }
  return (result)

}

export default Regview


