import './CheckBox.css';

function CheckBox(props) {

  return (
    <label className='checkbox__label'>
      <input className='checkbox__input' type="checkbox" name={props.checkboxName} id={props.checkboxLabel} value={props.checkboxValue} onChange={props.onChange} checked={props.checked}/>
      <span className='checkbox__custom'></span>
      {props.checkboxTitle}
    </label>
  )
}

export default CheckBox;