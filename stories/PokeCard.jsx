import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function PokeCard({ name, url }) {
  return (
    <div className="container">
      <div className="card" backgroundColor="blue">
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
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
}

