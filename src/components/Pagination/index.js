import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { range } from 'lodash';
import Proptypes from 'prop-types';

class CustomPagination extends React.Component {
  goToPage = (page) => this.props.goToPage(page);

  goNext = () => {
    const { currentPage, goToPage } = this.props;
    goToPage(currentPage + 1);
  }

  goBack = () => {
    const { currentPage, goToPage } = this.props;
    goToPage(currentPage - 1);
  }

  renderButton = () => {
    const { max, currentPage } = this.props;
    return range(1, max + 1).map(item => (
      <PaginationItem key={item} active={item === currentPage}>
        <PaginationLink onClick={() => this.goToPage(item)}>
          {item}
        </PaginationLink>
      </PaginationItem>
    ));
  }

  render() {
    const { currentPage, max } = this.props;
    return (
      <Pagination aria-label="Page navigation example">
        <PaginationItem disabled={currentPage <= 1}>
          <PaginationLink previous onClick={this.goBack} />
        </PaginationItem>
        { this.renderButton() }
        <PaginationItem>
          <PaginationLink disabled={currentPage >= max} next onClick={this.goNext} />
        </PaginationItem>
      </Pagination>
    );
  }
}

CustomPagination.propTypes = {
  max: Proptypes.number.isRequired,
  goToPage: Proptypes.func.isRequired,
  currentPage: Proptypes.number.isRequired,
}

export default CustomPagination;
