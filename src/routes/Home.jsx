import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import { useState, useEffect } from 'react';

import { useHistory } from 'react-router';

import {getCardData} from '../fetch'
import cardsStaticData from '../cardsData';

// Import Swiper styles
import 'swiper/swiper.scss';

/***** COMPONENTS *****/
import Card from '../components/cardDashboard/index';
import MainTitle from '../components/MainTitle'; 
import HelpRollover from '../components/helpRollover'

SwiperCore.use([Pagination]);

let arr = []

const Home = () =>  {

  const history = useHistory()
  
  const [cards, setCards] = useState([])

  const [showRollover, setShowRollover] = useState(false)

  function handleChange() {
    if (window.matchMedia("(min-width: 900px").matches) {
      setShowRollover(!showRollover)
    } else {
      let path = `aide`; 
      history.push(path);
    }
  }

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
            setCards(arr)
        }

      })
    })
    
  }, []);

  return (
    <>
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

              <Card onChange={handleChange} card={card} />

            </SwiperSlide>) 
        })}
      </Swiper>

    </main>
    <HelpRollover onChange={handleChange} rolloverClass={showRollover ? "is-visible" : ""} />
    </>
  ); 
}

export default Home;