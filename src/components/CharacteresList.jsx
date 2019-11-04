import React from 'react';
import axios from 'axios';
import CharacteresInfos from './CharacteresInfos';

class CharacteresList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      listOfCharacters: [],
      filterAlive: false,
      filterDead: false,
      filterMale: false,
      filterFemale: false,
    };
    this.handleAliveChange = this.handleAliveChange.bind(this);
    this.handleDeadChange = this.handleDeadChange.bind(this);
    this.handleMaleChange = this.handleMaleChange.bind(this);
    this.handleFemaleChange = this.handleFemaleChange.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
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

  handlePreviousPage() {
    const previousPage = this.state.page-1
    this.setState({
      page: previousPage,
    })
  }

  handleAliveChange(event) {
    this.setState({
      filterAlive: !this.state.filterAlive
    })
  }

  handleDeadChange(event) {
    this.setState({
      filterDead: !this.state.filterDead
    })
  }

  handleMaleChange(event) {
    this.setState({
      filterMale: !this.state.filterMale
    })
  }

handleFemaleChange(event) {
  this.setState({
    filterFemale: !this.state.filterFemale
  })
}
   getRickAndMorty() {
    // Send the request
    axios
      .get('https://rickandmortyapi.com/api/character/',
      {
        params: {
          page: this.state.page,
        }
      })
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          listOfCharacters: data.results
        });
      });
  }

  render() {
    let filteredListOfCharacteres = this.state.listOfCharacters
    .filter(character => {
      return (character)
    })

    if(this.state.filterAlive) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.status ==="Alive")
    }

    if(this.state.filterDead) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.status === "Dead")
    }

    if (this.state.filterMale) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.gender === "Male")
    }

    if (this.state.filterFemale) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.gender === "Female")
    }

    const listOfCharacters = filteredListOfCharacteres.map(listOfCharacters => {
      return <CharacteresInfos characteresInfos={listOfCharacters} />;
    });


    return (
      <div>
        <button onClick={this.handlePreviousPage}>Previous</button>
        <button onClick={this.handleNextPage}>Next</button>
        <span>{this.state.page}</span>
        <input type="checkbox" name="alive" value="alive" onChange={this.handleAliveChange}/>Alive<br/>
        <input type="checkbox" name="dead" value="dead" onChange={this.handleDeadChange}/>Dead<br/>
        <input type="checkbox" name="male" value="male" onChange={this.handleMaleChange}/>Male<br/>
        <input type="checkbox" name="female" value="female" onChange={this.handleFemaleChange}/>Female<br/>

        {listOfCharacters}
      </div>
    );
  }
}

export default CharacteresList;
