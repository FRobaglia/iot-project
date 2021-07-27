import datas from '../../cardsData';

/***** COMPONENTS *****/
import HelpSection from '../helpSection/index';
import Icon from '../Icon';

/***** SWIPER *****/
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const HelpRollover = () =>  {

  return (
    <section className="helpRollover">
      <Icon iconId="return" iconClass="helpRollover__icon"/>
      <Icon iconId="closePopup" iconClass="helpRollover__icon"/>
      <Swiper 
      pagination={true}
      navigation={true}
      >
      { datas.map(( data ) => {       
        return (
          <SwiperSlide key={ data.id } >
            <HelpSection title={ data.article.title } content={ data.article.content }/>
          </SwiperSlide>
        ) 
      }) }
      </Swiper>
    </section>
  ); 
}

export default HelpRollover;