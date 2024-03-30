import './RadioButton.css';

function RadioButton(props) {

  return (
    <label className='radio-button__label'>
      <input className='radio-button__input' type="radio" name={props.radioName} id={props.radioLabel} value={props.radioValue} onChange={props.onChange} checked={props.checked}/>
      <span className='radio-button__custom'></span>
      {props.radioTitle}
    </label>
  )
}

export default RadioButton;