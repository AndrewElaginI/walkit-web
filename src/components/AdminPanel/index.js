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
import SortableUserTable from '../SortableUserTable';

function AdminPanel() {
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
  return (
    <div>
      <h2>ADMIN PANEL</h2>
      <h2>Admin: {selectedUser.email}</h2>
      <div>
        <select value={listOption} onChange={handleListOption}>
          <option value='all'>all</option>
          <option value='employee'>employee</option>
          <option value='manager'>manager</option>
        </select>
      </div>
      <SortableUserTable userList={selectedUserList} />
    </div>
  );
}

export default AdminPanel;
