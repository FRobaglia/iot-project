/***** COMPONENTS *****/
import Card from '../components/cardDashboard/index';

const Home = () =>  {

  return (
    <main className="main main--home">
      <Card title="Température de l'air" currentValue={21}  optimalMinValue={15} optimalMaxValue={27} dayMinValue={17} dayMaxValue={23} sign="°C" off={false} />
      <Card title="Humidité du sol" currentValue={38}  optimalMinValue={20} optimalMaxValue={45} dayMinValue={18} dayMaxValue={30} sign="%" off={true} />
      <Card title="Luminosité" currentValue={38}  optimalMinValue={20} optimalMaxValue={45} dayMinValue={18} dayMaxValue={30} sign="lx" off={false} />
    </main>
  ); 
}

export default Home;