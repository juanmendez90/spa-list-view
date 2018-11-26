import React from 'react';
import Proptypes from 'prop-types';
import { Progress} from 'reactstrap';
import { USER_ROW } from 'utilities/constants/index';
import userModel from 'utilities/models/userModel';
import DefaultAvatar from 'components/DefaultAvatar';
import styles from './styles.module.scss';

const UserRow = ({ user }) => (
  <tr data-testid={USER_ROW}>
    <td className="align-middle">
      { user.ImageURL ? <img className={`${styles.userImg} rounded-circle float-left mt-2 mr-2`} src={user.ImageURL} alt="user-img"/>
        : <div className="float-left mt-2 mr-2"><DefaultAvatar size="40px" text={`${user.FirstName[0].toUpperCase()}${user.LastName[0].toUpperCase()}`} /></div>
      }
      <span >{`${user.FirstName} ${user.LastName}`}</span>
      <span className="d-block font-weight-light">{`${user.JobTitleId} | ${user.DepartmentId}`}</span>
    </td>
    <td className="align-middle text-center">
      <span>{user.UserKey}</span>
    </td>
    <td className="align-middle">
      <Progress value={user.UsedDays} max={user.AvailableDays}/>
    </td>
    <td className="align-middle text-center">
      <span>{user.EmployeeStartDate}</span>
    </td>
  </tr>
);

UserRow.propTypes = {
  user: userModel.isRequired,
}

export default UserRow;
