import datas from '../datas'; 

/***** COMPONENTS *****/
import Card from '../components/cardDashboard/index';

const Home = () =>  {

  return (
    <main className="main main--home">
      <div className="main__title">
        <h1>Tableau de bord</h1>
        <span><strong>Dernière actualisation :</strong> 19 Juillet 2021 - 14:45</span>
      </div>
      {datas.map((data) => {       
          return (<Card key={data.title} title={data.title} currentValue={data.currentValue} optimalMinValue={data.optimalMinValue} optimalMaxValue={data.optimalMaxValue} dayMinValue={data.dayMinValue} dayMaxValue={data.dayMaxValue} sign={data.sign} off={data.off} dropdown={data.dropdown} />) 
      })}
    </main>
  ); 
}

export default Home;