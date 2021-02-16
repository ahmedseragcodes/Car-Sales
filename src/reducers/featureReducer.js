import { ADD_FEATURE } from "../actions/featureActions";

const initialState={
    car: {
        features: []
    }
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case(ADD_FEATURE):
            return ({
                ...state, car: {
                    ...state.car, features: [
                        ...state.car.features, action.payload 
                    ]
                }
            })
        default:
            return state;
    }
}

export { initialState, reducer };