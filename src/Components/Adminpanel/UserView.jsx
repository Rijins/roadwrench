import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Userview = () => {
        var[sign,setSign] = useState([]);
        var[selected,setSelected] = useState();
      
    
    
        useEffect(()=>{
            axios.get("http://localhost:8080/admin/userview")
            .then(response =>{
                console.log(response.data)
                setSign(response.data)

            })
            .catch(err=>console.log(err))
        },[])



  return (<div>
   <Typography >User Details</Typography><br/><br/>
<TableContainer>
<Table >
  <TableHead>
    <TableRow>
      <TableCell >User name</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>Password</TableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
      {sign.map((value,index)=>{
          return(
              <TableRow key={index}>



                  <TableCell>{value.Username}</TableCell>
                  <TableCell>{value.Email}</TableCell>
                  <TableCell>{value.Password}</TableCell>
                   </TableRow>
          )
      })}
  </TableBody>
</Table>
</TableContainer>
</div>

  )
}

export default Userview
