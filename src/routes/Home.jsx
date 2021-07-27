import datas from '../datas'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.scss';

/***** COMPONENTS *****/
import Card from '../components/cardDashboard/index';
import MainTitle from '../components/MainTitle'; 

SwiperCore.use([Pagination]);

const Home = () =>  {

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
      }
      >
        {datas.map((data) => {       
            return (
            <SwiperSlide key={data.id}>

              <Card title={data.title} currentValue={data.currentValue} optimalMinValue={data.optimalMinValue} optimalMaxValue={data.optimalMaxValue} dayMinValue={data.dayMinValue} dayMaxValue={data.dayMaxValue} sign={data.sign} off={data.off} dropdown={data.dropdown} />

            </SwiperSlide>) 
        })}
      </Swiper>
    </main>
  ); 
}

export default Home;