import React from 'react';

import {
  Table,
} from 'reactstrap';

import CandyRow from '../CandyRow/CandyRow';

import './CandyTable.scss';

class CandyTable extends React.Component {

  render() {
    const candyComponents = this.props.candies.map(candy => (
      <CandyRow
        key={candy.id}
        candy={candy}
      />
    ));
    return (
      <div className="Candies">
        <h2>Candy Board</h2>
        <Table striped responsive>
          <thead>
            <tr>
              {/* <th scope="col">ID</th> */}
              <th scope="col">Name</th>
              <th scope="col">Manufacturer</th>
              <th scope="col">Category</th>
              <th scope="col">Eat</th>
              {/* <th scope="col">Donate</th> */}
              {/* <th scope="col">Trade</th> */}
            </tr>
          </thead>
          <tbody>
            {candyComponents}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CandyTable;
