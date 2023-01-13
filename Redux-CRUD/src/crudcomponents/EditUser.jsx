import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import {  getSingleUSer, updateUser } from "../redux/crudredux/crudActions";
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
    let {id}=useParams();
    let navigate=useNavigate();
    let dispatch=useDispatch();
    let {user}=useSelector(state=>state.data);
    console.log(user)
    useEffect(()=>{
        dispatch(getSingleUSer(id))
    },[])
const [state,setState]=useState({
    name:"",
    email:"",
    contact:"",
    address:""
});
useEffect(()=>{
    setState({...user})
},[user])
let {name,email,contact,address}=state;
let handleInputChange=(e)=>{
    let {name,value}=e.target;
    setState({...state,[name]:value})
};
let handleSubmit=(e)=>{
    e.preventDefault();
    // console.log({name,email,contact,address})
    dispatch(updateUser(state,id));
    navigate("/")
}
  return (
    <div>

    <h2 style={{width:"100%",textAlign:"center"}}>Update User</h2>
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
         Update User
        </Button>
      </Grid>
    </form>
    </div>
  );
};
export default EditUser;