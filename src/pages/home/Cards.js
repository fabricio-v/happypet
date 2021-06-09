import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Confira o que temos de melhor para seu Pet!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Oferecemos infraestrutura adequada para deixar ainda mais bonito para o seu dono!'
              label='Serviços estéticos'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Pensando no melhor para seu pet oferecemos os serviços de passeador, prática de esportes guiados como natação e corridas, ioga, acupuntura e fitoterápicos'
              label='Bem-estar'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Possuímos uma equipe de médicos veterinários capacitados, experientes e que realmente amam os animais para proporcionar saúde e bem-estar para o seu pet.'
              label='Serviços médicos'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Aqui seu pet será adestrados com os melhores profissionais, aprendendo truques e técnicas dando ao pet os limites de maneira correta'
              label='Educação'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Aqui você encontro os melhores produtos e acessórios desde alimentação, estética e saúde'
              label='Acessórios'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
