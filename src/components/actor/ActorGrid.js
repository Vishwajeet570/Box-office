import React from 'react';
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import ActorCard from './ActorCard';

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          gender={person.gender}
          deathday={person.deathday}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
