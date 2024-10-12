import React from 'react'
import api from '../api';

function PokemonRow({pokemon, setReload}) {
  const DeletePokemon = async () => {
    try {
      const res = await api.delete(`/pokemons/${pokemon.id}`);
      alert(`${res.data.name} Deleted successfully`);
      setReload(true)
    } catch (err) {
      alert('Error deleting Pokémon:', err);
    }
  }
  return (
    <tr id={'row'+pokemon.id}>
      <th scope="row">{pokemon.name}</th>
      <td>{pokemon.types.join(', ')}</td>
      <td><button className='btn btn-sm btn-danger rounded-pill' id={'delete'+pokemon.id} onClick={DeletePokemon}>Delete</button></td>
    </tr>
  )
}

export default PokemonRow
