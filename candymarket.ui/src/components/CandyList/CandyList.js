import React, { Component } from 'react';
import './CandyList.scss';
import candyData from '../../data/candyData';

class CandyList extends Component {
  state = {
    candies: []
  }

  getCandies = () => {
    // make api call
    // set state with results of api call
    candyData.getCandy()
      .then((candies) => {
        let myCandies = [...candies];
        this.setState({ candies: myCandies });
      })
      .catch((error) => {
        console.error("it broke: ", error);
      });
  }

  showAllCandies = () => {
    const myCandies = [...this.state.candies];
    return myCandies.map(candy => 
      <li key={`candy${candy.id}`}>
        {candy.name}
      </li>
      );
  };

  render() {
    const testText = this.props.testText;
    return (
      <div className="Home">
        <h1 className="testTarget">{testText}</h1>
        <button onClick={this.getCandies}>Click Me!</button>
        {this.showAllCandies()}
      </div>
    );
  }

}

export default CandyList;