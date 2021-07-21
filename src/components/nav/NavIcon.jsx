const NavIcon = ({ iconId }) =>  {

  let path = '../../assets/svg/' + iconId + '.svg'; 

  return (
    <svg className="navItem__icon"><use xlinkHref={ path }/></svg>
  ); 
}

export default NavIcon;