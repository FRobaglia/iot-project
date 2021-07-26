import datas from '../datas';

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
      pagination={ true } 
      breakpoints= {
        {
          900: {
            direction: 'vertical',
            enabled: false
          }
        }
      }
      >
      { datas.map(( data ) => {       
        return (
          <SwiperSlide key={ data.title } >
            <CardSettings key={ data.title } title={ data.title } idName={ data.idName }/>
          </SwiperSlide>
        ) 
      }) }
      </Swiper>
    </main>
  ); 
}

export default Settings;