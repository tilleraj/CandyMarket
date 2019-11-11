import React from 'react';
import candyData from '../../data/candyData';

import './CandyRow.scss';

class CandyRow extends React.Component {

  eatCandy(id){
    console.log(`Attempt to eat candy with id ${id}`);
    candyData.deleteCandy(this.props.candy);
  }

  render() {
    const { candy } = this.props;
    return (
      <tr>
        {/* <td>{candy.Id}</td> */}
        <td>{candy.name}</td>
        <td>{candy.manufacturer}</td>
        <td>{candy.category}</td>
        <td><button onClick={() => this.eatCandy(candy.id)}>Eat</button></td>
      </tr>
    );
  }
}

export default CandyRow;
