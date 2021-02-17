import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions/featureActions";

const AddedFeature = props => {


// const removeHandler=(id){
//   console.log("REMOVE ID", id);
//   removeFeature(id);
// }


  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={(event)=>props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};


const mapStateToProps=(state)=>{
  return ({
      additionalPrice: state.additionalPrice,
      features: 
        state.car.features
  })
}



export default connect(mapStateToProps, { removeFeature })(AddedFeature);
