import React from 'react'
import { ListHeroes } from '../heroes/ListHeroes'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel</h1>
            <hr/>
            <ListHeroes publisher="Marvel Comics"/>
        </div>
    )
}
