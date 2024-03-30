import './StepInterview.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';

function StepInterview() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/firstinterviewdate');

  return (
    <>
      <div className='interview__container'>
        <p className='interview__text'>Укажите, с какими кандидатами Вы бы хотели проводить собеседования самостоятельно:</p>
        <div className='interview__radiobuttons'>
          <RadioButton
            radioLabel='1'
            radioTitle='Со всеми кандидатами, чьё резюме будет релевантным'
            radioValue='1'
            radioName='format_interview'//от бэка
            checked={data.format_interview == '1' ? true : false} //от бэка
            onChange={handleChange}
          />
          <RadioButton
            radioLabel='2'
            radioTitle='С кандидатами, прошедшими предварительный отбор'
            radioValue='2'
            radioName='format_interview'//от бэка
            checked={data.format_interview == '2' ? true : false} //от бэка
            onChange={handleChange}
          />
        </div>
        <span className='interview__error'>{errorMessage}</span>
        {/* {errorMessage && <span className='interview__error'>Ничего не выбрано</span>} */}
        <div className='interview__current'><CurrentApplicationBox /></div>
      </div>
      <div className='interview__button'>
        <Button
          onClick={onRedirect}
          stepIsValid={stepIsValid}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div>
    </>
  )
}

export default StepInterview
