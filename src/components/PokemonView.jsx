import React from 'react'


function PokemonView(viewPokemon) {
  const api_URL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:3200';
  console.log(api_URL)
  console.log(viewPokemon.sprite)
  return (
    <div className="card border-light-subtle mb-3">
      <img src={`${api_URL}/uploads${viewPokemon.sprite}`} className="card-img-top" alt="Pokemon" />
      <div className="card-body">
        <h5 className="card-title">{viewPokemon.name}</h5>
        <p className="card-text"><strong>Types: </strong>{viewPokemon.types.join(', ')}</p>
      </div>
    </div>
  )
}

export default PokemonView
