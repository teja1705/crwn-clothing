import { UserActionTypes } from "./user.actiontype";
// import axios from "axios";

export const setCurrentUser = user =>{
    return {
        type : UserActionTypes.SET_CURRENT_USER,
        payload : user
    }
}

// export const fetchUserRequestSuccess =  users =>{
//     return {
//         type : FETCH_USER_REQUEST_SUCCESS,
//         payload : users
//     }
// }

// export const fetchUserRequestFailure = error =>{
//     return {
//         type : FETCH_USER_REQUEST_FAILURE,
//         payload : error
//     }
// }

// export const fetchUsers = () =>{
//     return function(dispatch){
//         dispatch(fetchUserRequest())
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//         .then(response =>{
//             dispatch(fetchUserRequestSuccess(response))
//         })
//         .catch(error =>{
//             dispatch(fetchUserRequestFailure(error.message));
//         })
//     }
// }