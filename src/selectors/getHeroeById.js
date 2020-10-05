import { heroes } from "../data/heroesData";

export const getHeroesById = (id) => {
    return heroes.find(hero => hero.id === id);
}