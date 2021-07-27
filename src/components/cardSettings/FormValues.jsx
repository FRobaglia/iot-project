/***** COMPONENTS *****/
import { getStorage, setStorage, flash } from "../../utils";
import InputValue from "./InputValue";

const FormValues = ({ card }) =>  {

  function handleSubmit(e) {
    e.preventDefault()
    const min = parseInt(e.target.min.value)
    const max = parseInt(e.target.max.value)
    if (min === getStorage(card.id).min && max === getStorage(card.id).max) {
      return
    }
    setStorage(card.id, {...getStorage(card.id), min: min, max:max})

    flash(`Le changement sur la carte <strong>${card.title}</strong> a bien été pris en compte.`)
  }

  return (
    <form onSubmit={handleSubmit} action="" className="settingsCard__form">
      <InputValue valueName="Minimum" valueNameShort="min" card={card} sign={ card.sign ? card.sign : "%"} />
      <InputValue valueName="Maximum" valueNameShort="max" card={card} sign={ card.sign ? card.sign : "%"} />
      <button type="submit" className="formSubmit">Submit</button>
    </form>
  ); 
}

export default FormValues;