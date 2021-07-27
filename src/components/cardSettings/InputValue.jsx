import { useState } from "react";
import { getStorage } from "../../utils";

const InputValue = ({ card, valueName, valueNameShort }) =>  {

  const stored = getStorage(card.id)[valueNameShort]
  const [value, setValue] = useState(stored)
  

  return (
    <div className="formInputContainer">
      <label htmlFor={ valueNameShort } className="formInputContainer__label">{ valueName }</label>
      <div className="formInputContainer__input">
        <input type="number" value={value} onChange={e => setValue(e.target.value)} id={ valueNameShort } name={ valueNameShort } min="10" max="100" />
        <span className="currency">{ card.sign }</span>
      </div>
    </div>
  ); 
}

export default InputValue;