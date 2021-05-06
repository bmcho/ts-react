import * as actions from './actions';
import { Action, ActionType } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AsyncState } from '../../lib/reducerUtils';

export type GibhubAction = ActionType<typeof actions>;

// export type GithubState = {
//     userProfile: {
//         loading: boolean;
//         data: GithubProfile | null;
//         error: Error | null;
//     };
// };

export type GithubState = {
    userProfile: AsyncState<GithubProfile, Error>
};

