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
                <h4>Total Experience: {exp}</h4>
                <p>{isWinner ? "WINNER" : "LOOSER"}</p>
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