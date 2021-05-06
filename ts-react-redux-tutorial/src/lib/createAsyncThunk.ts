import { Dispatch } from 'redux';
import { AsyncActionCreatorBuilder } from 'typesafe-actions';

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;
type AnyPromiseCreator = (...param:any[]) => Promise<any>;

export default function createAsyncThunk<
    A extends AnyAsyncActionCreator, F extends AnyPromiseCreator
> (asyncActionCreator: A, asyncPromiseCreator:F) {
    type Params = Parameters<F>;
    return function thunk(...params: Params) {
        return async (dispatch:Dispatch) => {
            const { request, success, failure } = asyncActionCreator;
            dispatch(request(undefined));
            try {
                const result = await asyncPromiseCreator(...params);
                dispatch(success(result));
            } catch (error) {
                dispatch(failure(error));
            }
        };
    };
}