import React, { Component } from 'react';
import axios from 'axios';
import './CharacterPage.css';

class CharacterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: null,
            id: this.props.match.params.id,
        };
        this.getRickAndMorty = this.getRickAndMorty.bind(this);
        this.getRickAndMortyEpisode = this.getRickAndMortyEpisode.bind(this);
    };

    componentDidMount() {
        this.getRickAndMorty()
        this.getRickAndMortyEpisode()
    }

    getRickAndMorty() {
        const { id } = this.props.match.params
        axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.data)
            .then(data => {
                this.setState({
                    character: data,
                    location: data,
                });
            });
    };

    getRickAndMortyEpisode() {
        const { id } = this.props.match.params
        axios
            .get(`https://rickandmortyapi.com/api/episode/${id}`)
            .then(response => response.data)
            .then(data => {
                this.setState({
                    episode: data,
                    characters: data,
                    name: data,
                });
            });
    };

    render() {
        return (
            <div className="allitems">
                <div>
                    {this.state.character && <img src={this.state.character.image} alt={this.state.character.name} />}
                </div>
                <div className="infos">
                    {this.state.character && <h1>{this.state.character.name}</h1>}
                    <div>
                        <ul>
                            {this.state.character && <li>Status: {this.state.character.status}</li>}
                            {this.state.character && <li>Species:{this.state.character.species}</li>}
                            {this.state.character && <li>Gender: {this.state.character.gender}</li>}
                        </ul>
                    </div>
                    <div className="location">
                        <ul>
                            {this.state.location && <li>Location: {this.state.character.location.name}</li>}
                        </ul>
                    </div>
                    <div className="episode">
                        <ul>Epiosodes:
                            {this.state.episode && <li>{this.state.episode.episode}</li>}
                            {this.state.name && <li>{this.state.episode.name}</li>}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
};

export default CharacterPage;
