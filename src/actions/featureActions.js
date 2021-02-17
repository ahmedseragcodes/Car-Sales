export const ADD_FEATURE="ADD_FEATURE";
export const REMOVE_FEATURE="REMOVE_FEATURE";

export const addFeature=(f)=>{
    return ({ type: ADD_FEATURE, payload: f })
}

export const removeFeature=(f)=>{
    return ({ type: REMOVE_FEATURE, payload: f })
}