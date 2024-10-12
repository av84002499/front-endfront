import React from 'react'
import api from '../api';

function PokemonRow({pokemon, setReload, setViewPokemon}) {
  const DeletePokemon = async () => {
    try {
      const res = await api.delete(`/api/pokemons/${pokemon.id}`);
      alert(`${res.data.name} Deleted successfully`);
      setReload(true)
    } catch (err) {
      alert('Error deleting Pokémon:', err);
    }
  }
  return (
    <tr id={'row'+pokemon.id}>
      <th scope="row"><button className='border-0 bg-transparent text-primary' type='button' onClick={() => setViewPokemon(pokemon)} >{pokemon.name}</button></th>
      <td>{pokemon.types.join(', ')}</td>
      <td><button className='btn btn-sm btn-danger rounded-pill' id={'delete'+pokemon.id} onClick={DeletePokemon}>Delete</button></td>
    </tr>
  )
}

export default PokemonRow
