import React from "react";
import {CardsPokemon} from "./CardsPokemon";
import './cards.css'

export const Cards = ({results}) => {
    return (
        <div className="container" >
            <ul className="cards">
                {
                    results.map(p=>(
                        <li className='card-item' key={p.name}>
                            <CardsPokemon url={p.url}/>

                        </li>
                    ))
                }

            </ul>

        </div>
    )
}