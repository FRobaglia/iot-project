const NavIcon = ({ iconId }) =>  {

  let path = '/sprite-sheet.svg#' + iconId; 

  return (
    <svg className="navItem__icon"><use xlinkHref={ path }/></svg>
  ); 
}

export default NavIcon;