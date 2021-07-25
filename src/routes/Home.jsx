import datas from '../datas'; 
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';

/***** COMPONENTS *****/
import Card from '../components/cardDashboard/index';

const Home = () =>  {

  return (
    <main className="main main--home">
      <div className="main__title">
        <h1>Tableau de bord</h1>
        <span><strong>Dernière actualisation :</strong> 19 Juillet 2021 - 14:45</span>
      </div>
      <Swiper
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      type="bullets"
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