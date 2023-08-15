// CSS imports
import { useState } from 'react';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedex.css';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

function Pokedex() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='pokedex-wrapper'>
            <h1>POKEDEX</h1>
            <Search updateSearchTerm={setSearchTerm} />
            {searchTerm ? <PokemonDetails pokemonName={searchTerm} /> : <PokemonList />}
        </div>
    )
}

export default Pokedex;