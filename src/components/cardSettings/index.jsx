/***** COMPONENTS *****/
import Icon from '../Icon';
import ToggleButton from './ToggleButton';

const CardSettings = ({ title, idName }) =>  {

  return (
    <section className="settingsCard">
      <h2 className="settingsCard__title">{ title }</h2>
      <Icon iconId='settingsCta' iconClass='settingsCta' />
      <Icon iconId={ idName } iconClass={ idName } />
      <ToggleButton />
    </section>
  ); 
}

export default CardSettings;