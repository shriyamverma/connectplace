import {GET_ERRORS} from '../action/types.js'

const initialState={
    isAuthenticatetd:false,
    user:{}
}
export default function(state=initialState,action)
{
    switch(action.type)
    {
        case GET_ERRORS:
            return action.payload
        default:
            return state;
    }
}