import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  const fetchCharacter = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=>{
    fetchCharacter()
  }, [id])

    return (
        <>
        {
        character ?
        <div>
          <h1>{character.name}</h1>
          <img src={character.sprites.front_default} />
          <p>Height: {character.height}</p>
          <p>Weight: {character.weight}</p>
        </div>
        :
        <p>Loading...</p>
      }
    </>
  );
};

export default CharacterDetailsPage;