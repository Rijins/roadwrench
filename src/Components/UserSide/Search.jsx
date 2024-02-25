import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { Buffer } from 'buffer'

const Search = () => {
  var [view, setView] = useState([]);
  var [selected, setSelected] = useState();
  var [searchitem, setSearchitem] = useState('');

  const readsearchvalue = (event) => {
    event.preventDefault();
    setSearchitem(event.target.value);
  }

  const searchhandler = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/user/search?cn=${searchitem}`);
      setView(response.data);
      console.log(response.data)
    }
    catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='bb'>
      <br />
      <TextField label="Search by Name" variant="outlined" value={searchitem} onChange={readsearchvalue} />
      <br />
      <br />
      <Button className='bu' onClick={searchhandler}>Search</Button>
      <br />
      <TableContainer className='center'>
        <Table className='styled-table' >
          <TableHead>
            <TableRow>
              <TableCell >Workshop id</TableCell>
              <TableCell >Workshop Name</TableCell>
              <TableCell >Phone Number</TableCell>
              <TableCell >Watsapp</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ownername</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {view.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value.Workshopid}</TableCell>
                  <TableCell>{value.Workshopname}</TableCell>
                  <TableCell>{value.Phonenumber}</TableCell>
                  <TableCell>{value.Watsappnumber}</TableCell>
                  <TableCell>{value.Address}</TableCell>
                  <TableCell>{value.Email}</TableCell>
                  <TableCell>{value.Ownername}</TableCell>
                  <TableCell><img
src={`data:image/jpeg;base64,${Buffer.from(value.image1.data).toString('base64')}`} width="50" height="50" alt="Error" /></TableCell>
                </TableRow>

              )
            })}
          </TableBody>
        </Table>
      </TableContainer >
    </div>
  )
}

export default Search
