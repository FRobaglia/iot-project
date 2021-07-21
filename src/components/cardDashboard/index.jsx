/***** COMPONENTS *****/
import CardHeader from './CardHeader';
import CardChart from './CardChart';
import CardInfos from './CardInfos';

const CardDashboard = (title, currentValue, dayMinValue, dayMaxValue, optimalMinValue, optimalMaxValue, sign) =>  {

  return (
    <article className="nav">
        <CardHeader title={title} currentValue={currentValue} sign={sign}></CardHeader>
        <CardChart optimalMinValue={optimalMinValue} optimalMaxValue={optimalMaxValue} currentValue={currentValue}></CardChart>
        <CardInfos dayMinValue={dayMinValue} dayMaxValue={dayMaxValue} sign={sign}></CardInfos>
    </article>
  ); 
}

export default CardDashboard;