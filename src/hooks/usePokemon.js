import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemons from "../utils/downloadPokemons";
import { useParams } from "react-router-dom";

function usePokemon(pokemonName) {
    const { id } = useParams();

    const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null);

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexUrl: '',
        nextUrl: '',
        prevUrl: ''
    });

    async function downloadGivenPokemon(id) {
        console.log(POKEMON_DETAIL_URL + ((pokemonName) ? pokemonName : id));
        const response = await axios.get(POKEMON_DETAIL_URL + ((pokemonName) ? pokemonName : id));
        const pokemon = response.data;
        setPokemon({
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types,
            image: pokemon.sprites.other.dream_world.front_default
        });
        const types =  response.data.types.map(t => t.type.name);
        return types[0];
    }

    async function downloadPokemonAndRelated(id) {
        try {
            const type = await downloadGivenPokemon(id);
            await downloadPokemons(pokemonListState, setPokemonListState, `https://pokeapi.co/api/v2/type/${type}`);
        } catch(e) {
            console.log("no pokemon found");
        }
    }

    useEffect(() => {
        downloadPokemonAndRelated(id);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [id, pokemonName]);

    return [pokemon, pokemonListState];

}

export default usePokemon;
