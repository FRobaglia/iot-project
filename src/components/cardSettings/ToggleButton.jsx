const ToggleButton = () =>  {
  return (
    <label className="settingsCard__toggleState">
      <input type="checkbox" className="toggleState__input"/>
      <span className="toggleState__sliderContainer">
        <p className="toggleState__text toggleState__text--yes">Oui</p>
        <span className="toggleState__slider"></span>
        <p className="toggleState__text toggleState__text--no">Non</p>
      </span>
    </label>
  ); 
}

export default ToggleButton;