import React from 'react';
import { Table } from 'reactstrap';
import TableHeader from 'components/TableHeader';
import UserRow from 'components/UserRow';
import { USERS_HEADERS } from 'utilities/constants/index';

const renderRow = users => users.map(item => <UserRow key={item["$id"]} user={item} />)

const UserTable = ({ users }) => (
  <Table className="mb-0" responsive>
    <TableHeader headers={USERS_HEADERS} />
      <tbody>
        {renderRow(users)}
      </tbody>
  </Table>
);

export default UserTable
