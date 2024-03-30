import './StepNumberOfVacancies.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import useForm from '../../hooks/useForm';

function StepNumberOfVacancies() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/typesofreward');

  return (
    <>
      <div className='number-vacancies__container'>
        <div>
          <input
            className={`number-vacancies__input ${errorMessage && 'number-vacancies__input_error'}`}
            type="text"
            name="amount_of_employees"
            value={data.amount_of_employees}
            onChange={handleChange}
            placeholder="Введите число сотрудников для поиска"
          />
          <span className='number-vacancies__error'>{errorMessage}</span>
          {/* {errorMessage && <span className='number-vacancies__error'>Введите число сотрудников для поиска</span>} */}

          <div className='number-vacancies__current'><CurrentApplicationBox /></div>
        </div>
      </div>
      <div className='number-vacancies__button'>
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

export default StepNumberOfVacancies
