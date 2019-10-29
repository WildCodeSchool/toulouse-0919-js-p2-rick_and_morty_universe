import React from 'react';
import axios from 'axios';
import HumanInfos from './HumanInfos';

class HumansList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      humans: [],
      filterAlive: false,
    };
    this.handleAliveChange = this.handleAliveChange.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.getRickAndMorty = this.getRickAndMorty.bind(this);
  }

  componentDidMount(){
    this.getRickAndMorty()
  }

  componentDidUpdate(){
    this.getRickAndMorty()
  }
  
  handleNextPage() {
    const nextPage = this.state.page+1
    this.setState({
      page: nextPage,
    })
  }

  handleAliveChange(event) {
    this.setState({
      filterAlive: !this.state.filterAlive
    })
  }

   getRickAndMorty() {
    // Send the request
    axios
      .get('https://rickandmortyapi.com/api/character/', {
        params: {
          page: this.state.page,
        }
      })
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          humans: data.results
        });
      });
  }

  render() {
    let filteredListOfHumans = this.state.humans
    .filter(character => {
      return (character.species=== "Human")
    })

    if(this.state.filterAlive) {
      filteredListOfHumans = filteredListOfHumans.filter(human => human.status!=="Alive")
    }

    const listOfHumans = filteredListOfHumans.map(human => {
      return <HumanInfos humanInfos={human} />;
    });


    return (
      <div>
        <button onClick={this.handleNextPage}></button>
        <span>{this.state.page}</span>
        <input type="checkbox" name="alive" value="alive" onChange={this.handleAliveChange}/>
        {listOfHumans}
      </div>
    );
  }
}

export default HumansList;
