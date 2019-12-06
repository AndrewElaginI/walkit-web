import { createSelector } from 'reselect';

export const userIdSelector = createSelector(
  state => state.auth.userId,
  userId => userId
);
