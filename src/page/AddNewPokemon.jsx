import React, { useState } from 'react'
import api from '../api'

function AddNewPokemon({setReload}) {
    const [name, setName] = useState('')
    const [types, setTypes] = useState('')
    const [sprite, setSprite] = useState(null)

    const savePokemon = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const formData = new FormData();
        formData.append('name', name);
        formData.append('types', types);
        formData.append('sprite', sprite);

        // Now you can send `formData` to your server

        try {
            console.log('Name:', formData.get('name'));
            console.log('Types:', formData.get('types'));
            console.log('Sprite:', formData.get('sprite'));
            const res = await api.post('/pokemons/', formData);
            setReload(true);
            setName('');
            setTypes('');
            setSprite(null);
            const destroyFormModalBtn = document.getElementById('formModalDestroy');
            destroyFormModalBtn.click();
            alert(`${res.data.name} Created successfully`);
        } catch (err) {
            alert('Error creating Pokémon:', err);
        }
    };
    return (
        <div>
            <button type="button" className="btn btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#formModal">
                + Add a New Pokemon
            </button>

            <div className="modal fade" id="formModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="formModalLabel">New Pokemon</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={savePokemon}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label ms-3">Name</label>
                                    <input type="text" className="form-control rounded-pill" id="name" name='name' onChange={(e) => setName(e.target.value)} value={name} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="types" className="form-label ms-3">Types</label>
                                    <input type="text" className="form-control rounded-pill" id="types" name='types' onChange={(e) => setTypes(e.target.value)} value={types} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sprite" className="form-label ms-3">Sprite</label>
                                    <input type="file" className="form-control rounded-pill" id="Sprite" name='sprite' accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files[0]; // Get the selected file
                                            if (file) {
                                                setSprite(file); // Store the file object, not the value
                                            }
                                        }}
                                        required />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger rounded-pill" data-bs-dismiss="modal" id="formModalDestroy">Cancel</button>
                                    <button type="submit" className="btn btn-success rounded-pill">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewPokemon
