import React from 'react';
import PropTypes from 'prop-types';
import styles from './PokeCard.css';
import Image from 'next/image';

export default function PokeCard({ poke:{tag, name, url }}) {
  return (
    <div className={styles.container}>
      <div className={styles.card} backgroundColor="blue">
        <div className={styles.card__header}>
          <Image
            src={url}
            alt="card__image"
            className={styles.card__image}
            width="150"
            height="194"
          />
        </div>
        <div className={styles.card__body}>
          <h5>{name}</h5>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
        </div>
      </div>
    </div>
  );
}
