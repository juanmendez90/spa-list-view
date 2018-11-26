import React from 'react';
import { Card, CardFooter, CardBody } from 'reactstrap';
import moment from 'moment';
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
      dateFrom: '',
      dateTo: '',
      filteredUsers: []
    }
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    const { isLoading } = this.props;
    const { dateTo, dateFrom } = this.state;
    if (!isLoading) {
      const shouldUpdate = isLoading !== prevProps.isLoading || dateTo !== prevState.dateTo || dateFrom !== prevState.dateFrom;
      if (shouldUpdate) {
        const filteredUsers = this.filterUsersByDate();
        this.setState((state) => ({
          ...state,
          filteredUsers,
        }));
      }
    }
  }

  getVisibleUsers = () => {
    const { currentPage, filteredUsers } = this.state;
    const from = (currentPage - 1) * ITEMS_PER_PAGE;
    const to = from + ITEMS_PER_PAGE;
    return filteredUsers.slice(from, to);
  }

  getPages = () => {
    const { filteredUsers } = this.state;
    const result = filteredUsers.length / ITEMS_PER_PAGE;
    return Math.ceil(result);
  }

  handleChangeDateTo = ({ target: { value }}) => this.setState((state) => ({
    ...state,
    dateTo: value,
    currentPage: 1,
  }));

  handleChangeDateFrom = ({ target: { value }}) => this.setState((state) => ({
    ...state,
    currentPage: 1,
    dateFrom: value
  }));

  filterUsersByDate = () => {
    const { dateFrom, dateTo } = this.state;
    const { users } = this.props;
    if (!dateFrom && !dateTo) {
      return users;
    }
    if (!dateTo) {
      return users.filter(item => moment(item.EmployeeStartDate).isSameOrAfter(dateFrom));
    }
    if (!dateFrom) {
      return users.filter(item => moment(item.EmployeeStartDate).isSameOrBefore(dateTo));
    }
    return users.filter(item => moment(item.EmployeeStartDate).isBetween(dateFrom, dateTo, 'day', '[]'));
  }

  goToPage = page => this.setState((state) => ({
    ...state,
    currentPage: page
  }));

  renderTable = () => this.props.isLoading ? <Loader /> : <UserTable users={this.getVisibleUsers()} />;

  render() {
    const { dateFrom, dateTo } = this.state;
    return (
      <Card className="flex-fill " data-testid={USERS_CONTAINER}>
        <ListHeader title={USERS_TITLE}>
          <DateFilter
            dateFrom={dateFrom}
            dateTo={dateTo}
            handleChangeDateFrom={this.handleChangeDateFrom}
            handleChangeDateTo={this.handleChangeDateTo}
            label={FILTER_LABEL}
          />
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
