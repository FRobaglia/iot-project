/***** COMPONENTS *****/
import Icon from '../Icon';
import ToggleButton from './ToggleButton';

const CardSettings = ({ title, idName }) =>  {

  return (
    <section className="card settingsCard">
      <h2 className="settingsCard__title">{ title }</h2>
      <Icon iconId='settingsCta' iconClass='settingsCard__cta' />
      <div className="settingsCard__iconContainer">
        <img src={ './svg/'  + idName + '.svg' } alt={ idName } className="settingsCard__icon" />
      </div>
      <ToggleButton />
    </section>
  ); 
}

export default CardSettings;