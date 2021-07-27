import datas from '../datas';

/***** COMPONENTS *****/
import HelpSection from '../components/helpSection/index';
import MainTitle from '../components/MainTitle';

/***** SWIPER *****/
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core'; // import Swiper core and required modules

SwiperCore.use([Pagination]); // install Swiper modules

const Help = () =>  {

  return (
    <main className="main main--help">
      <MainTitle pageId='help' title='Aide' />
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
          <SwiperSlide key={ data.article.title } >
            <HelpSection title={ data.article.title } content={ data.article.content }/>
          </SwiperSlide>
        ) 
      }) }
      </Swiper>
    </main>
  ); 
}

export default Help;

