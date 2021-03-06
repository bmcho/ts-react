import { getUserProfileAsync, GET_USER_PROFILE } from "./actions";
import { call, put, takeEvery } from 'redux-saga/effects';
import { getUserProfile, GithubProfile } from "../../api/github";
import createAsyncSaga from "../../lib/createAsyncSaga";

// function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>) {
//     try {
//         const userProfile: GithubProfile = yield call(getUserProfile, action.payload);
//         yield put(getUserProfileAsync.success(userProfile));
//     } catch (error) {
//         yield put(getUserProfileAsync.failure(error));
//     }
// }

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSage() {
    yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}