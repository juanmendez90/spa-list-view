import React from 'react';
import { Card, CardFooter, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import ListHeader from 'components/ListHeader'
import { USERS_CONTAINER, USERS_TITLE, FILTER_LABEL, ITEMS_PER_PAGE } from 'utilities/constants/index';
import DateFilter from 'components/DateFilter';
import CustomPagination from 'components/Pagination';
import { fetchUsers } from 'redux/actions/users';
import Loader from 'components/Loader';
import UserTable from 'components/UserTable';

class Users extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    }
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  getVisibleUsers = () => {
    const { users } = this.props;
    const { currentPage } = this.state;
    const from = (currentPage - 1) * ITEMS_PER_PAGE;
    const to = from + ITEMS_PER_PAGE;
    return users.slice(from, to);
  }

  getPages = () => {
    const { users } = this.props;
    const result = users.length / ITEMS_PER_PAGE;
    console.log(result);
    console.log(Math.ceil(result));
    return Math.ceil(result);
  }

  goToPage = page => this.setState((state) => ({
    ...state,
    currentPage: page
  }));

  renderTable = () => this.props.isLoading ? <Loader /> : <UserTable users={this.getVisibleUsers()} />;

  render() {
    return (
      <Card className="flex-fill " data-testid={USERS_CONTAINER}>
        <ListHeader title={USERS_TITLE}>
          <DateFilter label={FILTER_LABEL} />
        </ListHeader>
        <CardBody className="p-0">
          {this.renderTable()}
        </CardBody>
        <CardFooter className="bg-white d-flex justify-content-center" >
          <CustomPagination goToPage={this.goToPage} currentPage={this.state.currentPage} max={this.getPages()}/>
        </CardFooter>
      </Card>
    );
  };
};

const mapStateToProps = state => ({
  ...state.usersReducer,
});

const mapActionsToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapActionsToProps)(Users);
