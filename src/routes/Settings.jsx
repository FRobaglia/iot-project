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
      <MainTitle pageId='settings' title='Système' />
      <Swiper 
      slidesPerView={ 1.2 }
      pagination={ true } 
      breakpoints= {
        {
          900: {
            enabled: false
          }
        }
      }
      >
      { datas.map(( data ) => {       
        return (
          <SwiperSlide key={ data.id } >
            <CardSettings title={ data.title } iconName={ data.iconName }/>
          </SwiperSlide>
        ) 
      }) }
      </Swiper>
    </main>
  ); 
}

export default Settings;