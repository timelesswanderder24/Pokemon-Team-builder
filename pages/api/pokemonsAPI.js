import { pokemons } from "./pokemons";

export default function handler(req, res) {
  res.status(200).json(pokemons)
}
