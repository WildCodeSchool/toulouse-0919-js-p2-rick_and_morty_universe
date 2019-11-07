import React, { Component } from 'react';
import axios from 'axios';

// class CharacterPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             character: null,
//             episode: [],
//             id: this.props.match.params.id,
//         };
//         this.getRickAndMorty = this.getRickAndMorty.bind(this);
//         this.getRickAndMortyEpisode = this.getRickAndMortyEpisode.bind(this);
//     };

//     componentDidMount() {
//         this.getRickAndMorty()
//         this.getRickAndMortyEpisode()
//     }

//     getRickAndMorty() {
//         const { id } = this.props.match.params
//         axios
//             .get(`https://rickandmortyapi.com/api/character/${id}`)
//             .then(response => response.data)
//             .then(data => {
//                 this.setState({
//                     character: data,
//                     location: data,
//                 });
//             });
//     };

//     getRickAndMortyEpisode() {
//         const { id } = this.props.match.params
//         axios
//             .get(`https://rickandmortyapi.com/api/episode/${id}`)
//             .then(response => response.data)
//             .then(data => {
//                 this.setState({
//                     episode: data, 
//                     characters: data,
//                     name: data,
//                 });
//             });
//     };
{
url: 'https://rickandmortyapi.com/graphql',
    method: 'post',
        data: {
    query: `query {
    character(id: 1) {
      id
      name
      episode {
        name
      }
    }
  }`
}
})

render() {
    return (
        <div>
            <div>
                <div>
                    {this.state.character && <img src={this.state.character.image} alt={this.state.character.name} />}
                </div>
                {this.state.character && <h1>{this.state.character.name}</h1>}
            </div >
            <div>
                <ul>
                    {this.state.character && <li>{this.state.character.status}</li>}
                    {this.state.character && <li>{this.state.character.species}</li>}
                    {this.state.character && <li>{this.state.character.gender}</li>}
                </ul>
            </div>
            <div>
                {this.state.location && <p>{this.state.character.location.name}</p>}
            </div>
            <div>
                <ul>
                    {this.state.episode && <li>{this.state.episode.episode}</li>}
                    {this.state.name && <li>{this.state.episode.name}</li>}
                </ul>
            </div>
        </div >
    )
}
};

// Wraper la charactercard avec le Link
// <Link to={`page/${humanInfos.id}`}></Link>

export default CharacterPage;
