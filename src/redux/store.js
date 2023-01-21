import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user';
import questionReducer from './question';
import teamReducer from './team';
import replyReducer from './reply';
import memberReducer from './member';

export default configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
    team: teamReducer,
    reply: replyReducer,
    member:memberReducer
  },
});
