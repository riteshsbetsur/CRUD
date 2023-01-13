import React ,{useEffect}from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/crudredux/crudActions';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
const HomeComponent = () => {
  let navigate=useNavigate();
   let dispatch=useDispatch();
   const {users}=useSelector(state=>state.data);
   console.log(users.name);
useEffect(()=>{
  dispatch(loadUsers())
},[]);
// !Deleting
const handleDelete=(id)=>{
if(window.confirm('Are you sure you want to delete this user')){
  dispatch(deleteUser(id))
}
}
  return (
    <div>
        <div style={{width:"100%",height:"20vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button variant='contained' color='secondary' onClick={()=>navigate('/adduser')}>
                Add User
            </Button>
        </div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users && users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row" align="center">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.contact}</StyledTableCell>
              <StyledTableCell align="center">{user.address}</StyledTableCell>
              <StyledTableCell align="center">
              <ButtonGroup variant="contained" aria-label="outlined button group">
      <Button color='error' style={{marginRight:'5px'}} onClick={()=>handleDelete(user.id)}>Delete</Button>
      <Button color='primary' onClick={()=>navigate(`/edituser/${user.id}`)}>Edit</Button>
    </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}


        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default HomeComponent