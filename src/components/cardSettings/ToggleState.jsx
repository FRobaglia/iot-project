import React, { useState } from "react";
import { getStorage, setStorage, flash } from "../../utils";

const ToggleState = ({card}) =>  {

  const [isActive, setActive] = useState(getStorage(card.id).off);

  const handleToggle = () => {
    setActive(!isActive);
    setStorage(card.id, {...getStorage(card.id), off: !isActive})
    flash(`La carte <strong>${card.title}</strong> est maintenant ${isActive ? "active" : "inactive"}.`)
    
  };

  return (
    <div className={ !isActive ? "toggleState toggleState--isActive" : "toggleState" } onClick={ handleToggle }>
      <p className="toggleState__text toggleState__text--off">Off</p>
      <span className="toggleState__slider"></span>
      <p className="toggleState__text toggleState__text--on">On</p>
    </div>
  ); 
}

export default ToggleState;