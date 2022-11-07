import React, { Component } from 'react'
import Pokecard from "./Pokecard"
import "./Pokedex.css"

class Pokedex extends Component {
    render() {
        const { isWinner, exp, pokemon } = this.props
        let title
        if (isWinner) {
            title = <h1 className='Pokedex-winner'>Winners</h1>
        } else {
            title = <h1 className='Pokedex-loser'>Losers</h1>
        }

        return (
            <div className='Pokedex'>
                {title}
                <h2 className='Pokedex-total-experience'>Total Experience: <span className='Pokedex-experience-value'>{exp}</span></h2>
                <div className='Pokedex-cards'>
                    {pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}


export default Pokedex