import './StepCandidateFirstWorkingDay.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import useForm from '../../hooks/useForm';
import calendar from '../../images/calendar.svg'


function StepCandidateFirstWorkingDay() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/interview');

  return (
    <>
      <div className='candidate-firstday__container'>
        <div className='candidate-firstday__calendar-container'>
          <input
            className={`candidate-firstday__input ${errorMessage && 'candidate-firstday__input'}`}
            type='text'
            name='start_work'
            value={data.start_work}
            onChange={handleChange}
            placeholder='ДД.ММ.ГГГГ'
          />
          <img className='candidate-firstday__calendar-image' src={calendar} alt='Logo' />
        </div>
        <span className='candidate-firstday__error'>{errorMessage}</span>
        {/* {errorMessage && <span className='candidate-firstday__error'>Дата не введена</span>} */}
        <span className='candidate-firstday__text'>По статистике площадки средний срок закрытия вакансии — 1 месяц.</span>

        <div className='candidate-firstday__current'><CurrentApplicationBox /></div>
      </div>
      <div className='candidate-firstday__button'>
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

export default StepCandidateFirstWorkingDay
