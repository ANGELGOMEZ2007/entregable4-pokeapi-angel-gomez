import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFect'
import formPoke from '../Pokedex/styles/formPoke.css'

const FormPoke = ({setFormUrl, urlBase}) => {

    const inputPoke = useRef()

    const navigate = useNavigate()

    const url = `https://pokeapi.co/api/v2/type/`

    const [types, getAllTypes] = useFetch(url)

    useEffect(() => {
      getAllTypes()
    }, [])

    console.log(types);
    

    const handleSumit = e => {
        e.preventDefault()
        const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
        navigate(path);
    }

    const handleChange = e => {
        setFormUrl(e.target.value);
    }

    

    return (
        <div>
            <form onSubmit={handleSumit}>
                <input ref={inputPoke} type="text" />
                <button>search</button>
            </form>
            <select className='select__pokemon' onChange={handleChange}>
                <option value={urlBase}>All Pokemosns</option>
                {
                    types?.results.map(type => (
                        <option 
                        key={type.url} 
                        value={type.url}
                        >{type.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default FormPoke