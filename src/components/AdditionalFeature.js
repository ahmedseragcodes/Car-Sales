import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions/featureActions";

const AdditionalFeature = props => {

const handleNewFeature=(f)=>{
  console.log("FEATURE BEING ADDED", f);
  console.log("PRICE OF FEATURE BEING ADDED", f.price);
  props.addFeature(f);
}


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>handleNewFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
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



export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
