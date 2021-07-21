/***** COMPONENTS *****/
const CardHeader = ({title, currentValue, sign}) =>  {

  return (
    <div className="cardHeader">
      <h2 className="cardHeader__title">{title}</h2>
      <h3 className="cardHeader__value">{currentValue}{sign}</h3>
    </div>
  ); 
}

export default CardHeader;