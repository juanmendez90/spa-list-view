import React from 'react';
import Proptypes from 'prop-types';

class TableHeader extends React.PureComponent {
  renderCell = () => {
    return this.props.headers.map((item, index) => <th className={ index > 0 ? 'text-center': ''} key={item}>{item}</th>);
  }

  render() {
    return (
      <thead>
        <tr className="bg-secondary">
          {this.renderCell()}
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  headers: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default TableHeader;
