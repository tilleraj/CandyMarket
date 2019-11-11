import React from 'react';

import {
  Table,
} from 'reactstrap';

import candyData from '../../data/candyData';
import CandyRow from '../CandyRow/CandyRow';
import CandyRowNew from '../CandyRowNew/CandyRowNew';

import './CandyTable.scss';

class CandyTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {candies: []};
    this.updateCandyData = this.updateCandyData.bind(this);
  }

  updateCandyData() {
    candyData.getCandy()
      .then((candies) => {
        let myCandies = [...candies];
        this.setState({ candies: myCandies });
      })
      .catch(error => console.error('could not get candies', error));
  }

  componentDidMount() {
    this.updateCandyData();
  }

  render() {
    const candyComponents = this.state.candies.map(candy => (
      <CandyRow
        key={candy.id}
        candy={candy}
      />
    ));
    return (
      <div className="Candies">
        <h2>Candy Board</h2>
        <CandyRowNew callBack={this.updateCandyData} />
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
