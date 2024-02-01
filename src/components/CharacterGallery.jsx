import React, { useEffect, useState } from "react";
import Character from "./Character";
import characterData from "../data/characterData.json";

const CharacterGallery = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCharacter = () => {
      setData(characterData);
    };

    fetchCharacter();
    console.log(data);
  }, []);

  return (
    <>
      {data && data.map(character => (
        <Character
          key={character._id}
          name={character.name}
          birth={character.birth}
          death={character.death}
          race={character.race}
          realm={character.realm}
          spouse={character.spouse}
          img={character.imgUrl}
        />
      ))}
    </>
  );
};

export default CharacterGallery;
