import './Button.css';

function Button(props) {

  return (
      <button onClick={props.onClick} className={`button ${!props.stepIsValid && 'button_disabled'}`} type={props.buttonType} disabled={!props.stepIsValid}>{props.buttonTitle}</button>
  )
}

export default Button;