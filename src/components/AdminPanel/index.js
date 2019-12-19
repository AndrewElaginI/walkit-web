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
import UserTypeSelect from './UserTypeSelect';

function AdminPanel() {
  const dispatch = useDispatch();
  const selectedUserList = useSelector(state => userListSelector(state));
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
      <h2>ADMIN PANEL: {selectedUser.email}</h2>
      <UserTypeSelect value={listOption} handleChange={handleListOption} />
      <SortableUserTable userList={selectedUserList} />
    </div>
  );
}

export default AdminPanel;
