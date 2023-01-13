import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions';

const HooksCakeContainer = () => {
    let data=useSelector(state=>state.cake.numOfCakes);
    let dispatch=useDispatch();
  return (
    <div>
        <h1>Number of Cakes-{data}</h1>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer