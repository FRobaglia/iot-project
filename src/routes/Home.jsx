import datas from '../datas'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.scss';

/***** COMPONENTS *****/
import Card from '../components/cardDashboard/index';
SwiperCore.use([Pagination]);

const Home = () =>  {

  return (
    <main className="main main--home">
      <div className="main__title">
        <h1>Tableau de bord</h1>
        <span><strong>Dernière actualisation :</strong> 19 Juillet 2021 - 14:45</span>
      </div>
      <Swiper
      spaceBetween={20}
      slidesPerView={1}
      pagination={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      type="bullets"
      breakpoints= {
        {

          // when window width is >= 320px
          400: {
            slidesPerView: 1.2,
          },
          650: {
            slidesPerView: 2,
          },

          750: {
            slidesPerView: 2.2,
          },

          950: {
            slidesPerView: 3,
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