/***** COMPONENTS *****/
import CardHeader from './CardHeader';
import CardChart from './CardChart';
import CardInfos from './CardInfos';

const CardDashboard = ({title, currentValue, dayMinValue, dayMaxValue, optimalMinValue, optimalMaxValue, sign, off, dropdown, alert}) =>  {

  const cardClass = off ? " card--off" : ""
  const showAlert = currentValue < optimalMinValue || currentValue > optimalMaxValue

  console.log(showAlert)  
  return (
    <article className={"card" + cardClass}>
        <CardHeader title={title} currentValue={!off ? currentValue : "--"} sign={sign} dropdown={dropdown}></CardHeader>
        <CardChart optimalMinValue={!off ? optimalMinValue : "--"} optimalMaxValue={!off ? optimalMaxValue : "--"} currentValue={!off ? currentValue : "--"}></CardChart>
        <CardInfos dayMinValue={!off ? dayMinValue : "--"} dayMaxValue={!off ? dayMaxValue : "--"} moy={!off ? (dayMinValue + dayMaxValue) / 2 : "--"} sign={sign}></CardInfos>
    </article>
  ); 
}

export default CardDashboard;