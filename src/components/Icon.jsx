const Icon = ({ iconId, iconClass, onChange }) =>  {

  let path = 'sprite-sheet.svg#' + iconId;

  function handleChange() {
    if (onChange) onChange()
  }

  return (
    <svg onClick={() => { handleChange()}} className={ iconClass + ' ' + iconClass + '--' + iconId }>
      <use xlinkHref={ path }/>
    </svg>
  ); 
}

export default Icon;