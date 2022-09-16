import styles from './PokeCard.module.css';
import Image from 'next/image';

export interface IPokeCard {
  tag: string;
  name: string;
  url: string;
}  

const PokeCard: React.FC<IPokeCard> = ({ tag, name, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src={url}
            alt="card__image"
            className={styles.card__image}
            width="200"
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
};

export default PokeCard;