import React from 'react';
import candyData from '../../data/candyData';

import './CandyRow.scss';

class CandyRow extends React.Component {

  eatCandy(id){
    candyData.deleteCandy(this.props.candy)
    .then(this.props.callBack())
    .catch(error => console.error('unable to eat candy', error));
  }

  render() {
    const { candy } = this.props;
    return (
      <tr>
        <td>{candy.name}</td>
        <td>{candy.manufacturer}</td>
        <td>{candy.category}</td>
        <td><button onClick={() => this.eatCandy(candy.id)}>Eat</button></td>
      </tr>
    );
  }
}

export default CandyRow;
