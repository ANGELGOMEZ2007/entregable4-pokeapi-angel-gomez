import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFect'

const PokeInfo = () => {

    const { name } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    const [pokemon, getPokemonByName, hasError] = useFetch(url)

    useEffect(() => {
        getPokemonByName()
    }, [name])

    console.log(pokemon);

    return (
        <div>
            {
                hasError
                    ? <h1>this pokemon is not exit X</h1>
                    :
                    <>
                        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                        <h2>{pokemon?.name}</h2>
                    </>
            }

        </div>
    )
}

export default PokeInfo