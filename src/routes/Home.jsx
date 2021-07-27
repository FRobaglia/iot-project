import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import { useState, useEffect } from 'react';

import cardsStaticData, {apiURL, getMinMaxValues} from '../cardsData';

// Import Swiper styles
import 'swiper/swiper.scss';

/***** COMPONENTS *****/
import Card from '../components/cardDashboard/index';
import MainTitle from '../components/MainTitle'; 

SwiperCore.use([Pagination]);
const cards = []

const Home = () =>  {
  const [cardsData, setCardsData] = useState([])

  
  async function getCardData(card) {
    return await fetch(`${apiURL}${card.endpoint}`)
    .then(response => response.json())
    .then((cardData) => {
      const data = cardData.data
      const latestValue = data[data.length - 1].value
      const minMaxValues = getMinMaxValues(data)
      const fullCard = {
        ...card,
        currentValue: Math.round(latestValue),
        dayMinValue: Math.round(minMaxValues.min),
        dayMaxValue: Math.round(minMaxValues.max),
        sign: cardData.unit
      }
      cards.push(fullCard)
      return fullCard
    });
  }
  

  useEffect(() => {

    cardsStaticData.forEach(card => {
      getCardData(card).then((res) => {
        setCardsData([...cards])
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
        {cardsData.map((card) => {
          console.log(card)
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