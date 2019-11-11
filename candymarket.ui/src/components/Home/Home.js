import React, { Component } from 'react';
import './Home.scss';
import CandyTable from '../CandyTable/CandyTable';

class Home extends Component {

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

  render() {
    return (
      <div className="Home col">
        {/* <button onClick={this.getCandies}>Click Me!</button> */}
        {/* {this.showAllCandies()} */}
        <div className="card">
          <CandyTable/>
        </div>
      </div>
    );
  }

}

export default Home;