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
      dropdown: false,
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
      dropdown: false,
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
      dropdown: ["Capteur 1","Capteur 2","Capteur 3","Capteur 4","Capteur 5"],
      off: false
    },
  ]

  return (
    <main className="main main--home">
      <div className="main__title">
        <h1>Tableau de bord</h1>
        <span><strong>Dernière actualisation :</strong> 19 Juillet 2021 - 14:45</span>
      </div>
      {cards.map((card) => {       
          return (<Card key={card.title} title={card.title} currentValue={card.currentValue} optimalMinValue={card.optimalMinValue} optimalMaxValue={card.optimalMaxValue} dayMinValue={card.dayMinValue} dayMaxValue={card.dayMaxValue} sign={card.sign} off={card.off} dropdown={card.dropdown} />) 
      })}
    </main>
  ); 
}

export default Home;