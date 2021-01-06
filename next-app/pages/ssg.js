import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
const headers = {
  // "Cache-Control": "no-cache",
};

const StaticSide = (props) => {
  const pokemon = props.pokemon.map((poke) => {
    return (
      <div key={poke.name}>
        <img src={poke.sprite} alt={poke.name} />
        <p>{poke.name}</p>
      </div>
    );
  });

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
      {pokemon}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await axios.get(url);

  const promises = response.data.results.map((result) => {
    return axios.get(result.url, { headers });
  });
  const responses = await Promise.all(promises);
  const pokeData = responses.map((r) => {
    return { name: r.data.name, sprite: r.data.sprites.front_default };
  });

  return {
    props: {
      pokemon: pokeData,
    },
  };
};

export default StaticSide;
