import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function PokeCard({ name, url, defense }) {
  return (
    <div className="container">
      <div className="card" >
        <div className="card-header">
          <Image
            src={url}
            alt="card__image"
            className="card-image"
            width="150"
            height="194"
          />
        </div>
        <div className="card-body">
          <h3>{name}</h3>
          <p>{defense}</p>
        </div>
      </div>
    </div>
  );
}

