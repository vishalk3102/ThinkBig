import { createReducer } from '@reduxjs/toolkit';

export const subscriptionReducer = createReducer(
  {},
  {
    // Buy Subscription reducer
    buySubscriptionRequest: state => {
      state.loading = true;
    },
    buySubscriptionSuccess: (state, action) => {
      state.loading = false;
      state.subscriptionId = action.payload;
    },
    buySubscriptionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Cancel subscription reducer
    cancelSubscriptionRequest: state => {
      state.loading = true;
    },
    cancelSubscriptionSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    cancelSubscriptionFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
