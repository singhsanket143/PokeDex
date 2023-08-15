// CSS imports
import './PokemonDetails.css';

import { Link, useParams } from 'react-router-dom';

// Custom Hook
import usePokemon from '../../hooks/usePokemon';

function PokemonDetails() {

    const { id } = useParams();
    const [pokemon] = usePokemon(id);
    return (
        <>
        <h1 className='pokedex-redirect'>
            <Link to="/">
                Pokedex
            </Link>
        </h1>
        {pokemon && <div className='pokemon-details-wrapper'>
            <div className='pokemon-detail-name'>
                {pokemon.name}
            </div>
            <div className='pokemon-image'>
                <img src={pokemon.image} />
            </div>
            <div className='pokemon-attr'>
                <div>
                    height: {pokemon.height}

                </div>
                <div>
                weight: {pokemon.weight}

                </div>
            </div>
            <div className='pokemon-types'>
                <h1>Type:</h1> {pokemon.types.map(t => <span className='type' key={t.type.name}>{t.type.name}</span>)}
            </div>
        </div>}
        </>

    )
}

export default PokemonDetails;