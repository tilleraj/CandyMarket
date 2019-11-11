import React, { Component } from 'react';
import './Home.scss';
import candyData from '../../data/candyData';
import CandyTable from '../CandyTable/CandyTable';

class Home extends Component {
  state = {
    candies: []
  }

  // getCandies = () => {
  //   candyData.getCandy()
  //     .then((candies) => {
  //       let myCandies = [...candies];
  //       this.setState({ candies: myCandies });
  //     })
  //     .catch((error) => {
  //       console.error("it broke: ", error);
  //     });
  // }

  // showAllCandies = () => {
  //   const myCandies = [...this.state.candies];
  //   return myCandies.map(candy =>
  //     <li key={`candy${candy.id}`}>
  //       {candy.name}
  //     </li>
  //   );
  // };

  componentDidMount() {
    candyData.getCandy()
      .then((candies) => {
        let myCandies = [...candies];
        this.setState({ candies: myCandies });
      })
      .catch(error => console.error('could not get rides', error));
  }

  render() {
    const {
      candies,
    } = this.state;
    return (
      <div className="Home col">
        {/* <button onClick={this.getCandies}>Click Me!</button> */}
        {/* {this.showAllCandies()} */}
        <div className="card">
          <CandyTable
            candies={candies}
          />
        </div>
      </div>
    );
  }

}

export default Home;