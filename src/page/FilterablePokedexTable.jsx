import React, { useState, useEffect } from 'react'
import PokemonRow from '../components/PokemonRow'
import api from '../api'
import AddNewPokemon from './AddNewPokemon'


function FilterablePokedexTable() {
    const [pokemons, setPokemons] = useState([])
    const [reload, setReload] = useState(false)
    const [selectedType, setSelectedType] = useState('All');

    // Get unique types for the dropdown
    const uniqueTypes = Array.from(new Set(pokemons.flatMap(pokemon => pokemon.types)));

    // Filter Pokémon based on selected type
    const filteredPokemons = pokemons.filter(pokemon =>
        selectedType === 'All' || pokemon.types.includes(selectedType)
    );

    const loadData = async () => {
        try {
            const res = await api.get('/pokemons/');
            setPokemons(res.data);
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => {
        loadData();
        setReload(false);
    }, [reload]);

    return (
        <div className='m-0 p-0'>
            <div className='m-3'>
                <div className="card border-light-subtle mb-3">
                    <div className="card-header">
                        <h1>Pokemons</h1>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead className="table-success">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">
                                        Types
                                        <select className='ms-2 rounded-pill px-2 py-1 w-50' onChange={e => setSelectedType(e.target.value)} value={selectedType}>
                                            <option value="All">All</option>
                                            {uniqueTypes.map(type => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select></th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPokemons.map((pokemon, index) => (
                                    <PokemonRow
                                        pokemon={pokemon}
                                        setReload={setReload}
                                        key={index}
                                    />
                                ))}
                            </tbody>
                        </table>
                        <AddNewPokemon setReload={setReload} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FilterablePokedexTable
