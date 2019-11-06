import React, { Component } from 'react';

class PageOfCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        const { image, name, status, species, gender } = this.state.character;
        return (
            <div>
                <div>
                    <div>
                        <img src={image} alt={name} />
                    </div>
                    <h1>{name}</h1>
                </div>
                <div>
                    <ul>
                        <li>{status}</li>
                        <li>{species}</li>
                        <li>{gender}</li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default PageOfCharacter;