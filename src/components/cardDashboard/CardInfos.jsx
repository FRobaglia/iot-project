/***** COMPONENTS *****/
const CardInfos = ({dayMinValue, dayMaxValue, moy, sign}) =>  {

  return (
    <div class="cardInfos">
      <div className="cardInfos__info">
        <div class="info">Min</div>
        <div class="info--bold">{dayMinValue}{sign}</div>
      </div>
      <div className="cardInfos__info">
        <div class="info">Max</div>
        <div class="info--bold">{dayMaxValue}{sign}</div>
      </div>
      <div className="cardInfos__info">
        <div class="info">Moy</div>
        <div class="info info--bold">{moy}{sign}</div>
      </div>
    </div>
  ); 
}

export default CardInfos;