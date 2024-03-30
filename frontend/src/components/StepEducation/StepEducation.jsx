import './StepEducation.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';

function StepEducation() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/candidaterequirements/portfolio');

  return (
    <>
      <div className='education__container'>
        <div className='education__radiobuttons'>
          <RadioButton
            radioLabel='higher'
            radioTitle='Высшее'
            radioValue='higher'
            radioName='education'//от бэка
            checked={data.education == 'higher' ? true : false} //от бэка
            onChange={handleChange}
          />
          <RadioButton
            radioLabel='secondary_special'
            radioTitle='Среднее специальное'
            radioValue='secondary_special'
            radioName='education'//от бэка
            checked={data.education == 'secondary_special' ? true : false} //от бэка
            onChange={handleChange}
          />
          <RadioButton
            radioLabel='courses'
            radioTitle='Курсы'
            radioValue='courses'
            radioName='education'//от бэка
            checked={data.education == 'courses' ? true : false} //от бэка
            onChange={handleChange}
          />
        </div>
        <span className='education__error'>{errorMessage}</span>
        {/* {errorMessage && <span className='education__error'>Ничего не выбрано</span>} */}
        <div className='education__current'><CurrentApplicationBox /></div>
      </div>
      <div className='education__button'>
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

export default StepEducation
