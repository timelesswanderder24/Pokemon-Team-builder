import { pokemonTeam } from "../pokemonTeam";

export default function handler(req, res){
    const{pokemonNum} = req.query
    if (req.method == 'GET') {
        const pokemon = pokemonTeam.find(pokemon => pokemon.id === pokemonNum)
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.status(200).json(pokemon)
    } else if (req.method == 'DELETE') {
        const deletePoke = pokemonTeam.find(pokemon => pokemon.id === pokemonNum)
        if (deletePoke != null) {
            const position = pokemonTeam.findIndex(pokemon => pokemon.id === pokemonNum)
            pokemonTeam.splice(position, 1)
        }
        res.status(200).json(deletePoke);
    }
}