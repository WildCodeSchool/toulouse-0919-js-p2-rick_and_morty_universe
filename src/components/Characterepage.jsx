import React, {Component} from 'react';
import axios from 'axios';
import PageOfCharacter from './components/PageOfCharacter';
// import HumanInfos from './HumanInfos';

// const CharacterPage = () => {
//     const id  = useParams()
//     console.log(id)
//     const [idChar, setId] = useState(null)
// setId(id)  
// return(
//  <div>

//  </div>
//  );
// }


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
                    character: data
                });
            });
    }
    render() {
        return (
            this.state.character && <PageOfCharacter/>
        )
    }
};

export default CharacterPage;