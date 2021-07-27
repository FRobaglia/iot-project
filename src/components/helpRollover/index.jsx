import datas from '../../cardsData';

/***** COMPONENTS *****/
import HelpSection from '../helpSection/index';
import Icon from '../Icon';

/***** SWIPER *****/
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const HelpRollover = ({rolloverClass, onChange}) =>  {

  function handleChange() {
    onChange()
  }

  return (
    <section className={`helpRollover ${rolloverClass}`}>
      <Icon iconId="return" iconClass="helpRollover__icon"/>
      <Icon onChange={() => { handleChange() }} iconId="closePopup" iconClass="helpRollover__icon"/>
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