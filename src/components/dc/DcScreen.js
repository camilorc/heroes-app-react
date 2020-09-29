import React from 'react'
import { ListHeroes } from '../heroes/ListHeroes';

export const DcScreen = () => {

    return (
        <div>
            <h1>Dc</h1>
            <hr/>
            <ListHeroes publisher="DC Comics"/>
        </div>
    )
}
