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

        if (!res.dropdown) {
          arr = [...arr, res]
          setCards(arr)
        } else {
            res.dropdown.forEach((dropdown, index) => {
              getCardData({id: dropdown.endpoint}).then(c => {
                res.dropdown[index].value = c.currentValue
              })
            })
            arr = [...arr, res]
            console.log(res)
            setCards(arr)
        }

      })
    })
    
  }, []);

  return (
    <main className="main main--home">
      <MainTitle pageId='home' title='Tableau de bord' subtitle='<strong>Dernière actualisation :</strong> 19 Juillet 2021 - 14:45' />
      <Swiper
      slidesPerView={ 1.2 }
      pagination={{ clickable: true }}
      breakpoints= {
        {
          900: {
            enabled: false
          }, 
          700: {
            slidesPerView: 2.5
          }, 
          600: {
            slidesPerView: 2
          },
          400: {
            slidesPerView: 1.5
          }
        }
      }
      >
        {cards.map((card) => {
            return (
            <SwiperSlide key={card.id}>

              <Card card={card} />

            </SwiperSlide>) 
        })}
      </Swiper>
    </main>
  ); 
}

export default Home;