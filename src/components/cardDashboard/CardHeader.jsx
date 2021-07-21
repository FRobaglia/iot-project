/***** COMPONENTS *****/
const CardHeader = ({title, currentValue, sign}) =>  {

  return (
    <div class="cardHeader">
      <h2 class="cardHeader__title">{title}</h2>
      <h3 class="cardHeader__value">{currentValue}{sign}</h3>
    </div>
  ); 
}

export default CardHeader;