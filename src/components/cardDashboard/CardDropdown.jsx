/***** COMPONENTS *****/

const CardDropdown = ({card, change}) =>  {

  function handleChange(index) {
    change(index)
  }

  return (
    <div className="cardDropdown">
      <select onChange={(e) => handleChange(e.target.value)} name="CardDropdown" id="CardDropdown">
      {card.dropdown.map((value, index) => {      
        return (<option key={`Capteur ${index + 1}`} value={index}>{`Capteur ${index + 1}`}</option>)})}
      </select>
    </div>
  ); 
}

export default CardDropdown;