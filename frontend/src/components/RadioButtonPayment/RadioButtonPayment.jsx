import '../RadioButton/RadioButton.css'
import './RadioButtonPayment.css'

function RadioButtonPayment(props) {

  return (
    <label className='radio-button__label-container'>
      <div className='radio-button__label-name'>
        <div className='radio-button__percentage-container'>
          <p className='radio-button__percentage'>{props.radioLabelPercentage}</p>
          {props.radioLabelPercentage1 && <p className='radio-button__percentage'>{props.radioLabelPercentage1}</p>}
        </div>
        <div className='radio-button__title-container'>
          <p className='radio-button__title'>{props.radioLabelTitle}</p>
          <p className='radio-button__text'>{props.radioLabelText}</p>
        </div>
      </div>
      <input className='radio-button__input' type="radio" name={props.radioName} id={props.radioLabel} value={props.radioValue} onChange={props.onChange} checked={props.checked} />
      <span className='radio-button__custom'></span>
    </label>
  )
}

export default RadioButtonPayment;