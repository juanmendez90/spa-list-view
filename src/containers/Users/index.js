import React from 'react';
import { Card, CardFooter, CardBody, Table } from 'reactstrap';
import ListHeader from 'components/ListHeader'
import { USERS_CONTAINER, USERS_TITLE, FILTER_LABEL, USERS_HEADERS } from 'utilities/constants/index';
import DateFilter from 'components/DateFilter';
import TableHeader from 'components/TableHeader';
import UserRow from 'components/UserRow';
import CustomPagination from 'components/Pagination';
import users from 'utilities/mocks/users';

class Users extends React.PureComponent {
  renderRow = () => users.map(item => <UserRow key={item.UserKey} user={item} />)

  render() {
    return (
      <Card className="flex-fill " data-testid={USERS_CONTAINER}>
        <ListHeader title={USERS_TITLE}>
          <DateFilter label={FILTER_LABEL} />
        </ListHeader>
        <CardBody className="p-0">
          <Table className="mb-0" responsive>
            <TableHeader headers={USERS_HEADERS} />
            <tbody>
            {this.renderRow()}
            </tbody>
          </Table>
        </CardBody>
        <CardFooter className="bg-white d-flex justify-content-center" >
          <CustomPagination />
        </CardFooter>
      </Card>
    );
  };
};

export default Users;
