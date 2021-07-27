/***** COMPONENTS *****/
import InputValue from "./InputValue";

const FormValues = ({ currency }) =>  {

  return (
    <form action="" className="settingsCard__form">
      <InputValue valueName="Minimum" valueNameShort="min" currency={ currency ? currency : "%"} />
      <InputValue valueName="Maximum" valueNameShort="max" currency={ currency ? currency : "%"} />
      <button type="submit" className="formSubmit">Submit</button>
    </form>
  ); 
}

export default FormValues;