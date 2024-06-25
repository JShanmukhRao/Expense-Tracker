import React from 'react';

import styles from './Card.module.scss';
import { transformCreateDate } from '../../../../services/Utils';
interface CardProps{
    cardItem:{
        name:string;
        description?:string;
        createdAt:string;
    };
}
const Card: React.FC<CardProps> = ({ cardItem }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{cardItem.name}</h2>
            <p className={styles.cardDescription}>{cardItem.description}</p>
            <p className={styles.cardDate}>Created At: {transformCreateDate(cardItem.createdAt)}</p>
        </div>
    );
};

export default Card;