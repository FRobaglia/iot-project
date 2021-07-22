/***** COMPONENTS *****/
const CardInfos = ({dayMinValue, dayMaxValue, moy, sign}) =>  {

  return (
    <div className="cardInfos">
      <div className="cardInfos__info">
        <div className="info">Min</div>
        <div className="info--bold">{dayMinValue}{sign}</div>
      </div>
      <div className="cardInfos__info">
        <div className="info">Max</div>
        <div className="info--bold">{dayMaxValue}{sign}</div>
      </div>
      <div className="cardInfos__info">
        <div className="info">Moy</div>
        <div className="info info--bold">{moy}{sign}</div>
      </div>
    </div>
  ); 
}

export default CardInfos;