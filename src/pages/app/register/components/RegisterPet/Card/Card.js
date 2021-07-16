import React from 'react';
import { Link } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi';
import UIButton from '../../UI/Button/Button';
import './Card.css';

const PromotionCard = ({ promotion, onClickComments, onClickDelete }) => (
  <div className="promotion-card">

  <span className="promotion-card__age"> Idade {promotion.age} anos</span>

    <div className="promotion-card__info">
      <h1 className="promotion-card__data">Nome: {promotion.name}</h1>
      <h1 className="promotion-card__data">Proprietario: {promotion.owen}</h1>
      <h1 className="promotion-card__data">Raça: {promotion.species}</h1>

      <footer className="promotion-card__footer">

        <button
          className="promotion-card__comments-count"
          onClick={onClickComments}
        >
         
        </button>
        <UIButton
          component={Link}
          to={`/edit/${promotion.id}`}
          className="promotion-card__edit-button"
        >
          Editar
        </UIButton>
      </footer>
      <button
        type="button"
        className="promotion-card__delete-button"
        onClick={onClickDelete}
      >
        <BiTrash />
      </button>
    </div>
  </div>
);

export default PromotionCard;
