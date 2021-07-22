/***** COMPONENTS *****/
import Card from '../components/cardDashboard/index';

const Home = () =>  {

  const cards = [
    {
      title: "Température de l'air",
      currentValue: 21,  
      optimalMinValue: 15, 
      optimalMaxValue: 27, 
      dayMinValue: 17, 
      dayMaxValue: 23,
      sign: "°C",
      off: false
    },
    {
      title: "Humidité du sol",
      currentValue: 38,  
      optimalMinValue: 20, 
      optimalMaxValue: 45, 
      dayMinValue: 18, 
      dayMaxValue: 30,
      sign: "%",
      off: true
    },
    {
      title: "Luminosité",
      currentValue: 38,  
      optimalMinValue: 20, 
      optimalMaxValue: 45, 
      dayMinValue: 18, 
      dayMaxValue: 30,
      sign: "lx",
      off: false
    },
  ]

  return (
    <main className="main main--home">
      {cards.map((card) => {       
          return (<Card key={card.title} title={card.title} currentValue={card.currentValue} optimalMinValue={card.optimalMinValue} optimalMaxValue={card.optimalMaxValue} dayMinValue={card.dayMinValue} dayMaxValue={card.dayMaxValue} sign={card.sign} off={card.off} />) 
      })}
    </main>
  ); 
}

export default Home;