import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroesCard } from './HeroesCard';

export const ListHeroes = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroesCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
