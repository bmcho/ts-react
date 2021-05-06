import { call, put } from "@redux-saga/core/effects";
import { AsyncActionCreatorBuilder, PayloadAction } from "typesafe-actions";

type PrimisCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>);

//typeguard
function isPayloadAction(action:any):action is PayloadAction<string, any> {
    return action.payload !== undefined;
}
export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
    aysncActionCreator:AsyncActionCreatorBuilder<[T1, [P1, any]], [T2, [P2, any]], [T3, [P3, any]]>, 
    promiseCreator: PrimisCreatorFunction<P1, P2>
) {
    return function* saga(action: ReturnType<typeof aysncActionCreator.request>) {
        try {
            // const result: P2 = yield call(promiseCreator, action.payload);
            const result: P2 = isPayloadAction(action) 
                ? yield call(promiseCreator, action.payload) 
                : yield call(promiseCreator); 
            yield put(aysncActionCreator.success(result, null));
        } catch (error) {
            yield put(aysncActionCreator.failure(error, null));
        }
    }
}