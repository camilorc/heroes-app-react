import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroesCard } from '../heroes/HeroesCard';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({
        searchText:q
    });

    const {searchText} = values
    const heroesFilter = useMemo(() => getHeroByName(q), [q]);


    const handlesubmit = e =>{
        e.preventDefault();
        history.push(`?q=${searchText}`);

    }


    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">

                <div className="col-4">
                <h4>Buscardor</h4>
                <hr/>

                <form 
                    onSubmit={handlesubmit}
                >
                    <input 
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        onChange={handleInputChange}
                        name="searchText"
                        value={searchText}
                    />
                    <button
                        type="submit"
                        className="btn mt-1 btn-block btn-primary"
                    >
                        Buscar
                    </button>
                </form>

                </div>
                <div className="col-8">
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        heroesFilter.map(heroe => (
                            <HeroesCard
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
