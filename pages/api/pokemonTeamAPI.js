import { pokemonTeam } from "./pokemonTeam";

export default function handler(req, res){
    const{ pokemonName } = req.query
    if(req.method === 'GET'){
        res.status(200).json(pokemonTeam)
    }else if (req.method === 'POST'){
        const id = req.body.id
        const name = req.body.name
        const url = req.body.url
        const newPokemon = {
            id,
            name, 
            url
        }
        pokemonTeam.push(newPokemon)
        res.status(201).json(newPokemon)
    }
}