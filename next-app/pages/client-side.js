import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
const headers = {
  // "Cache-Control": "no-cache",
};

const ClientSide = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(url);

      const promises = response.data.results.map((result) => {
        return axios.get(result.url, headers);
      });
      const responses = await Promise.all(promises);
      const pokeData = responses.map((r) => (
        <div key={r.data.name}>
          <img src={r.data.sprites.front_default} alt={r.data.name} />
          <p>{r.data.name}</p>
        </div>
      ));
      console.log(pokeData);

      setPokemon(pokeData);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
      {pokemon}
    </div>
  );
};

export default ClientSide;
