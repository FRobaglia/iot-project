/***** COMPONENTS *****/
import CardHeader from './CardHeader';
import CardChart from './CardChart';
import CardInfos from './CardInfos';
import CardAlert from './CardAlert';

const CardDashboard = ({card}) =>  {

  const cardClass = card.off ? " card--off" : ""
  const showAlert = card.currentValue < card.optimalMinValue || card.currentValue > card.optimalMaxValue

  return (
    <article className={"card" + cardClass}>
        {showAlert ? <CardAlert card={card}/>: ""}
        <CardHeader title={card.title} currentValue={!card.off ? card.currentValue : "--"} sign={card.sign} dropdown={card.dropdown}></CardHeader>
        <CardChart optimalMinValue={!card.off ? card.optimalMinValue : "--"} optimalMaxValue={!card.off ? card.optimalMaxValue : "--"} currentValue={!card.off ? card.currentValue : "--"}></CardChart>
        <CardInfos dayMinValue={!card.off ? card.dayMinValue : "--"} dayMaxValue={!card.off ? card.dayMaxValue : "--"} moy={!card.off ? (card.dayMinValue + card.dayMaxValue) / 2 : "--"} sign={card.sign}></CardInfos>
    </article>
  ); 
}

export default CardDashboard;