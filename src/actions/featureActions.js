export const ADD_FEATURE="ADD_FEATURE";

const addFeature=(feature)=>{
    return ({ type: ADD_FEATURE, payload: feature })
}