import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import { useState, useEffect } from 'react';

import {getCardData} from '../fetch'
import cardsStaticData from '../cardsData';

// Import Swiper styles
import 'swiper/swiper.scss';

/***** COMPONENTS *****/
import Card from '../components/cardDashboard/index';
import MainTitle from '../components/MainTitle'; 

SwiperCore.use([Pagination]);

let arr = []

const Home = () =>  {
  
  const [cards, setCards] = useState([])

  useEffect(() => {

    arr = []

    cardsStaticData.forEach(card => {
      getCardData(card).then((res) => {
        arr = [...arr, res]
        setCards(arr)
      })
    })
    
  }, []);

  return (
    <main className="main main--home">
      <MainTitle pageId='home' title='Tableau de bord' subtitle='<strong>Dernière actualisation :</strong> 19 Juillet 2021 - 14:45' />
      <Swiper
      slidesPerView={ 1.2 }
      pagination={ true } 
      breakpoints= {
        {
          900: {
            enabled: false
          }
        }
      }>
        {cards.map((card) => {
            return (
            <SwiperSlide key={card.id}>

              <Card title={card.title} currentValue={card.currentValue} optimalMinValue={card.optimalMinValue} optimalMaxValue={card.optimalMaxValue} dayMinValue={card.dayMinValue} dayMaxValue={card.dayMaxValue} sign={card.sign} off={card.off} dropdown={card.dropdown} />

            </SwiperSlide>) 
        })}
      </Swiper>
    </main>
  ); 
}

export default Home;