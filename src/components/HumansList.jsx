import React from 'react';
import axios from 'axios';
import HumanInfos from './HumanInfos';

class HumansList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      humans: [
        {
          id: 1,
          name: 'Agency Director',
          type: '',
          gender: 'Male',
          origin: 'Earth (Replacement Dimension)',
          location: 'Earth (Replacement Dimension)',
          image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg'
        },

        {
          id: 2,
          name: 'Jerry Smith',
          type: '',
          gender: 'Male',
          origin: 'Earth (Replacement Dimension)',
          location: 'Testicle Monster Dimension',
          image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg'
        },

        {
          id: 3,
          name: 'Alan Rails',
          type: 'Superhuman (Ghost trains summoner)',
          gender: 'Male',
          origin: 'Earth (Replacement Dimension)',
          location: 'Worldender',
          image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg'
        }
      ]
    };
    // this.getRickAndMorty = this.getRickAndMorty.bind(this);
  }

  // getRickAndMorty() {
  //   // Send the request
  //   axios
  //     .get('https://rickandmortyapi.com/api/character/')
  //     // Extract the DATA from the received response
  //     .then(response => response.data)
  //     // Use this data to update the state
  //     .then(data => {
  //       this.setState({
  //         human: data.results[0]
  //       });
  //     });
  // }

  render() {
    const listOfHumans = this.state.humans.map(human => {
      return <HumanInfos humanInfos={human} />;
    });
    return (
      <div>
        {listOfHumans}
        <button type="button" onClick={this.state} />
      </div>
    );
  }
}

export default HumansList;
