import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function PokeCard({ name, url, defense , backgroundColor, handleClick}) {
  const styleCard = {
    backgroundColor,
    border: "none",
    width: "clamp(10rem, calc(10rem + 2vw), 15rem)",
    boxShadow: "0 0.1rem 1rem rgba(0, 0, 0, 0.1)",
    borderRadius: "1em",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Quicksand', sans-serif",
    overflow: "hidden"
  }
  const styleHeader = {
    fontSize: "1.5rem",
    textTransform: "capitalize"
  }
  const styleOutCard = {
      padding: "1.5rem",
      textAlign: "center",
      textDecoration: "none",
      maxWidth: "300px"
  }
  return (
    <div className="outer-container" style={styleOutCard}>
    <div className="container" style={styleCard}>
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
          <h3 style={styleHeader}>{name}</h3>
          <p>{defense}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

