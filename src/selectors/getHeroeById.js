import { heroes } from "../data/heroesData";

export const getHeroesByPublisher = (id) => {
    return heroes.find(hero => hero.id === id);
}