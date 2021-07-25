import datas from '../datas';

/***** COMPONENTS *****/
import HelpSection from '../components/helpSection/index';

/***** SWIPER *****/
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core'; // import Swiper core and required modules

SwiperCore.use([Pagination]); // install Swiper modules

const Help = () =>  {

  return (
    <main className="main main--help">
      <Swiper pagination={ true } >
      { datas.map(( data ) => {       
        return (
          <SwiperSlide key={ data.article.title } >
            <HelpSection key={ data.article.title } title={ data.article.title } content={ data.article.content }/>
          </SwiperSlide>
        ) 
      }) }
      </Swiper>
    </main>
  ); 
}

export default Help;

