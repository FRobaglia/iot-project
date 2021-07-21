const NavIcon = ({ iconId }) =>  {
  
  let path = 'sprite-sheet.svg#' + iconId;
  
  return (
    <svg className={ "navItem__icon navItem__icon--" + iconId }>
      <use xlinkHref={ path }/>
    </svg>
  ); 
}

export default NavIcon;