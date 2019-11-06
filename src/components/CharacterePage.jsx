import React, { Component } from 'react';
import axios from 'axios';

class CharacterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: null,
            id: this.props.match.params.id,
        };
        this.getRickAndMorty = this.getRickAndMorty.bind(this);
    };

    componentDidMount() {
        this.getRickAndMorty()
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
                {this.state.location && <h1>{this.state.character.location.name}</h1>}
            </div>

        )
    }
};

export default CharacterPage;