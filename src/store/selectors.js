import { createSelector } from 'reselect';

export const userIdSelector = createSelector(
  state => state.auth.userId,
  userId => userId
);

export const userListSelector = createSelector(
  state => state.user.userList,
  userList => userList
);
