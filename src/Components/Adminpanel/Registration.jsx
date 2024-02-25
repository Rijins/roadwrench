import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import axios from "axios";
import './Registration.css';

const Registration = () => {
  const [inputs, setInputs] = useState({
    Workshopid: "",
    Workshopname: "",
    Phonenumber: "",
    Watsappnumber: "",
    Address: "",
    Email: "",
    Ownername: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImage = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const addHandler = () => {
    const formData = new FormData();
    formData.append('image1', selectedImage);
    formData.append('Workshopid', inputs.Workshopid);
    formData.append('Workshopname', inputs.Workshopname);
    formData.append('Phonenumber', inputs.Phonenumber);
    formData.append('Watsappnumber', inputs.Watsappnumber);
    formData.append('Address', inputs.Address);
    formData.append('Email', inputs.Email);
    formData.append('Ownername', inputs.Ownername);

    axios.post("http://localhost:8080/admin/newregistration", formData)
      .then((response) => {
        alert("Record saved");
      })
      .catch((err) => console.log(err));
  };

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
      <label>chose image</label> <input type="file" onChange={handleImage} />
      <Button variant="contained" onClick={addHandler}>SUBMIT</Button>
    </div>
  );
};

export default Registration;
