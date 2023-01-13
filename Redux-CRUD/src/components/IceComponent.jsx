import React from 'react'
import { connect } from 'react-redux';
import { buyIce } from '../redux/ice/iceActions';

const IceComponent = (props) => {
console.log(props);
  return (
    <div>
        <h1>Number of IceCreams - {props.IceCreams}</h1>
        <button onClick={props.buyIce}>Buy Icecreams</button>
    </div>
  )
}
// mapStateToProps
const mapStateToProps=(state)=>{
    return{
        IceCreams:state.ice.numOfIceCreams
    }
}
// mapDispatchToProps
const mapDispatchToProps=(dispatch)=>{
    return{
        buyIce:()=>dispatch(buyIce())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceComponent)