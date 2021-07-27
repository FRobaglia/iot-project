import Icon from '../Icon';

const CardAlert = ({onChange}) =>  {

  function handleChange(title) {
    onChange(title)
  }

  return (
    <div onClick={() => { handleChange() }} className="cardAlert">
      <Icon iconId="cardAlert" iconClass="cardAlert__icon"></Icon>
    </div>
  ); 
}

export default CardAlert;