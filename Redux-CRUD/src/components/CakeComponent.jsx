import React from 'react'
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const CakeComponent = (props) => {
console.log(props);
  return (
    <div>
        <h1>Number of Cakes - {props.cakes}</h1>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}
// mapStateToProps
const mapStateToProps=(state)=>{
    return{
        cakes:state.cake.numOfCakes
    }
}
// mapDispatchToProps
const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent)