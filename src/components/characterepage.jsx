import React from 'react';
import axios from 'axios';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.getRickAndMorty = this.getRickAndMorty.bind(this);
    };

    // componentDidMount() {
    //     this.getRickAndMorty()
    // }
    // componentDidUpdate() {
    //     this.getRickAndMorty()
    // }

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
    }
    render() {
        return (
            <div>
                <div>
                    <figure>
                        <img src={this.props.url} alt={this.props.name} />
                    </figure>
                    <h1>{this.props.name}</h1>
                </div>
                <div>
                    <ul>
                        <li>{this.props.status}</li>
                        <li>{this.props.species}</li>
                        <li>{this.props.gender}</li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Page;