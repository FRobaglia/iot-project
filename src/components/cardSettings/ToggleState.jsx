import React, { useState } from "react";

const ToggleState = () =>  {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={ !isActive ? "toggleState toggleState--isActive" : "toggleState" } onClick={handleToggle}>
      <p className="toggleState__text toggleState__text--off">Off</p>
      <span className="toggleState__slider"></span>
      <p className="toggleState__text toggleState__text--on">On</p>
    </div>
  ); 
}

export default ToggleState;