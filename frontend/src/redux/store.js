import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, userReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';
import { subscriptionReducer } from './reducers/subscriptionReducer';
import { adminReducer } from './reducers/adminReducer';
import { otherReducer } from './reducers/otherReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
    other: otherReducer,
  },
});

export default store;

export const server = 'https://thinkbig-backend.onrender.com/api/v1';
