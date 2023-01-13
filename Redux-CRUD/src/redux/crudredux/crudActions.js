import axios from "axios";
import { ADD_USER, DELETE_USER, GET_SINGLE_USER, GET_USERS, UPDATE_USER } from "./crudActionType";

// !GET to get the data from backend

const getUsers = (users) => {
    return {
      type: GET_USERS,
      payload:users,
    };
  };

  export const loadUsers=()=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then(resp=>{
            console.log('response',resp.data);
            dispatch(getUsers(resp.data));
        }).catch(error=>console.log(error.message))
    }
  }

//   ! DELETE to delete single user in the list

const userDeleted=()=>{
    return {
        type:DELETE_USER
    }
}

export const deleteUser=(id)=>{
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then(resp=>{
            console.log('resp',resp);
            dispatch(userDeleted());
            dispatch(loadUsers());
        }).catch(error=>console.log(error.message))
    }
}

// ! POST sending data to url api
const userAdded=()=>{
    return{
        type:ADD_USER
    }
};
export const addUser=(user)=>{
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`,user).then(resp=>{
            console.log('response',resp);
            dispatch(userAdded());
        }).catch(error=>console.log(error.message))
    }
  }

//   !Get single user

const getUser=(user)=>{
    return {
        type:GET_SINGLE_USER,
        payload:user,
    }
}

export const getSingleUSer=(id)=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`).then(resp=>{
            console.log('resp',resp);
            dispatch(getUser(resp.data));
        }).catch(error=>console.log(error.message))
    }
}

// UPDATE DATA 

const userUpdated=()=>{
    return {
        type:UPDATE_USER
    }
};
export const updateUser=(user,id)=>{
return function(dispatch){
    axios.put(`${process.env.REACT_APP_API}/${id}`,user).then(resp=>{
        console.log('resp',resp);
        dispatch(userUpdated());
    }).catch(error=>console.log(error.message))
}
}