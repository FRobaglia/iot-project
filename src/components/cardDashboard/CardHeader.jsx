/***** COMPONENTS *****/
import CardDropdown from './CardDropdown.jsx';

import { useState } from 'react';

const CardHeader = ({title, currentValue, sign, card}) =>  {

  const [selected, setSelected] = useState(card.dropdown[0])

  function handleChange(index) {
    setSelected(card.dropdown[index])
  }

  return (
    <div className="cardHeader">
      <h2 className="cardHeader__title">{title}</h2>
      {card.dropdown && <CardDropdown change={handleChange} card={card} />}
      {card.dropdown ? <h3 className="cardHeader__value">{selected.value}{sign}</h3> : <h3 className="cardHeader__value">{currentValue}{sign}</h3>}
      
    </div>
  ); 
}

export default CardHeader;