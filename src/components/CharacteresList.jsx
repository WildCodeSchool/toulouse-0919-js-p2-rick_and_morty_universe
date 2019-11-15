import React from 'react';
import axios from 'axios';
import CharacteresInfos from './CharacteresInfos';
import './CharacteresList.css';
import InfiniteScroll from 'react-infinite-scroller';

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
      filterHuman: false,
      filterAliens: false,
      filterHumanoids: false,
      filterMytholog: false,
      filterAnimals: false,
      filterRobot: false,
      filterCronenberg: false,
      filterPoopybutthole: false,
    };
    this.handleAliveChange = this.handleAliveChange.bind(this);
    this.handleDeadChange = this.handleDeadChange.bind(this);
    this.handleMaleChange = this.handleMaleChange.bind(this);
    this.handleFemaleChange = this.handleFemaleChange.bind(this);
    this.handleHumanChange = this.handleHumanChange.bind(this);
    this.handleAliensChange = this.handleAliensChange.bind(this);
    this.handleHumanoidsChange = this.handleHumanoidsChange.bind(this);
    this.handleMythologChange = this.handleMythologChange.bind(this);
    this.handleAnimalsChange = this.handleAnimalsChange.bind(this);
    this.handleRobotsChange = this.handleRobotsChange.bind(this);
    this.handleCronenbergChange = this.handleCronenbergChange.bind(this);
    this.handlePoopybuttholeChange = this.handlePoopybuttholeChange.bind(this);
    this.getCharactersByPage = this.getCharactersByPage.bind(this);

    this.femaleRef = React.createRef();
    this.maleRef = React.createRef();

    this.aliveRef = React.createRef();
    this.deadRef = React.createRef();

  }

  componentDidMount() {
    this.getCharactersByPage(1)
  }

  handleAliveChange(event) {
    var deadCheckbox = this.deadRef.current;
    deadCheckbox.checked = false;
    this.setState({
      filterAlive: !this.state.filterAlive,
      filterDead: false
    })
  }

  handleDeadChange(event) {
    var aliveCheckbox = this.aliveRef.current;
    aliveCheckbox.checked = false;
    this.setState({
      filterDead: !this.state.filterDead,
      filterAlive: false
    })
  }

  handleMaleChange(event) {
    var femaleCheckbox = this.femaleRef.current;
    femaleCheckbox.checked = false;
    this.setState({
      filterMale: !this.state.filterMale,
      filterFemale: false
    })
  }

  handleFemaleChange(event) {
    var maleCheckbox = this.maleRef.current;
    maleCheckbox.checked = false;
    this.setState({
      filterFemale: !this.state.filterFemale,
      filterMale: false
    })
  }

  handleHumanChange(event) {
    this.setState({
      filterHuman: !this.state.filterHuman
    })
  }

  handleAliensChange(event) {
    this.setState({
      filterAliens: !this.state.filterAliens
    })
  }

  handleHumanoidsChange(event) {
    this.setState({
      filterHumanoids: !this.state.filterHumanoids
    })
  }

  handleMythologChange(event) {
    this.setState({
      filterMytholog: !this.state.filterMytholog
    })
  }

  handleAnimalsChange(event) {
    this.setState({
      filterAnimals: !this.state.filterAnimals
    })
  }

  handleRobotsChange(event) {
    this.setState({
      filterRobot: !this.state.filterRobot
    })
  }

  handleCronenbergChange(event) {
    this.setState({
      filterCronenberg: !this.state.filterCronenberg
    })
  }

  handlePoopybuttholeChange(event) {
    this.setState({
      filterPoopybutthole: !this.state.filterPoopybutthole
    })
  }

  getCharactersByPage(page) {
    axios
      .get('https://rickandmortyapi.com/api/character/',
        {
          params: {
            page
          }
        })
      .then(response => response.data)
      .then(data => {
        this.setState(prevState => {
          const newListOfCharacters = [...prevState.listOfCharacters, ...data.results]
          return {
            listOfCharacters: newListOfCharacters
          };
        });
      });
  }
  render() {
    const { listOfCharacters } = this.state;
    const filterByCategory = (property, value) => {
      return listOfCharacters.filter((character) => {
        return (character[property] === value)
      })
    }
    let filteredListOfCharacteres = this.state.listOfCharacters
      .filter(character => {
        return (character)
      })

    if (this.state.filterAlive) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.status === "Alive")
    }

    if (this.state.filterDead) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.status === "Dead")
    }

    if (this.state.filterMale) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.gender === "Male")
    }

    if (this.state.filterFemale) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.gender === "Female")
    }

    if (this.state.filterHuman) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.species === "Human")
    }

    if (this.state.filterAliens) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.species === "Alien")
    }

    if (this.state.filterHumanoids) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.species === "Humanoid")
    }

    if (this.state.filterMytholog) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.species === "Mytholog")
    }

    if (this.state.filterAnimals) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.species === "Animal")
    }

    if (this.state.filterRobot) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.species === "Robot")
    }

    if (this.state.filterCronenberg) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.species === "Cronenberg")
    }
    if (this.state.filterPoopybutthole) {
      filteredListOfCharacteres = filteredListOfCharacteres.filter(listOfCharacters => listOfCharacters.species === "Poopybutthole")
    }

    const characters = filteredListOfCharacteres.map(listOfCharacters => {
      return <CharacteresInfos characteresInfos={listOfCharacters} />;
    });

    return (

      <div className="gradient">
        <div class="dropdownContainer">
          <div class="dropdown">
            <button class="dropbtn">Gender</button>
            <div class="dropdown-content">
              <input ref={this.femaleRef} type="checkbox" name="female" value="female" onChange={this.handleFemaleChange} />Female<br />
              <input ref={this.maleRef} type="checkbox" name="male" value="male" onChange={this.handleMaleChange} />Male<br />
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Species</button>
            <div class="dropdown-content">
              <input type="checkbox" name="aliens" value="aliens" onChange={this.handleAliensChange} />Aliens<br />
              <input type="checkbox" name="animals" value="animals" onChange={this.handleAnimalsChange} />Animals<br />
              <input type="checkbox" name="cronenberg" value="cronenberg" onChange={this.handleCronenbergChange} />Cronenberg<br />
              <input type="checkbox" name="human" value="human" onChange={this.handleHumanChange} />Humans<br />
              <input type="checkbox" name="humanoids" value="humanoids" onChange={this.handleHumanoidsChange} />Humanoids<br />
              <input type="checkbox" name="mythologs" value="mythologs" onChange={this.handleMythologChange} />Mytholog<br />
              <input type="checkbox" name="poopybutthole" value="poopybutthole" onChange={this.handlePoopybuttholeChange} />Poopybutthole<br />
              {/* <input type="checkbox" name="robots" value="robots" onChange={this.handleRobotsChange}/>Robots<br/> */}
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">Status</button>
            <div class="dropdown-content dd-right">
              <input ref={this.aliveRef} type="checkbox" name="alive" value="alive" onChange={this.handleAliveChange} />Alive<br />
              <input ref={this.deadRef} type="checkbox" name="dead" value="dead" onChange={this.handleDeadChange} />Dead<br />
            </div>
          </div>
        </div>

        <InfiniteScroll
          className="characters"
          pageStart={1}
          loadMore={this.getCharactersByPage}
          hasMore={true || false}
          loader={<div className="loader" key={0}>Chargement ...</div>}>
          {characters}
        </InfiniteScroll>
        </div>
    );
  }
}


export default CharacteresList;
