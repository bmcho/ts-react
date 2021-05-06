import { Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk';
import { RootState } from "..";
import { getUserProfile, GithubProfile } from "../../api/github";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { getUserProfileAsync } from "./actions";

//return type, state, ExtraArgument, Action
// Generic 귀찮음
// export function getUserProfileThunk(
//     username: string):ThunkAction<void, RootState, null, GithubProfile>{
//     return async ( dispatch, getState) => {};
// }

// export function getUserProfileThunk(username: string){
//     return async (dispatch:Dispatch) => {
//         const { request, success, failure } = getUserProfileAsync;
//         dispatch(request()); 
//         try {
//             const userProfile = await getUserProfile(username);
//             dispatch(success(userProfile));
//         } catch (error) {
//             dispatch(failure(error));
//         }
//     };
// }

export const getUserProfileThunk = 
createAsyncThunk(getUserProfileAsync, getUserProfile);