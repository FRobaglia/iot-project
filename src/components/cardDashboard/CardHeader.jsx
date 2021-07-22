/***** COMPONENTS *****/
import CardDropdown from './CardDropdown.jsx';

const CardHeader = ({title, currentValue, sign, dropdown}) =>  {

  return (
    <div className="cardHeader">
      <h2 className="cardHeader__title">{title}</h2>
      {dropdown && <CardDropdown dropdown={dropdown} />}
      <h3 className="cardHeader__value">{currentValue}{sign}</h3>
    </div>
  ); 
}

export default CardHeader;