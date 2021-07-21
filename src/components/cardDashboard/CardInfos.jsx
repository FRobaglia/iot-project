/***** COMPONENTS *****/
const CardInfos = ({dayMinValue, dayMaxValue, sign}) =>  {

  return (
    <div class="cardInfos">
      <div className="cardInfos__info">
        <span class="info">Min</span>
        <span class="info__bold">{dayMinValue}{sign}</span>
      </div>
      <div className="cardInfos__info">
        <span class="info">Max</span>
        <span class="info__bold">{dayMaxValue}{sign}</span>
      </div>
      <div className="cardInfos__info">
        <span class="info">Moy</span>
        <span class="info__bold">{(dayMinValue + dayMaxValue) / 2}{sign}</span>
      </div>
    </div>
  ); 
}

export default CardInfos;