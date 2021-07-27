/***** COMPONENTS *****/
import CardDropdown from './CardDropdown.jsx';

import { useState } from 'react';

const CardHeader = ({title, currentValue, sign, card}) =>  {

  const [selected, setSelected] = useState(currentValue)

  function handleChange(index) {
    setSelected(card.dropdown[index].value)
  }

  return (
    <div className="cardHeader">
      <h2 className="cardHeader__title">{title}</h2>
      {(card.dropdown && !card.off) && <CardDropdown change={handleChange} card={card} />}
      {card.dropdown && !card.off ? <h3 className="cardHeader__value">{selected}{sign}</h3> : <h3 className="cardHeader__value">{currentValue}{sign}</h3>}
      
    </div>
  ); 
}

export default CardHeader;