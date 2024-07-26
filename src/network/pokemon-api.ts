import { Pokemon, PokemonPage } from "@/models/pokemon";
import api from "./axiosinstance";

export async function getPokemon(name: string){  //fonction qui récupère les caractéristiques du pokémon choisi
    const delay = 1000;
    await new Promise(r => setTimeout(r, delay));
    const response = await api.get<Pokemon>("/pokemon/" + name);
    return response.data;
}

export async function getPokemonPage(page: number){ // fonction qui affiche la page souhaitée en sautant tous les résultats précédents, ex: page 4, skip tous les résultats des pages 1 à 3
    const pageSize = 12;
    const response = await api.get<PokemonPage>(`/pokemon?limit=${pageSize}&offset=${pageSize * (page - 1)}`);
    return response.data;
}

export async function setNickname(pokemon: Pokemon, nickname: string){
    return { ...pokemon, name: nickname };
}