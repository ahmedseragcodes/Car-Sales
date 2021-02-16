export const ADD_FEATURE="ADD_FEATURE";

export const addFeature=(f)=>{
    return ({ type: ADD_FEATURE, payload: f })
}