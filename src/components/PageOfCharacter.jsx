import React from './react';


function PageOfCharacter() {
    return (
        <div>
            <div>
                <div>
                    <img src={this.state.character.image} alt={this.state.character.name} />
                </div>
                {this.state.character && <h1>{this.state.character.name}</h1>}
            </div>
            <div>
                <ul>
                    <li>{this.state.character.status}</li>
                    <li>{this.state.character.species}</li>
                    <li>{this.state.character.gender}</li>
                </ul>
            </div>
        </div>
    )
};

export default PageOfCharacter;