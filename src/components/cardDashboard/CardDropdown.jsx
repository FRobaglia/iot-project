/***** COMPONENTS *****/

const CardDropdown = ({dropdown}) =>  {

  return (
    <div className="cardDropdown">
      <select name="CardDropdown" id="CardDropdown">
      {dropdown.map((value) => {      
        return (<option key={value}>{value}</option>)})}
      </select>
    </div>
  ); 
}

export default CardDropdown;