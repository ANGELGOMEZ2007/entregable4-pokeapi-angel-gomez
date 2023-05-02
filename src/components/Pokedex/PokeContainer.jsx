import React, { useEffect } from 'react'
import PokeCard from './PokeCard'
import useFetch from '../../hooks/useFect'


const PokeContainer = ({formUrl}) => {

    

    const [pokemons, getAllpokemons] = useFetch(formUrl)


    useEffect(() => {
        getAllpokemons()
    }, [formUrl])


    return (

        <div className="poke-container">

            {
                pokemons?.results
                ?(
                    pokemons?.results.map(pokemon => (
                        <PokeCard key={pokemon.url} url={pokemon.url}/>
                    ))
                )

                :(
                    pokemons?.pokemon.map(objePoke => (
                        <PokeCard
                        key={objePoke.pokemon.url}
                        url={objePoke.pokemon.url}
                        />
                    ))
                )

                
            }

        </div>

    )
}

export default PokeContainer