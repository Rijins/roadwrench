import { Button, TextField } from '@mui/material'

import axios from 'axios'
import React, { useState } from 'react'

const RegEdit =(props) => {
    var [inputs,setInputs]=useState(props.data)
    
    const inputHandler =(event)=> {
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }

const savedata =()=>{
  
    if(props.method ==='put'){
      
        axios.put("http://localhost:8080/admin/edit/"+inputs._id,inputs)
        .then((response)=>{
          console.log("Pst data"+response.data)
            alert("Updated")
            window.location.reload(false)
          })
          .catch(err=>console.log(err))
    }
}
  return (
    <div>
    <TextField
      id="filled-basic"
      label="Workshop ID"
      name="Workshopid"
      variant="filled"
      value={inputs.Workshopid}
      onChange={inputHandler}
    />
    <br />
    <TextField
      id="filled-basic"
      label="Workshop Name"
      name="Workshopname"
      variant="filled"
      value={inputs.Workshopname}
      onChange={inputHandler}
    />
    <br />
    <TextField
      id="filled-basic"
      label="Phone number"
      name="Phonenumber"
      variant="filled"
      value={inputs.Phonenumber}
      onChange={inputHandler}
    />
    <br />
    <TextField
      id="filled-basic"
      label="Whatsapp number"
      name="Watsappnumber"
      variant="filled"
      value={inputs.Watsappnumber}
      onChange={inputHandler}
    />
    <br />
    <TextField
      id="filled-basic"
      label="Address"
      name="Address"
      variant="filled"
      value={inputs.Address}
      onChange={inputHandler}
    />
    <br />
    <TextField
      id="filled-basic"
      label="Email"
      name="Email"
      variant="filled"
      value={inputs.Email}
      onChange={inputHandler}
    />
    <br />
    <TextField
      id="filled-basic"
      label="Owner Name"
      name="Ownername"
      variant="filled"
      value={inputs.Ownername}
      onChange={inputHandler}
    />
    <br />
    <Button variant="contained" onClick={savedata}>SUBMIT</Button>
    
  </div>
  )
}

export default RegEdit
