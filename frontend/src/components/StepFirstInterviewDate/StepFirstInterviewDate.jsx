import './StepFirstInterviewDate.css'
import calendar from '../../images/calendar.svg';
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';


function StepFirstInterviewDate() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/recruiterrequirements/recruitersnumber');

  return (
    <>
      <div className='interview-date__container'>
        <div className='interview-date__calendar-container'>
          <input
            className={`interview-date__input ${errorMessage && 'interview-date__input'}`}
            type='text'
            name='start_interview'
            value={data.start_interview}
            onChange={handleChange}
            placeholder='ДД.ММ.ГГГГ'
          />
          <img className='interview-date__calendar-image' src={calendar} alt='Logo' />
        </div>
        <span className='interview-date__error'>{errorMessage}</span>
        {/* {errorMessage && <span className='interview-date__error'>Дата не введена</span>} */}
        <span className='interview-date__text'>В среднем рекрутерам требуется от 7 дней</span>
        <div className='interview__current'><CurrentApplicationBox /></div>
      </div>
      <div className='interview-date__button'>
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

export default StepFirstInterviewDate
