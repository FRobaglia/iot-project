const InputValue = ({ valueName, valueNameShort, currency }) =>  {

  return (
    <div className="formInputContainer">
      <label htmlFor={ valueNameShort } className="formInputContainer__label">{ valueName }</label>
      <div className="formInputContainer__input">
        <input type="number" id={ valueNameShort } name={ valueNameShort } min="10" max="100" />
        <span className="currency">{ currency }</span>
      </div>
    </div>
  ); 
}

export default InputValue;