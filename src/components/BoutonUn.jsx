import React from 'react';

class BoutonUn extends Component {
    constructor(props) {
        super(props);
        state = { 
            show :false,
        };
        this.displyHandler = this.displayHandler.bind(this);
    }

    displayHandler() {
        this.setState(prevState => {
            return { show: !prevState.show };
        });
    }
    
    render() {
        const links = this.state.show ? (
            <div>
                <p className= "colorLink">https://rickandmortyapi.com/api/character/</p>
                <p className= "colorLink">https://rickandmortyapi.com/api/location/</p>
                <p className= "colorLink">https://rickandmortyapi.com/api/episode/</p>
            </div>
        ) : null;
        return (
            <div className = "bouton">
                <button className= "infoSources" onclick={this.displayHandler}API></button>
            </div>
            
        );
    }
}

export default BoutonUn;