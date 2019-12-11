import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import { useInput } from '../../hooks/useInput';
import { fetchSpecificUsersStart } from '../../store/user/actions';
import {
  userListSelector,
  userIdSelector,
  userSelector,
  tokenSelector
} from '../../store/selectors';

function Profile() {
  const dispatch = useDispatch();
  const selectedUserList = useSelector(state => userListSelector(state));
  const selectedUserId = useSelector(state => userIdSelector(state));
  const selectedUser = useSelector(state => userSelector(state));
  const selectedToken = useSelector(state => tokenSelector(state));
  const [listOption, handleListOption] = useInput('all');

  useEffect(() => {
    dispatch(
      fetchSpecificUsersStart(selectedUser.role, listOption, selectedToken)
    );
  }, [listOption, dispatch, selectedUser, selectedToken]);
  const userList = selectedUserList.map(user => {
    return (
      <li
        key={user.id + Math.random()}
        className='userlist_item sparkle u-hover--sparkle'
      >
        {user.email}
      </li>
    );
  });
  return (
    <div>
      <h2>PROFILE ID: {selectedUserId}</h2>
      <h2>Email: {selectedUser.email}</h2>
      <div>
        <select value={listOption} onChange={handleListOption}>
          <option value='all'>all</option>
          <option value='employee'>employee</option>
          <option value='manager'>manager</option>
        </select>
      </div>
      <ul>{userList}</ul>
    </div>
  );
}

export default Profile;
