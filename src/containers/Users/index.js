import React from 'react';
import { Card, Button, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import ListHeader from 'components/ListHeader'
import { USERS_CONTAINER, USERS_TITLE, FILTER_LABEL } from 'constants/index';
import DateFilter from 'components/DateFilter';

const Users = (props) => {
  return (
    <Card className="flex-fill " data-testid={USERS_CONTAINER}>
      <ListHeader title={USERS_TITLE}>
        <DateFilter label={FILTER_LABEL} />
      </ListHeader>
      <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
};

export default Users;
