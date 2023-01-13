import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/crudredux/crudActions";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
    let navigate=useNavigate();
    let dispatch=useDispatch();
const [state,setState]=useState({
    name:"",
    email:"",
    contact:"",
    address:""
});
let {name,email,contact,address}=state;
let handleInputChange=(e)=>{
    let {name,value}=e.target;
    setState({...state,[name]:value})
};
let handleSubmit=(e)=>{
    e.preventDefault();
    // console.log({name,email,contact,address})
    dispatch(addUser(state));
    navigate("/")
}
  return (
    <div>

    <h2 style={{width:"100%",textAlign:"center"}}>Add User</h2>
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={name}
            onChange={handleInputChange}
          />
        </Grid>
        <br/>
        <Grid item>
          <TextField
            id="age-input"
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={handleInputChange}
          />
        </Grid>
        <br/>
        <Grid item>
          <TextField
            id="age-input"
            name="contact"
            label="Contact"
            type="number"
            value={contact}
            onChange={handleInputChange}
          />
        </Grid>
        <br/>
        <Grid item>
          <TextField
            id="age-input"
            name="address"
            label="Address"
            type="text"
            value={address}
            onChange={handleInputChange}
          />
        </Grid>
        <br/>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
    </div>
  );
};
export default AddUser;