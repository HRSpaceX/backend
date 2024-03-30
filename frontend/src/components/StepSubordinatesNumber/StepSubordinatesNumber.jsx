import './StepSubordinatesNumber.css';
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';

function StepSubordinatesNumber() {

  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/jobpeculiarities')

  return (
    <>
      <div className='subordinates-number__container'>
        <input
          className={`subordinates-number__input ${errorMessage && 'subordinates-number__input_error'}`}
          type="text"
          name="amount_of_subordinate"
          value={data.amount_of_subordinate || ''}
          onChange={handleChange}
          placeholder="Сотрудников в подчинении"
        />
        <span className='subordinates-number__error'>{errorMessage}</span>
        {/* {errorMessage && <span className='subordinates-number__error'>Введите число сотрудников в подчинении</span>} */}
        <div className='subordinates-number__current'><CurrentApplicationBox /></div>
      </div>
      <div className='subordinates-number__button'>
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

export default StepSubordinatesNumber
