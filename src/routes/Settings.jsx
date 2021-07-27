import datas from '../cardsData';

/***** COMPONENTS *****/
import MainTitle from '../components/MainTitle';
import CardSettings from '../components/cardSettings'; 

/***** SWIPER *****/
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core'; // import Swiper core and required modules

SwiperCore.use([Pagination]); // install Swiper modules

const Settings = () =>  {

  return (
    <main className="main main--settings">
      <div className="flash"></div>
      <MainTitle pageId='settings' title='Système' />
      <Swiper 
      slidesPerView={ 1.2 }
      pagination={ true } 
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
      { datas.map(( data ) => {       
        return (
          <SwiperSlide key={ data.id } >
            <CardSettings card={ data } id={ data.id }/>
          </SwiperSlide>
        ) 
      }) }
      </Swiper>
    </main>
  ); 
}

export default Settings;