import { heroes } from "../data/heroesData";


export const getHeroesByPublisher = (publisher) => {
    
    const valid = ['DC Comics','Marvel Comics'];

    if(!valid.includes(publisher)){
        throw new Error( `El publisher ${publisher} no es válido.`);
    }

    return heroes.filter(hero => hero.publisher === publisher);

}
