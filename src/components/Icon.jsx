const Icon = ({ iconId, iconClass }) =>  {

  let path = 'sprite-sheet.svg#' + iconId;

  return (
    <svg className={ iconClass + ' ' + iconClass + '--' + iconId }>
      <use xlinkHref={ path }/>
    </svg>
  ); 
}

export default Icon;