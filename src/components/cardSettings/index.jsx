import React, { useState } from "react";

/***** COMPONENTS *****/
import Icon from '../Icon';
import ToggleState from './ToggleState';
import FormValues from './FormValues';

const CardSettings = ({ title, idName }) =>  {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={ !isActive ? "f1_container f1_container--isActive" : "f1_container" } onClick={ handleToggle }>
      <div className="f1_card">
        <section className="card settingsCard front">
          <h2 className="settingsCard__title">{ title }</h2>
          <Icon iconId='settingsCta' iconClass='settingsCard__cta' />
          <div className="settingsCard__iconContainer">
            <img src={ './svg/'  + idName + '.svg' } alt={ idName } className="settingsCard__icon" />
          </div>
          <ToggleState />
        </section>

        <section className="card settingsCard back">
          <h2 className="settingsCard__title">{ title }</h2>
          <Icon iconId='settingsCta' iconClass='settingsCard__cta' />
          <FormValues />
        </section>
      </div>
    </div>
  ); 
}

export default CardSettings;